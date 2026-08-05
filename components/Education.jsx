import React from 'react';
import SectionWrapper from './SectionWrapper';
import { EDUCATION_CONTENT } from '../constants';
import { GraduationCap, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <SectionWrapper id="education">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black uppercase text-black mb-3">Education</h2>
        <span className="inline-block h-1.5 w-24 bg-black mb-4" />
        <p className="text-slate-700 max-w-2xl mx-auto font-medium">
          My academic background and qualifications.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5">
        {EDUCATION_CONTENT.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="brutal-card flex items-center gap-4 p-4"
          >
            <div className="flex items-center justify-between gap-4 w-full">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-black text-white shrink-0">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h3 className="text-base font-black uppercase text-black">{edu.school}</h3>
                  <div className="flex items-center gap-1.5 text-slate-700 text-xs font-bold mt-1">
                    <Award size={13} />
                    <span>{edu.score}</span>
                  </div>
                </div>
              </div>
              <div className="text-right shrink-0">
                <p className="text-sm font-bold text-black uppercase">{edu.degree}</p>
                <span className="text-xs font-bold text-slate-600 block mt-1">{edu.period}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Education;
