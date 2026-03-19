import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = ({
  children,
  variant = 'primary', // primary | ghost | outline | neon
  size = 'md',         // sm | md | lg
  to,
  href,
  onClick,
  className = '',
  icon,
  iconPosition = 'right',
  loading = false,
  disabled = false,
  type = 'button',
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-5 py-2.5 text-xs',
    md: 'px-8 py-3.5 text-sm',
    lg: 'px-10 py-4 text-base',
  };

  const baseClasses = `
    relative inline-flex items-center justify-center gap-2.5 font-display font-semibold
    tracking-widest uppercase rounded overflow-hidden transition-all duration-300
    ${sizeClasses[size]} ${className}
    ${disabled ? 'opacity-50 pointer-events-none' : ''}
  `;

  const variantClasses = {
    primary: `
      bg-gradient-to-r from-[#F26818] to-[#C94E05] text-white
      hover:shadow-[0_0_30px_rgba(242,104,24,0.6),0_0_60px_rgba(255,138,61,0.3)]
      hover:-translate-y-0.5 active:translate-y-0
    `,
    ghost: `
      bg-transparent text-white border border-white/20
      backdrop-blur-md
      hover:border-[#F26818]/60 hover:text-[#F26818]
      hover:bg-[#F26818]/10 hover:shadow-[0_0_20px_rgba(242,104,24,0.3)]
      hover:-translate-y-0.5
    `,
    outline: `
      bg-transparent text-[#F26818] border border-[#F26818]/40
      hover:border-[#F26818] hover:bg-[#F26818]/10
      hover:shadow-[0_0_20px_rgba(242,104,24,0.4)]
    `,
    neon: `
      bg-transparent text-[#FF8A3D] border border-[#FF8A3D]/40
      hover:border-[#FF8A3D] hover:bg-[#FF8A3D]/10
      hover:shadow-[0_0_25px_rgba(255,138,61,0.4)]
    `,
  };

  const content = (
    <>
      {/* Shine overlay */}
      <span className="absolute inset-0 overflow-hidden">
        <span className="absolute -top-1/2 left-0 w-8 h-[200%] bg-white/10 rotate-12 -translate-x-full group-hover:translate-x-[400%] transition-transform duration-700 ease-out" />
      </span>

      {icon && iconPosition === 'left' && (
        <span className="relative z-10">{icon}</span>
      )}

      <span className="relative z-10">
        {loading ? (
          <span className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Loading...
          </span>
        ) : children}
      </span>

      {icon && iconPosition === 'right' && !loading && (
        <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5">{icon}</span>
      )}
    </>
  );

  const motionProps = {
    whileTap: { scale: 0.97 },
    className: `group ${baseClasses} ${variantClasses[variant]}`,
  };

  if (to) {
    return (
      <motion.div {...motionProps} {...props}>
        <Link to={to} className="absolute inset-0 z-20" />
        {content}
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.a href={href} {...motionProps} {...props}>
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      {...motionProps}
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default Button;
