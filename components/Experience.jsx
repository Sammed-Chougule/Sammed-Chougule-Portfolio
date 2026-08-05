import React from 'react';
import SectionWrapper from './SectionWrapper';
import { EXPERIENCES, TECH_ICONS } from '../constants';

const TechChips = ({ technologies }) => (
  <div className="flex flex-wrap gap-3">
    {technologies?.map((tech) => (
      <span key={tech} className="brutal-chip">
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
        <span className="font-black text-black">{heading}</span>
      )}
      {body && <span>{`:${body}`}</span>}
    </>
  );
};

const BulletList = ({ items }) => (
  <ul className="space-y-2 mb-6">
    {items.map((item, idx) => (
      <li key={idx} className="text-slate-800 text-sm leading-relaxed flex items-start gap-2">
        <span className="text-black mt-1.5">▹</span>
        <span>{renderHighlighted(item)}</span>
      </li>
    ))}
  </ul>
);

const Experience = () => {
  return (
    <SectionWrapper id="experience">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black uppercase text-black mb-3">Experience</h2>
        <span className="inline-block h-1.5 w-24 bg-black mb-4" />
        <p className="text-slate-700 max-w-2xl mx-auto font-medium">
          My professional journey building scalable, enterprise-grade software.
        </p>
      </div>

      <div className="space-y-8">
        {EXPERIENCES.map((exp) => (
          <div key={exp.id} className="brutal-card p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
              <h3 className="text-xl font-black uppercase text-black">{exp.role}</h3>
              <span className="text-sm font-bold text-slate-700">{exp.period}</span>
            </div>

            <h4 className="text-lg text-slate-800 mb-4 font-bold border-b-2 border-black pb-2">
              {exp.company}
              {exp.location && <span className="text-sm font-medium text-slate-600"> · {exp.location}</span>}
            </h4>

            {exp.projects ? (
              <div className="space-y-6">
                {exp.projects.map((project) => (
                  <div key={project.name}>
                    <h5 className="inline-block text-base font-black uppercase text-black border-2 border-black px-2 py-0.5 shadow-[3px_3px_0_#000] mb-3">
                      {project.name}
                    </h5>
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
