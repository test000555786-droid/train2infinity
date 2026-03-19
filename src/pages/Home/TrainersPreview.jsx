import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Instagram, ArrowRight, Star } from 'lucide-react';
import SectionHeader from '../../components/ui/SectionHeader';
import StaggerContainer, { StaggerItem } from '../../components/animations/StaggerContainer';
import { trainers } from '../../data/trainers';

const TrainerCard = ({ trainer }) => (
  <motion.div
    className="relative rounded-2xl overflow-hidden group"
    style={{
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.07)',
    }}
    whileHover={{ y: -6 }}
    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
  >
    {/* Image */}
    <div className="relative h-72 overflow-hidden">
      <img
        src={trainer.image}
        alt={trainer.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(180deg, transparent 40%, rgba(2,4,8,0.98) 100%)'
      }} />

      {/* Hover overlay with details */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center"
        style={{ background: 'rgba(2,4,8,0.85)', backdropFilter: 'blur(10px)' }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-xs font-body leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.7)' }}>
          {trainer.bio}
        </p>
        <div className="flex flex-wrap justify-center gap-2 mb-5">
          {trainer.specialties.map(s => (
            <span key={s} className="text-[10px] font-accent px-2.5 py-1 rounded-full"
              style={{ background: `${trainer.accent}15`, border: `1px solid ${trainer.accent}30`, color: trainer.accent }}>
              {s}
            </span>
          ))}
        </div>
        <Link to="/trainers"
          className="text-[11px] font-display font-semibold tracking-widest uppercase flex items-center gap-1.5 transition-all duration-200 hover:gap-2.5"
          style={{ color: trainer.accent }}>
          View Profile <ArrowRight size={12} />
        </Link>
      </motion.div>
    </div>

    {/* Info */}
    <div className="p-5">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-base font-display font-bold text-white tracking-wide mb-0.5">{trainer.name}</h3>
          <p className="text-xs font-accent" style={{ color: trainer.accent }}>{trainer.specialty}</p>
        </div>
        <div className="flex items-center gap-1 px-2.5 py-1 rounded-full"
          style={{ background: 'rgba(255,184,0,0.08)', border: '1px solid rgba(255,184,0,0.2)' }}>
          <Star size={10} fill="#FFB800" color="#FFB800" />
          <span className="text-[10px] font-display font-bold text-yellow-400">{trainer.stats.rating}</span>
        </div>
      </div>

      <div className="flex items-center gap-4 mt-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="text-center">
          <div className="text-base font-display font-bold" style={{ color: trainer.accent }}>{trainer.stats.clients}</div>
          <div className="text-[9px] font-accent tracking-wide uppercase" style={{ color: 'rgba(255,255,255,0.35)' }}>Clients</div>
        </div>
        <div className="w-px h-8" style={{ background: 'rgba(255,255,255,0.06)' }} />
        <div className="text-center">
          <div className="text-base font-display font-bold text-white">{trainer.experience}</div>
          <div className="text-[9px] font-accent tracking-wide uppercase" style={{ color: 'rgba(255,255,255,0.35)' }}>Exp</div>
        </div>
        <div className="flex-1 flex justify-end">
          <a href={trainer.social.instagram}
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <Instagram size={13} color="rgba(255,255,255,0.5)" />
          </a>
        </div>
      </div>
    </div>
  </motion.div>
);

const TrainersPreview = () => (
  <section className="py-24 overflow-hidden relative">
    <div className="absolute inset-0 pointer-events-none" style={{
      background: 'radial-gradient(ellipse 70% 60% at 100% 50%, rgba(123,47,255,0.04) 0%, transparent 60%)'
    }} />

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <SectionHeader
          eyebrow="Expert Trainers"
          title="Meet Our"
          titleHighlight="Elite Coaches"
          subtitle="Nationally certified professionals dedicated to your transformation."
          centered={false}
        />
        <Link to="/trainers"
          className="flex items-center gap-2 text-xs font-display font-semibold tracking-widest uppercase transition-all duration-200 hover:gap-3 flex-shrink-0"
          style={{ color: '#F26818' }}>
          All Trainers <ArrowRight size={13} />
        </Link>
      </div>

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" stagger={0.1}>
        {trainers.map(trainer => (
          <StaggerItem key={trainer.id} direction="up">
            <TrainerCard trainer={trainer} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default TrainersPreview;
