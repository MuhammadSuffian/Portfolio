import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

interface SkillCard {
  title: string;
  description: string;
  iconName: string;
}

const skills: SkillCard[] = [
  {
    title: 'Android Development',
    description: 'Expert in Kotlin, Jetpack Compose, and modern Android architecture patterns.',
    iconName: 'android',
  },
  {
    title: 'AI & Machine Learning',
    description: 'Experience with TensorFlow Lite, ML Kit, and implementing AI features in mobile apps.',
    iconName: 'robot',
  },
  {
    title: 'Full Stack Integration',
    description: 'Skilled in integrating mobile apps with backend services and cloud platforms.',
    iconName: 'code',
  },
];

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        py: 8,
        px: { xs: 4, md: 8 },
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="h4"
          sx={{
            color: 'white',
            mb: 4,
            '&::after': {
              content: '""',
              display: 'block',
              width: '100px',
              height: '2px',
              backgroundColor: 'primary.main',
              mt: 2,
            },
          }}
        >
          About Me
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="body1"
              sx={{
                color: 'secondary.main',
                mb: 3,
                fontSize: '1.1rem',
                lineHeight: 1.8,
              }}
            >
              Hello! I'm Muhammad Waris Tafoor, a software engineer with a strong foundation in both
              software development and cybersecurity. My journey in technology began with a passion
              for creating innovative solutions, which led me to pursue a Bachelor's degree in
              Software Engineering and later a Master's in Cybersecurity to enhance my understanding
              of secure software development.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'secondary.main',
                mb: 3,
                fontSize: '1.1rem',
                lineHeight: 1.8,
              }}
            >
              I specialize in building modern web and mobile applications using React, React Native,
              and Java for Android development. My cybersecurity expertise allows me to implement
              robust security measures in all my projects, ensuring they are not only functional
              but also secure from potential threats.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                backgroundColor: 'background.paper',
                height: '100%',
                mb: 3
              }}
            >
              <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
                Education
              </Typography>
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle1" sx={{ color: 'primary.main' }}>
                  Master's in Cybersecurity
                </Typography>
                <Typography variant="body2" sx={{ color: 'secondary.main' }}>
                  University of Wolverhampton
                </Typography>
                <Typography variant="body2" sx={{ color: 'secondary.main' }}>
                  Birmingham, United Kingdom
                </Typography>
                <Typography variant="body2" sx={{ color: 'secondary.main' }}>
                  February 2024 - February 2025
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle1" sx={{ color: 'primary.main' }}>
                  Bachelor's in Software Engineering
                </Typography>
                <Typography variant="body2" sx={{ color: 'secondary.main' }}>
                  Bahria University
                </Typography>
                <Typography variant="body2" sx={{ color: 'secondary.main' }}>
                  Islamabad, Pakistan
                </Typography>
                <Typography variant="body2" sx={{ color: 'secondary.main' }}>
                  September 2019 - July 2023
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </motion.div>
    </Box>
  );
};

export default About; 