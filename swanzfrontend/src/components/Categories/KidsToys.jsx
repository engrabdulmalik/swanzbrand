import React from 'react';
import FilteredShop from '../Categories/FilteredShop'; // Assuming FilteredShop is in this path

const KidsToys = () => {
    return (
        <div>
            <h1>Kids Toys </h1>
            {/* Call FilteredShop and pass "bags" as the category */}
            <FilteredShop category="Kids Toys" />
        </div>
    );
};

export default KidsToys ;
