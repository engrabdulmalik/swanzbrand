// src/components/cards/BlogCards.jsx
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { Blog } from '../../assets/js/Blog';

const BlogCards = ({ productId }) => {
    const product = Blog.find(p => p.id === productId);

    if (!product) return null;

    return (
        <Link to={`/product/blog/${product.id}`} style={{ textDecoration: 'none' }}>
            <Card sx={{ maxWidth: 345, marginBottom: 2, position: 'relative', cursor: 'pointer' }}>
                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        height: 400, // Reserve space for background image
                        backgroundImage: `url(${product.backgroundimage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: 'flex',
                        alignItems: 'flex-end'
                    }}
                >
                    <CardContent
                        sx={{
                            width: '100%',
                            backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background for the text
                            paddingBottom: 2,
                        }}
                    >
                        <Typography gutterBottom variant="h5" component="div">
                            {product.description}
                        </Typography>
                    </CardContent>
                </Box>
            </Card>
        </Link>
    );
};

export default BlogCards;
