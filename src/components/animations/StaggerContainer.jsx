import { motion } from 'framer-motion';
import { useAnimation } from '../../hooks/useAnimation';

const StaggerContainer = ({
  children,
  className = '',
  stagger = 0.1,
  delayChildren = 0.1,
  threshold = 0.1,
}) => {
  const { ref, inView } = useAnimation(threshold);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className = '', direction = 'up' }) => {
  const variants = {
    up:    { hidden: { opacity: 0, y: 30 },  visible: { opacity: 1, y: 0 } },
    left:  { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 30 },  visible: { opacity: 1, x: 0 } },
    scale: { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } },
    fade:  { hidden: { opacity: 0 },          visible: { opacity: 1 } },
  };

  return (
    <motion.div
      className={className}
      variants={variants[direction] || variants.up}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default StaggerContainer;
