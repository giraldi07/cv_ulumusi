import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  end: number | string;
  duration?: number; // seconds
  className?: string;
}

export const CountUp = ({ end, duration = 2, className = '' }: CountUpProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [display, setDisplay] = useState<string>(() => (typeof end === 'number' ? Math.floor(end).toString() : String(end)));
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            // start animation
            animateValue();
            obs.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    obs.observe(el);

    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [end]);

  const animateValue = () => {
    const raw = typeof end === 'number' ? end : parseFloat(String(end).replace(/[^0-9.-]+/g, ''));
    if (Number.isNaN(raw)) {
      setDisplay(String(end));
      return;
    }

    const hasPercent = String(end).includes('%');
    const hasPlus = String(end).includes('+');
    const decimals = String(end).includes('.') ? 1 : 0;

    const start = 0;
    const endNum = raw;
    const durationMs = Math.max(300, duration * 1000);
    const startTime = performance.now();

    const step = (now: number) => {
      const progress = Math.min(1, (now - startTime) / durationMs);
      const value = start + (endNum - start) * easeOutCubic(progress);

      setDisplay(formatValue(value, decimals, hasPercent, hasPlus));

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  const formatValue = (val: number, decimals: number, percent: boolean, plus: boolean) => {
    let formatted = '';
    if (decimals > 0) {
      formatted = val.toFixed(decimals);
    } else {
      formatted = Math.round(val).toLocaleString();
    }
    if (percent) formatted = `${formatted}%`;
    if (plus) formatted = `${formatted}+`;
    return formatted;
  };

  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

  return (
    <div ref={ref} className={className}>
      {display}
    </div>
  );
};
