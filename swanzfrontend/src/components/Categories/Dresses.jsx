import React from 'react';
import FilteredShop from '../Categories/FilteredShop'; // Assuming FilteredShop is in this path

const Dresses = () => {
    return (
        <div>
            <h1>Dresses</h1>
            {/* Call FilteredShop and pass "bags" as the category */}
            <FilteredShop category="Dresses" />
        </div>
    );
};

export default Dresses;
