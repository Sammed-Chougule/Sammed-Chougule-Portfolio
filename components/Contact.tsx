import React from 'react';
import SectionWrapper from './SectionWrapper';
import { SOCIAL_LINKS } from '../constants';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <SectionWrapper id="contact">
      <div className="max-w-2xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-slate-700 font-mono mb-4"
        >
          05. What's Next?
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight hover:tracking-normal transition-all duration-300"
        >
          Get In Touch
        </motion.h2>
        <p className="text-slate-600 text-lg mb-12 leading-relaxed">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
          I'll try my best to get back to you!
        </p>
        
        <a 
          href="mailto:sammedsanjaychougule@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 border border-slate-900 text-white rounded-xl hover:bg-slate-700 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-300 transition-all font-mono text-lg mb-20"
        >
          <Mail size={20} />
          Say Hello
        </a>

        <div className="flex justify-center gap-8 mb-8">
            {SOCIAL_LINKS.map((link) => (
                <a 
                    key={link.platform} 
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-500 hover:text-slate-900 hover:-translate-y-1 transition-all duration-300"
                    aria-label={link.platform}
                >
                    <link.icon size={24} />
                </a>
            ))}
        </div>
        
        <footer className="text-slate-500 text-sm font-mono">
            <p>Designed & Built by Sammed Chougule</p>
        </footer>
      </div>
    </SectionWrapper>
  );
};

export default Contact;