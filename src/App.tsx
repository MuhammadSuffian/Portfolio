import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import AITools from './components/AITools';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <AITools />
      <Projects />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
