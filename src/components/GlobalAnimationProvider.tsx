import { useEffect } from 'react';
import { useRouterState } from '@tanstack/react-router';

export function GlobalAnimationProvider({ children }: { children: React.ReactNode }) {
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Initialize IntersectionObserver for scroll reveals across all pages
    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Once revealed, unobserve to retain performance
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.08,
    });

    // Automatically register explicitly tagged reveal elements
    const taggedElements = document.querySelectorAll<HTMLElement>(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale'
    );
    taggedElements.forEach((el) => observer.observe(el));

    // Also auto-reveal major sections, cards and metric blocks that aren't hero sections
    const autoElements = document.querySelectorAll<HTMLElement>(
      'main > section:not(:first-child), main section .grid > div, main article'
    );

    autoElements.forEach((el) => {
      // Avoid re-tagging if already has reveal class or is hidden
      if (!el.classList.contains('reveal') && !el.classList.contains('no-reveal')) {
        el.classList.add('reveal');
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <div key={pathname} className="animate-page-enter w-full">
      {children}
    </div>
  );
}
