import React from 'react';
import FilteredShop from '../Categories/FilteredShop'; // Assuming FilteredShop is in this path

const MenWatches = () => {
    return (
        <div>
            <h1>Men Watches </h1>
            {/* Call FilteredShop and pass "bags" as the category */}
            <FilteredShop category="Watches" />
        </div>
    );
};

export default MenWatches  ;
