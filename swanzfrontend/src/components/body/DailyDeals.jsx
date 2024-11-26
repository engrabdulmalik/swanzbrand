// src/components/body/DailyDeals.jsx
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const DailyDeals = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <Box sx={{ mt: 4, mb: 4, textAlign: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{ flexGrow: 1, borderBottom: '1px solid #000', marginRight: 2 }} />
                <Typography variant="h4" sx={{ fontWeight: 'bold', margin: '0 2rem' }}>
                    DAILY DEALS
                </Typography>
                <Box sx={{ flexGrow: 1, borderBottom: '1px solid #000', marginLeft: 2 }} />
            </Box>
            <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
                <Grid item>
                    <Typography 
                        variant="h6" 
                        sx={{ cursor: 'pointer', color: 'primary.main' }}
                        onClick={() => handleNavigation('/new-arrivals')}
                    >
                        New Arrivals
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography 
                        variant="h6" 
                        sx={{ cursor: 'pointer', color: 'primary.main' }}
                        onClick={() => handleNavigation('/best-sellers')}
                    >
                        Best Sellers
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography 
                        variant="h6" 
                        sx={{ cursor: 'pointer', color: 'primary.main' }}
                        onClick={() => handleNavigation('/sales-items')}
                    >
                        Sales Items
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DailyDeals;
