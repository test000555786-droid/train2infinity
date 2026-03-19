import { useEffect, useRef } from 'react';

const Particles = ({ count = 40, className = '' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animId;
    let particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createParticle = () => ({
      x: Math.random() * canvas.width,
      y: canvas.height + 10,
      size: Math.random() * 2 + 2.5,
      speedY: -(Math.random() * 0.8 + 0.3),
      speedX: (Math.random() - 0.5) * 0.4,
      opacity: 0,
      maxOpacity: Math.random() * 0.6 + 0.1,
      color: Math.random() > 0.5 ? '242,104,24' : '255,138,61',
      life: 0,
      maxLife: Math.random() * 300 + 400,
    });

    const init = () => {
      resize();
      particles = Array.from({ length: count }, () => {
        const p = createParticle();
        p.y = Math.random() * canvas.height;
        p.life = Math.random() * p.maxLife;
        return p;
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.life++;
        p.x += p.speedX;
        p.y += p.speedY;

        const lifeRatio = p.life / p.maxLife;
        if (lifeRatio < 0.2) p.opacity = (lifeRatio / 0.2) * p.maxOpacity;
        else if (lifeRatio > 0.8) p.opacity = ((1 - lifeRatio) / 0.2) * p.maxOpacity;
        else p.opacity = p.maxOpacity;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${p.opacity})`;
        ctx.fill();

        if (p.life >= p.maxLife || p.y < -10) {
          particles[i] = createParticle();
        }
      });

      animId = requestAnimationFrame(animate);
    };

    init();
    animate();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ opacity: 0.7 }}
    />
  );
};

export default Particles;
