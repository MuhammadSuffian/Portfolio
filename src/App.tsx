import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { theme } from './theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Experience from './components/Experience';
import TechnicalSkills from './components/TechnicalSkills';
// import AITools from './components/AITools';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ backgroundColor: '#0a192f', minHeight: '100vh' }}>
        <Navbar />
        <Hero />
        <About />
        <Certifications />
        <Skills />
        <Experience />
        <TechnicalSkills />
        {/* <AITools /> */}
        <Projects />
        <Contact />
      </Box>
    </ThemeProvider>
  );
}

export default App;
