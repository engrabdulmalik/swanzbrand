// src/components/SellerCard.jsx
import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';
import { BestSeller } from '../../assets/js/BestSeller';

const SellerCard = () => {
    return (
        <div style={{ padding: '20px' }}>
            <Grid container spacing={3}>
                {BestSeller.map((item) => (
                    <Grid item xs={12} sm={6} md={3} key={item._id}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={item.image}
                                alt={item.name}
                            />
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {item.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Price: {item.price}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Discount: {item.discount}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Add to Cart
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default SellerCard;
