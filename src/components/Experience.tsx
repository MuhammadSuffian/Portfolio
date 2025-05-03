import React from 'react';
import { Box, Typography, Grid, Paper, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { SiAndroid, SiKotlin, SiFirebase, SiGooglecloud } from 'react-icons/si';

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
  icon: string;
}

const experiences: ExperienceItem[] = [
  {
    company: 'HURA Technologies',
    position: 'Android Developer & AI Integration Specialist',
    duration: '2024 October - Present',
    description: [
      'Developed and maintained Android applications using Kotlin and Java',
      'Integrated AI and machine learning features into mobile applications',
      'Implemented modern Android architecture components and best practices',
      'Created AI-powered solutions for enhanced user experience',
      'Collaborated with cross-functional teams to deliver innovative solutions',
      'Optimized app performance and implemented AI-driven analytics'
    ],
    technologies: ['Kotlin', 'Java', 'AI Integration', 'ML Models', 'Firebase', 'XML', 'Jetpack Compose'],
    icon: 'android'
  },
  {
    company: 'HURA Technologies',
    position: 'Android Developer',
    duration: '2024 July - 2024 September',
    description: [
      'Developed native Android applications using Kotlin and Java',
      'Implemented MVVM architecture and Jetpack components',
      'Integrated RESTful APIs and third-party libraries',
      'Optimized app performance and user experience',
      'Collaborated with UI/UX designers to implement pixel-perfect designs',
      'Conducted code reviews and maintained code quality standards'
    ],
    technologies: ['Kotlin', 'Java', 'XML', 'Jetpack Compose', 'REST APIs', 'Firebase'],
    icon: 'android'
  }
];

const Experience = () => {
  return (
    <Box
      id="experience"
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
          <span style={{ color: '#64ffda' }}>03.</span> Professional Experience
        </Typography>
      </motion.div>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        {experiences.map((experience, index) => (
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
                  height: '100%',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  {experience.company === 'HURA Technologies' ? (
                    <Avatar src="/hura-logo.png" alt="HURA Technologies Logo" sx={{ width: 48, height: 48, bgcolor: 'transparent' }} />
                  ) : (
                    experience.icon === 'android' && React.createElement(SiAndroid as unknown as React.ComponentType<{ size: number }>, { size: 32 })
                  )}
                  <Box>
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
                      {experience.position}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: '#64ffda' }}>
                      {experience.company}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                      {experience.duration}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ mb: 3 }}>
                  {experience.description.map((item, i) => (
                    <Typography
                      key={i}
                      variant="body1"
                      sx={{
                        color: 'white',
                        mb: 1,
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 1,
                      }}
                    >
                      <span style={{ color: '#64ffda' }}>▹</span>
                      {item}
                    </Typography>
                  ))}
                </Box>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {experience.technologies.map((tech, i) => (
                    <Typography
                      key={i}
                      variant="body2"
                      sx={{
                        color: '#64ffda',
                        backgroundColor: 'rgba(100, 255, 218, 0.1)',
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 1,
                      }}
                    >
                      {tech}
                    </Typography>
                  ))}
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Experience; 