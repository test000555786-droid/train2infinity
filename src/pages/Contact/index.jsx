import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail, Send, Instagram, Facebook, Youtube } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';
import FadeInView from '../../components/animations/FadeInView';
import StaggerContainer, { StaggerItem } from '../../components/animations/StaggerContainer';
import Particles from '../../components/effects/Particles';
import { GYM_INFO } from '../../utils/constants';
import { validateEmail, validatePhone } from '../../utils/helpers';

const InputField = ({ label, type = 'text', name, value, onChange, error, placeholder, required }) => (
  <div>
    <label className="block text-[11px] font-accent tracking-[0.15em] uppercase mb-2" style={{ color: 'rgba(255,255,255,0.45)' }}>
      {label} {required && <span style={{ color: '#F26818' }}>*</span>}
    </label>
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-5 py-3.5 rounded-xl text-sm font-body text-white placeholder-white/25 outline-none transition-all duration-300"
        style={{
          background: 'rgba(255,255,255,0.04)',
          border: error ? '1px solid rgba(255,100,100,0.5)' : '1px solid rgba(255,255,255,0.08)',
        }}
        onFocus={e => {
          e.target.style.borderColor = 'rgba(242,104,24,0.4)';
          e.target.style.background = 'rgba(242,104,24,0.05)';
          e.target.style.boxShadow = '0 0 20px rgba(242,104,24,0.15)';
        }}
        onBlur={e => {
          e.target.style.borderColor = error ? 'rgba(255,100,100,0.5)' : 'rgba(255,255,255,0.08)';
          e.target.style.background = 'rgba(255,255,255,0.04)';
          e.target.style.boxShadow = 'none';
        }}
      />
    </div>
    {error && <p className="text-xs mt-1.5 font-accent" style={{ color: 'rgba(255,100,100,0.8)' }}>{error}</p>}
  </div>
);

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', program: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(e => ({ ...e, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!validateEmail(form.email)) newErrors.email = 'Enter a valid email address';
    if (form.phone && !validatePhone(form.phone)) newErrors.phone = 'Enter a valid 10-digit phone number';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus('sending');
    // Simulate submission
    await new Promise(r => setTimeout(r, 1800));
    setStatus('success');
    setForm({ name: '', email: '', phone: '', program: '', message: '' });
  };

  const contactDetails = [
    {
      icon: MapPin,
      label: 'Address',
      value: GYM_INFO.address.full,
      accent: '#F26818',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: GYM_INFO.phone,
      href: `tel:${GYM_INFO.phone}`,
      accent: '#C94E05',
    },
    {
      icon: Mail,
      label: 'Email',
      value: GYM_INFO.email,
      href: `mailto:${GYM_INFO.email}?subject=Gym Membership Inquiry&body=Hi, I want to join Train 2 Infinity gym`,
      accent: '#FF8A3D',
    },
    { 
      icon: Clock,
      label: 'Hours',
      value: 'Mon–Sat: 5:00 AM – 10:00 PM\nSunday: Closed',
      accent: '#F26818',
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
            alt="Contact" className="w-full h-full object-cover" style={{ filter: 'brightness(0.1)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(2,4,8,0.5) 0%, rgba(2,4,8,1) 100%)' }} />
        </div>
        <Particles count={15} />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <FadeInView>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: 'rgba(242,104,24,0.08)',
                     border: '1px solid rgba(242,104,24,0.2)' }}>
              <span className="text-[10px] font-accent tracking-[0.25em] uppercase" style={{ color: '#F26818' }}>Get In Touch</span>
            </div>
          </FadeInView>
          <FadeInView delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-display font-black tracking-tight mb-6">
              <span className="text-white">Start Your</span><br />
              <span style={{ background: 'linear-gradient(135deg, #F26818, #C94E05)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Transformation
              </span>
            </h1>
          </FadeInView>
          <FadeInView delay={0.2}>
            <p className="text-lg font-body max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Have questions? Ready to join? We'd love to hear from you.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left: Info */}
            <div className="lg:col-span-2 space-y-5">
              {/* Contact details */}
              <StaggerContainer stagger={0.1} delayChildren={0.1}>
                {contactDetails.map(({ icon: Icon, label, value, href, accent }) => (
                  <StaggerItem key={label} direction="left">
                    <GlassCard className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: `${accent}12`, border: `1px solid ${accent}25` }}>
                          <Icon size={16} style={{ color: accent }} />
                        </div>
                        <div>
                          <p className="text-[10px] font-accent tracking-[0.15em] uppercase mb-1.5" style={{ color: 'rgba(255,255,255,0.35)' }}>
                            {label}
                          </p>
                          {href
                            ? <a href={href} className="text-sm font-body leading-relaxed hover:text-white transition-colors"
                                style={{ color: 'rgba(255,255,255,0.7)', whiteSpace: 'pre-line' }}>{value}</a>
                            : <p className="text-sm font-body leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)', whiteSpace: 'pre-line' }}>{value}</p>
                          }
                        </div>
                      </div>
                    </GlassCard>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Social */}
              <FadeInView direction="left" delay={0.4}>
                <GlassCard className="p-5">
                  <p className="text-[10px] font-accent tracking-[0.15em] uppercase mb-4" style={{ color: 'rgba(255,255,255,0.35)' }}>
                    Follow Us
                  </p>
                  <div className="flex items-center gap-3">
                    {[
                      { icon: Instagram, href: GYM_INFO.social.instagram, color: '#E1306C' },
                      { icon: Facebook, href: GYM_INFO.social.facebook, color: '#1877F2' },
                      { icon: Youtube, href: GYM_INFO.social.youtube, color: '#FF0000' },
                    ].map(({ icon: Icon, href, color }, i) => (
                      <motion.a key={i} href={href} target="_blank" rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                        whileHover={{ background: `${color}20`, borderColor: `${color}40`, y: -2 }}>
                        <Icon size={16} color="rgba(255,255,255,0.6)" />
                      </motion.a>
                    ))}
                  </div>
                </GlassCard>
              </FadeInView>

              {/* Map placeholder */}
              <FadeInView direction="left" delay={0.5}>
                <GlassCard className="overflow-hidden">
                  <div className="h-40 relative flex items-center justify-center"
                    style={{ background: 'rgba(242,104,24,0.05)' }}>
                    <div className="text-center">
                      <MapPin size={32} style={{ color: '#F26818', margin: '0 auto 8px' }} />
                      <p className="text-xs font-accent" style={{ color: 'rgba(255,255,255,0.4)' }}>Salipur, Odisha</p>
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(GYM_INFO.address.full)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-accent tracking-wide uppercase mt-2 inline-block"
                        style={{ color: '#F26818' }}
                      >
                        Open in Maps →
                      </a>
                    </div> 
                    <div className="absolute inset-0 pointer-events-none"
                      style={{
                        backgroundImage: `linear-gradient(rgba(242,104,24,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(242,104,24,0.5,0.05) 1px, transparent 1px)`,
                        backgroundSize: '30px 30px',
                      }} />
                  </div>
                </GlassCard>
              </FadeInView>
            </div>

            {/* Right: Form */}
            <FadeInView direction="right" className="lg:col-span-3">
              <GlassCard className="p-8 md:p-10 h-full">
                <h3 className="text-2xl font-display font-bold text-white mb-2">Send Us a Message</h3>
                <p className="text-sm font-body mb-8" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  We typically respond within 2 hours during gym hours.
                </p>

                {status === 'success' ? (
                  <motion.div
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="text-5xl mb-4">🎉</div>
                    <h4 className="text-xl font-display font-bold text-white mb-3">Message Sent!</h4>
                    <p className="text-sm font-body" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      Thank you for reaching out. We'll get back to you shortly.
                    </p>
                    <button
                      className="mt-6 text-xs font-accent tracking-widest uppercase"
                      style={{ color: '#F26818' }}
                      onClick={() => setStatus(null)}
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <InputField label="Full Name" name="name" value={form.name}
                        onChange={handleChange} error={errors.name}
                        placeholder="Your name" required />
                      <InputField label="Email" type="email" name="email" value={form.email}
                        onChange={handleChange} error={errors.email}
                        placeholder="your@email.com" required />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <InputField label="Phone" name="phone" value={form.phone}
                        onChange={handleChange} error={errors.phone}
                        placeholder="10-digit number" />
                      <div>
                        <label className="block text-[11px] font-accent tracking-[0.15em] uppercase mb-2"
                          style={{ color: 'rgba(255,255,255,0.45)' }}>Program Interest</label>
                        <select name="program" value={form.program} onChange={handleChange}
                          className="w-full px-5 py-3.5 rounded-xl text-sm font-body text-white outline-none transition-all duration-300"
                          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: form.program ? 'white' : 'rgba(255,255,255,0.25)' }}
                          onFocus={e => { e.target.style.borderColor = 'rgba(242,104,24,0.4)';; }}
                          onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; }}
                        >
                          <option value="" style={{ background: '#060B14' }}>Select a program</option>
                          {['Strength Training', 'Cardio & Endurance', 'Weight Loss', 'Personal Training', 'Yoga & Mobility', 'Functional Fitness'].map(p => (
                            <option key={p} value={p} style={{ background: '#060B14' }}>{p}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-[11px] font-accent tracking-[0.15em] uppercase mb-2"
                        style={{ color: 'rgba(255,255,255,0.45)' }}>Message <span style={{ color: '#F26818' }}>*</span></label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us about your fitness goals..."
                        className="w-full px-5 py-3.5 rounded-xl text-sm font-body text-white placeholder-white/25 outline-none transition-all duration-300 resize-none"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: errors.message ? '1px solid rgba(255,100,100,0.5)' : '1px solid rgba(255,255,255,0.08)',
                        }}
                        onFocus={e => {
                          e.target.style.borderColor = 'rgba(242,104,24,0.4)';
                          e.target.style.background = 'rgba(242,104,24,0.5)';
                        }}
                        onBlur={e => {
                          e.target.style.borderColor = errors.message ? 'rgba(255,100,100,0.5)' : 'rgba(255,255,255,0.08)';
                          e.target.style.background = 'rgba(255,255,255,0.04)';
                        }}
                      />
                      {errors.message && <p className="text-xs mt-1.5 font-accent" style={{ color: 'rgba(255,100,100,0.8)' }}>{errors.message}</p>}
                    </div>

                    <motion.button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full py-4 rounded-xl font-display font-bold text-sm tracking-widest uppercase text-white flex items-center justify-center gap-3 overflow-hidden relative"
                      style={{ background: 'linear-gradient(135deg, #F26818, #C94E05)' }}
                      whileHover={{ boxShadow: '0 0 40px rgba(242,104,24,0.5)', y: -1 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {status === 'sending' ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </GlassCard>
            </FadeInView>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
