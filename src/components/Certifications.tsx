import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { SiGoogle } from 'react-icons/si';

const Certifications = () => (
  <Box
    id="certifications"
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
        Licenses & Certifications
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              backgroundColor: 'background.paper',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <Typography variant="subtitle1" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                Google Cybersecurity Specialization
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'secondary.main', mb: 1 }}>
              License Provider: Google
            </Typography>
            <Typography variant="body2" sx={{ color: 'secondary.main', mb: 1 }}>
              Issued Dec 2023
            </Typography>
            <Typography variant="body2" sx={{ color: 'secondary.main', mb: 2 }}>
              Credential ID: LLNRNQWPDSD5
            </Typography>
            <a
              href="https://www.coursera.org/account/accomplishments/specialization/LLNRNQWPDSD5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Box
                component="button"
                sx={{
                  mt: 1,
                  px: 2,
                  py: 1,
                  backgroundColor: 'primary.main',
                  color: '#0a192f',
                  border: 'none',
                  borderRadius: 1,
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'background 0.3s',
                  '&:hover': {
                    backgroundColor: 'rgba(100, 255, 218, 0.8)',
                  },
                }}
              >
                Show Credential
              </Box>
            </a>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              backgroundColor: 'background.paper',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <Typography variant="subtitle1" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                Mastercard - Cybersecurity Job Simulation
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'secondary.main', mb: 1 }}>
              License Provider: Forage
            </Typography>
            <Typography variant="body2" sx={{ color: 'secondary.main', mb: 1 }}>
              Issued Mar 2025
            </Typography>
            <Typography variant="body2" sx={{ color: 'secondary.main', mb: 2 }}>
              Credential ID: 5zXmgMkt8xi3DsXJC
            </Typography>
            <a
              href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/mfxGwGDp6WkQmtmTf/vcKAB5yYAgvemepGQ_mfxGwGDp6WkQmtmTf_bwCgtXEEuxAhmzy8Y_1741443377944_completion_certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Box
                component="button"
                sx={{
                  mt: 1,
                  px: 2,
                  py: 1,
                  backgroundColor: 'primary.main',
                  color: '#0a192f',
                  border: 'none',
                  borderRadius: 1,
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'background 0.3s',
                  '&:hover': {
                    backgroundColor: 'rgba(100, 255, 218, 0.8)',
                  },
                }}
              >
                Show Credential
              </Box>
            </a>
          </Paper>
        </Grid>
      </Grid>
    </motion.div>
  </Box>
);

export default Certifications;