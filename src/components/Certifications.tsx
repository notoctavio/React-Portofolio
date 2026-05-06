import React from 'react';
import Section from "./Section";
import type { CertificationsProps } from "@types";

interface Props {
  certifications: CertificationsProps[];
}

export default function Certifications({ certifications }: Props) {
  return (
    <Section text="Licenses & Certifications" href="certifications">
      <div className="grid gap-5 md:grid-cols-2">
        {certifications.map(({ name, issuer, issueDate, credentialID, credentialURL }, index) => {
          const Tag = credentialURL ? "a" : "div";
          const props = credentialURL ? { href: credentialURL, target: "_blank", rel: "noopener noreferrer" } : {};
          return (
            <Tag
              key={index}
              {...props}
              data-reveal="hidden"
              style={{ transitionDelay: `${index * 150}ms` }}
              className="group relative block overflow-hidden rounded-2xl border border-neutral/10 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
            >
              <div className="pointer-events-none absolute -top-16 -right-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-[1] flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="mb-2 font-serif text-lg font-semibold text-primary transition-colors">
                    {name}
                    {credentialURL && (
                      <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                        <svg className="inline h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </span>
                    )}
                  </h3>
                  <p className="mb-1 text-sm text-neutral">{issuer}</p>
                  <p className="text-sm text-neutral/70">Issued: {issueDate}</p>
                  {credentialID && (
                    <p className="mt-2 text-xs text-neutral/60">
                      Credential ID: {credentialID}
                    </p>
                  )}
                </div>
              </div>
            </Tag>
          );
        })}
      </div>
    </Section>
  );
}
