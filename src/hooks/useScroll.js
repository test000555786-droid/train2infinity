import { useState, useEffect, useRef } from 'react';

export const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (current / docHeight) * 100 : 0;

      setScrollY(current);
      setScrollProgress(Math.min(progress, 100));
      setScrollDirection(current > lastScrollY.current ? 'down' : 'up');
      setIsScrolled(current > 50);
      lastScrollY.current = current;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollY, scrollProgress, scrollDirection, isScrolled };
};
