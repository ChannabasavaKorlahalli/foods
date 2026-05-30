import { useEffect, useRef, useState } from 'react';

export function StatCounter({ end, suffix = '', label, duration = 2200, format }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || done.current) return;
        done.current = true;
        const start = performance.now();

        const animate = (now) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - (1 - t) ** 3;
          setValue(Math.round(end * eased));
          if (t < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  const shown = format ? format(value) : `${value}${suffix}`;

  return (
    <div ref={ref} className="text-center">
      <p className="metric-value">{shown}</p>
      <p className="mt-2 text-sm text-creamMuted">{label}</p>
    </div>
  );
}
