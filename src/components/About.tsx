import React from 'react';
import Section from "./Section";
import type { AboutProps } from "@types";

interface Props extends AboutProps {
  name: string;
}

export default function About({ description, image, name }: Props) {
  return (
    <Section text="About Me" href="about">
      <div className="flex flex-col items-center gap-12 md:flex-row md:gap-8">
        <p className="w-auto text-base leading-relaxed text-neutral md:pr-5">{description}</p>
        <div className="h-80 w-64 flex-shrink-0 rotate-[-5deg] bg-white p-4 md:rotate-[-7deg]">
          <img
            className="object-cover h-full w-full"
            src={image}
            width="260"
            height="260"
            alt={name}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </Section>
  );
}
