import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import References from './components/References';
import Contact from './components/Contact';
import AnimatedBackground from './components/AnimatedBackground';
import { initAllAnimations, initNavbarScrollEffect, addRippleEffect } from './utils/animations';
import './App.css';

function App() {
  useEffect(() => {
    // Initialize all animations when component mounts
    initAllAnimations();
    initNavbarScrollEffect();
    addRippleEffect();
    
    // Cleanup function
    return () => {
      // Remove event listeners if needed
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  return (
    <div className="App page-container">
      <AnimatedBackground />
      <Header />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <References />
      <Contact />
    </div>
  );
}

export default App;