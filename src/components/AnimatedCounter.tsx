import { useEffect, useState } from 'react';

export const AnimatedCounter = ({ 
  targetNumber, 
  duration = 2000, 
  suffix = '',
  prefix = ''
}: { 
  targetNumber: number | string
  duration?: number
  suffix?: string
  prefix?: string
}) => {
  const [displayNumber, setDisplayNumber] = useState(0);

  useEffect(() => {
    // Parse target number (handle cases like "5000+" or "99.2%")
    const numValue = typeof targetNumber === 'string' 
      ? parseInt(targetNumber.replace(/\D/g, '')) 
      : targetNumber;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setDisplayNumber(Math.floor(numValue * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setDisplayNumber(numValue);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [targetNumber, duration]);

  return (
    <span>
      {prefix}{displayNumber}{suffix}
    </span>
  );
};
