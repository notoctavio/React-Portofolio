import React, { useState, useEffect } from 'react';

interface Props {
  githubUrl: string;
}

interface GithubStats {
  public_repos: number;
  followers: number;
  public_gists: number;
}

export default function GithubCTA({ githubUrl }: Props) {
  const [stats, setStats] = useState<GithubStats | null>(null);
  // Extract username from url, defaulting to notoctavio
  const username = githubUrl.split('/').filter(Boolean).pop() || 'notoctavio';

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.public_repos === 'number') {
          setStats(data);
        }
      })
      .catch(console.error);
  }, [username]);

  return (
    <section className="py-32">
      <div className="relative rounded-3xl border border-neutral/10 bg-card shadow-sm transition-colors overflow-hidden">
        <div className="flex flex-col items-center justify-center px-8 py-20 text-center relative z-10">
          <h2 className="mb-4 font-serif text-4xl font-bold tracking-tighter text-primary md:text-5xl">
            See More on GitHub
          </h2>
          <p className="mb-10 max-w-2xl text-base text-neutral md:text-lg leading-relaxed">
            Explore more of my projects, contributions, and open-source work. From AI and machine learning experiments to full-stack applications.
          </p>

          {stats && (
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex flex-col items-center p-4 rounded-2xl bg-base border border-neutral/5 min-w-[120px]">
                <span className="text-3xl font-serif font-bold text-primary mb-1">{stats.public_repos}</span>
                <span className="text-xs font-semibold tracking-wider text-neutral uppercase">Public Repos</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-2xl bg-base border border-neutral/5 min-w-[120px]">
                <span className="text-3xl font-serif font-bold text-primary mb-1">{stats.followers}</span>
                <span className="text-xs font-semibold tracking-wider text-neutral uppercase">Followers</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-2xl bg-base border border-neutral/5 min-w-[120px]">
                <span className="text-3xl font-serif font-bold text-primary mb-1">1,000+</span>
                <span className="text-xs font-semibold tracking-wider text-neutral uppercase">Contributions</span>
              </div>
            </div>
          )}

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-5 text-sm leading-5 font-semibold text-invert transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>Visit GitHub Profile</span>
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
