import React, { ReactNode, useEffect } from 'react';
import Header from "@components/Header";
import Footer from "@components/Footer";
import { SITE_CONFIG } from "@config";

const { siteLogo, navLinks, author, socialLinks } = SITE_CONFIG;

export default function Layout({ children }: { children: ReactNode }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-reveal", "visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    // Initial observation
    const elements = document.querySelectorAll('[data-reveal="hidden"]');
    elements.forEach((el) => observer.observe(el));

    // Cleanup
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-black font-sans min-h-screen">
      <Header siteLogo={siteLogo} navLinks={navLinks} />
      <main className="mx-auto max-w-3xl px-5">
        {children}
      </main>
      <Footer author={author} socialLinks={socialLinks} />
    </div>
  );
}