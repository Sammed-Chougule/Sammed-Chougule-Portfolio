import React from 'react';
import SectionWrapper from './SectionWrapper';
import { EDUCATION_CONTENT } from '../constants';
import { GraduationCap, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Education: React.FC = () => {
  return (
    <SectionWrapper id="education">
      <h2 className="text-3xl font-bold text-black dark:text-white mb-12 flex items-center gap-4">
        <span className="text-gray-600 dark:text-gray-400 text-xl font-mono">04.</span> Education
        <span className="h-px bg-gray-300 dark:bg-gray-700 flex-grow max-w-[200px]"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {EDUCATION_CONTENT.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-black dark:text-white">
                <GraduationCap size={24} />
              </div>
              <span className="text-sm font-mono text-gray-500 dark:text-gray-500">{edu.period}</span>
            </div>
            
            <h3 className="text-xl font-bold text-black dark:text-white mb-2">{edu.school}</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">{edu.degree}</p>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
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