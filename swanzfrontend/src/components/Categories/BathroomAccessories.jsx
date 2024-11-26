import React from 'react';
import FilteredShop from '../Categories/FilteredShop'; // Assuming FilteredShop is in this path

const BathroomAccessories = () => {
    return (
        <div>
            <h1>Bathroom Accessories</h1>
            {/* Call FilteredShop and pass "bags" as the category */}
            <FilteredShop category="Bathroom Accessories" />
        </div>
    );
};

export default BathroomAccessories;
