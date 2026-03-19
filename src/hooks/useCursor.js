import { useEffect, useRef, useState } from 'react';

export const useCursor = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState('');

  const position = useRef({ x: -100, y: -100 });       // smooth position (ring)
  const targetPosition = useRef({ x: -100, y: -100 }); // actual mouse
  const rafId = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    if (!cursor || !cursorDot) return;

    // 👉 Track mouse
    const onMouseMove = (e) => {
      targetPosition.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    // 👉 Smooth interpolation
    const lerp = (start, end, t) => start + (end - start) * t;

    // 👉 Animation loop
    const animateCursor = () => {
      // Smooth follow for main cursor
      position.current.x = lerp(position.current.x, targetPosition.current.x, 0.15);
      position.current.y = lerp(position.current.y, targetPosition.current.y, 0.15);

      // 🔥 MAIN CURSOR (smooth lag)
      cursor.style.transform = `
        translate(${position.current.x}px, ${position.current.y}px)
        translate(-50%, -50%)
      `;

      // 🔥 DOT (perfect follow — no lag)
      cursorDot.style.transform = `
        translate(${targetPosition.current.x}px, ${targetPosition.current.y}px)
        translate(-50%, -50%)
      `;

      rafId.current = requestAnimationFrame(animateCursor);
    };

    // 👉 Hover detection
    const onMouseEnterInteractive = (e) => {
      const target = e.currentTarget;
      const text = target.getAttribute('data-cursor-text') || '';
      setIsHovering(true);
      setCursorText(text);
    };

    const onMouseLeaveInteractive = () => {
      setIsHovering(false);
      setCursorText('');
    };

    // 👉 Click state
    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    // 👉 Select interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, [data-cursor]'
    );

    // 👉 Events
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterInteractive);
      el.addEventListener('mouseleave', onMouseLeaveInteractive);
    });

    // 👉 Start animation
    rafId.current = requestAnimationFrame(animateCursor);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);

      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterInteractive);
        el.removeEventListener('mouseleave', onMouseLeaveInteractive);
      });

      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return {
    cursorRef,
    cursorDotRef,
    isHovering,
    isClicking,
    cursorText,
  };
};