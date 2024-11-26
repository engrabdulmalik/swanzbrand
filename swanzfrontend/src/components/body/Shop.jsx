import React, { useState } from 'react';
import { Box, Container, Grid, Typography, Breadcrumbs, Link, TextField, Button, Menu, MenuItem, Pagination, Checkbox, FormControlLabel, Chip } from '@mui/material';
import { ShopId } from '../../assets/js/ShopId';
import ShopCards from '../cards/ShopCards';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Shop = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [categoryMenuAnchor, setCategoryMenuAnchor] = useState(null);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [page, setPage] = useState(1); // Initialize page state
    const itemsPerPage = 15;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCategoryClick = (event, category) => {
        setCategoryMenuAnchor({ anchor: event.currentTarget, category });
    };

    const handleClose = () => {
        setAnchorEl(null);
        setCategoryMenuAnchor(null);
    };

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const handleCategoryChange = (event) => {
        const category = event.target.name;
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    const handleTagClick = (tag) => {
        setSelectedTags(prev =>
            prev.includes(tag)
                ? prev.filter(t => t !== tag)
                : [...prev, tag]
        );
    };

    // Sample categories, colors, sizes, and tags
    const categories = [
        { name: 'Men', link: '/men', subCategories: ['Watches', 'Men Accessories','Men Shoes','Men Formals']},
        { name: 'Women', link: '/women', subCategories: ['Dresses', 'Jewlery','Bags','Women Shoes','Cosmetics'] },
        { name: 'Kids', link: '/kids', subCategories: ['Kids Dresses','Kids Shoes','Kids Toys','Kids Accessories'] },
        { name: 'Electronics',link: '/electronics',  subCategories: ['Electronics'] },
        { name: 'Accessories',link: '/accessories',  subCategories: ['Auto Parts','Kitchen Accessories','Phone Cases','Bathroom Accessories','Office Accessories','Handmade'] },
        { name: 'Furniture',link: '/furniture', subCategories: ['Furniture'] },
        { name: 'Food', link: '/food', subCategories: ['Organic Food','Cakes','Vegetables','Pet Food'] },
        { name: 'Books',link: '/books', subCategories: ['Books'] },
        { name: 'Plants',link: '/plants', subCategories: ['Flower','Plants'] },
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

    // Filter ShopId based on selected categories
    const filteredItems = ShopId.filter(item => {
        if (selectedCategories.length === 0 || selectedCategories.includes('All categories')) {
            return true;
        }
        return selectedCategories.includes(item.category); // Assuming each item has a 'category' property
    });

    // Calculate the indices for items on the current page
    const totalItems = filteredItems.length;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    
    return (
        <div>
            <Box sx={{ display: 'flex', justifyContent: 'center', bgcolor: 'background.paper', py: 2, backgroundColor: 'lightgrey' }}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        Home
                    </Link>
                    <Typography color="textPrimary">Shop</Typography>
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
                    <Typography variant="body1">Showing {endIndex} of {totalItems} results</Typography>
                </Box>

                {/* Categories, Colors, Sizes, and Tags section */}
                <Grid container spacing={4}>
                    {/* Categories column */}
                    <Grid item xs={2}>
                        <Box>
                            <Typography variant="h6" sx={{ mb: 2 }}>Categories</Typography>
                            {categories.map((category, index) => (
                                <div key={index}>
                                    <Button
                                        aria-controls={`category-menu-${index}`}
                                        aria-haspopup="true"
                                        onClick={(event) => handleCategoryClick(event, category.name)}
                                        sx={{ justifyContent: 'flex-start', textAlign: 'left', width: '100%', mb: 1 }}
                                    >
                                        <Typography variant="body1" sx={{ flexGrow: 1 }}>
                                            {category.name}
                                        </Typography>
                                        <ArrowDropDownIcon />
                                    </Button>
                                    <Menu
                                        id={`category-menu-${index}`}
                                        anchorEl={categoryMenuAnchor?.anchor}
                                        open={categoryMenuAnchor?.category === category.name}
                                        onClose={handleClose}
                                    >
                                        {category.subCategories.map((subCategory, subIndex) => (
                                            <MenuItem
                                                key={subIndex}
                                                onClick={() => handleCategoryChange({ target: { name: subCategory } })}
                                            >
                                                <Typography variant="body2">{subCategory}</Typography>
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </div>
                            ))}
                        </Box>

                        {/* Colors */}
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

                        {/* Sizes */}
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

                        {/* Tags */}
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
                            {filteredItems.slice(startIndex, endIndex).map((item) => (
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

export default Shop;
