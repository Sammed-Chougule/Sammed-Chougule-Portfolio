import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import BackgroundRippleEffect from './components/BackgroundRippleEffect';
import WebcamPixelGridDemo from './components/WebcamPixelGridDemo';

function App() {
  const [backgroundMode, setBackgroundMode] = useState('ripple');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-slate-200 selection:text-slate-900">
      {backgroundMode === 'ripple' ? <BackgroundRippleEffect /> : <WebcamPixelGridDemo />}
      <Navbar backgroundMode={backgroundMode} setBackgroundMode={setBackgroundMode} />
      <main className="relative z-10">
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