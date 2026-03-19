import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '../../components/ui/Button';

const NotFound = () => (
  <main className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
    {/* Background grid */}
    <div className="absolute inset-0" style={{
      backgroundImage: `linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)`,
      backgroundSize: '60px 60px',
    }} />

    <div className="relative z-10 text-center px-6 max-w-xl mx-auto">
      {/* 404 */}
      <motion.div
        className="relative mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      >
        <span
          className="text-[160px] md:text-[220px] font-display font-black leading-none block"
          style={{
            background: 'linear-gradient(135deg, rgba(0,212,255,0.2) 0%, rgba(123,47,255,0.2) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 0 40px rgba(0,212,255,0.2))',
          }}
        >
          404
        </span>
        {/* Center text overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl">😅</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h1 className="text-2xl md:text-3xl font-display font-bold text-white mb-3 tracking-wide">
          You Went Too Far
        </h1>
        <p className="text-sm font-body leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.45)' }}>
          Even at Train 2 Infinity, there are some limits. This page doesn't exist — but your gains can.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button to="/" variant="primary" size="md" icon={<Home size={15} />} iconPosition="left">
            Back to Home
          </Button>
          <Button to="/programs" variant="ghost" size="md" icon={<ArrowLeft size={15} />} iconPosition="left">
            View Programs
          </Button>
        </div>
      </motion.div>
    </div>
  </main>
);

export default NotFound;
