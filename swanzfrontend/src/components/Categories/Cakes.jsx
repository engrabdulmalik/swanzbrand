import React from 'react';
import FilteredShop from '../Categories/FilteredShop'; // Assuming FilteredShop is in this path

const Cakes = () => {
    return (
        <div>
            <h1>Cakes</h1>
            {/* Call FilteredShop and pass "bags" as the category */}
            <FilteredShop category="Cakes" />
        </div>
    );
};

export default Cakes;
