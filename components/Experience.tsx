import React from 'react';
import SectionWrapper from './SectionWrapper';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <SectionWrapper id="experience">
      <h2 className="text-3xl font-bold text-black dark:text-white mb-12 flex items-center gap-4">
        <span className="text-gray-600 dark:text-gray-400 text-xl font-mono">02.</span> Experience
        <span className="h-px bg-gray-300 dark:bg-gray-700 flex-grow max-w-[200px]"></span>
      </h2>

      <div className="relative border-l border-gray-300 dark:border-gray-700 ml-3 md:ml-6 space-y-12">
        {EXPERIENCES.map((exp) => (
          <div key={exp.id} className="relative pl-8 md:pl-12">
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-black dark:bg-white ring-4 ring-white dark:ring-black" />
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <h3 className="text-xl font-semibold text-black dark:text-white">{exp.role}</h3>
              <span className="text-sm font-mono text-gray-600 dark:text-gray-400">{exp.period}</span>
            </div>
            
            <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-4 font-medium">{exp.company}</h4>
            
            <ul className="space-y-2 mb-6">
              {exp.description.map((item, idx) => (
                <li key={idx} className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex items-start gap-2">
                  <span className="text-black dark:text-white mt-1.5">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.technologies?.map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs font-medium text-black dark:text-white bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Experience;