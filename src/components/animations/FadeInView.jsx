import { motion } from 'framer-motion';
import { useAnimation } from '../../hooks/useAnimation';

const FadeInView = ({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.7,
  threshold = 0.1,
  once = true,
  ...props
}) => {
  const { ref, inView } = useAnimation(threshold);

  const variants = {
    up:    { hidden: { opacity: 0, y: 40 },  visible: { opacity: 1, y: 0 } },
    down:  { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } },
    left:  { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 60 },  visible: { opacity: 1, x: 0 } },
    scale: { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1 } },
    fade:  { hidden: { opacity: 0 },         visible: { opacity: 1 } },
  };

  const chosen = variants[direction] || variants.up;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={chosen}
      transition={{
        duration,
        delay,
        ease: [0.23, 1, 0.32, 1],
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default FadeInView;
