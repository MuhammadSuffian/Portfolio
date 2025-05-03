import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Company Name',
    position: 'Software Engineer',
    duration: '2022 - Present',
    description: [
      'Developed and maintained enterprise-level applications using modern technologies',
      'Collaborated with cross-functional teams to deliver high-quality software solutions',
      'Implemented best practices in software development and code review processes',
      'Led the development of key features and improvements'
    ]
  },
  {
    company: 'Previous Company',
    position: 'Junior Developer',
    duration: '2020 - 2022',
    description: [
      'Assisted in the development of web and mobile applications',
      'Participated in agile development processes and team meetings',
      'Contributed to code reviews and documentation',
      'Learned and implemented new technologies and frameworks'
    ]
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
        {experiences.map((exp, index) => (
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
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ color: 'white', fontWeight: 'bold', mb: 1 }}
                >
                  {exp.position}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: '#64ffda', mb: 1 }}
                >
                  {exp.company}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: 'secondary.main', mb: 2 }}
                >
                  {exp.duration}
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  {exp.description.map((item, i) => (
                    <Typography
                      key={i}
                      component="li"
                      sx={{
                        color: 'secondary.main',
                        mb: 1,
                        '&::marker': {
                          color: '#64ffda',
                        },
                      }}
                    >
                      {item}
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