import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import GridBackground from './components/GridBackground';
import CustomCursor from './components/CustomCursor';

function App() {
  useEffect(() => {
    if (window.matchMedia('(pointer: fine)').matches) {
      document.documentElement.classList.add('sc-cursor-active');
    }
    return () => document.documentElement.classList.remove('sc-cursor-active');
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-slate-200 selection:text-slate-900">
      <GridBackground />
      <CustomCursor />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;