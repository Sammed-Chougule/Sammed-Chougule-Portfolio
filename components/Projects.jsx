"use client";

import React, { useRef, useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { PROJECTS } from "../constants";
import SectionHeader from "./SectionHeader";

const Projects = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [imageLoadFailed, setImageLoadFailed] = useState({});

  const sectionRef = useRef(null);

  // Tracks the normal vertical scroll of the whole web page across this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 20%", "end 80%"],
  });

  const cardLength = PROJECTS.length;

  // Dynamically update active index as user scrolls down the main site
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = PROJECTS.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const activeProject = PROJECTS[activeCard] || PROJECTS[0];

  return (
    <SectionWrapper id="projects">
      <SectionHeader index="03." title="Some Things I've Built" />

      {/* Main Section Container linked to Page Scroll */}
      <div ref={sectionRef} className="relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
          
          {/* LEFT COLUMN: Clean list items that dim/highlight naturally as you scroll */}
          <div className="lg:col-span-5 flex flex-col space-y-16 py-8">
            {PROJECTS.map((project, index) => {
              const isActive = activeCard === index;

              return (
                <motion.div
                  key={project.id || index}
                  animate={{
                    opacity: isActive ? 1 : 0.35,
                    scale: isActive ? 1 : 0.98,
                  }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setActiveCard(index)}
                  className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-white border-slate-300 shadow-md shadow-slate-200/50"
                      : "bg-white/60 border-slate-200/70 hover:bg-white/80"
                  }`}
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex gap-2 flex-wrap mb-6">
                    {project.technologies?.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 items-center pt-3 border-t border-slate-100">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-1.5 text-xs font-mono font-medium"
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-1.5 text-xs font-mono font-medium"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}

            {/* GitHub CTA */}
            <div className="pt-4">
              <a
                href="https://github.com/sammed-chougule"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 text-white hover:bg-black transition-all shadow-sm font-mono text-sm"
              >
                <Github size={16} className="text-slate-300" />
                <span>More on GitHub</span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Pins smoothly in place relative to the browser viewport */}
          <div className="hidden lg:block lg:col-span-7 sticky top-28 self-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id || activeCard}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="w-full h-[380px] rounded-2xl overflow-hidden border border-slate-200/80 bg-white shadow-xl flex items-center justify-center relative"
              >
                {activeProject.image && !imageLoadFailed[activeProject.id] ? (
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
                ) : (
                  <div className="flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-slate-50 via-white to-slate-100 w-full h-full">
                    <p className="text-base font-bold text-slate-800">
                      {activeProject.title}
                    </p>
                    <p className="text-xs font-mono text-slate-500 mt-2">
                      Preview image unavailable
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;