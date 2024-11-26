import React from 'react';
import FilteredShop from '../Categories/FilteredShop'; // Assuming FilteredShop is in this path

const Cosmetics = () => {
    return (
        <div>
            <h1>Cosmetics</h1>
            {/* Call FilteredShop and pass "bags" as the category */}
            <FilteredShop category="Cosmetics" />
        </div>
    );
};

export default Cosmetics;
