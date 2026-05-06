import React from 'react';
import Section from "./Section";
import type { SkillsProps } from "@types";

interface Props {
  skills: SkillsProps[];
}

export default function Skills({ skills }: Props) {
  return (
    <Section text="Skills" href="skills">
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map(({ category, skillsList, secondarySkills }, index) => (
          <article 
            key={index} 
            className="group rounded-2xl border border-neutral/10 bg-card p-7 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md hover:-translate-y-0.5"
            data-reveal="hidden"
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <h3 className="mb-5 font-serif text-xl font-semibold text-primary md:text-2xl transition-colors group-hover:text-primary/90">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {skillsList.map((skill, idx) => (
                <span
                  key={idx}
                  className="rounded-full bg-primary/5 hover:bg-primary/10 border border-primary/10 hover:border-primary/30 px-3 py-1.5 text-xs font-semibold text-primary transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
            {secondarySkills && secondarySkills.length > 0 && (
              <p className="mt-4 text-sm leading-relaxed text-neutral/80">
                Also used: {secondarySkills.join(", ")}
              </p>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
