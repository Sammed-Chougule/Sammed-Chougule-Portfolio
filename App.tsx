import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-blue-100 selection:text-blue-800">
      <Navbar />
      <main className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-24 left-8 h-72 w-72 rounded-full bg-blue-200/50 blur-3xl" />
          <div className="absolute right-0 top-[32rem] h-80 w-80 rounded-full bg-sky-200/40 blur-3xl" />
        </div>
        <Hero />
        <About />
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