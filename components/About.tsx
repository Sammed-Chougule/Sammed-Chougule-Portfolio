import React from 'react';
import SectionWrapper from './SectionWrapper';
import { ABOUT_CONTENT } from '../constants';

const About: React.FC = () => {
  return (
    <SectionWrapper id="about">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-slate-100 mb-6 flex items-center gap-4">
            <span className="text-blue-400 text-xl font-mono">01.</span> About Me
            <span className="h-px bg-slate-800 flex-grow max-w-[200px]"></span>
          </h2>
          <div className="text-slate-400 space-y-4 leading-relaxed whitespace-pre-line">
            {ABOUT_CONTENT.description}
          </div>
          
          <div className="grid grid-cols-3 gap-4 mt-8">
            {ABOUT_CONTENT.stats.map((stat, idx) => (
              <div key={idx} className="p-4 bg-slate-800/50 rounded-lg border border-slate-800">
                <p className="text-2xl font-bold text-blue-400">{stat.value}</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative group">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
             {/* Decorative Border */}
            <div className="absolute inset-0 border-2 border-blue-400 rounded-xl translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
            {/* Image Container */}
            <div className="absolute inset-0 bg-slate-800 rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-300">
              <img 
                src="/sammed-dev-pf.jpeg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-500/20 mix-blend-multiply hover:bg-transparent transition-all"></div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;