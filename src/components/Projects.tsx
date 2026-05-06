import React from 'react';
import Section from "./Section";
import type { ProjectProps } from "@types";

interface Props {
  projects: ProjectProps[];
}

export default function Projects({ projects }: Props) {
  return (
    <Section text="Featured Projects" href="projects">
      <div className="space-y-8">
        {projects.map(({ name, summary, image, linkPreview, linkSource }, index) => (
          <article
            key={index}
            data-reveal="hidden"
            style={{ transitionDelay: `${index * 150}ms` }}
            className="group relative overflow-hidden rounded-3xl border border-neutral/10 bg-card shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
          >
            <img
              className="h-[22rem] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] sm:h-[26rem] md:h-[30rem]"
              src={image}
              alt={`${name} project preview`}
              width="736"
              height="483"
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "low"}
              decoding="async"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <p className="mb-3 text-xs font-semibold tracking-[0.14em] text-white/75 uppercase">
                Project {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="font-serif text-3xl font-semibold text-white md:text-4xl">{name}</h3>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">{summary}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={linkSource}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-black/25 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-black/40"
                >
                  Source Code
                  <svg className="h-3.5 w-3.5 opacity-80 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                {linkPreview && linkPreview !== "/" && (
                  <a
                    href={linkPreview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-black/25 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-black/40"
                  >
                    Live Demo
                    <svg className="h-3.5 w-3.5 opacity-80 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
