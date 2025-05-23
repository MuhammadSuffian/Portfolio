import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
<<<<<<< Updated upstream
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { IconType } from 'react-icons';

const projects = [
  {
    title: 'IESA (INTELLIGENT ENERGY SCENARIO ANALYSIS)',
    description:
      "IESA is an AI-based platform for analyzing, predicting, and optimizing national energy consumption and production.",
    technologies: ['Python', 'Streamlit', 'WisRule Algorithm ', 'Scikit-learn',"Pandas & NumPy","Matplotlib & Plotly"],
    github: 'https://github.com/yourusername/ai-android-app',
    demo: 'https://play.google.com/store/apps/details?id=com.yourcompany.app',
    image: '/images/project1.jpg',
  },
  {
    title: 'AI-Powered Speech Sentiment Interpreter',
    description:
      'AI-powered Streamlit app using NLP, Google Speech, and LLM to transcribe audio, analyze sentiment, and generate replies.',
    technologies: ['Python', 'Streamlit', 'TextBlob', 'LLM', 'Google Speech', 'PyAudio '],
    github: 'https://github.com/MuhammadSuffian/AI-Powered-Speech-Sentiment-Interpreter',
    demo: 'https://play.google.com/store/apps/details?id=com.yourcompany.smarthome',
    image: '/images/project2.jpg',
  },
  {
    title: 'AI Chatbot with Local Multi LLM Models Support',
    description:
      'An Android app that uses AI to provide personalized fitness recommendations and track progress.',
    technologies: ['Kotlin', 'Ollama', 'Ngrok', 'Xml', 'Java', 'Retrofit','Gemini flash','Google TTS', 'Google STT'],
    github: 'https://github.com/yourusername/fitness-ai-coach',
    demo: 'https://play.google.com/store/apps/details?id=com.yourcompany.fitness',
    image: '/images/project3.jpg',
  },
];
=======
>>>>>>> Stashed changes

const Projects = () => {
  const projects = [
    {
      title: "Wi-Fi Security Enhancement using RF Fingerprinting",
      description: "Developed a novel approach to enhance the security of public Wi-Fi networks by employing Radio Frequency (RF) fingerprinting techniques. The project focused on mitigating the risks posed by eavesdropping and man-in-the-middle attacks.\n\n• Captured raw RF signals using a Software Defined Radio (SDR) device.\n• Extracted unique features from the captured signals, such as peak frequency, peak amplitude and entropy spread.\n• Combined extracted features to create a distinctive RF fingerprint for each Wi-Fi access point.\n• Utilized the generated RF fingerprints to accurately identify legitimate and fraudulent Wi-Fi networks, thereby preventing unauthorized access and data interception.",
      // image: "https://via.placeholder.com/300x200",
      technologies: ["RF Fingerprinting", "SDR", "Signal Processing", "Network Security", "Python"],
      link: "#"
    },
    {
      title: "Agri-Smart IoT Farming System",
      description: "Agri-Smart IoT-based Smart Farming strengthens the Agriculture system and reduces resource waste like electricity and water. Agri Smart uses different environmental sensors to monitor environmental conditions. Users can view sensors data in the app and then make informed decisions.\n\n• Implemented IoT sensors for real-time environmental monitoring.\n• Developed mobile app using Expo React Native for data visualization.\n• Created Python scripts for hardware integration and sensor data processing.\n• Trained AI models using TensorFlow for intelligent decision-making.\n• Reduced resource waste through smart monitoring and automated controls.",
      // image: "https://via.placeholder.com/300x200",
      technologies: ["IoT", "React Native", "Python", "TensorFlow", "Hardware Integration"],
      link: "#"
    },
  
  ];

  return (
    <Box
      id="projects"
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
          Projects
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'background.paper',
                  }}
                >
                  {/* <CardMedia
                    component="img"
                    height="200"
                    // image={project.image}
                    alt={project.title}
                  /> */}
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      sx={{ color: 'white' }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      {project.technologies.map((tech, techIndex) => (
                        <Chip
                          key={techIndex}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(100, 255, 218, 0.1)',
                            color: 'primary.main',
                          }}
                        />
                      ))}
                    </Box>
                    {/* <Button
                      variant="outlined"
                      color="primary"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </Button> */}
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};

export default Projects;