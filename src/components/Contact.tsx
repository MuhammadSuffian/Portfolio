import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Snackbar,
  Alert,
} from '@mui/material';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setOpenSnackbar(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Box
      id="contact"
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
          <span style={{ color: '#64ffda' }}>06.</span> Get In Touch
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
                mb: 4,
              }}
            >
              I'm currently looking for new opportunities in Android development and
              AI integration. Whether you have a question or just want to say hi,
              I'll try my best to get back to you!
            </Typography>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <motion.a
                href="https://github.com/MuhammadSuffian"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Box component="span">
                  {React.createElement(FaGithub as unknown as React.ComponentType<{ size: number; color: string }>, { size: 24, color: "#64ffda" })}
                </Box>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/muhammad-suffian-0b98a3248/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Box component="span">
                  {React.createElement(FaLinkedin as unknown as React.ComponentType<{ size: number; color: string }>, { size: 24, color: "#64ffda" })}
                </Box>
              </motion.a>
              <motion.a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Box component="span">
                  {React.createElement(FaTwitter as unknown as React.ComponentType<{ size: number; color: string }>, { size: 24, color: "#64ffda" })}
                </Box>
              </motion.a>
            </Box>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 3,
                backgroundColor: 'background.paper',
                borderRadius: 2,
              }}
            >
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  sx={{ mb: 2 }}
                  InputProps={{
                    sx: { color: 'white' },
                  }}
                  InputLabelProps={{
                    sx: { color: 'secondary.main' },
                  }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  sx={{ mb: 2 }}
                  InputProps={{
                    sx: { color: 'white' },
                  }}
                  InputLabelProps={{
                    sx: { color: 'secondary.main' },
                  }}
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  sx={{ mb: 3 }}
                  InputProps={{
                    sx: { color: 'white' },
                  }}
                  InputLabelProps={{
                    sx: { color: 'secondary.main' },
                  }}
                />
                <Button
                  type="submit"
                  variant="outlined"
                  sx={{
                    color: 'primary.main',
                    borderColor: 'primary.main',
                    '&:hover': {
                      borderColor: 'primary.main',
                      backgroundColor: 'rgba(100, 255, 218, 0.1)',
                    },
                  }}
                >
                  Send Message
                </Button>
              </form>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          Message sent successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact; 