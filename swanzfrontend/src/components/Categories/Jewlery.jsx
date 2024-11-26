import React from 'react';
import FilteredShop from '../Categories/FilteredShop'; // Assuming FilteredShop is in this path

const Jewlery = () => {
    return (
        <div>
            <h1>Jewlery</h1>
            {/* Call FilteredShop and pass "bags" as the category */}
            <FilteredShop category="Jewlery" />
        </div>
    );
};

export default Jewlery;
