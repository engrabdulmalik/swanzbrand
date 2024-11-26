// src/components/ShippingCards.jsx
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const ShippingCards = ({ product }) => {
    const Icon = product.icon;

    return (
        <Card sx={{ display: 'flex', alignItems: 'center', padding: 2, margin: 1, flex: 1 }}>
            <Icon style={{ fontSize: 40, marginRight: 10 }} />
            <CardContent sx={{ padding: '0 !important' }}>
                <Typography variant="h6" component="div" noWrap>
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.review}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ShippingCards;
