import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AnimatedBackground from './components/AnimatedBackground';
import ScrollProgressBar from './components/ScrollProgressBar';
//import CursorFollower from './components/CursorFollower';
import PageTransitions from './components/PageTransitions';

function App() {
  return (
   // <PageTransitions>
      <div className="App relative">
        <AnimatedBackground />
    
        <ScrollProgressBar />
        <Header />
        <main className="relative z-10">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>      
        
      </div>
    //</PageTransitions>
  );
}

export default App;
