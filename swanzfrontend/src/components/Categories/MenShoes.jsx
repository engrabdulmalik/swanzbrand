import React from 'react';
import FilteredShop from '../Categories/FilteredShop'; // Assuming FilteredShop is in this path

const MenShoes = () => {
    return (
        <div>
            <h1>Men Shoes </h1>
            {/* Call FilteredShop and pass "bags" as the category */}
            <FilteredShop category="Men Shoes" />
        </div>
    );
};

export default MenShoes;
