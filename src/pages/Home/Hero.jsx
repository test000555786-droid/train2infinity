import { motion } from 'framer-motion';
import { ChevronDown, Play, Star, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Particles from '../../components/effects/Particles';
import { GYM_INFO } from '../../utils/constants';

const Hero = () => {
  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
          alt="Gym"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.25) saturate(0.8)' }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, rgba(2,4,8,0.3) 0%, rgba(2,4,8,0.6) 60%, rgba(2,4,8,1) 100%)'
        }} />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 80% 80% at 50% 30%, rgba(242,104,24,0.08) 0%, transparent 60%)'
        }} />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 z-0 opacity-30" style={{
        backgroundImage: `linear-gradient(rgba(242,104,24,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(242,104,24,0.08) 1px, transparent 1px)`,
        backgroundSize: '80px 80px',
      }} />

      {/* Particles */}
      <Particles count={35} className="z-0" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-32 text-center">

        {/* Rating badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8"
          style={{
            background: 'rgba(255,184,0,0.08)',
            border: '1px solid rgba(255,184,0,0.2)',
            backdropFilter: 'blur(10px)',
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={11} fill="#FFB800" color="#FFB800" />
            ))}
          </div>
          <span className="text-xs font-display font-semibold text-yellow-400">{GYM_INFO.rating}</span>
          <span className="text-[10px] font-accent" style={{ color: 'rgba(255,255,255,0.45)' }}>
            {GYM_INFO.reviewCount}+ Google Reviews
          </span>
        </motion.div>

        {/* Headline */}
        <div className="overflow-hidden mb-2">
          <motion.p
            className="text-xs md:text-sm font-accent font-medium tracking-[0.3em] uppercase mb-4"
            style={{ color: '#F26818' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.23, 1, 0.32, 1] }}
          >
            Salipur's Premium Fitness Center
          </motion.p>
        </div>

        <div className="overflow-hidden mb-2">
          <motion.h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[110px] font-display font-black leading-[0.9] tracking-tight"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="block text-white">PUSH</span>
            <span className="block" style={{
              background: 'linear-gradient(135deg, #F26818 0%, #C94E05 60%, #F26818 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              BEYOND
            </span>
            <span className="block text-white">LIMITS</span>
          </motion.h1>
        </div>

        {/* Subheadline */}
        <motion.p
          className="text-base md:text-lg lg:text-xl font-body mt-8 mb-10 max-w-2xl mx-auto leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.55)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          Transform your body and mind at Odisha's most elite fitness center.
          Expert coaching. Premium equipment. Proven results.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0, ease: [0.23, 1, 0.32, 1] }}
        >
          <Link to="/membership">
            <motion.button
              className="relative px-10 py-4 font-display font-semibold text-sm tracking-widest uppercase text-white rounded overflow-hidden group"
              style={{ background: 'linear-gradient(135deg, #F26818, #C94E05)' }}
              whileHover={{
                boxShadow: '0 0 40px rgba(242,104,24,0.6), 0 0 80px rgba(255,138,61,0.3)',
                y: -2,
              }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10">Join Now — Free Trial</span>
              <motion.div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg, #C94E05, #F26818)' }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </Link>

          <Link to="/programs">
            <motion.button
              className="flex items-center gap-3 px-8 py-4 font-display font-semibold text-sm tracking-widest uppercase text-white rounded"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.15)',
                backdropFilter: 'blur(10px)',
              }}
              whileHover={{
                borderColor: 'rgba(242,104,24,0.4)',
                background: 'rgba(242,104,24,0.05)',
                y: -2,
              }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(242,104,24,0.15)',border: '1px solid rgba(242,104,24,0.3)' }}>
                <Play size={12} fill="#F26818" color="#F26818" className="ml-0.5" />
              </div>
              Explore Programs
            </motion.button>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2, ease: [0.23, 1, 0.32, 1] }}
        >
          {GYM_INFO.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-display font-black"
                style={{
                  background: 'linear-gradient(135deg, #F26818, #C94E05)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                {stat.value}
              </div>
              <div className="text-xs font-accent tracking-widest uppercase mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Glassmorphism info card */}
      <motion.div
        className="absolute bottom-10 left-0 right-0 mx-auto w-fit hidden md:flex items-center gap-6 px-8 py-4 rounded-2xl"
        style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          backdropFilter: 'blur(20px)',
          whiteSpace: 'nowrap',
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.5 }}
      >
        <div className="flex items-center gap-2">
          <Users size={14} style={{ color: '#F26818' }} />
          <span className="text-xs font-accent" style={{ color: 'rgba(255,255,255,0.5)' }}>500+ Members</span>
        </div>
        <div className="w-px h-4" style={{ background: 'rgba(255,255,255,0.1)' }} />
        <div className="flex items-center gap-2">
          <Award size={14} style={{ color: '#F26818' }} />
          <span className="text-xs font-accent" style={{ color: 'rgba(255,255,255,0.5)' }}>Certified Trainers</span>
        </div>
        <div className="w-px h-4" style={{ background: 'rgba(255,255,255,0.1)' }} />
        <div className="flex items-center gap-2">
          <span style={{ color: '#FFB800', fontSize: '14px' }}>⭐</span>
          <span className="text-xs font-accent" style={{ color: 'rgba(255,255,255,0.5)' }}>4.9 Rating</span>
        </div>
      </motion.div>

      {/* Scroll down indicator */}
      <motion.button
        className="absolute bottom-28 md:bottom-10 right-8 flex flex-col items-center gap-1.5 group"
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <span className="text-[9px] font-accent tracking-[0.2em] uppercase" style={{ color: 'rgba(255,255,255,0.3)', writingMode: 'vertical-rl' }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} style={{ color: 'rgba(255,255,255,0.3)' }} />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
