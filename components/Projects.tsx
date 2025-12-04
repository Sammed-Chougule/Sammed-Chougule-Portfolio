import React from 'react';
import { Github, ExternalLink, Folder } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <SectionWrapper id="projects">
      <h2 className="text-3xl font-bold text-slate-100 mb-12 flex items-center gap-4">
        <span className="text-blue-400 text-xl font-mono">03.</span> Some Things I've Built
        <span className="h-px bg-slate-800 flex-grow max-w-[200px]"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="group bg-slate-800/50 rounded-xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-colors flex flex-col h-full"
          >
            {/* Header/Icons */}
            <div className="p-6 flex justify-between items-start">
              <Folder size={40} className="text-blue-400" />
              <div className="flex gap-4">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="px-6 pb-6 flex-grow flex flex-col">
              <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              
              {/* Footer/Tags */}
              <div className="flex flex-wrap gap-x-4 gap-y-2 mt-auto">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs font-mono text-slate-500">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <a 
            href="https://github.com/sammed-chougule" 
            target="_blank" 
            rel="noreferrer"
            className="inline-block px-6 py-3 border border-blue-400 text-blue-400 rounded hover:bg-blue-400/10 transition-colors font-mono text-sm"
        >
            Show More on GitHub
        </a>
      </div>
    </SectionWrapper>
  );
};

export default Projects;