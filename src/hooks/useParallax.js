import { useRef, useEffect, useState } from 'react';

export const useParallax = (speed = 0.5) => {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const distanceFromCenter = elementCenter - windowHeight / 2;
      setOffset(distanceFromCenter * speed);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { ref, offset };
};

export const useParallaxValue = (inputRange, outputRange) => {
  const [value, setValue] = useState(outputRange[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const [inMin, inMax] = inputRange;
      const [outMin, outMax] = outputRange;

      const progress = Math.max(0, Math.min(1, (scrollY - inMin) / (inMax - inMin)));
      const interpolated = outMin + progress * (outMax - outMin);
      setValue(interpolated);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return value;
};
