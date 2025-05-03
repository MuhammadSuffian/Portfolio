import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        px: { xs: 4, md: 8 },
        py: 8,
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant="h6"
          sx={{
            color: 'primary.main',
            mb: 2,
            fontFamily: 'monospace',
          }}
        >
          Hi, my name is
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Typography
          variant="h2"
          sx={{
            color: 'white',
            fontWeight: 'bold',
            mb: 2,
            fontSize: { xs: '2.5rem', md: '4rem' },
          }}
        >
          Muhammad Suffian Tafoor
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Typography
          variant="h3"
          sx={{
            color: 'secondary.main',
            mb: 4,
            fontSize: { xs: '1.5rem', md: '2.5rem' },
          }}
        >
          I'm a Software Engineer.
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Typography
          variant="body1"
          sx={{
            color: 'secondary.main',
            maxWidth: '600px',
            mb: 4,
            fontSize: { xs: '1rem', md: '1.2rem' },
          }}
        >
          I'm a passionate software engineer specializing in building exceptional applications
          with modern technologies. Currently focused on creating innovative solutions that
          combine cutting-edge technology with user-centric design.
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Button
          variant="outlined"
          sx={{
            color: 'primary.main',
            borderColor: 'primary.main',
            '&:hover': {
              borderColor: 'primary.main',
              backgroundColor: 'rgba(100, 255, 218, 0.1)',
            },
          }}
          onClick={() => {
            const element = document.getElementById('contact');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Get In Touch
        </Button>
      </motion.div>
    </Box>
  );
};

export default Hero; 