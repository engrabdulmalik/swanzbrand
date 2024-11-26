import React from 'react';
import FilteredShop from '../Categories/FilteredShop'; // Assuming FilteredShop is in this path

const Flower = () => {
    return (
        <div>
            <h1>Flower</h1>
            {/* Call FilteredShop and pass "bags" as the category */}
            <FilteredShop category="Flower" />
        </div>
    );
};

export default Flower;
