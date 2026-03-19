import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, Users, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import SectionHeader from '../../components/ui/SectionHeader';
import GlassCard from '../../components/ui/GlassCard';
import FadeInView from '../../components/animations/FadeInView';
import StaggerContainer, { StaggerItem } from '../../components/animations/StaggerContainer';
import Button from '../../components/ui/Button';
import Particles from '../../components/effects/Particles';
import { programs, categories } from '../../data/programs';

const ProgramCard = ({ program }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
  >
    <GlassCard className="overflow-hidden group h-full flex flex-col" hover>
      {/* Image */}
      <div className="relative h-52 overflow-hidden flex-shrink-0">
        <img
          src={program.image}
          alt={program.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, transparent 30%, rgba(2,4,8,0.95) 100%)' }} />

        <div className="absolute top-4 left-4 text-3xl">{program.icon}</div>

        <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-accent backdrop-blur-md"
          style={{ background: 'rgba(0,0,0,0.6)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.1)' }}>
          {program.level}
        </div>

        <div className="absolute bottom-4 left-4">
          <span className="text-[10px] font-accent tracking-[0.2em] uppercase" style={{ color: program.accent }}>
            {program.subtitle}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-display font-bold text-white mb-2 tracking-wide">{program.title}</h3>
        <p className="text-sm font-body leading-relaxed mb-5 flex-1" style={{ color: 'rgba(255,255,255,0.5)' }}>
          {program.shortDesc}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-5 mb-5 pb-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex items-center gap-1.5">
            <Clock size={12} style={{ color: program.accent }} />
            <span className="text-[11px] font-accent" style={{ color: 'rgba(255,255,255,0.45)' }}>{program.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Zap size={12} style={{ color: program.accent }} />
            <span className="text-[11px] font-accent" style={{ color: 'rgba(255,255,255,0.45)' }}>{program.frequency}</span>
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {program.features.slice(0, 3).map((f, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle size={13} className="flex-shrink-0 mt-0.5" style={{ color: program.accent }} />
              <span className="text-xs font-body" style={{ color: 'rgba(255,255,255,0.5)' }}>{f}</span>
            </li>
          ))}
        </ul>

        <Button to="/membership" variant="ghost" size="sm" className="w-full justify-center"
          icon={<ArrowRight size={14} />}>
          Enroll Now
        </Button>
      </div>
    </GlassCard>
  </motion.div>
);

const Programs = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? programs
    : programs.filter(p => p.category === activeCategory);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1920&q=80"
            alt="Programs" className="w-full h-full object-cover" style={{ filter: 'brightness(0.12)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(2,4,8,0.4) 0%, rgba(2,4,8,1) 100%)' }} />
        </div>
        <Particles count={20} />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <FadeInView>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)' }}>
              <span className="text-[10px] font-accent tracking-[0.25em] uppercase" style={{ color: '#F26818' }}>Training Programs</span>
            </div>
          </FadeInView>
          <FadeInView delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-display font-black tracking-tight mb-6">
              <span className="text-white">Choose Your</span><br />
              <span style={{ background: 'linear-gradient(135deg, #F26818, #C94E05)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Path to Power
              </span>
            </h1>
          </FadeInView>
          <FadeInView delay={0.2}>
            <p className="text-lg font-body max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Six expertly designed programs, each a complete system for transformation. Every level, every goal, every body.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category filters */}
          <FadeInView>
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
              {categories.map(cat => (
                <motion.button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className="px-5 py-2 rounded-full text-xs font-accent font-medium tracking-[0.1em] uppercase transition-all duration-300"
                  style={{
                    background: activeCategory === cat.id
                      ? 'linear-gradient(135deg, #F26818, #C94E05)'
                      : 'rgba(255,255,255,0.05)',
                    border: activeCategory === cat.id
                      ? 'none'
                      : '1px solid rgba(255,255,255,0.08)',
                    color: activeCategory === cat.id ? '#fff' : 'rgba(255,255,255,0.5)',
                    boxShadow: activeCategory === cat.id ? '0 0 20px rgba(0,212,255,0.3)' : 'none',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {cat.label}
                </motion.button>
              ))}
            </div>
          </FadeInView>

          {/* Grid */}
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map(program => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* CTA */}
          <FadeInView delay={0.2}>
            <div className="mt-16 text-center">
              <GlassCard className="inline-block p-8 max-w-xl">
                <h3 className="text-xl font-display font-bold text-white mb-3">Not Sure Which Program?</h3>
                <p className="text-sm font-body mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  Book a free fitness assessment with one of our coaches and we'll design the perfect program for your goals.
                </p>
                <Button to="/contact" variant="primary" size="md" icon={<ArrowRight size={14} />}>
                  Book Free Assessment
                </Button>
              </GlassCard>
            </div>
          </FadeInView>
        </div>
      </section>
    </main>
  );
};

export default Programs;
