import React from 'react';
import FilteredShop from '../Categories/FilteredShop'; // Assuming FilteredShop is in this path

const MenFormals = () => {
    return (
        <div>
            <h1>Men Formals </h1>
            {/* Call FilteredShop and pass "bags" as the category */}
            <FilteredShop category="Men Formals" />
        </div>
    );
};

export default MenFormals ;
