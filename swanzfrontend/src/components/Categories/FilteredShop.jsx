import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import ShopCards from '../cards/ShopCards';
import { ShopId } from '../../assets/js/ShopId'; // Ensure your ShopId array is properly imported

const FilteredShop = ({ category, onProductClick }) => { // Accept category and onProductClick props
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        // Filter products based on the category
        const filtered = ShopId.filter(product => product.category === category);
        setFilteredProducts(filtered);
    }, [category]);

    return (
        <Grid container spacing={2}>
            {filteredProducts.map(product => (
                <Grid item key={product._id} xs={12} sm={6} md={4}>
                    {/* Add onClick handler to navigate to the product details */}
                    <ShopCards 
                        productId={product._id} 
                        title={product.title} 
                        image={product.image} 
                        onClick={() => onProductClick(product._id)} // Handle click
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default FilteredShop;
