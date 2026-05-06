import React from 'react';
import Section from "./Section";
import type { ExperienceProps } from "@types";

interface Props {
  experience: ExperienceProps[];
}

export default function Experience({ experience }: Props) {
  return (
    <Section text="Work Experience" href="experience">
      {experience.map(({ company, companyUrl, position, startDate, endDate, summary }, index) => (
        <div 
          key={index} 
          className="mb-10"
          data-reveal="hidden"
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <h3 className="mb-1.5 font-serif text-2xl font-semibold text-white">
            {companyUrl ? (
              <a
                href={companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 hover:text-primary transition-colors"
              >
                {company}
                <svg className="h-4 w-4 opacity-70 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ) : (
              company
            )}
          </h3>
          <div className="flex flex-col items-start pb-5">
            <h4 className="mb-0.5 font-serif text-2xl font-medium text-primary">
              {position}
            </h4>
            <span className="pb-[2px] text-sm text-white/70">
              {startDate} — {endDate}
            </span>
          </div>
          {Array.isArray(summary) ? (
            <ul className="list-none">
              {summary.map((log, idx) => (
                <li key={idx} className="relative mb-3 pl-8 text-base text-neutral before:absolute before:top-1 before:left-0 before:content-[url(/check.svg)]">
                  {log}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-base text-neutral">{summary}</p>
          )}
        </div>
      ))}
    </Section>
  );
}
