import React, { ReactNode } from 'react';

interface Props {
  text: string;
  href: string;
  children: ReactNode;
}

export default function Section({ text, href, children }: Props) {
  return (
    <section id={href} className="py-24">
      <h2 
        className="mb-14 font-serif text-4xl font-bold tracking-tighter text-primary md:text-5xl"
        data-reveal="hidden"
      >
        {text}
      </h2>
      {children}
    </section>
  );
}
