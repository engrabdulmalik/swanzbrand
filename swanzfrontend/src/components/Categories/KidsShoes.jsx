import React from 'react';
import FilteredShop from '../Categories/FilteredShop'; // Assuming FilteredShop is in this path

const KidsShoes = () => {
    return (
        <div>
            <h1>Kids Shoes</h1>
            {/* Call FilteredShop and pass "bags" as the category */}
            <FilteredShop category="Kids Shoes" />
        </div>
    );
};

export default KidsShoes;
