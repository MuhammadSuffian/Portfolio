import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { SiGithub, SiOpenai } from 'react-icons/si';
import { FaCode } from 'react-icons/fa';

interface AITool {
  name: string;
  description: string;
  icon: string;
}

const aiTools: AITool[] = [
  {
    name: 'GitHub Copilot',
    description: 'AI pair programmer that helps write better code faster by suggesting whole lines or entire functions.',
    icon: 'github'
  },
  {
    name: 'ChatGPT',
    description: 'Advanced language model for code generation, debugging, and technical documentation.',
    icon: 'openai'
  },
  {
    name: 'Cursor',
    description: 'AI-powered code editor with intelligent code completion and real-time collaboration features.',
    icon: 'code'
  },
  {
    name: 'VS Code AI',
    description: 'AI-powered coding assistance within VS Code for enhanced development productivity.',
    icon: 'code'
  }
];

const AITools = () => {
  return (
    <Box
      id="ai-tools"
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
          <span style={{ color: '#64ffda' }}>04.</span> AI Tools Proficiency
        </Typography>
      </motion.div>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        {aiTools.map((tool, index) => (
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
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  {tool.icon === 'github' && React.createElement(SiGithub as unknown as React.ComponentType<{ size: number }>, { size: 32 })}
                  {tool.icon === 'openai' && React.createElement(SiOpenai as unknown as React.ComponentType<{ size: number }>, { size: 32 })}
                  {tool.icon === 'code' && React.createElement(FaCode as unknown as React.ComponentType<{ size: number }>, { size: 32 })}
                  <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
                    {tool.name}
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  {tool.description}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AITools; 