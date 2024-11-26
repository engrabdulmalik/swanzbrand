import React from 'react';
import FilteredShop from '../Categories/FilteredShop'; // Assuming FilteredShop is in this path

const Plants = () => {
    return (
        <div>
            <h1>Plants </h1>
            {/* Call FilteredShop and pass "bags" as the category */}
            <FilteredShop category="Plants" />
        </div>
    );
};

export default Plants ;
