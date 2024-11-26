import React from 'react';
import FilteredShop from '../Categories/FilteredShop'; // Assuming FilteredShop is in this path

const Handmade = () => {
    return (
        <div>
            <h1>Handmade</h1>
            {/* Call FilteredShop and pass "bags" as the category */}
            <FilteredShop category="Handmade" />
        </div>
    );
};

export default Handmade;
