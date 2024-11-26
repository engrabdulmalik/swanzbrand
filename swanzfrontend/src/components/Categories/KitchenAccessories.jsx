import React from 'react';
import FilteredShop from '../Categories/FilteredShop'; // Assuming FilteredShop is in this path

const KitchenAccessories = () => {
    return (
        <div>
            <h1>Kitchen Accessories </h1>
            {/* Call FilteredShop and pass "bags" as the category */}
            <FilteredShop category="Kitchen Accessories" />
        </div>
    );
};

export default KitchenAccessories ;
