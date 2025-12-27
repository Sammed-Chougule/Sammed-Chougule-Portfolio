import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <SectionWrapper id="skills" className="bg-gray-50 dark:bg-gray-950">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Tech Stack</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Technologies and tools I work with to bring ideas to life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SKILLS.map((category) => (
          <div key={category.category} className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-semibold text-black dark:text-white mb-6 border-b border-gray-300 dark:border-gray-700 pb-2 inline-block">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.items.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="group relative px-3 py-2 bg-gray-100 dark:bg-black rounded text-black dark:text-white text-sm font-medium border border-gray-300 dark:border-gray-700 hover:border-black dark:hover:border-white hover:bg-gray-200 dark:hover:bg-gray-800 transition-all cursor-default flex items-center overflow-hidden"
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