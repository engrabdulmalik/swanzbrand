// src/components/cards/ArrivalCards.jsx
import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia, CardActions, Button } from '@mui/material';
import { Arrivals } from '../../assets/js/Arrivals';

const ArrivalCards = () => {
  return (
    <Grid container spacing={4}>
      {Arrivals.map(item => (
        <Grid item xs={12} sm={6} md={3} key={item._id}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={item.image}
              alt={item.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
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
  );
};

export default ArrivalCards;
