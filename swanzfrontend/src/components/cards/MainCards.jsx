import React from 'react';
import { Card, CardContent, Typography, CardMedia, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const MainCards = ({ product }) => {
    const { name, price, discount, image, title, _id, description } = product;

    return (
        <Card sx={{ maxWidth: 300, cursor: 'pointer' }}>
            <CardActionArea component={Link} to={`/product/main/${_id}`}>
                <CardMedia
                    component="img"
                    height="300"
                    image={image}
                    alt={name}
                />
                <CardContent>
                    <Typography variant="h6" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Price: {price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Discount: {discount}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default MainCards;
