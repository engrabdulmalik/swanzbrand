import React from 'react';
import FilteredShop from '../Categories/FilteredShop'; // Assuming FilteredShop is in this path

const PetFood = () => {
    return (
        <div>
            <h1>Pet Food </h1>
            {/* Call FilteredShop and pass "bags" as the category */}
            <FilteredShop category="Pet Food" />
        </div>
    );
};

export default  PetFood ;
