import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FilteredShop from "../Categories/FilteredShop"; // Component to display filtered products
import { listCategories } from "../../redux/actions/productActions"; // Action to fetch categories

const Category = () => {
  const { mainCategory } = useParams(); // Get dynamic category from the URL
  const dispatch = useDispatch();

  // Get categories and loading/error states from Redux
  const categoryList = useSelector((state) => state.categoryList);
  const { categories, loading, error } = categoryList;

  // Fetch categories when component mounts
  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch]);

  // Check if the current category exists in the list
  const currentCategory = categories.find(
    (category) => category.name.toLowerCase() === mainCategory.toLowerCase()
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>{mainCategory}</h1>
      {/* Pass the current category to FilteredShop */}
      {currentCategory ? (
        <FilteredShop category={currentCategory.name} />
      ) : (
        <div>Category "{mainCategory}" not found.</div>
      )}
    </div>
  );
};

export default Category;
