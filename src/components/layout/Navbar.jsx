import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap, Sun, Moon } from 'lucide-react';
import { useScroll } from '../../hooks/useScroll';
import { useApp } from '../../context/AppContext';
import { NAV_LINKS } from '../../utils/constants';
import Button from '../ui/Button';

const Navbar = () => {
  const { isScrolled, scrollDirection } = useScroll();
  const { theme, toggleTheme, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useApp();
  const location = useLocation();

  useEffect(() => {
    closeMobileMenu();
  }, [location]);

  const isHidden = isScrolled && scrollDirection === 'down' && !isMobileMenuOpen;

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-[100]"
        animate={{ y: isHidden ? -100 : 0 }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 transition-all duration-500"
          style={{
            background: isScrolled
              ? 'rgba(2,4,8,0.85)'
              : 'transparent',
            backdropFilter: isScrolled ? 'blur(20px)' : 'none',
            borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
          }}
        />

        <nav className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{
                background: 'linear-gradient(135deg, rgba(0,212,255,0.2), rgba(123,47,255,0.2))',
                border: '1px solid rgba(0,212,255,0.3)',
              }}
            >
              <Zap size={18} color="#F26818" strokeWidth={2.5} />
            </div>
            <div>
              <span
                className="font-display font-bold text-sm tracking-wider block leading-none"
                style={{
                  background: 'linear-gradient(135deg, #F26818, #C94E05)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                TRAIN 2 INFINITY
              </span>
              <span className="text-[9px] font-accent tracking-[0.25em] uppercase" style={{ color: 'rgba(255,255,255,0.35)' }}>
                Premium Fitness
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `
                  relative px-4 py-2 text-[11px] font-accent font-medium tracking-[0.15em] uppercase
                  transition-colors duration-200 rounded-md
                  ${isActive
                    ? 'text-[#F26818]'
                    : 'text-white/60 hover:text-white/90'
                  }
                `}
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.span
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                        layoutId="navIndicator"
                        style={{ background: '#F26818', boxShadow: '0 0 6px #F26818' }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme toggle */}
            {/* <button
              onClick={toggleTheme}
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {theme === 'dark'
                ? <Sun size={14} color="rgba(255,255,255,0.6)" />
                : <Moon size={14} color="rgba(255,255,255,0.6)" />
              }
            </button> */}

            <Button to="/contact" variant="primary" size="sm">
              Join Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg transition-all"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
            onClick={toggleMobileMenu}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen
                ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X size={18} color="#fff" />
                  </motion.div>
                : <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu size={18} color="#fff" />
                  </motion.div>
              }
            </AnimatePresence>
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[99] lg:hidden flex flex-col pt-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            style={{
              background: 'rgba(2,4,8,0.97)',
              backdropFilter: 'blur(30px)',
            }}
          >
            <div className="flex flex-col items-center justify-center flex-1 gap-2 px-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className="w-full"
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => `
                      block w-full py-4 px-6 text-lg font-display font-semibold tracking-wider text-center
                      rounded-xl transition-all duration-200
                      ${isActive
                        ? 'text-[#F26818] bg-[rgba(0,212,255,0.08)] border border-[rgba(0,212,255,0.2)]'
                        : 'text-white/70 hover:text-white hover:bg-white/05'
                      }
                    `}
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}

              <motion.div
                className="w-full mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.07 + 0.1 }}
              >
                <Button to="/contact" variant="primary" size="lg" className="w-full justify-center">
                  Join Now — Free Trial
                </Button>
              </motion.div>
            </div>

            {/* Bottom info */}
            <div className="pb-8 text-center">
              <p className="text-[11px] font-accent" style={{ color: 'rgba(255,255,255,0.3)' }}>
                +91 85969 99000 · Mon-Sat 5AM–10PM
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
