import React from 'react';
import FilteredShop from '../Categories/FilteredShop'; // Assuming FilteredShop is in this path

const PhoneCases = () => {
    return (
        <div>
            <h1>Phone Cases </h1>
            {/* Call FilteredShop and pass "bags" as the category */}
            <FilteredShop category="Phone Cases" />
        </div>
    );
};

export default PhoneCases ;
