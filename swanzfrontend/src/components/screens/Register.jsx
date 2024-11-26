import React, { useState } from 'react';
import { Container, Typography, Breadcrumbs, Link as MuiLink, Box, Button, TextField, Grid, Checkbox, FormControlLabel } from '@mui/material';
import { Link } from 'react-router-dom';

const Register = () => {
  const [activeForm, setActiveForm] = useState('login');
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });
  const [registerData, setRegisterData] = useState({
    username: '',
    password: '',
    termsAccepted: false,
  });

  const handleFormClick = (formType) => {
    setActiveForm(formType);
  };

  // Handle input change for both forms
  const handleInputChange = (e, formType) => {
    const { name, value } = e.target;
    if (formType === 'login') {
      setLoginData({
        ...loginData,
        [name]: value,
      });
    } else if (formType === 'register') {
      setRegisterData({
        ...registerData,
        [name]: value,
      });
    }
  };

  const handleCheckboxChange = (e) => {
    setRegisterData({
      ...registerData,
      termsAccepted: e.target.checked,
    });
  };

  const handleLoginClick = () => {
    // Basic validation
    if (!loginData.username || !loginData.password) {
      alert("Please fill in all fields.");
      return;
    }

    console.log("Logging in:", loginData);

    // Add login logic here (e.g., API call)
    alert("Login successful!");
  };

  const handleRegisterClick = () => {
    if (!registerData.termsAccepted) {
      alert("Please accept the terms and conditions to proceed.");
      return;
    }

    // Basic validation
    if (!registerData.username || !registerData.password) {
      alert("Please fill in all fields.");
      return;
    }

    console.log("Registering:", registerData);

    // Add registration logic here (e.g., API call)
    alert("Registration successful!");
  };

  return (
    <Box>
      <Box sx={{ width: '100%', backgroundColor: 'lightgrey', padding: 2, textAlign: 'center' }}>
        <Breadcrumbs
          aria-label="breadcrumb"
          separator="/"
          sx={{ justifyContent: 'center', display: 'inline-flex', fontSize: '1.5rem' }}
        >
          <MuiLink
            component={Link}
            to="/"
            underline="hover"
            color="inherit"
            sx={{ fontSize: '1.5rem' }}
          >
            Home
          </MuiLink>
          <Typography
            color="textPrimary"
            sx={{ fontSize: '1.5rem' }}
          >
            Login Register
          </Typography>
        </Breadcrumbs>
      </Box>

      <Container sx={{ marginTop: 4 }}>
        <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
          <Typography variant="h4">
            <Button
              variant="text"
              color="primary"
              onClick={() => handleFormClick('login')}
            >
              Login
            </Button>
            {' | '}
            <Button
              variant="text"
              color="primary"
              onClick={() => handleFormClick('register')}
            >
              Register
            </Button>
          </Typography>
        </Box>

        {activeForm === 'login' && (
          <Box sx={{ padding: 2, backgroundColor: 'white', borderRadius: 1, maxWidth: 400, margin: '0 auto' }}>
            <Typography variant="h6" gutterBottom>
              Login
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Username"
                  variant="outlined"
                  fullWidth
                  sx={{ marginBottom: 2 }}
                  name="username"
                  value={loginData.username}
                  onChange={(e) => handleInputChange(e, 'login')}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  sx={{ marginBottom: 2 }}
                  name="password"
                  value={loginData.password}
                  onChange={(e) => handleInputChange(e, 'login')}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Remember me"
                  sx={{ marginBottom: 2 }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="text"
                  sx={{ marginBottom: 2 }}
                >
                  Forgot Password?
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleLoginClick}  // Login functionality here
                  >
                    Login
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        )}

        {activeForm === 'register' && (
          <Box sx={{ padding: 2, backgroundColor: 'white', borderRadius: 1, maxWidth: 400, margin: '0 auto' }}>
            <Typography variant="h6" gutterBottom>
              Register
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Username"
                  variant="outlined"
                  fullWidth
                  sx={{ marginBottom: 2 }}
                  name="username"
                  value={registerData.username}
                  onChange={(e) => handleInputChange(e, 'register')}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  sx={{ marginBottom: 2 }}
                  name="password"
                  value={registerData.password}
                  onChange={(e) => handleInputChange(e, 'register')}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={registerData.termsAccepted}
                      onChange={handleCheckboxChange}
                    />
                  }
                  label="I accept the terms and conditions"
                  sx={{ marginBottom: 2 }}
                />
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleRegisterClick}  // Register functionality here
                  >
                    Register
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Register;
