'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { StaticLink } from './static-link';

type ActiveNavigation =
  | 'features'
  | 'how-it-works'
  | 'privacy'
  | 'support'
  | 'availability'
  | null;

const homeSections = ['features', 'how-it-works', 'availability'] as const;

/** Renders the sticky site navigation and tracks the current page or section. */
export function SiteHeader() {
  const [activeNavigation, setActiveNavigation] =
    useState<ActiveNavigation>(null);

  useEffect(() => {
    const pathname = window.location.pathname.replace(/\/$/, '') || '/';

    if (pathname !== '/') {
      const frame = window.requestAnimationFrame(() => {
        setActiveNavigation(
          pathname === '/privacy'
            ? 'privacy'
            : pathname === '/support'
              ? 'support'
              : null,
        );
      });

      return () => window.cancelAnimationFrame(frame);
    }

    const updateActiveSection = () => {
      const marker = Math.min(220, window.innerHeight * 0.28) + 80;
      let visibleSection: ActiveNavigation = null;

      for (const sectionId of homeSections) {
        const section = document.getElementById(sectionId);

        if (section && section.getBoundingClientRect().top <= marker) {
          visibleSection = sectionId;
        }
      }

      setActiveNavigation(visibleSection);
    };

    const frame = window.requestAnimationFrame(updateActiveSection);
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  const navigationClass = (item: ActiveNavigation) =>
    activeNavigation === item ? 'is-active' : undefined;

  return (
    <header className="site-header">
      <StaticLink
        className="brand"
        href="/"
        aria-label="Child Growth Analyst home"
      >
        <Image src="/app-icon.png" alt="" width={40} height={40} />
        <span>Child Growth Analyst</span>
      </StaticLink>
      <nav aria-label="Main navigation">
        <StaticLink
          className={navigationClass('features')}
          href="/#features"
          aria-current={
            activeNavigation === 'features' ? 'location' : undefined
          }
          onClick={() => setActiveNavigation('features')}
        >
          Features
        </StaticLink>
        <StaticLink
          className={navigationClass('how-it-works')}
          href="/#how-it-works"
          aria-current={
            activeNavigation === 'how-it-works' ? 'location' : undefined
          }
          onClick={() => setActiveNavigation('how-it-works')}
        >
          How it works
        </StaticLink>
        <StaticLink
          className={navigationClass('privacy')}
          href="/privacy"
          aria-current={activeNavigation === 'privacy' ? 'page' : undefined}
          onClick={() => setActiveNavigation('privacy')}
        >
          Privacy
        </StaticLink>
        <StaticLink
          className={navigationClass('support')}
          href="/support"
          aria-current={activeNavigation === 'support' ? 'page' : undefined}
          onClick={() => setActiveNavigation('support')}
        >
          Support
        </StaticLink>
      </nav>
      <StaticLink
        className={`header-cta ${navigationClass('availability') ?? ''}`}
        href="/#availability"
        aria-current={
          activeNavigation === 'availability' ? 'location' : undefined
        }
        onClick={() => setActiveNavigation('availability')}
      >
        Get the app
      </StaticLink>
    </header>
  );
}
