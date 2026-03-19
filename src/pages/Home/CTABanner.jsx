import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import FadeInView from '../../components/animations/FadeInView';
import { GYM_INFO } from '../../utils/constants';

const CTABanner = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1920&q=80"
          alt="Training"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.1) saturate(0.5)' }}
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, rgba(242,104,24,0.15) 0%, rgba(2,4,8,0.9) 40%, rgba(2,4,8,0.9) 60%, rgba(255,138,61,0.15) 100%)'
        }} />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `linear-gradient(rgba(242,104,24,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(242,104,24,0.08) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <FadeInView>
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6"
            style={{background: 'rgba(242,104,24,0.08)',
border: '1px solid rgba(242,104,24,0.2)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[10px] font-accent font-medium tracking-[0.2em] uppercase" style={{ color: '#F26818' }}>
              Limited Spots Available
            </span>
          </div>
        </FadeInView>

        <FadeInView delay={0.1}>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black leading-tight tracking-tight mb-6">
            <span className="text-white">Your Journey</span>
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #F26818, #C94E05, #F26818)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Starts Today
            </span>
          </h2>
        </FadeInView>

        <FadeInView delay={0.2}>
          <p className="text-base md:text-lg font-body leading-relaxed mb-10 max-w-2xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.55)' }}>
            Join Odisha's most elite fitness community. Get a FREE trial session and discover why 500+ members call Train 2 Infinity their second home.
          </p>
        </FadeInView>

        <FadeInView delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/membership">
              <motion.button
                className="relative px-10 py-4 font-display font-bold text-sm tracking-widest uppercase text-white rounded overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #F26818, #C94E05)' }}
                whileHover={{
                  boxShadow: '0 0 50px rgba(242,104,24,0.6), 0 0 100px rgba(255,138,61,0.3)',
                  y: -2,
                }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Free Trial <ArrowRight size={16} />
                </span>
              </motion.button>
            </Link>

            <a href={`tel:${GYM_INFO.phone}`}>
              <motion.button
                className="flex items-center gap-3 px-8 py-4 font-display font-semibold text-sm tracking-widest uppercase text-white rounded"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(10px)',
                }}
                whileHover={{ borderColor: 'rgba(242,104,24,0.4)',
background: 'rgba(242,104,24,0.05)', y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Phone size={15} style={{ color: '#F26818' }} />
                Call Now
              </motion.button>
            </a>
          </div>
        </FadeInView>

        {/* Trust signals */}
        <FadeInView delay={0.4}>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
            {['No Commitment Required', 'Free First Session', 'Expert Guidance', 'Cancel Anytime'].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-green-400 text-sm">✓</span>
                <span className="text-xs font-accent" style={{ color: 'rgba(255,255,255,0.5)' }}>{item}</span>
              </div>
            ))}
          </div>
        </FadeInView>
      </div>
    </section>
  );
};

export default CTABanner;
