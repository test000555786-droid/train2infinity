import { useScroll } from '../../hooks/useScroll';

const ScrollProgress = () => {
  const { scrollProgress } = useScroll();

  return (
    <div
      className="fixed top-0 left-0 h-[2px] z-[9997] pointer-events-none"
      style={{
        width: `${scrollProgress}%`,
        background: 'linear-gradient(90deg, #F26818, #C94E05, #F26818)',
        boxShadow: '0 0 8px rgba(0,212,255,0.8)',
        transition: 'width 0.1s linear',
      }}
    />
  );
};

export default ScrollProgress;
