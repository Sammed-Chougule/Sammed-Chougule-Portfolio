import React from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id, className = "" }) => {
  return (
    <section id={id} className={`py-20 md:py-32 relative scroll-mt-24 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container mx-auto px-6 md:px-12 max-w-6xl"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;