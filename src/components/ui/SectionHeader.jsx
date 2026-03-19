import FadeInView from '../animations/FadeInView';

const SectionHeader = ({
  eyebrow,
  title,
  titleHighlight,
  subtitle,
  centered = true,
  className = '',
}) => {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <FadeInView delay={0}>
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[1px]" style={{ background: 'linear-gradient(90deg, transparent, #F26818)' }} />
            <span
              className="text-[11px] font-accent font-medium tracking-[0.25em] uppercase"
              style={{ color: '#F26818' }}
            >
              {eyebrow}
            </span>
            <span className="w-8 h-[1px]" style={{ background: 'linear-gradient(90deg, #F26818, transparent)' }} />
          </div>
        </FadeInView>
      )}

      <FadeInView delay={0.1}>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight">
          {title}{' '}
          {titleHighlight && (
            <span
              style={{
                background: 'linear-gradient(135deg, #F26818, #C94E05)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {titleHighlight}
            </span>
          )}
        </h2>
      </FadeInView>

      {subtitle && (
        <FadeInView delay={0.2}>
          <p
            className={`text-base md:text-lg mt-5 leading-relaxed font-body ${centered ? 'max-w-2xl mx-auto' : 'max-w-xl'}`}
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            {subtitle}
          </p>
        </FadeInView>
      )}
    </div>
  );
};

export default SectionHeader;
