import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; // Import hooks for dispatch and selector
import FilteredShop from "../Categories/FilteredShop"; // Assuming FilteredShop is in this path
import { listCategories } from "../actions/categoryActions"; // Import the action to fetch categories

const AutoParts = () => {
  const dispatch = useDispatch();

  // Get categories and loading/error states from Redux
  const categoryList = useSelector((state) => state.categoryList);
  const { categories, loading, error } = categoryList;

  // Fetch categories when component mounts
  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch]);

  // Check if "Auto Parts" exists in categories
  const autoPartsCategory = categories.find(
    (category) => category.name === "Auto Parts"
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Auto Parts</h1>
      {/* Pass the Auto Parts category to FilteredShop */}
      {autoPartsCategory && <FilteredShop category={autoPartsCategory.name} />}
      {!autoPartsCategory && <div>Category "Auto Parts" not found.</div>}
    </div>
  );
};

export default AutoParts;
