import React from 'react';
import SectionWrapper from './SectionWrapper';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <SectionWrapper id="skills" className="bg-slate-900/50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-100 mb-4">Tech Stack</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Technologies and tools I work with to bring ideas to life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SKILLS.map((category) => (
          <div key={category.category} className="bg-slate-800/30 p-6 rounded-xl border border-slate-800">
            <h3 className="text-xl font-semibold text-blue-400 mb-6 border-b border-slate-800 pb-2 inline-block">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.items.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-2 bg-slate-900 rounded text-slate-300 text-sm hover:text-white hover:bg-slate-800 transition-colors cursor-default border border-slate-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;