import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Container, Button } from '@mui/material';
import { Shipping } from '../../assets/js/Shipping';
import { Main } from '../../assets/js/Main';
import { Blog } from '../../assets/js/Blog';
import { ShopId } from '../../assets/js/ShopId';

// Dummy cart handler for this example
const addToCart = (product) => {
  console.log("Adding to cart:", product);
  // Implement your cart logic here (e.g., updating a global state or local storage)
};

const ProductDetails = () => {
  const { productId, type } = useParams();
  const normalizedProductId = parseInt(productId, 10);

  // Define a map to easily fetch the product list based on type
  const productMap = {
    shipping: Shipping,
    main: Main,
    blog: Blog,
    shopid: ShopId
  };

  const products = productMap[type] || [];
  const product = products.find(item => item._id === normalizedProductId);

  console.log('Product:', product); // Debug log

  if (!product) {
    return (
      <Container sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h6">Product not found</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ textAlign: 'center' }}>
        <img src={product.image} alt={product.title} style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
        <Typography variant="h4" sx={{ mt: 2 }}>{product.title || 'No title'}</Typography>
        <Typography variant="body1" sx={{ mt: 2, mb: 2 }}>{product.description || 'No description available.'}</Typography>
        <Typography variant="h6" sx={{ mb: 1 }}>Price: {product.price || 'N/A'}</Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>Discount: {product.discount || 'N/A'}</Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </Button>
      </Box>
    </Container>
  );
};

export default ProductDetails;
