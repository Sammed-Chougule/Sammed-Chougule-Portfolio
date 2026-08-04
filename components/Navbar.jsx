import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar = ({ backgroundMode, setBackgroundMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Monitor scrolling events to adapt navbar glass style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown instantly if user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const headerOffset = 96; // Rounded sticky header + top spacing
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Human-readable labels mapping to mode keys
  const modes = [
    { value: 'ripple', label: 'Ripple' },
    { value: 'webcam', label: 'Pixel' }
  ];

  const currentLabel = modes.find(m => m.value === backgroundMode)?.label || 'Ripple';

  return (
    <nav data-disable-ripple="true" className="fixed top-4 left-0 right-0 z-50 px-4">
      <div className="mx-auto max-w-6xl">
        <div
          className={`relative flex items-center justify-between h-16 rounded-2xl border px-4 md:px-6 transition-all duration-300 ${isScrolled
              ? 'bg-white/95 border-slate-300 shadow-lg backdrop-blur-md'
              : 'bg-white/90 border-slate-200 shadow-md backdrop-blur-sm'
            }`}
        >
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => handleNavClick(e, '#')}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-block cursor-pointer"
          >
            <img
              src="/sc-logo.png"
              alt="SC Logo"
              className="h-8 w-auto object-contain"
            />
          </motion.a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
            {NAV_ITEMS.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors cursor-pointer px-1"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Controls: Styled Mode Selector & Mobile Trigger */}
          <div className="ml-auto flex items-center gap-2">

            {/* Custom Animated UI Dropdown Selector */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100/80 px-3.5 py-1.5 text-sm text-slate-700 transition-all hover:bg-slate-200/60 active:scale-95 cursor-pointer font-medium"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 select-none">
                  BG:
                </span>
                <span>{currentLabel}</span>
                <ChevronDown
                  size={14}
                  className={`text-slate-500 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className="absolute right-0 mt-2 w-32 origin-top-right overflow-hidden rounded-xl border border-slate-200/80 bg-white/95 p-1 shadow-xl backdrop-blur-md z-50"
                  >
                    {modes.map((mode) => (
                      <button
                        key={mode.value}
                        onClick={() => {
                          setBackgroundMode(mode.value);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer block ${backgroundMode === mode.value
                            ? 'bg-slate-900 text-white'
                            : 'text-slate-700 hover:bg-slate-100'
                          }`}
                      >
                        {mode.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Nav Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-700 hover:text-slate-900 p-1.5 rounded-lg hover:bg-slate-100/50 transition-colors"
                aria-label="Toggle structural layout navigation"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md"
          >
            <div className="flex flex-col items-center px-6 py-4 space-y-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-slate-700 hover:text-slate-900 text-lg font-medium cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;