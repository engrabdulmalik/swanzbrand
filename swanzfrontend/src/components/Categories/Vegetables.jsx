import React from 'react';
import FilteredShop from '../Categories/FilteredShop'; // Assuming FilteredShop is in this path

const Vegetables = () => {
    return (
        <div>
            <h1>Vegetables</h1>
            {/* Call FilteredShop and pass "bags" as the category */}
            <FilteredShop category="Vegetables" />
        </div>
    );
};

export default Vegetables ;
