import React, { useState } from 'react';
import { Github, ExternalLink, Folder } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  const [imageLoadFailed, setImageLoadFailed] = useState<Record<string, boolean>>({});

  return (
    <SectionWrapper id="projects">
      <h2 className="text-3xl font-bold text-slate-900 mb-12 flex items-center gap-4">
        <span className="text-blue-600 text-xl font-mono">03.</span> Some Things I've Built
        <span className="h-px bg-slate-300 flex-grow max-w-[200px]"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="group bg-white rounded-2xl overflow-hidden border border-blue-100 hover:border-blue-200 transition-colors flex flex-col h-full shadow-sm hover:shadow-lg"
          >
            {/* Project Image Preview */}
            {project.image && !imageLoadFailed[project.id] ? (
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  onError={() =>
                    setImageLoadFailed((prev) => ({
                      ...prev,
                      [project.id]: true,
                    }))
                  }
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ) : (
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-sky-100 border-b border-blue-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-4">
                    <p className="text-sm font-semibold text-blue-700">Preview unavailable</p>
                    <p className="text-xs text-slate-500 mt-1">{project.title}</p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Header/Icons */}
            <div className="p-6 flex justify-between items-start">
              <Folder size={40} className="text-blue-600" />
              <div className="flex gap-4">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-700 transition-colors">
                    <Github size={20} />
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-700 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="px-6 pb-6 flex-grow flex flex-col">
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              
              {/* Footer/Tags */}
              <div className="flex flex-wrap gap-x-4 gap-y-2 mt-auto">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs font-mono text-slate-500 bg-blue-50 px-2 py-1 rounded">
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
            className="inline-block px-6 py-3 border border-blue-300 text-blue-700 rounded-lg hover:bg-blue-50 transition-colors font-mono text-sm"
        >
            Show More on GitHub
        </a>
      </div>
    </SectionWrapper>
  );
};

export default Projects;