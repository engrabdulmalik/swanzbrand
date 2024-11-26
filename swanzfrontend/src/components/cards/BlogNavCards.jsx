import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const BlogNavCard = ({ BlogNav }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {BlogNav.map((item) => (
        <Card key={item._id} sx={{ marginBottom: 3, maxWidth: 500, borderRadius: 2, boxShadow: 3 }}>
          <CardMedia
            component="img"
            height="300" // Adjust height as needed
            image={item.image}
            alt={item.name}
            sx={{ objectFit: 'cover', borderTopLeftRadius: 2, borderTopRightRadius: 2 }}
          />
          <CardContent>
            <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
              {item.review}
            </Typography>
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Link to="/blog-detailed-standard" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>
                Read More
              </Link>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography sx={{ marginRight: 1, color: 'text.secondary' }}>
                  Share:
                </Typography>
                <IconButton aria-label="share on Facebook" sx={{ color: '#3b5998' }}>
                  <Facebook />
                </IconButton>
                <IconButton aria-label="share on Instagram" sx={{ color: '#E4405F' }}>
                  <Instagram />
                </IconButton>
                <IconButton aria-label="share on Twitter" sx={{ color: '#1DA1F2' }}>
                  <Twitter />
                </IconButton>
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default BlogNavCard;
