import React from 'react';
import SectionWrapper from './SectionWrapper';
import { EDUCATION_CONTENT } from '../constants';
import { GraduationCap, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const Education = () => {
  return (
    <SectionWrapper id="education">
      <SectionHeader index="04." title="Education" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {EDUCATION_CONTENT.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200/70 hover:border-slate-400/70 hover:-translate-y-1 transition-all shadow-md"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-slate-200 rounded-lg text-slate-700">
                <GraduationCap size={24} />
              </div>
              <span className="text-sm font-mono text-slate-500">{edu.period}</span>
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 mb-2">{edu.school}</h3>
            <p className="text-lg text-slate-800 mb-2">{edu.degree}</p>
            <div className="flex items-center gap-2 text-slate-600 text-sm">
                <Award size={16} />
                <span>{edu.score}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Education;