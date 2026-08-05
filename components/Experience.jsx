import React from 'react';
import SectionWrapper from './SectionWrapper';
import { EXPERIENCES, TECH_ICONS } from '../constants';

const TechChips = ({ technologies }) => (
  <div className="flex flex-wrap gap-2">
    {technologies?.map((tech) => (
      <span key={tech} className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-slate-700 bg-slate-200 rounded-full">
        {TECH_ICONS[tech] && (
          <img src={TECH_ICONS[tech]} alt={tech} className="w-4 h-4 object-contain" />
        )}
        {tech}
      </span>
    ))}
  </div>
);

const renderHighlighted = (text) => {
  const [heading, ...rest] = text.split(':');
  const body = rest.join(':');
  return (
    <>
      {heading && (
        <span className="font-semibold text-slate-900">{heading}</span>
      )}
      {body && <span>{`:${body}`}</span>}
    </>
  );
};

const BulletList = ({ items }) => (
  <ul className="space-y-2 mb-6">
    {items.map((item, idx) => (
      <li key={idx} className="text-slate-600 text-sm leading-relaxed flex items-start gap-2">
        <span className="text-slate-700 mt-1.5">▹</span>
        <span>{renderHighlighted(item)}</span>
      </li>
    ))}
  </ul>
);

const Experience = () => {
  return (
    <SectionWrapper id="experience">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Experience</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          My professional journey building scalable, enterprise-grade software.
        </p>
      </div>

      <div className="space-y-6">
        {EXPERIENCES.map((exp) => (
          <div key={exp.id} className="p-6 bg-white/70 backdrop-blur-sm border border-slate-200/70 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
              <h3 className="text-xl font-semibold text-slate-900">{exp.role}</h3>
              <span className="text-sm font-mono text-slate-700">{exp.period}</span>
            </div>

            <h4 className="text-lg text-slate-700 mb-4 font-medium">
              {exp.company}
              {exp.location && <span className="text-sm font-normal text-slate-500"> · {exp.location}</span>}
            </h4>

            {exp.projects ? (
              <div className="space-y-6">
                {exp.projects.map((project) => (
                  <div key={project.name}>
                    <h5 className="text-base font-semibold text-slate-800 mb-3">{project.name}</h5>
                    <BulletList items={project.description} />
                    <TechChips technologies={project.technologies} />
                  </div>
                ))}
              </div>
            ) : (
              <>
                <BulletList items={exp.description} />
                <TechChips technologies={exp.technologies} />
              </>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Experience;
