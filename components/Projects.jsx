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
        <h2 className="text-4xl font-black uppercase text-black mb-3">Projects</h2>
        <span className="inline-block h-1.5 w-24 bg-black mb-4" />
        <p className="text-slate-700 max-w-2xl mx-auto font-medium">
          Some things I've built while exploring, learning, and shipping.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id || index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="brutal-card flex flex-col overflow-hidden"
          >
            {project.image && !imageLoadFailed[project.id] ? (
              <div className="w-full h-44 bg-slate-100 overflow-hidden border-b-[3px] border-black">
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
              <div className="w-full h-44 flex items-center justify-center text-center bg-slate-100 border-b-[3px] border-black">
                <p className="text-sm font-bold text-slate-700">{project.title}</p>
              </div>
            )}

            <div className="flex flex-col flex-grow p-5">
              <h3 className="text-lg font-black uppercase text-black mb-2">{project.title}</h3>

              <p className="text-sm text-slate-800 font-medium leading-relaxed mb-5 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.technologies?.map((tech) => (
                  <span key={tech} className="brutal-chip">
                    {TECH_ICONS[tech] && (
                      <img src={TECH_ICONS[tech]} alt={tech} className="w-4 h-4 object-contain" />
                    )}
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 items-center pt-3 border-t-2 border-black">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-700 hover:text-black transition-colors flex items-center gap-1.5 text-sm font-bold uppercase"
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
                    className="text-slate-700 hover:text-black transition-colors flex items-center gap-1.5 text-sm font-bold uppercase"
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
