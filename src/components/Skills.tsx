import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { FaReact, FaJava, FaShieldAlt, FaMobile, FaCode } from 'react-icons/fa';
import { FaBrain } from 'react-icons/fa';

interface Skill {
  title: string;
  description: string;
  iconName: string;
}

const Skills = () => {
  const skills: Skill[] = [
    {
      title: 'Frontend Development',
      description: 'Building modern web applications with React, TypeScript, and Material-UI',
      iconName: 'react',
    },
    {
      title: 'Mobile Development',
      description: 'Creating cross-platform mobile apps with React Native and Java for Android',
      iconName: 'mobile',
    },
    {
      title: 'Cybersecurity',
      description: 'Implementing security measures, conducting vulnerability assessments, and developing secure applications',
      iconName: 'shield',
    },
    {
      title: 'Backend Development',
      description: 'Developing robust backend systems with Java and modern frameworks',
      iconName: 'java',
    },
    {
      title: 'Software Engineering',
      description: 'Following best practices in software development and architecture',
      iconName: 'code',
    },
    {
      title: 'Machine Learning Engineer',
      description: 'Designing and implementing machine learning models and algorithms',
      iconName: 'brain',
    }
  ];

  const renderIcon = (iconName: string) => {
    const iconProps = { size: 40, color: '#64ffda' };
    const IconComponent = {
      react: FaReact,
      mobile: FaMobile,
      shield: FaShieldAlt,
      java: FaJava,
      code: FaCode,
      brain: FaBrain,
    }[iconName] as React.ComponentType<{ size: number; color: string }>;

    return IconComponent ? <IconComponent {...iconProps} /> : null;
  };

  return (
    <Box
      id="skills"
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
          Skills
        </Typography>

        <Grid container spacing={4}>
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    height: '100%',
                    backgroundColor: 'background.paper',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    {renderIcon(skill.iconName)}
                    <Typography
                      variant="h6"
                      sx={{ color: 'white', fontWeight: 'bold' }}
                    >
                      {skill.title}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{ color: 'secondary.main', lineHeight: 1.8 }}
                  >
                    {skill.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};

export default Skills;