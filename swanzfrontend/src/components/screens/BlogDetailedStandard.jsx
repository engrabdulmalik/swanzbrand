import React, { useState } from 'react';
import { Container, Typography, Breadcrumbs, Link as MuiLink, Box, Grid, TextField, FormControlLabel, Checkbox, Chip, IconButton, Divider, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import MessageIcon from '@mui/icons-material/Message'; 
import FacebookIcon from '@mui/icons-material/Facebook'; 
import InstagramIcon from '@mui/icons-material/Instagram'; 
import TwitterIcon from '@mui/icons-material/Twitter'; 
import blogD from '../../assets/images/blogD.jpg'; 
import blogE from '../../assets/images/blogE.jpg';
import blogF from '../../assets/images/blogF.jpg'; 
import comment1 from '../../assets/images/comment1.jpg';
import comment2 from '../../assets/images/comment2.jpg';

const categories = ['Men','Women','Accessories'];
const tags = ['Clothing', 'Accessories', 'Men', 'Women', 'Fashion'];

const blogPost = {
  _id: '1',
  name: 'Lorem ipsum blog post',
  image: blogD,
  date: 'July 27, 2024',
};

const comments = [
  {
    id: '1',
    text: 'This is an insightful post. Thanks for sharing!',
    date: 'July 27, 2024',
    image: comment1,
    replies: [
      {
        id: '1-1',
        text: 'Glad you liked it! More posts coming soon.',
        date: 'July 28, 2024',
        image: comment2,
      }
    ]
  },
  {
    id: '2',
    text: 'I found this very helpful. Looking forward to more posts!',
    date: 'July 28, 2024',
    image: comment2,
    replies: [{
      id: '1-1',
      text: 'Glad you liked it! More posts coming soon.',
      date: 'July 28, 2024',
      image: comment1,
    }]
  },
];

const BlogDetailedStandard = () => {
  const navigate = useNavigate();
  const [comment, setComment] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setComment({ ...comment, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Comment submitted:', comment);
    // Add logic to handle the comment submission, e.g., send it to a server or update state
  };

  // const handlePageChange = (direction) => {
  //   if (direction === 'next') {
  //     navigate('/next-page'); // Replace with your actual next page route
  //   } else {
  //     navigate('/previous-page'); // Replace with your actual previous page route
  //   }
  // };

  return (
    <Container>
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
            Blog Post
          </Typography>
        </Breadcrumbs>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          {/* Search and Categories Section */}
          <Box sx={{ padding: 2, backgroundColor: 'white', borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', marginBottom: 2 }}>
              Search
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search..."
              size="small"
              sx={{ marginBottom: 3 }}
            />
            <Divider sx={{ marginY: 2 }} />
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
            <Divider sx={{ marginY: 2 }} />
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
          <Divider sx={{ marginY: 2 }} />
        </Grid>
        <Grid item xs={12} md={9}>
          {/* Blog Content */}
          <Box sx={{ padding: 2, backgroundColor: 'white', borderRadius: 2 }}>
            <img src={blogPost.image} alt={blogPost.name} style={{ width: '100%', borderRadius: '8px' }} />
            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
              <Typography variant="body2" color="textSecondary">
                {blogPost.date}
              </Typography>
              <IconButton size="small" sx={{ marginLeft: 1 }}>
                <MessageIcon />
              </IconButton>
            </Box>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', marginTop: 4 }}>
              14 Emerging Fashion Influencers Who Are Going to Own 2018
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
              ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
              sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
               error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
            </Typography>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'italic', marginTop: 4 }}>
              Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do
              eiusmod tempor incididunt labo dolor magna aliqua. Ut enim ad minim veniam quis nostrud.
            </Typography>
            <Typography variant="body1" color="textSecondary" marginTop={4}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            </Typography>

            {/* Add two images below the paragraph */}
            <Grid container spacing={2} sx={{ marginTop: 4 }}>
              <Grid item xs={6}>
                <img src={blogE} alt="First Additional Image" style={{ width: '100%', borderRadius: '8px' }} />
              </Grid>
              <Grid item xs={6}>
                <img src={blogF} alt="Second Additional Image" style={{ width: '100%', borderRadius: '8px' }} />
              </Grid>
            </Grid>
            <Typography variant="body1" color="textSecondary" marginTop={4}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            </Typography>

            {/* Categories Bar and Share Section */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 4 }}>
              {/* Categories Bar */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: 3 }}>
                <MuiLink component={Link} to="/blog?category=men" sx={{ textDecoration: 'none' }}>
                  <Typography variant="contained" color="primary">Lifestyle</Typography>
                </MuiLink>
                <MuiLink component={Link} to="/blog?category=women" sx={{ textDecoration: 'none' }}>
                  <Typography variant="contained" color="primary">Indoor</Typography>
                </MuiLink>
                <MuiLink component={Link} to="/blog?category=bags" sx={{ textDecoration: 'none' }}>
                  <Typography variant="contained" color="primary">Outdoor</Typography>
                </MuiLink>
              
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography variant="body2" color="textSecondary">Share:</Typography>
                <IconButton href="https://facebook.com" target="_blank" color="primary">
                  <FacebookIcon />
                </IconButton>
                <IconButton href="https://instagram.com" target="_blank" color="primary">
                  <InstagramIcon />
                </IconButton>
                <IconButton href="https://twitter.com" target="_blank" color="primary">
                  <TwitterIcon />
                </IconButton>
              </Box>
            </Box>
              <Divider sx={{ marginY: 2 }} />
 {/* Navigation Buttons */} 
 <Link to="/shop" style={{ textDecoration: 'none', color: 'inherit' }}>
 <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
  <Typography
    variant="outlined"
    color="primary"
    onClick={() => handlePageChange('previous')}
    sx={{ flex: 1, marginRight: 40 }} // Add marginRight to create gap
  >
    Previous
  </Typography>
  <Typography
    variant="outlined"
    color="primary"
    onClick={() => handlePageChange('next')}
    sx={{ flex: 1, marginLeft: 50 }} // Add marginLeft to create gap
  >
    Next
  </Typography>
</Box>
</Link>
           
             

            {/* Comments List */}
            <Box sx={{ marginTop: 4 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Comments
              </Typography>
              {comments.map((comment) => (
                <Box key={comment.id} sx={{ marginBottom: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <img src={comment.image} alt="Comment" style={{ width: 40, height: 40, borderRadius: '50%' }} />
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      User {comment.id}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {comment.date}
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ marginTop: 1 }}>
                    {comment.text}
                  </Typography>
                  {comment.replies && comment.replies.length > 0 && (
                    <Box sx={{ marginTop: 2, paddingLeft: 4 }}>
                      {comment.replies.map((reply) => (
                        <Box key={reply.id} sx={{ marginBottom: 2 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <img src={reply.image} alt="Reply" style={{ width: 40, height: 40, borderRadius: '50%' }} />
                            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                              User {reply.id}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                              {reply.date}
                            </Typography>
                          </Box>
                          <Typography variant="body1" sx={{ marginTop: 1 }}>
                            {reply.text}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  )}
                </Box>
              ))}
            </Box>

            {/* Comment Form */}
            <Box sx={{ marginTop: 4 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Leave a Comment
              </Typography>
              <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                  fullWidth
                  name="name"
                  label="Name"
                  variant="outlined"
                  value={comment.name}
                  onChange={handleInputChange}
                />
                <TextField
                  fullWidth
                  name="email"
                  label="Email"
                  variant="outlined"
                  value={comment.email}
                  onChange={handleInputChange}
                />
                <TextField
                  fullWidth
                  name="message"
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  value={comment.message}
                  onChange={handleInputChange}
                />
                <Button type="submit" variant="contained" color="primary">
                  Post Comment
                </Button>
              </Box>
            </Box>

            
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogDetailedStandard;
