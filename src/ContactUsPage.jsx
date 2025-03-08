// src/ContactUsPage.jsx
import React from 'react';
import { Container, Typography, Box, TextField, Button, Fade } from '@mui/material';

export default function ContactUsPage() {
  return (
    <Fade in={true} timeout={1000}>
      <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
        <Box
          sx={{
            p: 4,
            background: 'linear-gradient(45deg, #283048, #859398)',
            borderRadius: 2,
            color: '#fff',
            textAlign: 'center',
            boxShadow: 3
          }}
        >
          <Typography variant="h3" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" gutterBottom>
            We would love to hear from you! Please fill out the form below or email us directly at{' '}
            <a
              href="mailto:info@nmi-solutions.com"
              style={{ color: '#FFD700', textDecoration: 'none' }}
            >
              info@nmi-solutions.com
            </a>.
          </Typography>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{ mt: 2 }}
          >
            <TextField
              fullWidth
              label="Your Name"
              variant="outlined"
              sx={{ mb: 2, backgroundColor: '#fff', borderRadius: 1 }}
            />
            <TextField
              fullWidth
              label="Your Email"
              variant="outlined"
              sx={{ mb: 2, backgroundColor: '#fff', borderRadius: 1 }}
            />
            <TextField
              fullWidth
              label="Your Message"
              multiline
              rows={4}
              variant="outlined"
              sx={{ mb: 2, backgroundColor: '#fff', borderRadius: 1 }}
            />
            <Button variant="contained" color="secondary" type="submit">
              Send Message
            </Button>
          </Box>
        </Box>
      </Container>
    </Fade>
  );
}
