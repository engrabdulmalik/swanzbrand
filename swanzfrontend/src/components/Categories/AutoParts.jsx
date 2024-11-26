import React from 'react';
import FilteredShop from '../Categories/FilteredShop'; // Assuming FilteredShop is in this path

const AutoParts = () => {
    return (
        <div>
            <h1>Auto Parts</h1>
            {/* Call FilteredShop and pass "bags" as the category */}
            <FilteredShop category="Auto Parts" />
        </div>
    );
};

export default AutoParts;
