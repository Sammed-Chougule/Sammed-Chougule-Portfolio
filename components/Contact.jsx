import React from 'react';
import SectionWrapper from './SectionWrapper';
import { Send } from 'lucide-react';

const Contact = () => {
  return (
    <SectionWrapper id="contact">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black uppercase text-black mb-3">Get In Touch</h2>
        <span className="inline-block h-1.5 w-24 bg-black mb-4" />
        <p className="text-slate-700 max-w-2xl mx-auto font-medium">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
          I'll try my best to get back to you!
        </p>
      </div>

      <div className="max-w-2xl mx-auto text-center">
        <a
          href="mailto:sammedsanjaychougule@gmail.com"
          className="brutal-btn brutal-btn--solid group text-lg py-[0.7em] pl-[0.9em] pr-[1em] mb-20"
        >
          <span className="flex items-center transition-transform duration-300 ease-in-out group-hover:animate-[fly-1_0.6s_ease-in-out_infinite_alternate]">
            <Send size={20} className="transition-transform duration-300 ease-in-out group-hover:translate-x-[1.2em] group-hover:rotate-45 group-hover:scale-110" />
          </span>
          <span className="block ml-[0.3em] transition-all duration-300 ease-in-out group-hover:translate-x-[5em] group-hover:opacity-0">
            Say Hello
          </span>
        </a>

        <footer className="text-slate-600 text-sm font-bold">
            <p>Designed & Built by Sammed Chougule</p>
        </footer>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
