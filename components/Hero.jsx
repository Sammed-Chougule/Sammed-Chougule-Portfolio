import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { HERO_CONTENT, SOCIAL_LINKS } from '../constants';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-slate-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-200/40 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-12">
          <div className="flex flex-col items-start max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-slate-700 font-semibold mb-4 tracking-wide"
            >
              {HERO_CONTENT.greeting}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight"
            >
              {HERO_CONTENT.name}.
              <br />
              <span className="text-slate-600">{HERO_CONTENT.role}.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed"
            >
              {HERO_CONTENT.description.map((part, idx) =>
                part.highlight ? (
                  <span key={idx} className="font-semibold text-slate-900">
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
              className="flex flex-wrap gap-4"
            >
              <a
                href={HERO_CONTENT.resumeLink}
                className="px-8 py-3 bg-white border border-[#f43f5e] text-[#f43f5e] font-medium rounded-xl hover:bg-[#f43f5e] hover:text-white transition-all flex items-center gap-2"
              >
                Resume
                <Download size={18} />
              </a>
              {SOCIAL_LINKS.filter((link) => link.platform === 'GitHub' || link.platform === 'LinkedIn').map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-2 border bg-white ${link.platform === 'LinkedIn'
                      ? 'border-[#0A66C2] text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white'
                      : 'border-[#171515] text-[#171515] hover:bg-[#171515] hover:text-white'
                    }`}
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
              <div className="absolute inset-0 border-2 border-slate-400 rounded-2xl translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
              <div className="absolute inset-0 bg-slate-200 rounded-2xl overflow-hidden shadow-lg">
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
