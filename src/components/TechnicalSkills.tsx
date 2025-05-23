import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

interface SkillCategory {
  category: string;
  skills: string[];
}

const technicalSkills: SkillCategory[] = [
  {
    category: 'Cybersecurity',
    skills: ['NIST', 'ISO 27001', 'Metasploit', 'Nmap', 'Burp Suite']
  },
  {
    category: 'Programming',
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'React Native']
  },
  {
    category: 'Networking',
    skills: ['TCP/IP', 'UDP', 'HTTP/HTTPS', 'DNS', 'DHCP', 'VPN', 'Network Security', 'Wireshark']
  },
  {
    category: 'Cloud',
    skills: ['AWS', 'Azure', 'GCP']
  },
  {
    category: 'AI/ML',
    skills: ['TensorFlow', 'scikit-learn', 'Pandas', 'Machine Learning']
  }
];

const TechnicalSkills = () => {
  return (
    <Box
      id="technical-skills"
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
          Technical Skills
        </Typography>
      </motion.div>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        {technicalSkills.map((skillCategory, index) => (
          <Grid item xs={12} md={6} key={index}>
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
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <Typography variant="h6" sx={{ color: '#64ffda', mb: 2 }}>
                  {skillCategory.category}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {skillCategory.skills.map((skill, i) => (
                    <Typography
                      key={i}
                      variant="body2"
                      sx={{
                        color: 'white',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 1,
                      }}
                    >
                      {skill}
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

export default TechnicalSkills;