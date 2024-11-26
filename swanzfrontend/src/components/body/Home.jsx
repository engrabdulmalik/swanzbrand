// src/components/body/Home.jsx
import React, { useEffect, useState } from 'react';
import { Grid, Container, Box, Typography } from '@mui/material';
import ShippingCards from '../../components/cards/ShippingCards';
import MainCards from '../../components/cards/MainCards';
import BlogCards from '../../components/cards/BlogCards';
import { Shipping } from '../../assets/js/Shipping';
import { Main } from '../../assets/js/Main';
import { Blog } from '../../assets/js/Blog';
import DailyDeals from '../../components/body/DailyDeals';
// import api from "../api"

const Home = () => {
    // const[nots, setNote] = useState([]);
    // const[content, setContent] = useState("");
    // const[titel, setTitel] = useState("");

    // useEffect(() => {
    //     getNotes();
    // },[])

    // const getNotes = () => {
    //     api
    //     .grt("api/notes/")
    //     .then((res) => res.data)
    //     .then((data) => {setNote(data); console.log(data)})
    //     .catch((err) => alert(err));

    // };
    return (
        <Container sx={{ mt: 4, mb: 4 }}>
            <Box sx={{ display: 'flex', overflowX: 'auto', mb: 4 }}>
                {Shipping.map((item) => (
                    <Box key={item._id} sx={{ flex: '0 0 auto', minWidth: '250px', mx: 1 }}>
                        <ShippingCards product={item} />
                    </Box>

                ))}
            </Box>
            <DailyDeals />
           
            <Grid container spacing={4}>
                {Main.map((item) => (
                    <Grid item xs={12} sm={6} md={3} key={item._id}>
                        <MainCards product={item} />
                    </Grid>
                ))}
            </Grid>
            <Typography 
                variant="h4" 
                sx={{ 
                    fontWeight: 'bold', 
                    textAlign: 'center', 
                    mt: 4, 
                    mb: 2,
                    position: 'relative',
                    '&::before, &::after': {
                        content: '""',
                        position: 'absolute',
                        top: '50%',
                        width: '40%',
                        borderBottom: '1px solid #000',
                        transform: 'translateY(-50%)'
                    },
                    '&::before': {
                        left: 0
                    },
                    '&::after': {
                        right: 0
                    }
                }}
            >
                OUR BLOG
            </Typography>
            <Grid container spacing={4} sx={{ mt: 4 }}>
                {Blog.map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={item.id}>
                        <BlogCards productId={item.id} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Home;
