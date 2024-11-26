import React from 'react';
import FilteredShop from '../Categories/FilteredShop'; // Assuming FilteredShop is in this path

const Electronics = () => {
    return (
        <div>
            <h1>Electronics</h1>
            {/* Call FilteredShop and pass "bags" as the category */}
            <FilteredShop category="Electronics" />
        </div>
    );
};

export default Electronics;
