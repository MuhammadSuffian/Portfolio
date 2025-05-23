import React from 'react';
import { Box, Typography, Grid, Paper, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { SiAndroid } from 'react-icons/si';
import { FaBrain, FaMobile } from 'react-icons/fa';

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
    company: 'Eziline Software House',
    position: 'AI Mobile Apps Developer',
    duration: '2023 March - 2024 June',
    description: [
      'Developed AI-powered mobile applications for various clients',
      'Built cross-platform apps using React Native and integrated TensorFlow models',
      'Collaborated with AI teams to deploy machine learning models on mobile devices',
      'Optimized app performance and ensured seamless AI inference on-device',
      'Worked closely with designers and backend engineers for end-to-end solutions'
    ],
    technologies: ['React Native', 'TensorFlow', 'AI', 'Mobile Apps', 'JavaScript', 'TypeScript'],
    icon: 'mobile'
  },
  {
    company: 'Freelance',
    position: 'Machine Learning Engineer',
    duration: '2022 January - 2023 February',
    description: [
      'Designed and implemented machine learning models for diverse client projects',
      'Worked on data preprocessing, feature engineering, and model evaluation',
      'Deployed ML models into production environments and mobile apps',
      'Collaborated remotely with international clients to deliver AI-driven solutions',
      'Utilized Python, TensorFlow, and scikit-learn for end-to-end ML pipelines',
      'Led a team to develop a predictive analytics tool that increased efficiency by 20%',
      'Implemented a recommendation system that improved user engagement by 15%'
    ],
    technologies: ['Python', 'TensorFlow', 'scikit-learn', 'Pandas', 'Machine Learning', 'AI'],
    icon: 'brain'
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
          Professional Experience
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
                    <Avatar src={`${process.env.PUBLIC_URL}/hura-logo.png`} alt="HURA Technologies Logo" sx={{ width: 60, height: 60, bgcolor: 'transparent' }} />
                  ) : (
                    experience.icon === 'android' ? 
                    React.createElement(SiAndroid as unknown as React.ComponentType<{ size: number }>, { size: 32 }) :
                    experience.icon === 'brain' ? React.createElement(FaBrain as unknown as React.ComponentType<{ size: number }>, { size: 32 }) :
                    experience.icon === 'mobile' && React.createElement(FaMobile as unknown as React.ComponentType<{ size: number }>, { size: 32 })
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

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
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