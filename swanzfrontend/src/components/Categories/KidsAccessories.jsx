import React from 'react';
import FilteredShop from '../Categories/FilteredShop'; // Assuming FilteredShop is in this path

const KidsAccessories = () => {
    return (
        <div>
            <h1> Kids Accessories</h1>
            {/* Call FilteredShop and pass "bags" as the category */}
            <FilteredShop category="Kids Accessories" />
        </div>
    );
};

export default  KidsAccessories;
