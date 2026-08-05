import React from 'react';
import { motion } from 'framer-motion';


const SectionWrapper = ({ children, id, className = "" }) => {
  return (
    <section id={id} className={`py-10 md:py-14 relative scroll-mt-24 ${className}`}>
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