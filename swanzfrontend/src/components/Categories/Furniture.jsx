import React from 'react';
import FilteredShop from '../Categories/FilteredShop'; // Assuming FilteredShop is in this path

const Furniture = () => {
    return (
        <div>
            <h1>Furniture</h1>
            {/* Call FilteredShop and pass "bags" as the category */}
            <FilteredShop category="Furniture" />
        </div>
    );
};

export default Furniture;
