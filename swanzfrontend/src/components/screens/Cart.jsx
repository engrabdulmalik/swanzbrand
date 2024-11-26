import React, { useState } from 'react';
import { Container, Typography, Breadcrumbs, Link as MuiLink, Box, Button, Grid, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {
  // State to store cart items
  const [cartItems, setCartItems] = useState([
    // Example cart items
    { id: 1, name: 'Item 1', price: 10, quantity: 1 },
    { id: 2, name: 'Item 2', price: 15, quantity: 2 },
  ]);

  // Function to remove an item from the cart
  const handleRemoveItem = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  // Function to update item quantity
  const handleUpdateQuantity = (itemId, newQuantity) => {
    setCartItems(
      cartItems.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
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
            Cart
          </Typography>
        </Breadcrumbs>
      </Box>

      <Container>
        {cartItems.length > 0 ? (
          <Box sx={{ marginTop: 5 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Your Cart
            </Typography>
            <Grid container spacing={2}>
              {cartItems.map(item => (
                <Grid item xs={12} key={item.id}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: 2,
                      backgroundColor: 'white',
                      borderRadius: 1,
                      boxShadow: 1,
                    }}
                  >
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography variant="h6">${item.price}</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Button
                        variant="outlined"
                        onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </Button>
                      <Typography variant="h6" sx={{ mx: 2 }}>
                        {item.quantity}
                      </Typography>
                      <Button
                        variant="outlined"
                        onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </Button>
                    </Box>
                    <IconButton onClick={() => handleRemoveItem(item.id)} color="secondary">
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Box sx={{ textAlign: 'right', marginTop: 4 }}>
              <Typography variant="h5">Total: ${calculateTotal()}</Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: 2 }}
              >
                Checkout
              </Button>
            </Box>
          </Box>
        ) : (
          <Box sx={{ textAlign: 'center', marginTop: 20 }}>
            <ShoppingCartIcon sx={{ fontSize: '6rem' }} />
            <Typography variant="h4" component="h1" gutterBottom>
              No Items Found in Cart
            </Typography>
            <Button
              component={Link}
              to="/shop"
              variant="contained"
              color="primary"
              sx={{ marginTop: 2, padding: '12px 24px', fontSize: '1.25rem', marginBottom: 30 }}
            >
              Shop Now
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Cart;
