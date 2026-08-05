import React from 'react';
import { motion } from 'framer-motion';


const SectionHeader = ({ index, title, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45 }}
      className={`group mb-8 flex items-center gap-4 ${className}`}
    >
      <motion.span
        whileHover={{ scale: 1.06 }}
        className="rounded-md border border-slate-300/70 bg-white/70 backdrop-blur-sm px-2.5 py-1 text-sm font-mono font-semibold text-slate-700 shadow-sm transition-colors group-hover:border-slate-500"
      >
        {index}
      </motion.span>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 transition-all duration-300 group-hover:tracking-normal group-hover:text-black">
        {title}
      </h2>
      <div className="relative h-px flex-grow max-w-[220px] bg-slate-300">
        <motion.span
          className="absolute inset-y-0 left-0 bg-slate-700"
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
};

export default SectionHeader;
