import React from 'react';
import { Box, Breadcrumbs, Typography, TextField, Button, Paper, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { Phone, Email, LocationOn, Facebook, Twitter, Instagram } from '@mui/icons-material';

const ContactUs = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Box sx={{ width: '100%', backgroundColor: 'lightgrey', padding: 2, textAlign: 'center' }}>
        <Breadcrumbs
          aria-label="breadcrumb"
          separator="/"
          sx={{ justifyContent: 'center', display: 'inline-flex', fontSize: '1.5rem' }}
        >
          <Link
            to="/"
            underline="hover"
            color="inherit"
            style={{ fontSize: '1.5rem' }}
          >
            Home
          </Link>
          <Typography
            color="textPrimary"
            sx={{ fontSize: '1.5rem' }}
          >
            Contact Us
          </Typography>
        </Breadcrumbs>
      </Box>
      {/* Map Section */}
      <Box sx={{ width: '100%', marginBottom: 4 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.581350283851!2d-122.42302668468169!3d37.8268751797701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808cc9e65c79%3A0xabc1234567890!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1622006285174!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </Box>

      <Grid container spacing={4} sx={{ marginTop: 4 }}>
        <Grid item xs={9} md={3}>
          <Paper elevation={6} sx={{ padding: 3, height: '92%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
              Contact Information
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Phone color="primary" />
                <Typography variant="body1">+1 234 567 890</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Email color="primary" />
                <Typography variant="body1">info@example.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <LocationOn color="primary" />
                <Typography variant="body1">1234 Address St, City, Country</Typography>
              </Box>
            </Box>
            <Box sx={{ marginTop: 3, textAlign: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Follow Us</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: 1 }}>
                <Facebook color="primary" />
                <Twitter color="primary" />
                <Instagram color="primary" />
              </Box>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper elevation={6} sx={{ padding: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Get in Touch
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
                sx={{ backgroundColor: '#f9f9f9' }}
              />
              <TextField
                fullWidth
                label="Email"
                type="email"
                margin="normal"
                variant="outlined"
                sx={{ backgroundColor: '#f9f9f9' }}
              />
              <TextField
                fullWidth
                label="Subject"
                margin="normal"
                variant="outlined"
                sx={{ backgroundColor: '#f9f9f9' }}
              />
              <TextField
                fullWidth
                label="Your Message"
                multiline
                rows={4}
                margin="normal"
                variant="outlined"
                sx={{ backgroundColor: '#f9f9f9' }}
              />
              <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    padding: '10px 20px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    borderRadius: 2,
                    '&:hover': {
                      backgroundColor: 'primary.dark',
                      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                    },
                  }}
                >
                  Send
                </Button>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;
