// This file contains the GitHub API logic

// Constants
const GITHUB_GRAPHQL_URL = "https://api.github.com/graphql";
const GITHUB_REST_API_URL = "https://api.github.com";
const YEARS_TO_FETCH = 5;

// Types
export interface GitHubStats {
  totalCommits: number;
  repositories: number;
  pullRequests: number;
  mergedPRs: number;
}

interface GraphQLResponse<T> {
  data?: T;
  errors?: { message: string }[];
}

interface UserDataResponse {
  user: {
    repositories: { totalCount: number };
    pullRequests: { totalCount: number };
    contributionsCollection: {
      contributionCalendar: {
        totalContributions: number;
      };
    };
  };
}

interface YearContributionsResponse {
  user?: {
    contributionsCollection?: {
      contributionCalendar?: {
        totalContributions?: number;
      };
    };
  };
}

// Default values
const DEFAULT_STATS: GitHubStats = {
  totalCommits: 0,
  repositories: 0,
  pullRequests: 0,
  mergedPRs: 0,
};

const MAIN_QUERY = `
  query($username: String!) {
    user(login: $username) {
      repositories {
        totalCount
      }
      pullRequests {
        totalCount
      }
      contributionsCollection {
        contributionCalendar {
          totalContributions
        }
      }
    }
  }
`;

const YEARLY_CONTRIBUTIONS_QUERY = `
  query($username: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $username) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
        }
      }
    }
  }
`;

/**
 * Fetches GitHub statistics for a specified user
 * @param username GitHub username
 * @returns Promise with GitHub stats
 */
export async function fetchGitHubStats(username: string): Promise<GitHubStats> {
  const token = process.env.GITHUB_TOKEN || "";

  try {
    const userData = await fetchUserData(username, token);

    const mergedPRs = await fetchMergedPullRequests(username, token);

    const totalCommits = await fetchAllYearContributions(username, token);

    return {
      totalCommits,
      repositories: userData.repositories.totalCount,
      pullRequests: userData.pullRequests.totalCount,
      mergedPRs,
    };
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
    return DEFAULT_STATS;
  }
}

/**
 * Fetches basic user data from GitHub GraphQL API
 */
async function fetchUserData(username: string, token: string) {
  const response = await callGitHubGraphQL<UserDataResponse>({
    query: MAIN_QUERY,
    variables: { username },
    token,
  });

  if (response.errors) {
    throw new Error(response.errors[0]?.message || "GraphQL Error");
  }

  if (!response.data) {
    throw new Error("No data received from GitHub API");
  }

  return response.data.user;
}

/**
 * Fetches merged pull requests count
 */
async function fetchMergedPullRequests(
  username: string,
  token: string
): Promise<number> {
  const url = `${GITHUB_REST_API_URL}/search/issues?q=author:${username}+type:pr+is:merged`;

  const response = await fetch(url, {
    headers: {
      Authorization: `token ${token}`,
    },
  });

  const data = await response.json();
  return data.total_count || 0;
}

/**
 * Fetches contributions for multiple years and sums them
 */
async function fetchAllYearContributions(
  username: string,
  token: string
): Promise<number> {
  const currentYear = new Date().getFullYear();
  const yearPromises = [];

  // Fetch last X years of contributions
  for (
    let year = currentYear;
    year >= currentYear - (YEARS_TO_FETCH - 1);
    year--
  ) {
    const fromDate = new Date(year, 0, 1).toISOString(); // Jan 1
    const toDate = new Date(year, 11, 31).toISOString(); // Dec 31

    const yearPromise = callGitHubGraphQL<YearContributionsResponse>({
      query: YEARLY_CONTRIBUTIONS_QUERY,
      variables: { username, from: fromDate, to: toDate },
      token,
    });

    yearPromises.push(yearPromise);
  }

  const yearResults = (await Promise.all(
    yearPromises
  )) as GraphQLResponse<YearContributionsResponse>[];

  // Sum up contributions with proper type safety
  return yearResults.reduce((total, result) => {
    const contributions =
      result.data?.user?.contributionsCollection?.contributionCalendar
        ?.totalContributions || 0;
    return total + contributions;
  }, 0);
}

/**
 * Helper for making GraphQL requests to GitHub API
 */
async function callGitHubGraphQL<T>({
  query,
  variables,
  token,
}: {
  query: string;
  variables: Record<string, any>;
  token: string;
}): Promise<GraphQLResponse<T>> {
  const response = await fetch(GITHUB_GRAPHQL_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });

  return response.json();
}
