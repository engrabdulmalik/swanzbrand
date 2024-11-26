import React from 'react';
import FilteredShop from '../Categories/FilteredShop'; // Assuming FilteredShop is in this path

const Bags = () => {
    return (
        <div>
            <h1>Bags</h1>
            {/* Call FilteredShop and pass "bags" as the category */}
            <FilteredShop category="Bags" />
        </div>
    );
};

export default Bags;
