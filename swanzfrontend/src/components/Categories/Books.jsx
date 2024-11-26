import React from 'react';
import FilteredShop from '../Categories/FilteredShop'; // Assuming FilteredShop is in this path

const Books = () => {
    return (
        <div>
            <h1>Books</h1>
            {/* Call FilteredShop and pass "bags" as the category */}
            <FilteredShop category="Books" />
        </div>
    );
};

export default Books;
