import React from 'react';
import SectionWrapper from './SectionWrapper';
import { ABOUT_CONTENT } from '../constants';

const About: React.FC = () => {
  return (
    <SectionWrapper id="about">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-6 flex items-center gap-4">
            <span className="text-gray-600 dark:text-gray-400 text-xl font-mono">01.</span> About Me
            <span className="h-px bg-gray-300 dark:bg-gray-700 flex-grow max-w-[200px]"></span>
          </h2>
          <div className="text-gray-600 dark:text-gray-400 space-y-4 leading-relaxed whitespace-pre-line">
            {ABOUT_CONTENT.description}
          </div>
          
          <div className="grid grid-cols-3 gap-4 mt-8">
            {ABOUT_CONTENT.stats.map((stat, idx) => (
              <div key={idx} className="p-4 bg-gray-100 dark:bg-gray-900 rounded-lg border border-gray-300 dark:border-gray-700">
                <p className="text-2xl font-bold text-black dark:text-white">{stat.value}</p>
                <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative group">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
             {/* Decorative Border */}
            <div className="absolute inset-0 border-2 border-black dark:border-white rounded-xl translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
            {/* Image Container */}
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-300">
              <img 
                src="/sammed-dev-pf.jpeg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 dark:bg-white/20 mix-blend-multiply dark:mix-blend-screen hover:bg-transparent transition-all"></div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;