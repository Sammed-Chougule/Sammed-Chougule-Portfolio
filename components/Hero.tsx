import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { HERO_CONTENT } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        <div className="flex flex-col items-start max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-blue-400 font-medium mb-4 tracking-wide"
          >
            {HERO_CONTENT.greeting}
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-slate-100 mb-6 tracking-tight"
          >
            {HERO_CONTENT.name}.
            <br />
            <span className="text-slate-400">{HERO_CONTENT.role}.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed"
          >
            {HERO_CONTENT.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group px-8 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-all flex items-center gap-2"
            >
              Check out my work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={HERO_CONTENT.resumeLink}
              download="sammed-dev-resume.pdf"
              className="px-8 py-3 bg-transparent border border-slate-700 text-slate-300 font-medium rounded-lg hover:border-blue-400 hover:text-blue-400 transition-all flex items-center gap-2"
            >
              Resume
              <Download size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;