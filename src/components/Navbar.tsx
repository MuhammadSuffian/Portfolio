import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Box, Button, useScrollTrigger, Slide } from '@mui/material';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const sections = [
  { name: 'Home', id: 'hero' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const trigger = useScrollTrigger();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'rgba(10, 25, 47, 0.85)',
          backdropFilter: 'blur(10px)',
          boxShadow: 'none',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {sections.map((section) => (
              <Button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                sx={{
                  color: activeSection === section.id ? 'primary.main' : 'secondary.main',
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                {section.name}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <motion.a
              href="https://github.com/MuhammadSuffian"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Box component="span">
                {React.createElement(FaGithub as unknown as React.ComponentType<{ size: number; color: string }>, { size: 24, color: "#64ffda" })}
              </Box>
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Box component="span">
                {React.createElement(FaLinkedin as unknown as React.ComponentType<{ size: number; color: string }>, { size: 24, color: "#64ffda" })}
              </Box>
            </motion.a>
          </Box>
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

export default Navbar; 