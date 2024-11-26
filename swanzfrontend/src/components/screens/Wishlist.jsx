import React from 'react';
import { Container, Typography, Breadcrumbs, Link as MuiLink, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite'; // Import Favorite Icon

const Checkout = () => {
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
            WishList
          </Typography>
        </Breadcrumbs>
      </Box>

      <Container>
        <Box sx={{ textAlign: 'center', marginTop: 20 }}>
          <FavoriteIcon sx={{ fontSize: '6rem' }} /> {/* Use Favorite Icon */}
          <Typography variant="h4" component="h1" gutterBottom>
            No Items Found in Wishlist
          </Typography>
          <Button
            component={Link}
            to="/shop"
            variant="contained"
            color="primary"
            sx={{ marginTop: 2, padding: '12px 24px', fontSize: '1.25rem', marginBottom: 30 }}
          >
            Add Items
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Checkout;
