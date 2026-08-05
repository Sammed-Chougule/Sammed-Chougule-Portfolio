import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { SKILLS } from '../constants';

const Skills = () => {
  return (
    <SectionWrapper id="skills" className="bg-transparent">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Tech Stack</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Technologies and tools I work with to bring ideas to life.
        </p>
      </div>

      <div className="space-y-10">
        {SKILLS.map((category) => (
          <div key={category.category}>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-4">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-4">
              {category.items.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-xl border border-slate-200/70 shadow-md text-slate-700 text-sm font-medium transition-colors hover:border-slate-400 hover:shadow-lg cursor-default"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-7 h-7 object-contain"
                  />
                  <span>{skill.name}</span>
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
