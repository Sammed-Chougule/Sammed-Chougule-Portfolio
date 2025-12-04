import React from 'react';
import SectionWrapper from './SectionWrapper';
import { SOCIAL_LINKS } from '../constants';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <SectionWrapper id="contact">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-blue-400 font-mono mb-4">04. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">Get In Touch</h2>
        <p className="text-slate-400 text-lg mb-12 leading-relaxed">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
          I'll try my best to get back to you!
        </p>
        
        <a 
          href="mailto:contact@sammed.dev"
          className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-blue-400 text-blue-400 rounded hover:bg-blue-400/10 transition-all font-mono text-lg mb-20"
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
                    className="text-slate-400 hover:text-blue-400 hover:-translate-y-1 transition-all duration-300"
                    aria-label={link.platform}
                >
                    <link.icon size={24} />
                </a>
            ))}
        </div>
        
        <footer className="text-slate-600 text-sm font-mono">
            <p>Designed & Built by Sammed Chougule</p>
        </footer>
      </div>
    </SectionWrapper>
  );
};

export default Contact;