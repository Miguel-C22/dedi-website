import { useEffect, useRef, useState } from 'react';

/**
 * Replicates the source's startCountAnimation: once the returned ref
 * scrolls into view, animates progress 0 -> 1 over 1400ms with a cubic
 * ease-out, exactly once.
 */
export function useCountUp<T extends HTMLElement>(): [React.RefObject<T | null>, number] {
  const ref = useRef<T | null>(null);
  const [progress, setProgress] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const runAnimation = () => {
      const duration = 1400;
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setProgress(eased);
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !startedRef.current) {
        startedRef.current = true;
        runAnimation();
        observer.disconnect();
      }
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, progress];
}
