import React from 'react';
import { Box, Typography, TextField, Button, Container, InputAdornment, Breadcrumbs, Link } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <Box>
      <Box sx={{ width: '100%', backgroundColor: 'lightgrey', padding: 2, textAlign: 'center' }}>
        <Breadcrumbs
          aria-label="breadcrumb"
          separator="/"
          sx={{ justifyContent: 'center', display: 'inline-flex', fontSize: '1.5rem' }}
        >
          <Link
            href="/"
            underline="hover"
            color="inherit"
            sx={{ fontSize: '1.5rem' }}
          >
            Home
          </Link>
          <Typography
            color="textPrimary"
            sx={{ fontSize: '1.5rem' }}
          >
            Error 404
          </Typography>
        </Breadcrumbs>
      </Box>
      <Container maxWidth="md" sx={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h1" sx={{ color: 'primary.main', fontSize: 200, fontWeight: 'bold' }}>
          404
        </Typography>
        <Typography variant="h4" sx={{ mt: 2 }}>
          OOPS! PAGE NOT FOUND
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          Sorry but the page you are looking for does not exist, has been removed, name changed or is temporarily unavailable.
        </Typography>
        <Box sx={{ mt: 3, width: '100%' }}>
          <TextField 
            label="Search..." 
            variant="outlined" 
            fullWidth 
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
          <Button variant="contained" sx={{ mt: 2 }} onClick={handleBackToHome}>
            Back to home page
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Error;
