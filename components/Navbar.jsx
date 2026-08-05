import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scrolling events to adapt navbar glass style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  return (
    <nav data-disable-ripple="true" className="fixed top-4 left-0 right-0 z-50 px-4">
      <div className="mx-auto max-w-6xl">
        <div
          className={`relative flex items-center justify-between h-16 border-[3px] border-black bg-white px-4 md:px-6 transition-all duration-300 ${isScrolled
              ? 'shadow-[8px_8px_0_#000]'
              : 'shadow-[5px_5px_0_#000]'
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
                className="text-sm font-bold uppercase tracking-wide text-slate-800 hover:text-black transition-colors cursor-pointer px-1"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Controls: Mobile Trigger only */}
          <div className="ml-auto flex items-center gap-2">
            {/* Mobile Nav Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-800 hover:text-black p-1.5 rounded-lg hover:bg-slate-100/50 transition-colors"
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
            className="md:hidden mx-auto mt-2 max-w-6xl border-[3px] border-black bg-white shadow-[5px_5px_0_#000]"
          >
            <div className="flex flex-col items-center px-6 py-4 space-y-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-slate-800 hover:text-black text-lg font-bold uppercase cursor-pointer"
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