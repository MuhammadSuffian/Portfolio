import React from 'react';
import { Box, Typography, Grid, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { IconType } from 'react-icons';

const projects = [
  {
    title: 'IESA (INTELLIGENT ENERGY SCENARIO ANALYSIS)',
    description:
      "IESA is an AI-based platform for analyzing, predicting, and optimizing national energy consumption and production.",
    technologies: ['Python', 'Streamlit', 'WisRule Algorithm ', 'Scikit-learn',"Pandas & NumPy","Matplotlib & Plotly"],
    github: 'https://github.com/yourusername/ai-android-app',
    demo: 'https://play.google.com/store/apps/details?id=com.yourcompany.app',
    image: '/images/project1.jpg',
  },
  {
    title: 'Smart Home Automation',
    description:
      'A mobile application that controls smart home devices using AI for predictive automation and energy optimization.',
    technologies: ['Android', 'Google Cloud', 'IoT', 'Machine Learning'],
    github: 'https://github.com/yourusername/smart-home-app',
    demo: 'https://play.google.com/store/apps/details?id=com.yourcompany.smarthome',
    image: '/images/project2.jpg',
  },
  {
    title: 'Health & Fitness AI Coach',
    description:
      'An Android app that uses AI to provide personalized fitness recommendations and track progress.',
    technologies: ['Kotlin', 'ML Kit', 'Firebase', 'Health APIs'],
    github: 'https://github.com/yourusername/fitness-ai-coach',
    demo: 'https://play.google.com/store/apps/details?id=com.yourcompany.fitness',
    image: '/images/project3.jpg',
  },
];

const Projects = () => {
  return (
    <Box
      id="projects"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        px: { xs: 4, md: 8 },
        py: 8,
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant="h4"
          sx={{
            color: 'white',
            fontWeight: 'bold',
            mb: 2,
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <span style={{ color: '#64ffda' }}>05.</span> Projects
        </Typography>
      </motion.div>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        {projects.map((project, index) => (
          <Grid item xs={12} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  backgroundColor: 'background.paper',
                  borderRadius: 2,
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  gap: 3,
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <Box
                  sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: 'white', fontWeight: 'bold' }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: 'secondary.main', lineHeight: 1.8 }}
                  >
                    {project.description}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 1,
                      mt: 2,
                    }}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <Typography
                        key={techIndex}
                        variant="caption"
                        sx={{
                          color: '#64ffda',
                          backgroundColor: 'rgba(100, 255, 218, 0.1)',
                          px: 2,
                          py: 1,
                          borderRadius: 1,
                        }}
                      >
                        {tech}
                      </Typography>
                    ))}
                  </Box>
                  <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                    <Button
                      variant="outlined"
                      startIcon={
                        <Box component="span">
                          {React.createElement(FaGithub as unknown as React.ComponentType<{ size: number }>, { size: 20 })}
                        </Box>
                      }
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: '#64ffda',
                        borderColor: '#64ffda',
                        '&:hover': {
                          borderColor: '#64ffda',
                          backgroundColor: 'rgba(100, 255, 218, 0.1)',
                        },
                      }}
                    >
                      View Code
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={
                        <Box component="span">
                          {React.createElement(FaExternalLinkAlt as unknown as React.ComponentType<{ size: number }>, { size: 20 })}
                        </Box>
                      }
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: '#64ffda',
                        borderColor: '#64ffda',
                        '&:hover': {
                          borderColor: '#64ffda',
                          backgroundColor: 'rgba(100, 255, 218, 0.1)',
                        },
                      }}
                    >
                      Live Demo
                    </Button>
                  </Box>
                </Box>
                <Box
                  sx={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Box
                    component="img"
                    src={project.image}
                    alt={project.title}
                    sx={{
                      width: '100%',
                      maxWidth: '400px',
                      borderRadius: 2,
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                    }}
                  />
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects; 