import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeader from '../../components/ui/SectionHeader';
import { testimonials } from '../../data/testimonials';

const TestimonialCard = ({ testimonial, isActive }) => (
  <motion.div
    className="relative p-8 rounded-2xl"
    style={{
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.08)',
      backdropFilter: 'blur(20px)',
    }}
    initial={{ opacity: 0, y: 30, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: -30, scale: 0.95 }}
    transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
  >
    {/* Quote icon */}
    <div className="absolute top-6 right-6 opacity-10">
      <Quote size={40} color="#F26818" />
    </div>

    {/* Stars */}
    <div className="flex items-center gap-1 mb-4">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} size={13} fill="#FFB800" color="#FFB800" />
      ))}
    </div>

    {/* Text */}
    <p className="text-sm md:text-base font-body leading-relaxed mb-6 relative z-10"
      style={{ color: 'rgba(255,255,255,0.75)' }}>
      "{testimonial.text}"
    </p>

    {/* Result badge */}
    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6"
      style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)' }}>
      <span className="text-[10px] font-display font-bold tracking-wide" style={{ color: '#F26818' }}>
        🏆 {testimonial.result}
      </span>
    </div>

    {/* Author */}
    <div className="flex items-center gap-3">
      <div className="relative">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-11 h-11 rounded-full object-cover"
          style={{ border: '2px solid rgba(0,212,255,0.3)' }}
        />
        <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-green-400 border-2"
          style={{ borderColor: '#020408' }} />
      </div>
      <div>
        <div className="text-sm font-display font-bold text-white tracking-wide">{testimonial.name}</div>
        <div className="text-[11px] font-accent" style={{ color: 'rgba(255,255,255,0.4)' }}>
          {testimonial.role} · {testimonial.location}
        </div>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef(null);
  const perPage = typeof window !== 'undefined' && window.innerWidth >= 1024 ? 3
    : typeof window !== 'undefined' && window.innerWidth >= 640 ? 2 : 1;

  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const updatePerPage = () => {
      setItemsPerPage(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);
    };
    updatePerPage();
    window.addEventListener('resize', updatePerPage);
    return () => window.removeEventListener('resize', updatePerPage);
  }, []);

  const maxIndex = testimonials.length - itemsPerPage;

  const next = () => setActiveIndex(i => Math.min(i + 1, maxIndex));
  const prev = () => setActiveIndex(i => Math.max(i - 1, 0));

  useEffect(() => {
    if (!isAutoPlaying) return;
    intervalRef.current = setInterval(() => {
      setActiveIndex(i => (i >= maxIndex ? 0 : i + 1));
    }, 4500);
    return () => clearInterval(intervalRef.current);
  }, [isAutoPlaying, maxIndex]);

  const visible = testimonials.slice(activeIndex, activeIndex + itemsPerPage);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 0% 50%, rgba(0,212,255,0.04) 0%, transparent 60%)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader
          eyebrow="Member Results"
          title="Real People,"
          titleHighlight="Real Results"
          subtitle="Don't take our word for it. Hear from our members who transformed their lives."
        />

        <div className="mt-12 relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className={`grid gap-5 ${itemsPerPage === 3 ? 'grid-cols-3' : itemsPerPage === 2 ? 'grid-cols-2' : 'grid-cols-1'}`}
            >
              {visible.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} isActive />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              disabled={activeIndex === 0}
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 disabled:opacity-30"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <ChevronLeft size={18} color="rgba(255,255,255,0.7)" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === activeIndex ? 24 : 6,
                    height: 6,
                    background: i === activeIndex
                      ? 'linear-gradient(90deg, #F26818, #C94E05)'
                      : 'rgba(255,255,255,0.15)',
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              disabled={activeIndex >= maxIndex}
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 disabled:opacity-30"
              style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)' }}
            >
              <ChevronRight size={18} color="#F26818" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
