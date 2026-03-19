import { motion } from 'framer-motion';
import { Target, Eye, Heart, Zap } from 'lucide-react';
import SectionHeader from '../../components/ui/SectionHeader';
import GlassCard from '../../components/ui/GlassCard';
import FadeInView from '../../components/animations/FadeInView';
import StaggerContainer, { StaggerItem } from '../../components/animations/StaggerContainer';
import Particles from '../../components/effects/Particles';
import Button from '../../components/ui/Button';

const timeline = [
  { year: '2018', title: 'Founded', desc: 'Train 2 Infinity was born from a vision to bring world-class fitness to Odisha. Started with a small but passionate community.' },
  { year: '2019', title: 'First 100 Members', desc: 'Reached our first major milestone. Expanded facilities and introduced specialized training programs.' },
  { year: '2020', title: 'Resilience & Growth', desc: 'Adapted through adversity, introducing online coaching and emerging stronger with an enhanced community spirit.' },
  { year: '2021', title: 'Expert Team', desc: 'Assembled a team of 10+ nationally certified coaches and expanded our program portfolio to 6 disciplines.' },
  { year: '2022', title: '300 Members Strong', desc: 'Upgraded to premium equipment brands. Launched personal training and nutrition coaching services.' },
  { year: '2024', title: 'Elite Status', desc: '500+ active members, 4.9★ Google rating, and recognition as Odisha\'s premier fitness destination.' },
];

const values = [
  { icon: Target, title: 'Results First', desc: 'Every program, every session is designed with measurable outcomes in mind.', color: '#F26818' },
  { icon: Heart, title: 'Community', desc: 'We\'re a family. Your success is our success, celebrated together.', color: '#F26818' },
  { icon: Eye, title: 'Transparency', desc: 'Science-backed methods, honest progress tracking, zero gimmicks.', color: '#C94E05' },
  { icon: Zap, title: 'Excellence', desc: 'We refuse to settle. Premium in every detail, from equipment to coaching.', color: '#FF8A3D' },
];

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=1920&q=80"
            alt="About" className="w-full h-full object-cover" style={{ filter: 'brightness(0.12)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(2,4,8,0.5) 0%, rgba(2,4,8,1) 100%)' }} />
        </div>
        <Particles count={25} className="z-0" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <FadeInView>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)' }}>
              <span className="text-[10px] font-accent tracking-[0.25em] uppercase" style={{ color: '#F26818' }}>Our Story</span>
            </div>
          </FadeInView>
          <FadeInView delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-display font-black tracking-tight leading-tight mb-6">
              <span className="text-white">Born to</span>{' '}
              <span style={{ background: 'linear-gradient(135deg, #F26818, #C94E05)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Transform
              </span>
            </h1>
          </FadeInView>
          <FadeInView delay={0.2}>
            <p className="text-lg font-body leading-relaxed max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Train 2 Infinity was built on a single, powerful belief: every person deserves access to elite-level fitness. We're not just a gym — we're a transformation engine.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <FadeInView direction="left">
              <GlassCard className="p-10 h-full" glow glowColor="#F26818">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)' }}>
                  <Target size={22} color="#F26818" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">Our Mission</h3>
                <p className="font-body leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  To empower every individual in Odisha with world-class fitness guidance, premium facilities, and a
                  community-driven environment that makes achieving your goals not just possible — but inevitable.
                  We remove all barriers between you and the best version of yourself.
                </p>
              </GlassCard>
            </FadeInView>

            <FadeInView direction="right">
              <GlassCard className="p-10 h-full" glow glowColor="#C94E05">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: 'rgba(123,47,255,0.1)', border: '1px solid rgba(123,47,255,0.2)' }}>
                  <Eye size={22} color="#C94E05" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">Our Vision</h3>
                <p className="font-body leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  To become the most trusted fitness ecosystem in Eastern India — where science, community, and
                  technology converge to deliver transformation at scale. A place where champions are built, every
                  single day, regardless of where they start.
                </p>
              </GlassCard>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="What We Stand For" title="Our Core" titleHighlight="Values" />
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12" stagger={0.1} delayChildren={0.2}>
            {values.map(({ icon: Icon, title, desc, color }) => (
              <StaggerItem key={title}>
                <GlassCard className="p-7 text-center">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                    style={{ background: `${color}15`, border: `1px solid ${color}25` }}>
                    <Icon size={22} color={color} />
                  </div>
                  <h4 className="font-display font-bold text-white mb-2 tracking-wide">{title}</h4>
                  <p className="text-sm font-body leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{desc}</p>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(0,212,255,0.03) 0%, transparent 70%)' }} />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <SectionHeader eyebrow="Our Journey" title="Building" titleHighlight="Excellence" subtitle="From a passion project to Odisha's premier fitness destination." />

          <div className="mt-14 relative">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px hidden md:block"
              style={{ background: 'linear-gradient(180deg, transparent, rgba(0,212,255,0.3), rgba(123,47,255,0.3), transparent)' }} />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <FadeInView key={item.year} direction={i % 2 === 0 ? 'left' : 'right'} delay={i * 0.1}>
                  <div className={`flex items-center gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <GlassCard className="p-6 inline-block w-full">
                        <span className="text-[10px] font-display font-bold tracking-widest uppercase"
                          style={{ color: '#F26818' }}>{item.year}</span>
                        <h4 className="text-base font-display font-bold text-white mt-1 mb-2">{item.title}</h4>
                        <p className="text-sm font-body leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{item.desc}</p>
                      </GlassCard>
                    </div>
                    {/* Center dot */}
                    <div className="hidden md:flex flex-shrink-0 w-10 h-10 rounded-full items-center justify-center z-10"
                      style={{ background: 'linear-gradient(135deg, #F26818, #C94E05)', boxShadow: '0 0 20px rgba(0,212,255,0.4)' }}>
                      <span className="text-white font-display font-black text-xs">⚡</span>
                    </div>
                    <div className="flex-1 hidden md:block" />
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeInView>
            <GlassCard className="p-12" glow glowColor="#F26818">
              <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-4">
                Be Part of Our Story
              </h2>
              <p className="font-body mb-8 max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Join hundreds of members who made Train 2 Infinity their fitness home. Your transformation chapter starts now.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button to="/membership" variant="primary" size="lg">Start Today</Button>
                <Button to="/contact" variant="ghost" size="lg">Get In Touch</Button>
              </div>
            </GlassCard>
          </FadeInView>
        </div>
      </section>
    </main>
  );
};

export default About;
