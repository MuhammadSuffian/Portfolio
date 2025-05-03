import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { SiTensorflow, SiPytorch, SiOpenai, SiHuggingface } from 'react-icons/si';
import { IconType } from 'react-icons';

interface AITool {
  name: string;
  Icon: IconType;
  description: string;
  proficiency: number;
}

const aiTools: AITool[] = [
  {
    name: 'TensorFlow',
    Icon: SiTensorflow,
    description: 'Deep learning framework for building and training neural networks',
    proficiency: 85
  },
  {
    name: 'PyTorch',
    Icon: SiPytorch,
    description: 'Open source machine learning framework for deep learning',
    proficiency: 80
  },
  {
    name: 'OpenAI API',
    Icon: SiOpenai,
    description: 'Integration with OpenAI models for natural language processing',
    proficiency: 90
  },
  {
    name: 'Hugging Face',
    Icon: SiHuggingface,
    description: 'Transformers library and model hub for NLP tasks',
    proficiency: 85
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
          <Grid item xs={12} sm={6} key={index}>
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
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'rgba(100, 255, 218, 0.1)',
                      borderRadius: 1,
                      mr: 2,
                    }}
                  >
                    {React.createElement(tool.Icon as React.ComponentType<{ size: number; color: string }>, { size: 24, color: "#64ffda" })}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{ color: 'white', fontWeight: 'bold' }}
                  >
                    {tool.name}
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{ color: 'secondary.main', mb: 2 }}
                >
                  {tool.description}
                </Typography>
                <Box sx={{ width: '100%', height: 4, backgroundColor: 'rgba(100, 255, 218, 0.1)', borderRadius: 2 }}>
                  <Box
                    sx={{
                      width: `${tool.proficiency}%`,
                      height: '100%',
                      backgroundColor: '#64ffda',
                      borderRadius: 2,
                    }}
                  />
                </Box>
                <Typography
                  variant="caption"
                  sx={{ color: 'secondary.main', mt: 1, display: 'block' }}
                >
                  {tool.proficiency}% Proficiency
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