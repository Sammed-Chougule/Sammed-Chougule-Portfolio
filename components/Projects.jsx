import React, { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { PROJECTS, TECH_ICONS } from "../constants";

const Projects = () => {
  const [imageLoadFailed, setImageLoadFailed] = useState({});

  return (
    <SectionWrapper id="projects">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Projects</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Some things I've built while exploring, learning, and shipping.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id || index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
          >
            {project.image && !imageLoadFailed[project.id] ? (
              <div className="w-full h-44 bg-slate-100 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={() =>
                    setImageLoadFailed((prev) => ({
                      ...prev,
                      [project.id]: true,
                    }))
                  }
                />
              </div>
            ) : (
              <div className="w-full h-44 flex items-center justify-center text-center bg-slate-100">
                <p className="text-sm font-medium text-slate-500">{project.title}</p>
              </div>
            )}

            <div className="flex flex-col flex-grow p-5">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{project.title}</h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-x-3 gap-y-2 mb-5">
                {project.technologies?.map((tech) => (
                  <span key={tech} className="flex items-center gap-1.5 text-xs text-slate-500">
                    {TECH_ICONS[tech] && (
                      <img src={TECH_ICONS[tech]} alt={tech} className="w-4 h-4 object-contain" />
                    )}
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 items-center pt-3 border-t border-slate-100">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-1.5 text-sm"
                  >
                    <Github size={15} />
                    <span>Code</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-1.5 text-sm"
                  >
                    <ExternalLink size={15} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
