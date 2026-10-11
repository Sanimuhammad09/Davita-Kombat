import { useEffect } from 'react';
import { useRouterState } from '@tanstack/react-router';
import { motion, AnimatePresence } from 'framer-motion';

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
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.08,
    });

    const taggedElements = document.querySelectorAll<HTMLElement>(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale'
    );
    taggedElements.forEach((el) => observer.observe(el));

    const autoElements = document.querySelectorAll<HTMLElement>(
      'main > section:not(:first-child), main section .grid > div, main article'
    );

    autoElements.forEach((el) => {
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
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
