import React, { useState } from 'react';
import { Container, Typography, Breadcrumbs, Link as MuiLink, Box, Grid, TextField, FormControlLabel, Checkbox, Chip, Pagination, InputAdornment, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import BlogNavCard from '../../components/cards/BlogNavCards'; // Adjust the path based on your file structure
import { Search } from '@mui/icons-material'; // Import the Search icon
import pic30 from '../../assets/images/pic30.jpg';
import pic31 from '../../assets/images/pic31.jpg';
import pic32 from '../../assets/images/pic32.jpg';
import pic33 from '../../assets/images/pic33.jpg';
import pic34 from '../../assets/images/pic34.jpg';
import pic35 from '../../assets/images/pic35.jpg';

const categories = ['Men', 'Women', 'Bags', 'Accessories'];
const tags = ['clothing', 'accessories', 'for men', 'women', 'fashion'];

// Sample data for BlogNav
const BlogNav = [
  { _id: '1', name: 'Lorem ipsum blog post', image: pic30, review: 'Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus' },
  { _id: '2', name: 'New collection of our shop', image: pic31, review: 'Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus' },
  { _id: '3', name: 'Ipsum blog post two', image: pic32, review: 'Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus' },
  { _id: '4', name: 'New shop collection', image: pic33, review: 'Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus' },
  { _id: '5', name: 'Lorem blog post four', image: pic34, review: 'Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus' },
  { _id: '6', name: 'Ipsum blog post five', image: pic35, review: 'Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus' },
];

// Sample data for Recent Projects

const BlogNoSidebar = () => {
  // Pagination state
  const [page, setPage] = useState(1);
  const itemsPerPage = 6; // Number of items per page

  // Handle page change
  const handleChange = (event, value) => {
    setPage(value);
  };

  // Slice the BlogNav array to display only the items for the current page
  const paginatedBlogNav = BlogNav.slice((page - 1) * itemsPerPage, page * itemsPerPage);
  const totalPages = Math.ceil(BlogNav.length / itemsPerPage);

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ width: '100%', backgroundColor: 'lightgrey', padding: 2, textAlign: 'center', marginBottom: 4 }}>
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
            Blog No Sidebar
          </Typography>
        </Breadcrumbs>
      </Box>
         
        <Grid item xs={12} md={9}>
          {/* Blog Cards */}
          <Grid container spacing={3}>
            {paginatedBlogNav.map((item) => (
              <Grid item xs={12} sm={6} md={6} key={item._id}>
                <BlogNavCard BlogNav={[item]} /> {/* Assuming BlogNavCard accepts a single item */}
              </Grid>
            ))}
          </Grid>
          
          {/* Pagination */}
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={handleChange}
              color="primary"
            />
          </Box>
        </Grid>
      
    </Box>
  );
};

export default BlogNoSidebar;
