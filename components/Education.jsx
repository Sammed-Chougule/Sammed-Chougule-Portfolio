import React from 'react';
import SectionWrapper from './SectionWrapper';
import { EDUCATION_CONTENT } from '../constants';
import { GraduationCap, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <SectionWrapper id="education">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Education</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          My academic background and qualifications.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {EDUCATION_CONTENT.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-4 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-slate-200/70 hover:border-slate-400/70 transition-all shadow-sm"
          >
            <div className="flex items-center justify-between gap-4 w-full">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-slate-200 rounded-lg text-slate-700 shrink-0">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">{edu.school}</h3>
                  <div className="flex items-center gap-1.5 text-slate-600 text-xs mt-1">
                    <Award size={13} />
                    <span>{edu.score}</span>
                  </div>
                </div>
              </div>
              <div className="text-right shrink-0">
                <p className="text-sm text-slate-800">{edu.degree}</p>
                <span className="text-xs font-mono text-slate-500 block mt-1">{edu.period}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Education;