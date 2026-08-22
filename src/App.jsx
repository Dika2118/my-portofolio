import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Heros from './components/sections/Heros';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experiences from './components/sections/Experiences';
import Educations from './components/sections/Educations';
import Achievements from './components/sections/Achievements';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main>
        <Heros />
        <Skills />
        <Projects />
        <Experiences />
        <Educations />
        <Achievements />
      </main>
      <Footer />
    </div>
  );
}

export default App;
