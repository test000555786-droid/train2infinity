import { motion } from 'framer-motion';
import { Instagram, Facebook, Youtube, Star, Award, CheckCircle } from 'lucide-react';
import SectionHeader from '../../components/ui/SectionHeader';
import GlassCard from '../../components/ui/GlassCard';
import FadeInView from '../../components/animations/FadeInView';
import StaggerContainer, { StaggerItem } from '../../components/animations/StaggerContainer';
import Button from '../../components/ui/Button';
import Particles from '../../components/effects/Particles';
import { trainers } from '../../data/trainers';

const TrainerDetailCard = ({ trainer }) => (
  <GlassCard className="overflow-hidden group" hover>
    {/* Image area */}
    <div className="relative h-80 overflow-hidden">
      <img
        src={trainer.image}
        alt={trainer.name}
        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(2,4,8,0.98) 100%)' }} />

      {/* Accent border */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${trainer.accent}, transparent)` }} />

      {/* Experience badge */}
      <div className="absolute top-5 right-5 text-center px-3 py-2 rounded-xl"
        style={{ background: 'rgba(0,0,0,0.7)', border: `1px solid ${trainer.accent}30`, backdropFilter: 'blur(10px)' }}>
        <div className="text-sm font-display font-bold" style={{ color: trainer.accent }}>{trainer.experience}</div>
        <div className="text-[9px] font-accent uppercase tracking-wide" style={{ color: 'rgba(255,255,255,0.4)' }}>Experience</div>
      </div>

      {/* Name overlay */}
      <div className="absolute bottom-5 left-5 right-5">
        <h3 className="text-xl font-display font-bold text-white tracking-wide mb-0.5">{trainer.name}</h3>
        <p className="text-xs font-accent" style={{ color: trainer.accent }}>{trainer.role}</p>
      </div>
    </div>

    {/* Content */}
    <div className="p-6">
      {/* Stats */}
      <div className="flex items-center gap-4 mb-5 pb-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="text-center flex-1">
          <div className="text-lg font-display font-bold" style={{ color: trainer.accent }}>{trainer.stats.clients}</div>
          <div className="text-[9px] font-accent uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.35)' }}>Clients</div>
        </div>
        <div className="w-px h-8" style={{ background: 'rgba(255,255,255,0.06)' }} />
        <div className="text-center flex-1">
          <div className="flex items-center justify-center gap-1">
            <Star size={12} fill="#FFB800" color="#FFB800" />
            <span className="text-lg font-display font-bold text-yellow-400">{trainer.stats.rating}</span>
          </div>
          <div className="text-[9px] font-accent uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.35)' }}>Rating</div>
        </div>
        <div className="w-px h-8" style={{ background: 'rgba(255,255,255,0.06)' }} />
        <div className="text-center flex-1">
          <div className="text-lg font-display font-bold text-white">🏅 {trainer.stats.medals}</div>
          <div className="text-[9px] font-accent uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.35)' }}>Awards</div>
        </div>
      </div>

      {/* Bio */}
      <p className="text-sm font-body leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.5)' }}>
        {trainer.bio}
      </p>

      {/* Specialties */}
      <div className="flex flex-wrap gap-2 mb-5">
        {trainer.specialties.map(s => (
          <span key={s} className="text-[10px] font-accent px-3 py-1 rounded-full"
            style={{ background: `${trainer.accent}12`, border: `1px solid ${trainer.accent}25`, color: trainer.accent }}>
            {s}
          </span>
        ))}
      </div>

      {/* Certifications */}
      <ul className="space-y-1.5 mb-6">
        {trainer.certifications.map(cert => (
          <li key={cert} className="flex items-center gap-2">
            <CheckCircle size={11} style={{ color: trainer.accent }} />
            <span className="text-xs font-accent" style={{ color: 'rgba(255,255,255,0.45)' }}>{cert}</span>
          </li>
        ))}
      </ul>

      {/* Social + CTA */}
      <div className="flex items-center gap-3">
        {[
          { icon: Instagram, href: trainer.social.instagram },
          { icon: Facebook, href: trainer.social.facebook },
          { icon: Youtube, href: trainer.social.youtube },
        ].map(({ icon: Icon, href }, i) => (
          <motion.a key={i} href={href} target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            whileHover={{ background: `${trainer.accent}15`, borderColor: `${trainer.accent}40`, y: -2 }}>
            <Icon size={14} color="rgba(255,255,255,0.55)" />
          </motion.a>
        ))}
        <div className="flex-1">
          <Button to="/contact" variant="primary" size="sm" className="w-full justify-center">
            Book Session
          </Button>
        </div>
      </div>
    </div>
  </GlassCard>
);

const Trainers = () => (
  <main className="pt-20">
    {/* Hero */}
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&q=80"
          alt="Trainers" className="w-full h-full object-cover" style={{ filter: 'brightness(0.12)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(2,4,8,0.4) 0%, rgba(2,4,8,1) 100%)' }} />
      </div>
      <Particles count={20} />
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <FadeInView>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)' }}>
            <Award size={12} color="#F26818" />
            <span className="text-[10px] font-accent tracking-[0.25em] uppercase" style={{ color: '#F26818' }}>Certified Professionals</span>
          </div>
        </FadeInView>
        <FadeInView delay={0.1}>
          <h1 className="text-5xl md:text-7xl font-display font-black tracking-tight mb-6">
            <span className="text-white">World-Class</span><br />
            <span style={{ background: 'linear-gradient(135deg, #F26818, #C94E05)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Elite Coaches
            </span>
          </h1>
        </FadeInView>
        <FadeInView delay={0.2}>
          <p className="text-lg font-body max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Our coaches aren't just trainers — they're performance architects who design, execute, and refine your path to peak condition.
          </p>
        </FadeInView>
      </div>
    </section>

    {/* Trainers Grid */}
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.1} delayChildren={0.2}>
          {trainers.map(trainer => (
            <StaggerItem key={trainer.id}>
              <TrainerDetailCard trainer={trainer} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA Banner */}
        <FadeInView delay={0.2}>
          <div className="mt-16 text-center">
            <GlassCard className="inline-block p-8 max-w-2xl w-full">
              <h3 className="text-2xl font-display font-bold text-white mb-3">
                Find Your Perfect Coach
              </h3>
              <p className="text-sm font-body mb-6 max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Not sure which trainer is right for you? Book a free 30-minute consultation and we'll match you with the perfect coach for your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button to="/contact" variant="primary">Book Free Consultation</Button>
                <Button to="/membership" variant="ghost">View Membership Plans</Button>
              </div>
            </GlassCard>
          </div>
        </FadeInView>
      </div>
    </section>
  </main>
);

export default Trainers;
