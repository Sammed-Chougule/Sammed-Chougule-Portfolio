import React from 'react';
import { Github, ExternalLink, Folder } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <SectionWrapper id="projects">
      <h2 className="text-3xl font-bold text-black dark:text-white mb-12 flex items-center gap-4">
        <span className="text-gray-600 dark:text-gray-400 text-xl font-mono">03.</span> Some Things I've Built
        <span className="h-px bg-gray-300 dark:bg-gray-700 flex-grow max-w-[200px]"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-colors flex flex-col h-full"
          >
            {/* Project Image Preview */}
            {project.image && (
              <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-black">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 dark:from-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            )}
            
            {/* Header/Icons */}
            <div className="p-6 flex justify-between items-start">
              <Folder size={40} className="text-black dark:text-white" />
              <div className="flex gap-4">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="px-6 pb-6 flex-grow flex flex-col">
              <h3 className="text-xl font-bold text-black dark:text-white mb-3 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              
              {/* Footer/Tags */}
              <div className="flex flex-wrap gap-x-4 gap-y-2 mt-auto">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs font-mono text-gray-500 dark:text-gray-500">
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
            className="inline-block px-6 py-3 border border-black dark:border-white text-black dark:text-white rounded hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors font-mono text-sm"
        >
            Show More on GitHub
        </a>
      </div>
    </SectionWrapper>
  );
};

export default Projects;