import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0); // 0: loading, 1: complete, 2: exit

  useEffect(() => {
    const duration = 2200;
    const interval = 30;
    const steps = duration / interval;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      // Ease out quad
      const t = current / steps;
      const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      setProgress(Math.min(Math.round(eased * 100), 100));

      if (current >= steps) {
        clearInterval(timer);
        setPhase(1);
        setTimeout(() => {
          setPhase(2);
          setTimeout(() => onComplete?.(), 600);
        }, 300);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 2 && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: '#020408' }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* Grid background */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }} />

          {/* Radial glow */}
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,212,255,0.06) 0%, transparent 70%)',
          }} />

          {/* Logo */}
          <motion.div
            className="relative z-10 flex flex-col items-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Logo icon */}
            <div className="relative">
              <motion.div
                className="w-24 h-24 rounded-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(123,47,255,0.15))',
                  border: '1px solid rgba(0,212,255,0.3)',
                  backdropFilter: 'blur(10px)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                <span style={{ fontSize: '2.5rem' }}>⚡</span>
              </motion.div>

              {/* Spinning ring */}
              <motion.div
                className="absolute inset-[-6px] rounded-full"
                style={{
                  border: '1px solid transparent',
                  borderTopColor: '#F26818',
                  borderRightColor: 'rgba(0,212,255,0.3)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-[-14px] rounded-full"
                style={{
                  border: '1px solid transparent',
                  borderTopColor: 'rgba(123,47,255,0.6)',
                  borderLeftColor: 'rgba(123,47,255,0.2)',
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
            </div>

            {/* Brand name */}
            <div className="text-center">
              <motion.h1
                className="text-3xl font-display font-bold tracking-wider"
                style={{
                  background: 'linear-gradient(135deg, #F26818, #C94E05)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
                initial={{ opacity: 0, letterSpacing: '0.3em' }}
                animate={{ opacity: 1, letterSpacing: '0.1em' }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                TRAIN 2 INFINITY
              </motion.h1>
              <motion.p
                className="text-xs font-accent tracking-[0.3em] uppercase mt-1"
                style={{ color: 'rgba(255,255,255,0.4)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                Push Beyond Limits
              </motion.p>
            </div>

            {/* Progress bar */}
            <div className="w-64 flex flex-col items-center gap-3">
              <div
                className="w-full h-[1px] rounded-full overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.06)' }}
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #F26818, #C94E05)',
                    boxShadow: '0 0 10px rgba(0,212,255,0.6)',
                    width: `${progress}%`,
                  }}
                  transition={{ duration: 0.05 }}
                />
              </div>

              <div className="flex items-center justify-between w-full">
                <span
                  className="text-[10px] font-accent tracking-widest uppercase"
                  style={{ color: 'rgba(255,255,255,0.3)' }}
                >
                  {progress < 100 ? 'Initializing...' : 'Ready'}
                </span>
                <span
                  className="text-[10px] font-display font-bold tabular-nums"
                  style={{ color: '#F26818' }}
                >
                  {progress}%
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
