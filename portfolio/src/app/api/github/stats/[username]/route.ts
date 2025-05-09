import { NextResponse } from "next/server";
import { fetchGitHubStats } from "@/services/github";

export async function GET(
  request: Request,
  { params }: { params: { username: string } }
) {
  try {
    const username = params.username;
    const stats = await fetchGitHubStats(username);
    return NextResponse.json(stats);
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
    return NextResponse.json(
      { error: "Failed to fetch GitHub stats" },
      { status: 500 }
    );
  }
}
