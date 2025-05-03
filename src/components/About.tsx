import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { FaAndroid, FaRobot, FaCode } from 'react-icons/fa';
import { IconType } from 'react-icons';

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
          <span style={{ color: '#64ffda' }}>01.</span> About Me
        </Typography>
      </motion.div>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="body1"
              sx={{
                color: 'secondary.main',
                lineHeight: 1.8,
                fontSize: '1.1rem',
              }}
            >
              Hello! I'm a passionate Android developer with a strong focus on integrating
              artificial intelligence into mobile applications. My journey in tech started
              with Android development, and I've since expanded my expertise to include
              machine learning and AI implementation in mobile apps.
              <br /><br />
              I specialize in creating innovative solutions that combine the power of
              mobile technology with artificial intelligence, delivering exceptional user
              experiences and cutting-edge features.
            </Typography>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Grid container spacing={3}>
              {skills.map((skill, index) => (
                <Grid item xs={12} key={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      backgroundColor: 'background.paper',
                      borderRadius: 2,
                      transition: 'transform 0.3s',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      {skill.iconName === 'android' && React.createElement(FaAndroid as unknown as React.ComponentType<{ size: number; color: string }>, { size: 40, color: "#64ffda" })}
                      {skill.iconName === 'robot' && React.createElement(FaRobot as unknown as React.ComponentType<{ size: number; color: string }>, { size: 40, color: "#64ffda" })}
                      {skill.iconName === 'code' && React.createElement(FaCode as unknown as React.ComponentType<{ size: number; color: string }>, { size: 40, color: "#64ffda" })}
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{ color: 'white', fontWeight: 'bold' }}
                        >
                          {skill.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: 'secondary.main', mt: 1 }}
                        >
                          {skill.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About; 