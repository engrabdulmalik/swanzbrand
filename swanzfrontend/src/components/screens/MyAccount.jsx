import React, { useState } from 'react';
import { Container, Typography, Breadcrumbs, Link as MuiLink, Box, Button, TextField, Grid, IconButton, Collapse } from '@mui/material';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


const MyAccount = () => {
  const [openForm, setOpenForm] = useState(null);

  const handleClick = (type) => {
    setOpenForm(openForm === type ? null : type);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Box sx={{ flex: 1 }}>
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
              MyAccount
            </Typography>
          </Breadcrumbs>
        </Box>

        <Container sx={{ marginTop: 30 }}>
          <Grid container spacing={5}>
            {/* Row 1: Edit Your Email Account */}
            <Grid item xs={12}>
              <Box sx={{ backgroundColor: 'lightgrey', borderRadius: 1, marginBottom: 1, border: 'none', outline: 'none', width: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 2 }}>
                  <Button
                    onClick={() => handleClick('email')}
                    variant="outlined"
                    color="primary"
                    sx={{ backgroundColor: 'lightgrey', color: 'black', borderColor: 'grey', '&:hover': { backgroundColor: 'grey', color: 'white' } }}
                  >
                    1. Edit Your Email Account
                  </Button>
                  <IconButton onClick={() => handleClick('email')}>
                    {openForm === 'email' ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </IconButton>
                </Box>
                <Collapse in={openForm === 'email'}>
                  <Box sx={{ padding: 2, backgroundColor: 'white' }}>
                    <Typography variant="h6" gutterBottom>
                      My Account Information
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          label="First Name"
                          variant="outlined"
                          fullWidth
                          sx={{ marginBottom: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          label="Last Name"
                          variant="outlined"
                          fullWidth
                          sx={{ marginBottom: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          label="Email Address"
                          variant="outlined"
                          fullWidth
                          sx={{ marginBottom: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          label="Telephone"
                          variant="outlined"
                          fullWidth
                          sx={{ marginBottom: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          label="Fax"
                          variant="outlined"
                          fullWidth
                          sx={{ marginBottom: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
                          <Button
                            variant="contained"
                            color="primary"
                          >
                            Continue
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Collapse>
              </Box>
            </Grid>

            {/* Row 2: Change Your Password */}
            <Grid item xs={12}>
              <Box sx={{ backgroundColor: 'lightgrey', borderRadius: 1, marginBottom: 1, border: 'none', outline: 'none', width: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 2 }}>
                  <Button
                    onClick={() => handleClick('password')}
                    variant="outlined"
                    color="primary"
                    sx={{ backgroundColor: 'lightgrey', color: 'black', borderColor: 'grey', '&:hover': { backgroundColor: 'grey', color: 'white' } }}
                  >
                    2. Change Your Password
                  </Button>
                  <IconButton onClick={() => handleClick('password')}>
                    {openForm === 'password' ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </IconButton>
                </Box>
                <Collapse in={openForm === 'password'}>
                  <Box sx={{ padding: 2, backgroundColor: 'white' }}>
                    <Typography variant="h6" gutterBottom>
                      Change Your Password
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          label="Current Password"
                          type="password"
                          variant="outlined"
                          fullWidth
                          sx={{ marginBottom: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          label="New Password"
                          type="password"
                          variant="outlined"
                          fullWidth
                          sx={{ marginBottom: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          label="Confirm New Password"
                          type="password"
                          variant="outlined"
                          fullWidth
                          sx={{ marginBottom: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
                          <Button
                            variant="contained"
                            color="primary"
                          >
                            Continue
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Collapse>
              </Box>
            </Grid>

            {/* Row 3: Modify Your Address Book */}
            <Grid item xs={12}>
              <Box sx={{ backgroundColor: 'lightgrey', borderRadius: 1, marginBottom: 1, border: 'none', outline: 'none', width: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 2 }}>
                  <Button
                    onClick={() => handleClick('address')}
                    variant="outlined"
                    color="primary"
                    sx={{ backgroundColor: 'lightgrey', color: 'black', borderColor: 'grey', '&:hover': { backgroundColor: 'grey', color: 'white' } }}
                  >
                    3. Modify Your Address Book
                  </Button>
                  <IconButton onClick={() => handleClick('address')}>
                    {openForm === 'address' ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </IconButton>
                </Box>
                <Collapse in={openForm === 'address'}>
                  <Box sx={{ padding: 2, backgroundColor: 'white' }}>
                    <Typography variant="h6" gutterBottom>
                      Modify Your Address Book
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          label="Address Line 1"
                          variant="outlined"
                          fullWidth
                          sx={{ marginBottom: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          label="Address Line 2"
                          variant="outlined"
                          fullWidth
                          sx={{ marginBottom: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          label="City"
                          variant="outlined"
                          fullWidth
                          sx={{ marginBottom: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          label="State"
                          variant="outlined"
                          fullWidth
                          sx={{ marginBottom: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          label="Zip Code"
                          variant="outlined"
                          fullWidth
                          sx={{ marginBottom: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
                          <Button
                            variant="contained"
                            color="primary"
                          >
                            Continue
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Collapse>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ padding: 2, backgroundColor: 'lightgrey', textAlign: 'center' }}>
        <Typography variant="body2" color="textSecondary">
          &copy; {new Date().getFullYear()} Flone. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default MyAccount;
