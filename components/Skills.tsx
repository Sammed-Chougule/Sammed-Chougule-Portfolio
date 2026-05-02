import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <SectionWrapper id="skills" className="bg-gradient-to-b from-white to-blue-50/60">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Tech Stack</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Technologies and tools I work with to bring ideas to life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SKILLS.map((category) => (
          <div key={category.category} className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-blue-700 mb-6 border-b border-blue-100 pb-2 inline-block">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.items.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="group relative px-3 py-2 bg-slate-50 rounded-lg text-slate-700 text-sm font-medium border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all cursor-default flex items-center overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-0 group-hover:gap-2 transition-all duration-300">
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="w-0 opacity-0 group-hover:w-5 group-hover:h-5 group-hover:opacity-100 transition-all duration-300 object-contain"
                    />
                    <span>{skill.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;