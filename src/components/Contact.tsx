import React from 'react';
import { Box, Typography, Grid, TextField, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

interface SocialLink {
  name: string;
  url: string;
  iconName: string;
}

const Contact = () => {
  const socialLinks: SocialLink[] = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/muhammad-waris-tafoor-08300822b',
      iconName: 'linkedin',
    },
    {
      name: 'Twitter',
      url: '#',
      iconName: 'twitter',
    },
    {
      name: 'Email',
      url: 'mailto:warismalik582@gmail.com',
      iconName: 'envelope',
    },
  ];

  const renderIcon = (iconName: string) => {
    const iconProps = { size: 24 };
    const IconComponent = {
      linkedin: FaLinkedin,
      twitter: FaTwitter,
      envelope: FaEnvelope,
    }[iconName] as React.ComponentType<{ size: number }>;

    return IconComponent ? <IconComponent {...iconProps} /> : null;
  };

  return (
    <Box
      id="contact"
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
          Get In Touch
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                backgroundColor: 'background.paper',
                height: '100%',
              }}
            >
              <Typography variant="h6" sx={{ color: 'white', mb: 3 }}>
                Contact Information
              </Typography>
              <Box sx={{ mb: 4 }}>
                <Typography variant="body1" sx={{ color: 'secondary.main', mb: 1 }}>
                  Email: warismalik582@gmail.com
                </Typography>
                <Typography variant="body1" sx={{ color: 'secondary.main', mb: 1 }}>
                  Phone: +447511927118
                </Typography>
                <Typography variant="body1" sx={{ color: 'secondary.main' }}>
                  Location: 11 Gorsty Avenue, Brierley hill, UK
                </Typography>
              </Box>
              <Typography variant="h6" sx={{ color: 'white', mb: 3 }}>
                Connect with me
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                {socialLinks.map((link, index) => (
                  <Button
                    key={index}
                    variant="outlined"
                    color="primary"
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      minWidth: 'auto',
                      p: 1,
                      borderColor: 'primary.main',
                      color: 'primary.main',
                      '&:hover': {
                        borderColor: 'primary.main',
                        backgroundColor: 'rgba(100, 255, 218, 0.1)',
                      },
                    }}
                  >
                    {renderIcon(link.iconName)}
                  </Button>
                ))}
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                backgroundColor: 'background.paper',
              }}
            >
              <Typography variant="h6" sx={{ color: 'white', mb: 3 }}>
                Send me a message
              </Typography>
              <form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Name"
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: 'white',
                          '& fieldset': {
                            borderColor: 'secondary.main',
                          },
                          '&:hover fieldset': {
                            borderColor: 'primary.main',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: 'secondary.main',
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      variant="outlined"
                      type="email"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: 'white',
                          '& fieldset': {
                            borderColor: 'secondary.main',
                          },
                          '&:hover fieldset': {
                            borderColor: 'primary.main',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: 'secondary.main',
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      variant="outlined"
                      multiline
                      rows={4}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: 'white',
                          '& fieldset': {
                            borderColor: 'secondary.main',
                          },
                          '&:hover fieldset': {
                            borderColor: 'primary.main',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: 'secondary.main',
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      sx={{
                        backgroundColor: 'primary.main',
                        color: '#0a192f',
                        '&:hover': {
                          backgroundColor: 'rgba(100, 255, 218, 0.8)',
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </motion.div>
    </Box>
  );
};

export default Contact;