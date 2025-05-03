import React from 'react';
import { Box, Typography, Grid, Paper, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { SiKotlin, SiAndroid, SiDart, SiTensorflow, SiPython, SiFirebase, SiGooglecloud, SiJavascript } from 'react-icons/si';
import { IconType } from 'react-icons';

interface SkillItem {
  name: string;
  level: number;
  iconName: string;
}

interface SkillCategory {
  category: string;
  items: SkillItem[];
}

const skills: SkillCategory[] = [
  {
    category: 'Mobile Development',
    items: [
      { name: 'Kotlin', level: 95, iconName: 'kotlin' },
      { name: 'Android', level: 90, iconName: 'android' },
      { name: 'Jetpack Compose', level: 85, iconName: 'android' },
      { name: 'Flutter', level: 80, iconName: 'dart' },
    ],
  },
  {
    category: 'AI & Machine Learning',
    items: [
      { name: 'TensorFlow', level: 85, iconName: 'tensorflow' },
      { name: 'Python', level: 80, iconName: 'python' },
      { name: 'ML Kit', level: 85, iconName: 'android' },
      { name: 'Custom ML Models', level: 80, iconName: 'tensorflow' },
    ],
  },
  {
    category: 'Backend & Cloud',
    items: [
      { name: 'Firebase', level: 90, iconName: 'firebase' },
      { name: 'Google Cloud', level: 80, iconName: 'googlecloud' },
      { name: 'REST APIs', level: 85, iconName: 'javascript' },
      { name: 'GraphQL', level: 75, iconName: 'javascript' },
    ],
  },
];

const Skills = () => {
  return (
    <Box
      id="skills"
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
          <span style={{ color: '#64ffda' }}>02.</span> Skills & Experience
        </Typography>
      </motion.div>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        {skills.map((category, categoryIndex) => (
          <Grid item xs={12} md={4} key={categoryIndex}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
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
                <Typography
                  variant="h6"
                  sx={{
                    color: 'white',
                    fontWeight: 'bold',
                    mb: 3,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  {category.category}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {category.items.map((skill, skillIndex) => (
                    <Box key={skillIndex}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          mb: 1,
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          {skill.iconName === 'kotlin' && React.createElement(SiKotlin as unknown as React.ComponentType<{ size: number }>, { size: 24 })}
                          {skill.iconName === 'android' && React.createElement(SiAndroid as unknown as React.ComponentType<{ size: number }>, { size: 24 })}
                          {skill.iconName === 'dart' && React.createElement(SiDart as unknown as React.ComponentType<{ size: number }>, { size: 24 })}
                          {skill.iconName === 'tensorflow' && React.createElement(SiTensorflow as unknown as React.ComponentType<{ size: number }>, { size: 24 })}
                          {skill.iconName === 'python' && React.createElement(SiPython as unknown as React.ComponentType<{ size: number }>, { size: 24 })}
                          {skill.iconName === 'firebase' && React.createElement(SiFirebase as unknown as React.ComponentType<{ size: number }>, { size: 24 })}
                          {skill.iconName === 'googlecloud' && React.createElement(SiGooglecloud as unknown as React.ComponentType<{ size: number }>, { size: 24 })}
                          {skill.iconName === 'javascript' && React.createElement(SiJavascript as unknown as React.ComponentType<{ size: number }>, { size: 24 })}
                          <Box sx={{ flex: 1 }}>
                            <Typography variant="body1" sx={{ color: 'white' }}>
                              {skill.name}
                            </Typography>
                            <LinearProgress
                              variant="determinate"
                              value={skill.level}
                              sx={{
                                height: 8,
                                borderRadius: 4,
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                '& .MuiLinearProgress-bar': {
                                  backgroundColor: '#64ffda',
                                },
                              }}
                            />
                          </Box>
                        </Box>
                        <Typography
                          variant="body2"
                          sx={{ color: 'secondary.main' }}
                        >
                          {skill.level}%
                        </Typography>
                      </Box>
                    </Box>
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

export default Skills; 