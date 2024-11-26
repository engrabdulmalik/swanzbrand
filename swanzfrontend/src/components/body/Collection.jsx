import React, { useState } from 'react';
import { Box, Container, Grid, Typography, Breadcrumbs, Link, TextField, Button, Menu, MenuItem, Pagination, Checkbox, FormControlLabel, Chip } from '@mui/material';
import { ShopId } from '../../assets/js/ShopId';
import ShopCards from '../cards/ShopCards';

const Collection = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [page, setPage] = useState(1);
    const itemsPerPage = 9;
    const totalItems = ShopId.length;
    const [selectedTags, setSelectedTags] = useState([]);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const handleTagClick = (tag) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter(t => t !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
        // Perform any other actions based on selected tag
    };

    // Sample categories, colors, sizes, and tags
    const categories = [
        'All Categories', 'Men', 'Women', 'Fashion',
        'Electronics', 'Furniture', 'Plants', 'Organic Food',
        'Flower', 'Books', 'Cosmetics', 'Accessories',
        'Handmade', 'Kids', 'Auto Parts', 'Cakes',
        'Pet Food'
    ];

    const colors = [
        'All colors', 'White', 'Black', 'Brown', 'Blue'
    ];

    const sizes = [
        'Size S', 'Size M', 'Size L', 'Size XL', 'Size XXL'
    ];

    const tags = [
        'Fashion', 'Men', 'Jacket', 'Full Sleeve', 'Women',
        'Coat', 'Top', 'Sleeveless', 'Electronics', 'Furniture',
        'Plant', 'Organic Food', 'Flower', 'Book', 'Cosmetics',
        'Accessories', 'Handmade', 'Kids', 'Auto Parts', 'Cakes',
        'Pet Food'
    ];

    // Calculate the indices for items on the current page
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    
    return (
        <div>
            <Box sx={{ display: 'flex', justifyContent: 'center', bgcolor: 'background.paper', py: 2, backgroundColor: 'lightgrey' }}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        Home
                    </Link>
                    <Typography color="textPrimary">Collection</Typography>
                </Breadcrumbs>
            </Box>

            {/* Search section */}
            <Container sx={{ mt: 4, mb: 4 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>Search</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                    <TextField label="Search Here...." variant="outlined" sx={{ mr: 2 }} />
                    
                    <Button
                        variant="outlined"
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                        sx={{ mr: 2 }}
                    >
                        Default
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Default</MenuItem>
                        <MenuItem onClick={handleClose}>Price - Low to High</MenuItem>
                        <MenuItem onClick={handleClose}>Price - High to Low</MenuItem>
                    </Menu>
                    <Typography variant="body1">Showing  {endIndex} of {totalItems} results</Typography>
                </Box>

                {/* Categories, Colors, Sizes, and Tags section */}
                <Grid container spacing={4}>
                    {/* Categories, Colors, Sizes, and Tags column */}
                    <Grid item xs={2}>
                        <Box>
                            <Typography variant="h6" sx={{ mb: 2 }}>Categories</Typography>
                            {categories.map((category, index) => (
                                <FormControlLabel
                                    key={index}
                                    control={<Checkbox />}
                                    label={category}
                                />
                            ))}
                        </Box>
                        <Box sx={{ mt: 4 }}>
                            <Typography variant="h6" sx={{ mb: 2 }}>Colors</Typography>
                            {colors.map((color, index) => (
                                <FormControlLabel
                                    key={index}
                                    control={<Checkbox />}
                                    label={color}
                                />
                            ))}
                        </Box>
                        <Box sx={{ mt: 4 }}>
                            <Typography variant="h6" sx={{ mb: 2 }}>Sizes</Typography>
                            {sizes.map((size, index) => (
                                <FormControlLabel
                                    key={index}
                                    control={<Checkbox />}
                                    label={size}
                                />
                            ))}
                        </Box>
                        <Box sx={{ mt: 4 }}>
                            <Typography variant="h6" sx={{ mb: 2 }}>Tags</Typography>
                            <Grid container spacing={1}>
                                {tags.map((tag, index) => (
                                    <Grid item key={index}>
                                        <Chip
                                            label={tag}
                                            clickable
                                            onClick={() => handleTagClick(tag)}
                                            color={selectedTags.includes(tag) ? 'primary' : 'default'}
                                            variant="outlined"
                                            sx={{ borderRadius: '20px', bgcolor: 'rgba(0, 0, 0, 0.1)', mr: 1, mb: 1 }}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Grid>

                    {/* ShopCards section */}
                    <Grid item xs={10}>
                        <Grid container spacing={4}>
                            {ShopId.slice(startIndex, endIndex).map((item) => (
                                <Grid item xs={12} sm={6} md={4} key={item._id}>
                                    <ShopCards productId={item._id} />
                                </Grid>
                            ))}
                        </Grid>

                        {/* Pagination */}
                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                            <Pagination
                                count={Math.ceil(totalItems / itemsPerPage)}
                                page={page}
                                onChange={handlePageChange}
                                color="primary"
                                boundaryCount={2}
                                showFirstButton
                                showLastButton
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Collection;
