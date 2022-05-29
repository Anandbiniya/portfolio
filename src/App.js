
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Contactinfo from './components/Contactinfo';
import Projects from './components/Projects';
import Particle1 from './components/Particle1';


function App() {
  return (
    <div className="hero">
     <Navbar/>
     <About/>
     <Skills/>
   <Projects/>
     <Contactinfo/>
     <Particle1/>
    
    </div>
  );
}

export default App;
