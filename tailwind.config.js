/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        body: ['Syne', 'sans-serif'],
        accent: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        neon: {
          blue: '#F26818',
          purple: '#C94E05',
          cyan: '#FF8A3D',
          pink: '#F26818',
        },
        glass: {
          white: 'rgba(255,255,255,0.05)',
          border: 'rgba(255,255,255,0.08)',
          dark: 'rgba(0,0,0,0.4)',
        },
        dark: {
          950: '#020408',
          900: '#060B14',
          800: '#0A1020',
          700: '#0F1830',
          600: '#162040',
        },
      },
      backgroundImage: {
        'neon-gradient': 'linear-gradient(135deg, #F26818 0%, #C94E05 100%)',
        'neon-gradient-2': 'linear-gradient(135deg, #C94E05 0%, #F26818 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
        'hero-gradient': 'linear-gradient(180deg, rgba(2,4,8,0) 0%, rgba(2,4,8,0.7) 60%, rgba(2,4,8,1) 100%)',
      },
      backdropBlur: {
        xs: '2px',
        glass: '20px',
        heavy: '40px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'slide-left': 'slideLeft 30s linear infinite',
        'cursor-expand': 'cursorExpand 0.3s ease-out forwards',
        'spin-slow': 'spin 8s linear infinite',
        'gradient-x': 'gradientX 4s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,212,255,0.3)' },
          '50%': { boxShadow: '0 0 60px rgba(0,212,255,0.8), 0 0 120px rgba(123,47,255,0.4)' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(0,212,255,0.5), 0 0 40px rgba(0,212,255,0.2)',
        'neon-purple': '0 0 20px rgba(123,47,255,0.5), 0 0 40px rgba(123,47,255,0.2)',
        'neon-cyan': '0 0 20px rgba(0,255,204,0.5), 0 0 40px rgba(0,255,204,0.2)',
        'glass': '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
        'glass-hover': '0 16px 48px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.15)',
        'card': '0 4px 24px rgba(0,0,0,0.5)',
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
}
