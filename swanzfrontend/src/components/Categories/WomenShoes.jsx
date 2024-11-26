import React from 'react';
import FilteredShop from '../Categories/FilteredShop'; // Assuming FilteredShop is in this path

const WomenShoes= () => {
    return (
        <div>
            <h1>Women Shoes</h1>
            {/* Call FilteredShop and pass "bags" as the category */}
            <FilteredShop category="Women Shoes" />
        </div>
    );
};

export default WomenShoes ;
