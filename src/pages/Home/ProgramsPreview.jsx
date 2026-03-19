import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Clock, Zap } from 'lucide-react';
import SectionHeader from '../../components/ui/SectionHeader';
import FadeInView from '../../components/animations/FadeInView';
import { programs } from '../../data/programs';

const ProgramCard = ({ program, index }) => (
  <motion.div
    className="relative flex-shrink-0 w-72 md:w-80 rounded-2xl overflow-hidden group"
    style={{
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.07)',
    }}
    whileHover={{ y: -8, scale: 1.02 }}
    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
    initial={{ opacity: 0, x: 40 }}
    animate={{ opacity: 1, x: 0 }}
    custom={index}
  >
    {/* Image */}
    <div className="relative h-48 overflow-hidden">
      <img
        src={program.image}
        alt={program.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(180deg, transparent 30%, rgba(2,4,8,0.95) 100%)'
      }} />

      {/* Icon */}
      <div className="absolute top-4 left-4 text-3xl">{program.icon}</div>

      {/* Level badge */}
      <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-accent font-medium tracking-wide"
        style={{ background: 'rgba(0,0,0,0.6)', color: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)' }}>
        {program.level}
      </div>
    </div>

    {/* Content */}
    <div className="p-6">
      <p className="text-[10px] font-accent tracking-[0.2em] uppercase mb-1.5" style={{ color: program.accent }}>
        {program.subtitle}
      </p>
      <h3 className="text-base font-display font-bold text-white mb-2 tracking-wide">{program.title}</h3>
      <p className="text-xs font-body leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>
        {program.shortDesc}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Clock size={11} style={{ color: 'rgba(255,255,255,0.35)' }} />
          <span className="text-[10px] font-accent" style={{ color: 'rgba(255,255,255,0.35)' }}>{program.duration}</span>
        </div>
        <Link to={`/programs`}
          className="flex items-center gap-1 text-[11px] font-display font-semibold tracking-wide uppercase transition-all duration-200 group-hover:gap-2"
          style={{ color: program.accent }}>
          Learn More <ArrowRight size={12} />
        </Link>
      </div>
    </div>

    {/* Bottom glow line */}
    <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      style={{ background: `linear-gradient(90deg, transparent, ${program.accent}, transparent)` }} />
  </motion.div>
);

const ProgramsPreview = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 340, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 overflow-hidden" id="programs-preview">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="Training Programs"
            title="Find Your"
            titleHighlight="Perfect Program"
            subtitle="Expertly designed programs for every goal and fitness level."
            centered={false}
          />

          <div className="flex items-center gap-3">
            <button onClick={() => scroll(-1)}
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <ChevronLeft size={18} color="rgba(255,255,255,0.6)" />
            </button>
            <button onClick={() => scroll(1)}
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
              style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)' }}>
              <ChevronRight size={18} color="#F26818" />
            </button>
            <Link to="/programs"
              className="flex items-center gap-2 text-xs font-display font-semibold tracking-widest uppercase ml-2 transition-all duration-200 hover:gap-3"
              style={{ color: '#F26818' }}>
              All Programs <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* Scrollable cards */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto no-scrollbar pb-4"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {programs.map((prog, i) => (
            <div key={prog.id} style={{ scrollSnapAlign: 'start' }}>
              <ProgramCard program={prog} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsPreview;
