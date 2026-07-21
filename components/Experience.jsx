import React from 'react';
import SectionWrapper from './SectionWrapper';
import { EXPERIENCES } from '../constants';
import SectionHeader from './SectionHeader';

const Experience = () => {
  return (
    <SectionWrapper id="experience">
      <SectionHeader index="02." title="Experience" />

      <div className="relative border-l border-slate-300 ml-3 md:ml-6 space-y-12">
        {EXPERIENCES.map((exp) => (
          <div key={exp.id} className="relative pl-8 md:pl-12 p-5 bg-white/70 backdrop-blur-sm border border-slate-200/70 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-7 w-2.5 h-2.5 rounded-full bg-slate-700 ring-4 ring-slate-100" />
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <h3 className="text-xl font-semibold text-slate-900">{exp.role}</h3>
              <span className="text-sm font-mono text-slate-700">{exp.period}</span>
            </div>
            
            <h4 className="text-lg text-slate-700 mb-4 font-medium">{exp.company}</h4>
            
            <ul className="space-y-2 mb-6">
              {exp.description.map((item, idx) => (
                <li key={idx} className="text-slate-600 text-sm leading-relaxed flex items-start gap-2">
                  <span className="text-slate-700 mt-1.5">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.technologies?.map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs font-medium text-slate-700 bg-slate-200 rounded-full">
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