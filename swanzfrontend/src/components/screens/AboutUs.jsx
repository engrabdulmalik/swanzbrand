import React, { useEffect, useState } from 'react';
import { Typography, Breadcrumbs, Link as MuiLink, Box, Divider, Grid, Paper, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { Work, Coffee, AutoStories, People, Facebook, Instagram, Twitter } from '@mui/icons-material';
import pic36 from '../../assets/images/pic36.jpg';
import pic37 from '../../assets/images/pic37.jpg';
import pic38 from '../../assets/images/pic38.jpg';
import pic39 from '../../assets/images/pic39.jpg';

const counters = [
  { id: 1, label: 'Projects Done', value: 360, icon: <Work /> },
  { id: 2, label: 'Cups of Coffee', value: 690, icon: <Coffee /> },
  { id: 3, label: 'Branding', value: 100, icon: <AutoStories /> },
  { id: 4, label: 'Happy Clients', value: 420, icon: <People /> },
];

const Counter = ({ label, value, icon }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= value) {
          clearInterval(interval);
          return value;
        }
        return prev + Math.ceil(value / 100); // Adjust increment step if needed
      });
    }, 30); // Adjust interval speed if needed

    return () => clearInterval(interval);
  }, [value]);

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Paper
        elevation={3}
        sx={{
          padding: 3,
          textAlign: 'center',
          height: '200px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 2
        }}
      >
        <Box sx={{ fontSize: 40, mb: 2 }}>{icon}</Box>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{label}</Typography>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>{count}</Typography>
      </Paper>
    </Grid>
  );
};

const AboutUs = () => {
  const teamMembers = [
    { image: pic36, name: 'Sir Asim', description: 'Head of Department' },
    { image: pic39, name: 'Sir Abdul-Malik', description: 'Divisional Head' },
    { image: pic37, name: 'Sir Amish', description: 'Developer' },
    { image: pic38, name: 'Sir Aamer', description: 'Product Manager' }
  ];

  return (
    <Box>
      <Box sx={{ width: '100%', backgroundColor: 'lightgrey', padding: 2, textAlign: 'center' }}>
        <Breadcrumbs
          aria-label="breadcrumb"
          separator="/"
          sx={{ justifyContent: 'center', display: 'inline-flex', fontSize: '1.5rem' }}
        >
          <MuiLink
            component={Link}
            to="/"
            underline="hover"
            color="inherit"
            sx={{ fontSize: '1.5rem' }}
          >
            Home
          </MuiLink>
          <Typography
            color="textPrimary"
            sx={{ fontSize: '1.5rem' }}
          >
            About Us
          </Typography>
        </Breadcrumbs>
      </Box>

      <Box sx={{ padding: 4, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Who We Are
        </Typography>
        <Box sx={{ display: 'inline-block', textAlign: 'center' }}>
          <Typography variant="h3" sx={{ marginTop: 4 }}>
            Welcome to Flone
          </Typography>
          <Divider sx={{ marginTop: 1, marginBottom: 2, width: '100%', backgroundColor: 'black', height: '2px' }} />
        </Box>
        <Typography sx={{ marginTop: 2, marginBottom: 2 }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labor et dolore magna aliqua.
        </Typography>
        <Typography sx={{ marginTop: 2, marginBottom: 2 }}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo consequat irure.
        </Typography>
        <Typography sx={{ fontWeight: 'bold' }}>
          Thank you for visiting our page!
        </Typography>
      </Box>

      <Box sx={{ padding: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Paper
              elevation={3}
              sx={{
                padding: 3,
                textAlign: 'center',
                height: '200px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 2
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Our Vision</Typography>
              <Typography>
                Flone provides how all this mistaken idea of denouncing pleasure
                and pain was born and will give you a complete account of the system,
                and expound the actual teachings of the great explorer of the truth.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper
              elevation={3}
              sx={{
                padding: 3,
                textAlign: 'center',
                height: '200px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 2
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Our Mission</Typography>
              <Typography>
                Flone provides how all this mistaken idea of denouncing pleasure
                and pain was born and will give you a complete account of the system,
                and expound the actual teachings of the great explorer of the truth.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper
              elevation={3}
              sx={{
                padding: 3,
                textAlign: 'center',
                height: '200px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 2
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Our Goals</Typography>
              <Typography>
                Flone provides how all this mistaken idea of denouncing pleasure
                and pain was born and will give you a complete account of the system,
                and expound the actual teachings of the great explorer of the truth.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

     <Box sx={{ padding: 4, backgroundColor: 'lightgrey', height: 'auto', minHeight: '200px',marginTop:'2%',marginBottom:'2%' }}>
  <Grid container spacing={4}>
    {counters.map(counter => (
      <Counter key={counter.id} label={counter.label} value={counter.value} icon={counter.icon} />
    ))}
  </Grid>
</Box>

      <Box sx={{ padding: 4, textAlign: 'center' }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Meet Our Team Members
        </Typography>
        <Divider sx={{ width: '100%', maxWidth: '400px', margin: 'auto', backgroundColor: 'black', height: '2px' }} />
        <Typography sx={{ marginTop: 2, marginBottom: 2 }}>
          Lorem ipsum dolor sit amet conse ctetu.
        </Typography>
      </Box>

      <Box sx={{ padding: 4 }}>
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ maxWidth: 345, position: 'relative', '&:hover .hover-icons': { opacity: 1 } }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={member.image}
                  alt={member.name}
                />
                <Box
                  className="hover-icons"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s ease-in-out',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  }}
                >
                  <IconButton aria-label="share on facebook" sx={{ color: 'white' }}>
                    <Facebook />
                  </IconButton>
                  <IconButton aria-label="share on instagram" sx={{ color: 'white' }}>
                    <Instagram />
                  </IconButton>
                  <IconButton aria-label="share on twitter" sx={{ color: 'white' }}>
                    <Twitter />
                  </IconButton>
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutUs;
