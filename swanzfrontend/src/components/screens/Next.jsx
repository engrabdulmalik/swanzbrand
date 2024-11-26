// import React, { useState } from 'react';
// import { Container, Typography, Breadcrumbs, Link as MuiLink, Box, Grid, TextField, FormControlLabel, Checkbox, Chip, Pagination } from '@mui/material';
// import { Link } from 'react-router-dom';
// import BlogNavCard from '../../components/cards/BlogNavCards'; // Adjust the path based on your file structure

// const categories = ['Men', 'Women', 'Bags', 'Accessories'];
// const tags = ['clothing', 'accessories', 'for men', 'women', 'fashion'];

// // Sample data for BlogNav
// const BlogNav = [
//   { _id: '1', name: 'Lorem ipsum blog post', image: '/path/to/image1.jpg',review: 'Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus' },
//   { _id: '2', name: 'New collection of our shop', image: '/path/to/image2.jpg', review: 'Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus' },
//   { _id: '3', name: 'Ipsum blog post two', image: '/path/to/image3.jpg', review: 'Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus' },
//   { _id: '4', name: 'New shop collection', image: '/path/to/image4.jpg', review: 'Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus' },
//   { _id: '5', name: 'Lorem blog post four', image: '/path/to/image5.jpg', review: 'Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus' },
//   { _id: '6', name: 'Ipsum blog post five', image: '/path/to/image6.jpg', review: 'Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus' },
//   // Add more blog items if needed
// ];

// const Next = () => {
//   // Pagination state
//   const [page, setPage] = useState(1);
//   const itemsPerPage = 3; // Number of items per page, adjust as needed

//   // Handle page change
//   const handleChange = (event, value) => {
//     setPage(value);
//   };

//   // Slice the BlogNav array to display only the items for the current page
//   const paginatedBlogNav = BlogNav.slice((page - 1) * itemsPerPage, page * itemsPerPage);
//   const totalPages = Math.ceil(BlogNav.length / itemsPerPage);

//   return (
//     <Container>
//       <Box sx={{ width: '100%', backgroundColor: 'lightgrey', padding: 2, textAlign: 'center', marginBottom: 4 }}>
//         <Breadcrumbs
//           aria-label="breadcrumb"
//           separator="/"
//           sx={{ justifyContent: 'center', display: 'inline-flex', fontSize: '1.5rem' }}
//         >
//           <MuiLink
//             component={Link}
//             to="/"
//             underline="hover"
//             color="inherit"
//             sx={{ fontSize: '1.5rem' }}
//           >
//             Home
//           </MuiLink>
//           <Typography
//             color="textPrimary"
//             sx={{ fontSize: '1.5rem' }}
//           >
//             Blog
//           </Typography>
//         </Breadcrumbs>
//       </Box>
      
//       <Grid container spacing={3}>
//         <Grid item xs={12} md={4}>
          
//           {/* Search and Categories Section */}
//           <Box sx={{ padding: 2, backgroundColor: 'white', borderRadius: 2 }}>
//             <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', marginBottom: 2 }}>
//               Search
//             </Typography>
//             <TextField
//               fullWidth
//               variant="outlined"
//               placeholder="Search..."
//               size="small"
//               sx={{ marginBottom: 3 }}
//             />
//             <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
//               <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
//                 Categories
//               </Typography>
//             </Box>
//             <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
//               {categories.map((category) => (
//                 <FormControlLabel
//                   key={category}
//                   control={<Checkbox color="primary" />}
//                   label={<Typography variant="body2" sx={{ fontSize: '1rem' }}>{category}</Typography>}
//                   sx={{ marginLeft: 0 }}
//                 />
//               ))}
//             </Box>
//             {/* Tags Column */}
//             <Box sx={{ marginTop: 3 }}>
//               <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', marginBottom: 1 }}>
//                 Tags
//               </Typography>
//               <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
//                 {tags.map((tag) => (
//                   <Chip
//                     key={tag}
//                     label={tag}
//                     sx={{ backgroundColor: 'lightgrey', borderRadius: '16px', fontSize: '0.875rem', margin: '2px' }}
//                   />
//                 ))}
//               </Box>
//             </Box>
//           </Box>
//         </Grid>
//         <Grid item xs={12} md={8}>
//           {/* Blog Cards */}
//           <BlogNavCard BlogNav={paginatedBlogNav} />
          
//           {/* Pagination */}
//           <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
//             <Pagination
//               count={totalPages}
//               page={page}
//               onChange={handleChange}
//               color="primary"
//               shape="rounded"
//               siblingCount={1} // Show 1 page number on either side of the current page
//               boundaryCount={1} // Show 1 page number at the start and end
//             />
//           </Box>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default Next;
const shopMenuItems = [
    { name: 'Men', subCategories: ['Men', 'Accessories'] },
    { name: 'Women', subCategories: ['Dresses', 'Accessories'] },
    { name: 'Fashion', subCategories: ['Men', 'Women', 'Fashion'] },
    { name: 'Electronics', subCategories: ['Electronics'] },
    { name: 'Furniture', subCategories: ['Furniture'] },
    { name: 'Food', subCategories: ['Organic Food', 'Cakes', 'Pet Food'] },
  ];

  <Menu
  anchorEl={anchorElSub}
  open={Boolean(anchorElSub)}
  onClose={handleClose}
  sx={{ mt: '45px', ml: '250px' }}
>
  <Box sx={{ width: '250px' }}>
    {shopMenuItems
      .find((item) => item.name === selectedCategory)
      ?.subCategories.map((subItem, index) => (
        <MenuItem
          key={index}
          onClick={handleClose}
          sx={{ display: 'block', width: '100%' }}
        >
          <Typography variant='body1'>{subItem}</Typography>
        </MenuItem>
      ))}
  </Box>
</Menu>

{shopMenuItems.map((item, index) => (
  <MenuItem
    key={index}
    component={Link}
    to={`/shop?category=${item.name}`}
    onClick={handleClose}
  >
    <Typography variant='body1'>{item.name}</Typography>
  </MenuItem>
))};
