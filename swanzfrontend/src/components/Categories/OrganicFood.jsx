import React from 'react';
import FilteredShop from '../Categories/FilteredShop'; // Assuming FilteredShop is in this path

const OrganicFood = () => {
    return (
        <div>
            <h1>Organic Food </h1>
            {/* Call FilteredShop and pass "bags" as the category */}
            <FilteredShop category="Organic Food" />
        </div>
    );
};

export default OrganicFood ;
