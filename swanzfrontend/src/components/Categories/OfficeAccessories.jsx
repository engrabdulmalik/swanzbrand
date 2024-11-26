import React from 'react';
import FilteredShop from '../Categories/FilteredShop'; // Assuming FilteredShop is in this path

const OfficeAccessories = () => {
    return (
        <div>
            <h1>Office Accessories </h1>
            {/* Call FilteredShop and pass "bags" as the category */}
            <FilteredShop category="Office Accessories" />
        </div>
    );
};

export default OfficeAccessories ;
