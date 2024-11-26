import React from 'react';
import logo from "../../assets/images/logo.png";
import { Container, Grid, Typography, Box, Link, TextField, Button } from '@mui/material';

const Footer = () => {
  const handleSubscribe = (event) => {
    event.preventDefault();
    
    console.log('Subscribing...');
  };

  return (
    <Box sx={{ bgcolor: "#f5f5f5", color: "black", py: 4 }}>
      <Container>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={3}>
            <Box
              component="img"
              src={logo}
              alt="My Logo"
              sx={{
                maxWidth: "170px", // Adjust as needed
                maxHeight: "170px", // Adjust as needed
                display: "block",
                margin: "auto",
                zIndex: 1,
                width: "auto", // Auto width keeps aspect ratio
                height: "auto", // Auto height keeps aspect ratio
              }}
            />
            <Typography
              variant="body2"
              color="textSecondary"
              gutterBottom
              sx={{ color: "grey" }}
              mt={8}
              ml={5}
            >
              &copy; 2020 Flone. All rights reserved.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={2}>
            <Typography
              variant="h5"
              component="div"
              gutterBottom
              sx={{ color: "black" }}
            >
              About Us
            </Typography>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Link
                  href="#"
                  color="inherit"
                  underline="none"
                  sx={{ color: "grey" }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  color="inherit"
                  underline="none"
                  sx={{ color: "grey" }}
                >
                  Store Location
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  color="inherit"
                  underline="none"
                  sx={{ color: "grey" }}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  color="inherit"
                  underline="none"
                  sx={{ color: "grey" }}
                >
                  Order Tracking
                </Link>
              </li>
            </ul>
          </Grid>

          <Grid item xs={12} sm={2}>
            <Typography
              variant="h5"
              component="div"
              gutterBottom
              sx={{ color: "black" }}
            >
              Useful Links
            </Typography>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Link
                  href="#"
                  color="inherit"
                  underline="none"
                  sx={{ color: "grey" }}
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  color="inherit"
                  underline="none"
                  sx={{ color: "grey" }}
                >
                  Support Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  color="inherit"
                  underline="none"
                  sx={{ color: "grey" }}
                >
                  Side Guide
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  color="inherit"
                  underline="none"
                  sx={{ color: "grey" }}
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </Grid>

          <Grid item xs={12} sm={2}>
            <Typography
              variant="h5"
              component="div"
              gutterBottom
              sx={{ color: "black" }}
            >
              Follow Us
            </Typography>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Link
                  href="#"
                  color="inherit"
                  underline="none"
                  sx={{ color: "grey" }}
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  color="inherit"
                  underline="none"
                  sx={{ color: "grey" }}
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  color="inherit"
                  underline="none"
                  sx={{ color: "grey" }}
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  color="inherit"
                  underline="none"
                  sx={{ color: "grey" }}
                >
                  Youtube
                </Link>
              </li>
            </ul>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Typography
              variant="h5"
              component="div"
              gutterBottom
              sx={{ color: "black" }}
            >
              Subscribe
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              gutterBottom
              sx={{ color: "grey" }}
            >
              Get email updates about our latest shop and special offers
            </Typography>
            <form onSubmit={handleSubscribe}>
              <TextField
                type="email"
                variant="outlined"
                placeholder="Enter your email"
                fullWidth
                sx={{ mb: 1 }}
              />
              <Button type="submit" variant="contained" color="primary">
                Subscribe
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
