import { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  end: number | undefined
  duration?: number
}
type AnimatedCounterPropsType = AnimatedCounterProps;

export function AnimatedCounter({ end = 0, duration = 5000 }: AnimatedCounterPropsType) {
  const [count, setCount] = useState(0);
  const start = useRef<number | null>(null);

  useEffect(() => {
    const step = (timestamp: number) => {
      if (!start.current) start.current = timestamp;
      const progress = timestamp - start.current;
      const current = Math.min(Math.floor((progress / duration) * end), end);
      setCount(current);
      if (current < end) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [end, duration]);

  return count;
}
