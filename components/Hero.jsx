import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { HERO_CONTENT, SOCIAL_LINKS } from '../constants';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-12">
          <div className="flex flex-col items-start max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg font-black uppercase tracking-widest text-black mb-4 border-2 border-black px-3 py-1 shadow-[4px_4px_0_#000]"
            >
              {HERO_CONTENT.greeting}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-black text-black uppercase mb-6 tracking-tight"
            >
              {HERO_CONTENT.name}
              <br />
              <span className="text-black">{HERO_CONTENT.role}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-slate-800 mb-10 max-w-2xl leading-relaxed"
            >
              {HERO_CONTENT.description.map((part, idx) =>
                part.highlight ? (
                  <span key={idx} className="font-black text-black bg-yellow-300 px-1">
                    {part.text}
                  </span>
                ) : (
                  <span key={idx}>{part.text}</span>
                )
              )}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-6"
            >
              <a href={HERO_CONTENT.resumeLink} className="brutal-btn brutal-btn--resume px-8 py-3 text-sm">
                <Download size={18} />
                Resume
              </a>
              {SOCIAL_LINKS.filter((link) => link.platform === 'GitHub' || link.platform === 'LinkedIn').map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`brutal-btn ${link.platform === 'LinkedIn' ? 'brutal-btn--linkedin' : 'brutal-btn--github'} px-6 py-3 text-sm`}
                >
                  <link.icon size={18} />
                  <span>{link.platform}</span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5, ease: 'easeOut' }}
            className="hidden md:flex justify-center md:justify-end shrink-0"
          >
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 group">
              <div className="absolute inset-0 border-[4px] border-black shadow-[10px_10px_0_#000] group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>
              <div className="absolute inset-0 bg-slate-200 border-[3px] border-black overflow-hidden">
                <img
                  src="/sammed-dev-pf.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover grayscale-0 group-hover:grayscale transition-all duration-300"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
