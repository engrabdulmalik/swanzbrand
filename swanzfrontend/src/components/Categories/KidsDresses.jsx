import React from 'react';
import FilteredShop from '../Categories/FilteredShop'; // Assuming FilteredShop is in this path

const KidsDresses = () => {
    return (
        <div>
            <h1>Kids Dresses</h1>
            {/* Call FilteredShop and pass "bags" as the category */}
            <FilteredShop category="Kids Dresses" />
        </div>
    );
};

export default KidsDresses;
