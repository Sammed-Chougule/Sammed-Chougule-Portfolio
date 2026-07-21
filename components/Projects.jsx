import React, { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { PROJECTS } from "../constants";
import SectionHeader from "./SectionHeader";

const Projects = () => {
  const [imageLoadFailed, setImageLoadFailed] = useState({});
  // Track which project is currently active
  const [activeProjectId, setActiveProjectId] = useState(
    PROJECTS[0]?.id || null,
  );

  // Find the full data object for the currently active/hovered project
  const activeProject =
    PROJECTS.find((p) => p.id === activeProjectId) || PROJECTS[0];

  return (
    <SectionWrapper id="projects">
      <SectionHeader index="03." title="Some Things I've Built" />

      {/* Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative min-h-[520px]">
        {/* LEFT SIDE: Shrunk down to 5 columns wide to perfectly balance the layout */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {PROJECTS.map((project) => {
            const isActive = activeProjectId === project.id;

            return (
              <motion.div
                key={project.id}
                onMouseEnter={() => setActiveProjectId(project.id)}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className={`group p-5 rounded-xl border border-slate-200/70 flex items-center justify-between cursor-pointer transition-all duration-200 backdrop-blur-sm ${
                  isActive
                    ? "bg-white/80 shadow-md shadow-slate-200"
                    : "bg-white/60 shadow-sm hover:shadow-md hover:bg-white/75"
                }`}
              >
                {/* Headline & Technology Tags */}
                <div className="flex-grow pr-4">
                  <h3
                    className={`text-base font-bold transition-colors duration-200 ${
                      isActive
                        ? "text-slate-900"
                        : "text-slate-700 group-hover:text-slate-900"
                    }`}
                  >
                    {project.title}
                  </h3>

                  <div className="flex gap-2 mt-1.5 flex-wrap">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono text-slate-400 bg-slate-100/60 px-1.5 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Redirection Links */}
                <div className="flex gap-3 items-center opacity-70 group-hover:opacity-100 transition-opacity">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-500 hover:text-slate-900 transition-colors p-1.5 hover:bg-slate-200/50 rounded-lg"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-500 hover:text-slate-900 transition-colors p-1.5 hover:bg-slate-200/50 rounded-lg"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}

          {/* Minimal Solid Black GitHub CTA Button */}
          <div className="mt-4">
            <a
              href="https://github.com/sammed-chougule"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 px-6 py-3 rounded-lg bg-slate-900 text-white hover:bg-black transition-all shadow-sm hover:shadow-md hover:shadow-slate-400/20 font-mono text-sm group/btn"
            >
              <Github
                size={16}
                className="text-slate-300 group-hover/btn:text-white transition-colors"
              />
              <span>More on GitHub</span>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: Expanded to 7 columns to give your tall project previews breathing room */}
        <div className="hidden lg:block lg:col-span-7 lg:sticky lg:top-24">
          <AnimatePresence mode="wait">
            {activeProject && (
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-200/70 shadow-xl flex flex-col h-full"
              >
                {/* Project Image Preview - Unified to standard arbitrary height values */}
                {activeProject.image && !imageLoadFailed[activeProject.id] ? (
                  <div className="relative h-350 w-full overflow-hidden bg-slate-100">
                    <img
                      src={activeProject.image}
                      alt={activeProject.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={() =>
                        setImageLoadFailed((prev) => ({
                          ...prev,
                          [activeProject.id]: true,
                        }))
                      }
                    />
                  </div>
                ) : (
                  <div className="relative h-[480px] w-full overflow-hidden bg-gradient-to-br from-slate-100 via-white to-slate-200 border-b border-slate-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center px-4">
                        <p className="text-sm font-semibold text-slate-800">
                          Preview unavailable
                        </p>
                        <p className="text-xs text-slate-500 mt-1">
                          {activeProject.title}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;