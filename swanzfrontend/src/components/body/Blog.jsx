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
import projectpic1 from '../../assets/images1/projectpic1.jpg'; // Import project images
import projectpic2 from '../../assets/images1/projectpic2.jpg';
import projectpic3 from '../../assets/images1/projectpic3.jpg';
import projectpic4 from '../../assets/images1/projectpic4.jpg';

const categories = ['Men', 'Women', 'Accessories'];
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
const recentProjects = [
  { name: 'Photography', description: 'T-shirt and Jeans.', image: projectpic1 },
  { name: 'Branding', description: 'T-shirt and Jeans.', image: projectpic2 },
  { name: 'Design', description: 'T-shirt and Jeans.', image: projectpic3 },
  { name: 'Photography', description: 'T-shirt and Jeans.', image: projectpic4 },
];

const Blog = () => {
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
            Blog
          </Typography>
        </Breadcrumbs>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={3} sx={{ display: 'flex', flexDirection: 'column' }}>
          {/* Search Section */}
          <Box sx={{ padding: 2, backgroundColor: 'white', borderRadius: 2, marginBottom: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', marginBottom: 2 }}>
              Search
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search..."
              size="small"
              sx={{ marginBottom: 3 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          {/* Recent Projects Section */}
          <Box sx={{ padding: 2, backgroundColor: 'white', borderRadius: 2, marginBottom: 3 }}>
  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', marginBottom: 2 }}>
    Recent Projects
  </Typography>
  {recentProjects.map((project, index) => (
    <Box key={index} sx={{ marginBottom: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
        {/* Image Link */}
        <Link to="/blog-detailed-standard" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img
            src={project.image}
            alt={project.name}
            style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 4, marginRight: 2 }}
          />
        </Link>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          
          
            <Typography variant="subtitle1" sx={{ fontWeight: 'normal', marginBottom: 1 }}>
              {project.name}
            </Typography>
          
          {/* Description */}
          <Link to="/blog-detailed-standard" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
              {project.description}
            </Typography>
          </Link>
        </Box>
      </Box>
      {index < 3 && <Divider sx={{ marginY: 2 }} />}
    </Box>
  ))}
</Box>







          {/* Categories Section */}
          <Box sx={{ padding: 2, backgroundColor: 'white', borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', marginBottom: 2 }}>
              Categories
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {categories.map((category) => (
                <FormControlLabel
                  key={category}
                  control={<Checkbox color="primary" />}
                  label={<Typography variant="body2" sx={{ fontSize: '1rem' }}>{category}</Typography>}
                  sx={{ marginLeft: 0 }}
                />
              ))}
            </Box>
            {/* Tags Column */}
            <Box sx={{ marginTop: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                Tags
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    sx={{ backgroundColor: 'lightgrey', borderRadius: '16px', fontSize: '0.875rem', margin: '2px' }}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Grid>

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
      </Grid>
    </Box>
  );
};

export default Blog;
