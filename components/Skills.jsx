import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { SKILLS } from '../constants';

const Skills = () => {
  return (
    <SectionWrapper id="skills" className="bg-transparent">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black uppercase text-black mb-3">Tech Stack</h2>
        <span className="inline-block h-1.5 w-24 bg-black mb-4" />
        <p className="text-slate-700 max-w-2xl mx-auto font-medium">
          Technologies and tools I work with to bring ideas to life.
        </p>
      </div>

      <div className="space-y-10">
        {SKILLS.map((category) => (
          <div key={category.category}>
            <h3 className="inline-block text-sm font-black uppercase tracking-widest text-black border-2 border-black px-3 py-1 shadow-[3px_3px_0_#000] mb-6">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-5">
              {category.items.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -3 }}
                  className="brutal-chip px-4 py-2 text-sm cursor-default"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-6 h-6 object-contain"
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
