import React, { useState, useEffect, useRef } from 'react';
import type { HeroProps } from "@types";

export default function Hero({ name, specialty, summary, email }: HeroProps) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  const togglePopover = () => setIsPopoverOpen(!isPopoverOpen);
  const closePopover = () => setIsPopoverOpen(false);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => setIsHeroVisible(true));

    return () => cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        closePopover();
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closePopover();
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 1800);
      closePopover();
    } catch (e) {
      alert('Copy failed. Email: ' + email);
    }
  };

  return (
    <section className="flex min-h-screen flex-col justify-center py-16 md:py-20" id="hero">
      <div className="flex flex-col hero-intro" data-hero-intro={isHeroVisible ? 'play' : 'idle'}>
        <h1
          className="hero-intro-item hero-intro-title mb-4 font-serif text-6xl font-bold tracking-tighter text-primary sm:text-7xl md:mb-0 md:text-8xl"
          style={{ animationDelay: '80ms' }}
        >
          {name}
        </h1>
        <p
          className="hero-intro-item mb-7 max-w-[34ch] text-balance font-sans text-xl leading-snug font-semibold tracking-tight text-primary/80 sm:text-2xl md:text-3xl"
          style={{ animationDelay: '180ms' }}
        >
          {specialty}
        </p>
        <p
          className="hero-intro-item mb-12 max-w-2xl text-base font-normal leading-relaxed text-neutral md:text-lg"
          style={{ animationDelay: '280ms' }}
        >
          {summary}
        </p>

        {/* Contact + Download CV buttons */}
        <div
          className="hero-intro-item flex flex-wrap items-center gap-4"
          style={{ animationDelay: '380ms' }}
        >
          <div className="relative inline-block" ref={rootRef}>
            <button
              type="button"
              className="rounded-full bg-primary px-8 py-4 text-sm font-semibold text-invert shadow-sm transition-transform hover:-translate-y-0.5 active:scale-95"
              aria-haspopup="true"
              aria-expanded={isPopoverOpen}
              onClick={togglePopover}
            >
              Get in Touch
            </button>
            
            {isPopoverOpen && (
              <div
                className="absolute z-20 mt-3 w-72 origin-top-left rounded-2xl border border-neutral/10 bg-card p-5 shadow-xl transition-all"
                role="menu"
                aria-label="Contact options"
                ref={popoverRef}
              >
                <p className="mb-1 text-xs font-bold tracking-widest text-neutral/70 uppercase">Get in touch</p>
                <p className="mb-3 text-xs text-neutral/80">{email}</p>
                <div className="flex flex-col gap-2">
                  <a
                    href={`mailto:${email}?subject=Opportunity%20to%20Connect`}
                    className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-primary hover:bg-neutral/10 transition-colors"
                    role="menuitem"
                    onClick={closePopover}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-neutral/50 group-hover:bg-primary transition-colors"></span>
                    Open in email app
                  </a>
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Opportunity%20to%20Connect&body=Hi%20Octavio%2C%0A%0A`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-primary hover:bg-neutral/10 transition-colors"
                    role="menuitem"
                    onClick={closePopover}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-neutral/50 group-hover:bg-primary transition-colors"></span>
                    Compose in Gmail
                  </a>
                  <button
                    type="button"
                    className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-primary hover:bg-neutral/10 transition-colors"
                    role="menuitem"
                    onClick={handleCopyEmail}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-neutral/50 group-hover:bg-primary transition-colors"></span>
                    Copy email address
                  </button>
                </div>
              </div>
            )}
          </div>

          <a
            href="/cv.pdf"
            download="Octavio-Daniel-Vizaru.pdf"
            className="rounded-full border border-neutral/20 px-8 py-4 text-sm font-semibold text-primary transition-all hover:bg-neutral/5 hover:border-neutral/40 active:scale-95"
            aria-label="Download CV PDF"
          >
            Download CV
          </a>
        </div>
      </div>

      {showToast && (
        <div
          className="fixed bottom-4 right-4 rounded-md border border-neutral/10 bg-card px-4 py-2 text-xs text-neutral shadow-lg"
          role="status"
          aria-live="polite"
        >
          Email copied!
        </div>
      )}
    </section>
  );
}
