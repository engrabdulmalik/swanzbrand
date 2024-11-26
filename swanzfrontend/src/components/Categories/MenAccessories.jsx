import React from 'react';
import FilteredShop from '../Categories/FilteredShop'; // Assuming FilteredShop is in this path

const MenAccessories = () => {
    return (
        <div>
            <h1>Men Accessories </h1>
            {/* Call FilteredShop and pass "bags" as the category */}
            <FilteredShop category="Men Accessories" />
        </div>
    );
};

export default MenAccessories ;
