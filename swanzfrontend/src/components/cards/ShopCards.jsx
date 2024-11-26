import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import { ShopId } from '../../assets/js/ShopId';

const ShopCards = ({ productId }) => {
    const navigate = useNavigate();
    const product = ShopId.find(p => p._id === productId);

    console.log('ShopCard Product:', product); // Debug log

    if (!product) return null;

    const handleClick = () => {
        navigate(`/product-details/${product._id}/shopid`);
    };

    return (
        <Card sx={{ maxWidth: 345, marginBottom: 2, position: 'relative', cursor: 'pointer', boxShadow: 3, borderRadius: '8px' }} onClick={handleClick}>
            <CardMedia
                component="img"
                height="350"
                image={product.image}
                alt={product.title}
                sx={{ borderRadius: '8px 8px 0 0' }}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                </Typography>
                <Rating
                    name={`rating-${product._id}`}
                    value={product.rating || 0}
                    readOnly
                    size="small"
                    sx={{ mb: 1 }}
                />
                <Typography variant="body2" color="text.secondary">
                    Price: {product.price || 'N/A'}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Discount: {product.discount || 'N/A'}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ShopCards;
