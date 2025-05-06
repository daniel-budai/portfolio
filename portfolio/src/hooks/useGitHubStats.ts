import { useState, useEffect } from "react";

interface GitHubStats {
  totalCommits: number;
  repositories: number;
  pullRequests: number;
  mergedPRs: number;
}

export const useGitHubStats = (username: string) => {
  const [stats, setStats] = useState<GitHubStats>({
    totalCommits: 0,
    repositories: 0,
    pullRequests: 0,
    mergedPRs: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const CACHE_KEY = `github-stats-${username}`;
    const CACHE_DURATION = 1000 * 60 * 60;

    const fetchGitHubStats = async () => {
      try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const { data, timestamp } = JSON.parse(cached);
          if (Date.now() - timestamp < CACHE_DURATION) {
            setStats(data);
            setLoading(false);
            return;
          }
        }

        const query = `
          query ($username: String!) {
            user(login: $username) {
              repositories(first: 100, ownerAffiliations: OWNER) {
                totalCount
              }
              pullRequests(first: 100, states: [OPEN, CLOSED, MERGED]) {
                totalCount
              }
              contributionsCollection {
                totalCommitContributions
              }
              pullRequests(states: MERGED) {
                totalCount
              }
            }
          }
        `;

        const response = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query,
            variables: { username },
          }),
        });

        const { data } = await response.json();

        const newStats = {
          totalCommits:
            data.user.contributionsCollection.totalCommitContributions,
          repositories: data.user.repositories.totalCount,
          pullRequests: data.user.pullRequests.totalCount,
          mergedPRs: data.user.pullRequests.totalCount,
        };

        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({
            data: newStats,
            timestamp: Date.now(),
          })
        );

        setStats(newStats);
      } catch (error) {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const { data } = JSON.parse(cached);
          setStats(data);
        } else {
          setStats({
            totalCommits: 0,
            repositories: 0,
            pullRequests: 0,
            mergedPRs: 0,
          });
        }
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, [username]);

  return { stats, loading };
};
