// src/components/body/NewArrivals.jsx
import React from 'react';
import { Grid, Container, Box, Typography } from '@mui/material';
import ShippingCards from '../../components/cards/ShippingCards';
import BlogCards from '../../components/cards/BlogCards';
import ArrivalCards from '../../components/cards/ArrivalCards'; 

import { Shipping } from '../../assets/js/Shipping';
import { Blog } from '../../assets/js/Blog';
import DailyDeals from '../../components/body/DailyDeals';

const NewArrivals = () => {
    return (
        <Container sx={{ mt: 4, mb: 4 }}>
            {/* Shipping Section */}
            <Box sx={{ display: 'flex', overflowX: 'auto', mb: 4 }}>
                {Shipping.map((item) => (
                    <Box key={item._id} sx={{ flex: '0 0 auto', minWidth: '250px', mx: 1 }}>
                        <ShippingCards product={item} />
                    </Box>
                ))}
            </Box>

            {/* Daily Deals Section */}
            <DailyDeals />

            {/* Arrival Cards Section */}
            <Box sx={{ textAlign: 'center', mb: 8 }}> {/* Increased margin-bottom for spacing */}
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 4 }}>
                    <Box sx={{ flexGrow: 1, borderBottom: '1px solid #000', marginRight: 2 }} />
                    <Typography variant="h4" sx={{ fontWeight: 'bold', margin: '0 2rem' }}>
                        New Arrivals
                    </Typography>
                    <Box sx={{ flexGrow: 1, borderBottom: '1px solid #000', marginLeft: 2 }} />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                    <ArrivalCards />  {/* Include ArrivalCards component here */}
                </Box>
            </Box>

            {/* Blog Section */}
            <Box sx={{ textAlign: 'center', mt: 8 }}> {/* Increased margin-top for spacing */}
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 4 }}>
                    <Box sx={{ flexGrow: 1, borderBottom: '1px solid #000', marginRight: 2 }} />
                    <Typography variant="h4" sx={{ fontWeight: 'bold', margin: '0 2rem' }}>
                        Our Blog
                    </Typography>
                    <Box sx={{ flexGrow: 1, borderBottom: '1px solid #000', marginLeft: 2 }} />
                </Box>
                <Grid container spacing={4} justifyContent="center">
                    {Blog.map((item) => (
                        <Grid item xs={12} sm={6} md={4} key={item.id}>
                            <BlogCards productId={item.id} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default NewArrivals;
