import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Zap, Star, ArrowRight, Phone } from 'lucide-react';
import SectionHeader from '../../components/ui/SectionHeader';
import GlassCard from '../../components/ui/GlassCard';
import FadeInView from '../../components/animations/FadeInView';
import StaggerContainer, { StaggerItem } from '../../components/animations/StaggerContainer';
import Button from '../../components/ui/Button';
import Particles from '../../components/effects/Particles';
import { MEMBERSHIP_PLANS, GYM_INFO } from '../../utils/constants';

import { useNavigate } from "react-router-dom";

const PlanCard = ({ plan, isHighlighted }) => {
  const navigate = useNavigate();

  return (
  
  <motion.div
    className="relative"
    whileHover={{ y: -8 }}
    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
  >
    {isHighlighted && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
        <div className="px-5 py-1.5 rounded-full text-[10px] font-display font-bold tracking-widest uppercase text-white"
          style={{ background: 'linear-gradient(135deg, #F26818, #C94E05)', boxShadow: '0 0 20px rgba(0,212,255,0.4)' }}>
          ⚡    Most Popular
        </div>
      </div>
    )}

    <div
      className="relative rounded-2xl overflow-hidden h-full"
      style={{
        background: isHighlighted
          ? 'rgba(255,255,255,0.06)'
          : 'rgba(255,255,255,0.03)',
        border: isHighlighted
          ? `1px solid ${plan.color}40`
          : '1px solid rgba(255,255,255,0.07)',
        boxShadow: isHighlighted
          ? `0 0 60px ${plan.color}15, 0 20px 60px rgba(0,0,0,0.4)`
          : 'none',
      }}
    >
      {/* Top gradient bar */}
      {isHighlighted && (
        <div className="h-0.5 w-full" style={{ background: `linear-gradient(90deg, transparent, ${plan.color}, transparent)` }} />
      )}

      <div className="p-8">
        {/* Plan name */}
        <div className="mb-6">
          <p className="text-[10px] font-accent tracking-[0.25em] uppercase mb-2" style={{ color: plan.color }}>
            Plan
          </p>
          <h3 className="text-2xl font-display font-bold text-white tracking-wide">{plan.name}</h3>
        </div>

        {/* Price */}
        <div className="mb-6 pb-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="flex items-end gap-2">
            <span className="text-xs font-accent font-medium" style={{ color: 'rgba(255,255,255,0.4)', marginBottom: '8px' }}>₹</span>
            <span className="text-5xl font-display font-black" style={{ color: plan.color }}>
              {plan.price.toLocaleString('en-IN')}
            </span>
          </div>
          <p className="text-xs font-accent mt-1" style={{ color: 'rgba(255,255,255,0.35)' }}>
            per {plan.period}
          </p>
          {plan.savings && (
            <div className="inline-flex items-center gap-1.5 mt-3 px-3 py-1 rounded-full"
              style={{ background: 'rgba(0,255,100,0.08)', border: '1px solid rgba(0,255,100,0.2)' }}>
              <span className="text-[10px] font-display font-bold text-green-400">🎉 {plan.savings}</span>
            </div>
          )}
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-8">
          {plan.features.map(f => (
            <li key={f} className="flex items-start gap-3">
              <CheckCircle size={14} className="flex-shrink-0 mt-0.5" style={{ color: plan.color }} />
              <span className="text-sm font-body" style={{ color: 'rgba(255,255,255,0.65)' }}>{f}</span>
            </li>
          ))}
          {plan.notIncluded.map(f => (
            <li key={f} className="flex items-start gap-3">
              <XCircle size={14} className="flex-shrink-0 mt-0.5" style={{ color: 'rgba(255,255,255,0.2)' }} />
              <span className="text-sm font-body line-through" style={{ color: 'rgba(255,255,255,0.25)' }}>{f}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <motion.button
          className="w-full py-3.5 rounded-lg font-display font-bold text-sm tracking-widest uppercase transition-all duration-300"
          style={{
            background: isHighlighted
              ? `linear-gradient(135deg, ${plan.color}, ${plan.color}99)`
              : 'transparent',
            border: isHighlighted ? 'none' : `1px solid ${plan.color}40`,
            color: isHighlighted ? '#fff' : plan.color,
            boxShadow: isHighlighted ? `0 0 30px ${plan.color}30` : 'none',
          }}
          whileHover={{
            boxShadow: `0 0 40px ${plan.color}40`,
            background: isHighlighted
              ? `linear-gradient(135deg, ${plan.color}, ${plan.color}bb)`
              : `${plan.color}15`,
          }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate('/contact')}
        >
          Get Started Now
        </motion.button>
      </div>
    </div>
  </motion.div>
);
};

const Membership = () => {
  const faqs = [
    { q: 'Is there a joining fee?', a: 'No hidden charges. The plan price is all you pay.' },
    { q: 'Can I pause my membership?', a: 'Yes, quarterly and annual members can pause up to 15 days per quarter.' },
    { q: 'Do you offer student discounts?', a: 'Yes! Students with valid ID get 15% off all plans. Ask at reception.' },
    { q: 'What\'s included in the free trial?', a: 'One full week of unlimited gym access, one group class, and a free fitness assessment.' },
    { q: 'Are there couples or family plans?', a: 'Yes, we offer couples and family bundle pricing. Contact us for details.' },
  ];

  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
            alt="Membership" className="w-full h-full object-cover" style={{ filter: 'brightness(0.1)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(2,4,8,0.4) 0%, rgba(2,4,8,1) 100%)' }} />
        </div>
        <Particles count={20} />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <FadeInView>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)' }}>
              <span className="text-[10px] font-accent tracking-[0.25em] uppercase" style={{ color: '#F26818' }}>Membership Plans</span>
            </div>
          </FadeInView>
          <FadeInView delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-display font-black tracking-tight mb-6">
              <span className="text-white">Invest in</span><br />
              <span style={{ background: 'linear-gradient(135deg, #F26818, #C94E05)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Your Best Self
              </span>
            </h1>
          </FadeInView>
          <FadeInView delay={0.2}>
            <p className="text-lg font-body max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Simple, transparent pricing. No hidden fees. Just results.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <StaggerContainer
            className="grid sm:grid-cols-3 gap-6 items-start mt-8"
            stagger={0.15} delayChildren={0.1}
          >
            {MEMBERSHIP_PLANS.map(plan => (
              <StaggerItem key={plan.id} direction="up">
                <PlanCard plan={plan} isHighlighted={plan.popular} />
              </StaggerItem>
            ))}
          </StaggerContainer> 

          {/* Free trial CTA */}
          <FadeInView delay={0.3}>
            <div className="mt-10 text-center">
              <GlassCard className="inline-block px-10 py-6 max-w-lg w-full">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <Zap size={18} color="#FF8A3D" />
                  <h4 className="text-base font-display font-bold text-white">Try Before You Commit</h4>
                </div>
                <p className="text-sm font-body mb-5" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  Get a FREE 7-day trial — full access, no credit card required.
                </p>
                <Button to="/contact" variant="neon" size="sm" className="mx-auto">
                  Claim Free Trial
                </Button>
              </GlassCard>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Comparison highlights */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader eyebrow="Why T2I" title="What You" titleHighlight="Always Get" />
          <StaggerContainer className="grid sm:grid-cols-2 gap-4 mt-10" stagger={0.08} delayChildren={0.2}>
            {[
              { icon: '🏋️', text: 'State-of-the-art equipment from premium brands' },
              { icon: '👨‍🏫', text: 'Access to certified coaches at all hours' },
              { icon: '🚿', text: 'Clean locker rooms, showers & amenities' },
              { icon: '📱', text: 'Digital progress tracking & monthly reports' },
              { icon: '🎯', text: 'Goal-based program design & adjustments' },
              { icon: '🌟', text: 'A welcoming community that supports your journey' },
            ].map(({ icon, text }, i) => (
              <StaggerItem key={i}>
                <div className="flex items-start gap-3 p-4 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <span className="text-xl flex-shrink-0">{icon}</span>
                  <span className="text-sm font-body leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{text}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader eyebrow="Questions" title="Frequently" titleHighlight="Asked" />
          <div className="mt-10 space-y-3">
            {faqs.map((faq, i) => (
              <FadeInView key={i} delay={i * 0.07}>
                <GlassCard className="overflow-hidden">
                  <button
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="text-sm font-display font-semibold text-white tracking-wide">{faq.q}</span>
                    <motion.span
                      animate={{ rotate: openFaq === i ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0 text-lg"
                      style={{ color: '#F26818' }}
                    >+</motion.span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm font-body leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      {faq.a}
                    </p>
                  </motion.div>
                </GlassCard>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};


export default Membership;
