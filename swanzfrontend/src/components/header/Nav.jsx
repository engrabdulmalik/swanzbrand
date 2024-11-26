import React from 'react';
import { Box, Button, Menu, MenuItem, Typography, Popover, Divider } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [anchorElShop, setAnchorElShop] = React.useState(null);
  const [anchorElSub, setAnchorElSub] = React.useState(null);
  const [anchorElBlog, setAnchorElBlog] = React.useState(null);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const handleShopClick = (event) => {
    setAnchorElShop(event.currentTarget);
  };

  const handleSubClick = (event, category) => {
    setSelectedCategory(category);
    setAnchorElSub(event.currentTarget);
  };

  const handleBlogClick = (event) => {
    setAnchorElBlog(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElShop(null);
    setAnchorElSub(null);
    setAnchorElBlog(null);
    setSelectedCategory(null);
  };

  const shopMenuItems = [
    {
      name: 'Men',
      link: '/shop/men',
      subCategories: [
        { name: 'Watches', link: '/shop/men/watches' },
        { name: 'Shoes', link: '/shop/men/shoes' },
        { name: 'Formals', link: '/shop/men/formals' },
        { name: 'Accessories', link: '/shop/men/accessories' },
      ],
    },
    {
      name: 'Women',
      link: '/shop/women',
      subCategories: [
        { name: 'Dresses', link: '/shop/women/dresses' },
        { name: 'Jewelry', link: '/shop/women/jewelry' },
        { name: 'Shoes', link: '/shop/women/shoes' },
        {name:'Bags' , link:'/shop/women/bags'},
        { name: 'Cosmetics', link: '/shop/women/cosmetics' },
      ],
    },
    {
      name: 'Kids',
      link: '/shop/kids',
      subCategories: [
        { name: 'Kids Dresses', link: '/shop/kids/kids-dresses' },
        { name: 'Kids Shoes', link: '/shop/kids/kids-shoes' },
        { name: 'Kids Accessories', link: '/shop/kids/kids-accessories' },
        { name: 'Kids Toys', link: '/shop/kids/kids-toys' },
      ],
    },
    {
      name: 'Electronics',
      link: '/shop/electronics',
      subCategories: [
        { name: 'Electronics', link: '/shop/electronics/electronics' },
      ],
    },
    {
      name: 'Furniture',
      link: '/shop/furniture',
      subCategories: [
        { name: 'Furniture', link: '/shop/furniture/furniture' },
      ],
    },{
      name: 'Books',
      link: '/shop/books',
      subCategories: [
        { name: 'Books', link: '/shop/books/books' },
      ],
    }, 
    {
      name: 'Accessories',
      link: '/shop/accessories',
      subCategories: [
        { name: 'Phone Cases', link: '/shop/accessories/phonecases' },
        { name: 'Handmade', link: '/shop/accessories/handmade' },
        { name: 'Office Accessories', link: '/shop/accessories/office-accessories' },
        { name: 'Kitchen Accessories', link: '/shop/accessories/kitchen-accessories' },
        { name: 'Bathroom Accessories', link: '/shop/accessories/bathroom-accessories' },
        { name: 'Auto Parts', link: '/shop/accessories/autoparts' },
      ],
    }, {
      name: 'Plants',
      link: '/shop/plants',
      subCategories: [
        { name: 'Plants', link: '/shop/plants/plants' },
        { name: 'Flower', link: '/shop/plants/flower' },
        
      ],
    },
    {
      name: 'Food',
      link: '/shop/food',
      subCategories: [
        { name: 'Organic Food', link: '/shop/food/organic-food' },
        { name: 'Cakes', link: '/shop/food/cakes' },
        { name: 'Pet Food', link: '/shop/food/pet-food' },
      ],
    },
  ];

  const blogMenuItems = [
    { label: 'Blog Standard', link: '/blog-standard' },
    { label: 'Blog No Sidebar', link: '/blog-no-sidebar' },
    { label: 'Blog Right Sidebar', link: '/blog-right-sidebar' },
    { label: 'Blog Detailed Standard', link: '/blog-detailed-standard' },
  ];

  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
      <Button color="inherit" component={Link} to="/" sx={{ color: 'black' }}>
        Home
      </Button>

      <Button
        color="inherit"
        sx={{ color: 'black' }}
        onClick={handleShopClick}
        endIcon={<ArrowDropDownIcon />}
        component={Link}
        to="/shop" 
      >
        Shop
      </Button>

      <Menu
        anchorEl={anchorElShop}
        open={Boolean(anchorElShop)}
        onClose={handleClose}
        sx={{ mt: '45px' }}
      >
        {shopMenuItems.map((item, index) => (
          <React.Fragment key={index}>
            <MenuItem
              onClick={(event) => handleSubClick(event, item.name)}
              sx={{ display: 'flex', justifyContent: 'space-between', width: '250px' }}
            >
              <Typography variant="body1">{item.name}</Typography>
              <ArrowForwardIosIcon />
            </MenuItem>
            <Divider />
          </React.Fragment>
        ))}
      </Menu>

      <Popover
        open={Boolean(anchorElSub)}
        anchorEl={anchorElSub}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Box sx={{ p: 1 }}>
          {selectedCategory &&
            shopMenuItems
              .find((item) => item.name === selectedCategory)
              ?.subCategories.map((subItem, index) => (
                <MenuItem
                  key={index}
                  component={Link}
                  to={subItem.link}
                  onClick={handleClose}
                >
                  <Typography variant="body1">{subItem.name}</Typography>
                </MenuItem>
              ))}
        </Box>
      </Popover>

      <Button color="inherit" component={Link} to="/collection" sx={{ color: 'black' }}>
        Collection
      </Button>

      <Button
        color="inherit"
        onClick={handleBlogClick}
        endIcon={<ArrowDropDownIcon />}
        sx={{ color: 'black' }}
        component={Link}
        to="/blog" 
      >
        Blog
      </Button>

      <Menu
        anchorEl={anchorElBlog}
        open={Boolean(anchorElBlog)}
        onClose={handleClose}
        sx={{ mt: '45px' }}
      >
        <Box sx={{ width: '250px' }}>
          {blogMenuItems.map((item, index) => (
            <MenuItem
              key={index}
              component={Link}
              to={item.link}
              onClick={handleClose}
            >
              <Typography variant="body1">{item.label}</Typography>
            </MenuItem>
          ))}
        </Box>
      </Menu>

      <Button
       color="inherit"
        component={Link}
         to="/aboutus" 
         sx={{ color: 'black' }}>
        About Us
      </Button>

      <Button 
      color="inherit"
       component={Link}
        to="/contact"
         sx={{ color: 'black' }}>
        Contact Us
      </Button>
    </Box>
  );
};

export default Nav;
