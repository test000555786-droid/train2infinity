import { motion } from 'framer-motion';
import GlassCard from '../../components/ui/GlassCard';
import SectionHeader from '../../components/ui/SectionHeader';
import StaggerContainer, { StaggerItem } from '../../components/animations/StaggerContainer';
import { GYM_INFO } from '../../utils/constants';

const Features = () => {
  return (
    <section className="relative py-24 overflow-hidden" id="features">
      {/* Background */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(0,212,255,0.04) 0%, transparent 60%)'
      }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Everything You Need to"
          titleHighlight="Succeed"
          subtitle="World-class facilities, expert coaching, and a community that pushes you to be your absolute best."
        />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16" stagger={0.1} delayChildren={0.2}>
          {GYM_INFO.features.map((feature, i) => (
            <StaggerItem key={i}>
              <GlassCard className="p-7 h-full group">
                {/* Icon */}
                <div className="relative mb-5">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0,212,255,0.12), rgba(123,47,255,0.12))',
                      border: '1px solid rgba(0,212,255,0.15)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {feature.icon}
                  </div>
                  {/* Number */}
                  <span
                    className="absolute -top-1 -right-1 text-[9px] font-display font-bold w-5 h-5 rounded-full flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, #F26818, #C94E05)',
                      color: 'white',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="text-base font-display font-bold text-white mb-2.5 tracking-wide group-hover:text-[#F26818] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm font-body leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  {feature.description}
                </p>

                {/* Hover glow line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[1px] rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(90deg, transparent, #F26818, transparent)' }}
                />
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Marquee stats banner */}
        <div className="mt-16 overflow-hidden relative">
          <div
            className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(90deg, #020408, transparent)' }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(270deg, #020408, transparent)' }}
          />
          <div className="flex animate-marquee gap-16 w-max">
            {[...Array(3)].flatMap(() => [
              '🏆 500+ Transformations',
              '⚡ 6 Elite Programs',
              '👊 Expert Coaches',
              '🥇 4.9 Star Rating',
              '💪 Premium Equipment',
              '🎯 Proven Results',
              '📊 Science-Based Training',
              '🔥 Real Transformations',
            ]).map((text, i) => (
              <span
                key={i}
                className="text-xs font-accent font-medium tracking-[0.2em] uppercase whitespace-nowrap"
                style={{ color: 'rgba(255,255,255,0.25)' }}
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
