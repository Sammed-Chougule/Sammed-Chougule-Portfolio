import React from 'react';
import SectionWrapper from './SectionWrapper';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <SectionWrapper id="experience">
      <h2 className="text-3xl font-bold text-slate-900 mb-12 flex items-center gap-4">
        <span className="text-blue-600 text-xl font-mono">02.</span> Experience
        <span className="h-px bg-slate-300 flex-grow max-w-[200px]"></span>
      </h2>

      <div className="relative border-l border-blue-200 ml-3 md:ml-6 space-y-12">
        {EXPERIENCES.map((exp) => (
          <div key={exp.id} className="relative pl-8 md:pl-12 p-5 bg-white border border-blue-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-7 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-blue-50" />
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <h3 className="text-xl font-semibold text-slate-900">{exp.role}</h3>
              <span className="text-sm font-mono text-blue-700">{exp.period}</span>
            </div>
            
            <h4 className="text-lg text-slate-700 mb-4 font-medium">{exp.company}</h4>
            
            <ul className="space-y-2 mb-6">
              {exp.description.map((item, idx) => (
                <li key={idx} className="text-slate-600 text-sm leading-relaxed flex items-start gap-2">
                  <span className="text-blue-600 mt-1.5">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.technologies?.map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">
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