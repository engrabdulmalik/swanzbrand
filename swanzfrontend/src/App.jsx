// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/body/Home";
import Shop from "./components/body/Shop";
import Collection from "./components/body/Collection";
import Pages from "./components/body/Pages";
import BlogStandard from "./components/screens/BlogStandard";
import BlogNoSidebar from "./components/screens/BlogNoSidebar";
import BlogRightSidebar from "./components/screens/BlogRightSidebar";
import BlogDetailedStandard from "./components/screens/BlogDetailedStandard";
import Cart from "./components/screens/Cart";
import Checkout from "./components/screens/Checkout";
import Wishlist from "./components/screens/Wishlist";
import Register from "./components/screens/Register";
import MyAccount from "./components/screens/MyAccount";
import AboutUs from "./components/screens/AboutUs";
import Contact from "./components/screens/Contact";
import Error from "./components/screens/Error";
import Blog from "./components/body/Blog";
import ContactUs from "./components/body/ContactUs";
import Compare from "./components/screens/Compare";
import Category from "./components/Categories/Category";
// import Next from './components/screens/Next';
// import Previous from './components/screens/Previous';
// import NewArrivals from './components/screens/NewArrivals';
// import MensWatches from './components/Categories/MenWatches';
// import MensShoes from './components/Categories/MenShoes';
// import MensFormals from './components/Categories/MenFormals';
// import MensAccessories from './components/Categories/MenAccessories';
// import BestSellers from './components/screens/BestSellers';
// import SalesItems from './components/screens/SalesItems';
// import ProductDetails from './components/body/ProductDetails';
// import Dresses from './components/Categories/Dresses';
// import Jewelry from './components/Categories/Jewlery';
// import Shoes from './components/Categories/WomenShoes';
// import Bags from './components/Categories/Bags';
// import Cosmetics from './components/Categories/Cosmetics';
// import Furniture from './components/Categories/Furniture';
// import Electronics from './components/Categories/Electronics';
// import OrganicFood from './components/Categories/OrganicFood';
// import Cakes from './components/Categories/Cakes';
// import PetFood from './components/Categories/PetFood';
// import KidsDresses from './components/Categories/KidsDresses';
// import KidsShoes from './components/Categories/KidsShoes';
// import KidsAccessories from './components/Categories/KidsAccessories';
// import KidsToys from './components/Categories/KidsToys';
// import Books from './components/Categories/Books';
// import Flower from './components/Categories/Flower';
// import Plants from './components/Categories/Plants';
// import PhoneCases from './components/Categories/PhoneCases';
// import KitchenAccessories from './components/Categories/KitchenAccessories';
// import OfficeAccessories from './components/Categories/OfficeAccessories';
// import BathroomAccessories from './components/Categories/BathroomAccessories';
// import AutoParts from './components/Categories/AutoParts';
// import Handmade from './components/Categories/Handmade';
// import FilteredShop from './components/Categories/FilteredShop';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/register" element={<Register />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/error" element={<Error />} />
        <Route path="/blog-standard" element={<BlogStandard />} />
        <Route path="/blog-no-sidebar" element={<BlogNoSidebar />} />
        <Route path="/blog-right-sidebar" element={<BlogRightSidebar />} />
        <Route
          path="/blog-detailed-standard"
          element={<BlogDetailedStandard />}
        />
        {/* <Route path="/next-page" element={<Next />} />
                <Route path="/previous-page" element={<Previous />} /> */}
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop/:mainCategory" element={<Category />} />
        <Route path="/shop/:mainCategory/:subCategory" element={<Category />} />
        {/* <Route path="/shop/men/watches" element={<MensWatches />} />
                <Route path="/shop/men/shoes" element={<MensShoes />} />
                <Route path="/shop/men/formals" element={<MensFormals />} />
                <Route path="/shop/men/accessories" element={<MensAccessories />} /> */}
        <Route path="/product/:type/:productId" element={<ProductDetails />} />
        {/* <Route path="/new-arrivals" element={<NewArrivals />} />
                <Route path="/best-sellers" element={<BestSellers />} />
                <Route path="/sales-items" element={<SalesItems />} />
                <Route path="/shop/women/dresses" element={<Dresses />} />
                <Route path="/shop/women/jewelry" element={<Jewelry />} />
                <Route path="/shop/women/shoes" element={<Shoes />} />
                <Route path="/shop/women/bags" element={<Bags />} />
                <Route path="/shop/women/cosmetics" element={<Cosmetics />} /> */}
        <Route path="/shop/:subcategory" element={<FilteredShop />} />
        {/* <Route path="/shop/electronics/electronics" element={<Electronics />} />
                <Route path="/shop/furniture/furniture" element={<Furniture />} />
                <Route path="/shop/food/organic-food" element={<OrganicFood />} />
                <Route path="/shop/food/cakes" element={<Cakes />} />
                <Route path="/shop/food/pet-food" element={<PetFood />} />
                <Route path="/shop/kids/kids-dresses" element={<KidsDresses />} />
                <Route path="/shop/kids/kids-shoes" element={<KidsShoes />} />
                <Route path="/shop/kids/kids-accessories" element={<KidsAccessories />} />
                <Route path="/shop/kids/kids-toys" element={<KidsToys />} />
                <Route path="/shop/books/books" element={<Books />} />
                <Route path="/shop/plants/plants" element={<Plants />} />
                <Route path="/shop/plants/flower" element={<Flower />} />
                <Route path="/shop/accessories/phonecases" element={<PhoneCases />} />
                <Route path="/shop/accessories/kitchen-accessories" element={<KitchenAccessories />} />
                <Route path="/shop/accessories/bathroom-accessories" element={<BathroomAccessories />} />
                <Route path="/shop/accessories/office-accessories" element={<OfficeAccessories />} />
                <Route path="/shop/accessories/handmade" element={<Handmade />} />
                <Route path="/shop/accessories/autoparts" element={<AutoParts/>} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
