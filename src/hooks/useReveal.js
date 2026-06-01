import { useLayoutEffect } from 'react';

function revealIfInView(el) {
  const rect = el.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
    el.classList.add('is-visible');
    return true;
  }
  return false;
}

export function useReveal(deps = []) {
  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: '0px 0px -5% 0px' }
    );

    document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => {
      if (!revealIfInView(el)) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, deps);
}
