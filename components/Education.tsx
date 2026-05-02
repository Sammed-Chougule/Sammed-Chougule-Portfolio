import React from 'react';
import SectionWrapper from './SectionWrapper';
import { EDUCATION_CONTENT } from '../constants';
import { GraduationCap, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Education: React.FC = () => {
  return (
    <SectionWrapper id="education">
      <h2 className="text-3xl font-bold text-slate-900 mb-12 flex items-center gap-4">
        <span className="text-blue-600 text-xl font-mono">04.</span> Education
        <span className="h-px bg-slate-300 flex-grow max-w-[200px]"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {EDUCATION_CONTENT.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 bg-white rounded-2xl border border-blue-100 hover:border-blue-300 hover:-translate-y-1 transition-all shadow-sm"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                <GraduationCap size={24} />
              </div>
              <span className="text-sm font-mono text-slate-500">{edu.period}</span>
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 mb-2">{edu.school}</h3>
            <p className="text-lg text-blue-700 mb-2">{edu.degree}</p>
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