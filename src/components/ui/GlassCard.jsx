import { motion } from 'framer-motion';

const GlassCard = ({
  children,
  className = '',
  hover = true,
  glow = false,
  glowColor = '#F26818',
  onClick,
  style = {},
  ...props
}) => {
  return (
    <motion.div
      className={`glass-card rounded-xl ${hover ? 'glass-card-hover' : ''} ${className}`}
      whileHover={hover ? {
        y: -6,
        background: 'rgba(255,255,255,0.07)',
        borderColor: glowColor + '33',
        boxShadow: `0 20px 60px rgba(0,0,0,0.6), 0 0 40px ${glowColor}15, inset 0 1px 0 rgba(255,255,255,0.1)`,
        transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
      } : {}}
      onClick={onClick}
      style={{
        ...style,
        ...(glow ? { boxShadow: `0 0 30px ${glowColor}30` } : {}),
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
