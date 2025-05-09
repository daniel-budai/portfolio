"use client";

import useSWR from "swr";

const DEFAULT_STATS = {
  totalCommits: 0,
  repositories: 0,
  pullRequests: 0,
  mergedPRs: 0,
};

// Time constants (in milliseconds)
const ONE_HOUR = 60 * 60 * 1000;

export function useGitHubStats(username: string) {
  const cacheKey = username ? `github-stats-${username}` : null;

  const { data, error, isLoading } = useSWR(
    cacheKey,
    async () => {
      const response = await fetch(`/api/github/stats/${username}`);
      if (!response.ok) {
        throw new Error("Failed to fetch GitHub stats");
      }
      return response.json();
    },
    {
      refreshInterval: ONE_HOUR,
    }
  );

  return {
    stats: data || DEFAULT_STATS,
    loading: isLoading,
    error,
  };
}
