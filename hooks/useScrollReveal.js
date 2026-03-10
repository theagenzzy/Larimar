'use client';
import { useEffect, useRef } from 'react';

export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            if (!options.repeat) observer.unobserve(entry.target);
          } else if (options.repeat) {
            entry.target.classList.remove('revealed');
          }
        });
      },
      {
        threshold: options.threshold || 0.15,
        rootMargin: options.rootMargin || '0px 0px -50px 0px',
      }
    );

    // Observe the element itself or its children
    if (options.children) {
      const children = el.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .image-reveal');
      children.forEach((child) => observer.observe(child));
    } else {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin, options.repeat, options.children]);

  return ref;
}

export function useScrollRevealGroup() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );

    const items = el.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .image-reveal');
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return ref;
}
