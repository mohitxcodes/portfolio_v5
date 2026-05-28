import type { GitHubContributions } from '@/types/github-types';

export async function fetchGitHubContributions(
  username: string,
  year?: number
): Promise<GitHubContributions & {
  followers: number;
  publicRepos: number;
}> {
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

  if (!token) {
    throw new Error('GitHub token not configured');
  }

  const targetYear = year || new Date().getFullYear();
  
  let from: string;
  let to: string;

  if (year) {
    from = `${targetYear}-01-01T00:00:00Z`;
    to = `${targetYear}-12-31T23:59:59Z`;
  } else {
    const toDate = new Date();
    const fromDate = new Date();
    fromDate.setFullYear(toDate.getFullYear() - 1);
    from = fromDate.toISOString();
    to = toDate.toISOString();
  }

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };

  const body = {
    query: `
      query($username: String!, $from: DateTime!, $to: DateTime!) {
        user(login: $username) {
          followers {
            totalCount
          }
          repositories(privacy: PUBLIC) {
            totalCount
          }
          contributionsCollection(from: $from, to: $to) {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                  weekday
                }
              }
            }
            startedAt
            endedAt
          }
        }
      }
    `,
    variables: {
      username,
      from,
      to,
    },
  };

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const { data, errors } = await response.json();

    if (errors) {
      throw new Error(errors.map((e: Error) => e.message).join('\n'));
    }

    return {
      year: targetYear,
      collection: data.user.contributionsCollection,
      followers: data.user.followers.totalCount,
      publicRepos: data.user.repositories.totalCount,
    };
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    throw error;
  }
}