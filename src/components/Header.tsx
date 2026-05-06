import React, { useState, useEffect } from 'react';
import Menu from "@icons/Menu";
import ThemeToggle from "./ThemeToggle";
import type { HeaderProps } from "@types";

type Props = HeaderProps;

export default function Header({ siteLogo, navLinks }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        observer.disconnect();
      } else {
        document.querySelectorAll("section").forEach((section) => {
          observer.observe(section);
        });
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div 
      className="fixed left-0 right-0 top-6 z-50 mx-auto flex max-w-fit items-center justify-center"
    >
      <header 
        className={`flex items-center justify-between rounded-full px-4 py-3 transition-all duration-300 ${scrolled ? 'bg-card/80 backdrop-blur-xl border border-neutral/10 shadow-sm' : 'bg-transparent border border-transparent'}`}
      >
        <div className="flex items-center gap-6">
          <a href="/" aria-label="Home link" className="pl-1">
            <img
              className="rounded-full shadow-sm"
              src={siteLogo}
              width="32"
              height="32"
              alt="website logo"
              loading="eager"
            />
          </a>
        </div>

        <div className="ml-6 flex items-center gap-4">
          <nav
            aria-label="Primary navigation"
            className={`${isMenuOpen ? 'block' : 'hidden'} absolute top-16 right-0 rounded-xl border border-neutral/10 bg-card p-4 shadow-lg sm:static sm:block sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none`}
            id="main-menu"
          >
            <ul className="gap-4 sm:flex">
              {navLinks.map((link, index) => (
                <li key={index} className="relative">
                  <a
                    className={`nav-item relative block px-2 text-sm font-semibold transition-colors duration-300 after:absolute after:-bottom-1 after:left-2/4 after:h-1 after:w-1 after:rounded-full after:-translate-x-2/4 after:bg-primary after:opacity-0 hover:text-primary ${activeSection && link.href === "#" + activeSection ? 'text-primary md:after:opacity-100' : 'text-neutral'}`}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ThemeToggle />
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral/20 bg-card text-neutral transition-colors hover:border-primary hover:text-primary sm:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="main-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={toggleMenu}
          >
            <Menu />
          </button>
        </div>
      </header>
    </div>
  );
}
