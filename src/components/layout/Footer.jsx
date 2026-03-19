import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Instagram, Facebook, Youtube, Twitter, Zap, ArrowRight } from 'lucide-react';
import { GYM_INFO, NAV_LINKS } from '../../utils/constants';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden" style={{ background: '#020408', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,212,255,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.2), rgba(123,47,255,0.2))', border: '1px solid rgba(0,212,255,0.3)' }}>
                <Zap size={20} color="#F26818" strokeWidth={2.5} />
              </div>
              <div>
                <span className="font-display font-bold text-sm tracking-wider block"
                  style={{ background: 'linear-gradient(135deg, #F26818, #C94E05)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  TRAIN 2 INFINITY
                </span>
                <span className="text-[9px] font-accent tracking-[0.2em] uppercase" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  Premium Fitness
                </span>
              </div>
            </Link>
            <p className="text-sm font-body leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Odisha's premier fitness destination. Where champions are built, limits are shattered, and legends are forged.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {[
                { icon: Instagram, href: GYM_INFO.social.instagram, label: 'Instagram' },
                { icon: Facebook, href: GYM_INFO.social.facebook, label: 'Facebook' },
                { icon: Youtube, href: GYM_INFO.social.youtube, label: 'YouTube' },
                { icon: Twitter, href: GYM_INFO.social.twitter, label: 'Twitter' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                  whileHover={{
                    background: 'rgba(0,212,255,0.1)',
                    borderColor: 'rgba(0,212,255,0.3)',
                    y: -2,
                  }}
                >
                  <Icon size={15} color="rgba(255,255,255,0.6)" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-display font-semibold tracking-[0.2em] uppercase mb-6" style={{ color: '#F26818' }}>
              Navigation
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-sm font-body transition-all duration-200 group"
                    style={{ color: 'rgba(255,255,255,0.45)' }}
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" style={{ color: '#F26818' }} />
                    <span className="group-hover:text-white transition-colors">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-xs font-display font-semibold tracking-[0.2em] uppercase mb-6" style={{ color: '#F26818' }}>
              Programs
            </h4>
            <ul className="space-y-3">
              {['Strength Training', 'Cardio & Endurance', 'Weight Loss', 'Personal Training', 'Yoga & Mobility', 'Functional Fitness'].map(p => (
                <li key={p}>
                  <Link
                    to="/programs"
                    className="flex items-center gap-2 text-sm font-body transition-all duration-200 group"
                    style={{ color: 'rgba(255,255,255,0.45)' }}
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" style={{ color: '#F26818' }} />
                    <span className="group-hover:text-white transition-colors">{p}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-display font-semibold tracking-[0.2em] uppercase mb-6" style={{ color: '#F26818' }}>
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" style={{ color: '#F26818' }} />
                <span className="text-sm font-body leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  {GYM_INFO.address.full}
                </span>
              </li>
              <li>
                <a href={`tel:${GYM_INFO.phone}`} className="flex gap-3 group">
                  <Phone size={16} className="flex-shrink-0" style={{ color: '#F26818' }} />
                  <span className="text-sm font-body group-hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    {GYM_INFO.phone}
                  </span>
                </a>
              </li>
              <li className="flex gap-3">
                <Clock size={16} className="flex-shrink-0 mt-0.5" style={{ color: '#F26818' }} />
                <div>
                  <p className="text-sm font-body" style={{ color: 'rgba(255,255,255,0.45)' }}>Mon–Sat: 5:00 AM – 10:00 PM</p>
                  <p className="text-sm font-body" style={{ color: 'rgba(255,100,100,0.6)' }}>Sunday: Closed</p>
                </div>
              </li>
            </ul>

            {/* Rating badge */}
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl"
              style={{ background: 'rgba(255,184,0,0.08)', border: '1px solid rgba(255,184,0,0.2)' }}>
              <span className="text-yellow-400 text-base">⭐</span>
              <div>
                <span className="text-sm font-display font-bold text-yellow-400">{GYM_INFO.rating}</span>
                <span className="text-xs font-accent ml-1" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  · {GYM_INFO.reviewCount} reviews
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <p className="text-xs font-accent" style={{ color: 'rgba(255,255,255,0.25)' }}>
            © {year} Train 2 Infinity. All rights reserved.
          </p>
          <p className="text-xs font-accent" style={{ color: 'rgba(255,255,255,0.2)' }}>
            Salipur, Odisha · Push Beyond Limits
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
