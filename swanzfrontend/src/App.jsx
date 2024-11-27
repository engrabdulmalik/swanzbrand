import React, { useState, lazy, Suspense } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

// Lazy loaded components
const Home = lazy(() => import("./components/body/Home"));
const Shop = lazy(() => import("./components/body/Shop"));
const Collection = lazy(() => import("./components/body/Collection"));
const Pages = lazy(() => import("./components/body/Pages"));
const BlogStandard = lazy(() => import("./components/screens/BlogStandard"));
const BlogNoSidebar = lazy(() => import("./components/screens/BlogNoSidebar"));
const BlogRightSidebar = lazy(() =>
  import("./components/screens/BlogRightSidebar")
);
const BlogDetailedStandard = lazy(() =>
  import("./components/screens/BlogDetailedStandard")
);
const Cart = lazy(() => import("./components/screens/Cart"));
const Checkout = lazy(() => import("./components/screens/Checkout"));
const Wishlist = lazy(() => import("./components/screens/Wishlist"));
const Register = lazy(() => import("./components/screens/RegisterScreen"));
const LoginScreen = lazy(() => import("./components/screens/LoginScreen"));
const MyAccount = lazy(() => import("./components/screens/MyAccount"));
const AboutUs = lazy(() => import("./components/screens/AboutUs"));
const Contact = lazy(() => import("./components/screens/Contact"));
const Error = lazy(() => import("./components/screens/Error"));
const Blog = lazy(() => import("./components/body/Blog"));
const ContactUs = lazy(() => import("./components/body/ContactUs"));
const Compare = lazy(() => import("./components/screens/Compare"));
const Category = lazy(() => import("./components/Categories/Category"));
const ProductDetails = lazy(() => import("./components/body/ProductDetails"));
const FilteredShop = lazy(() => import("./components/Categories/FilteredShop"));

function App() {
  return (
    <GoogleOAuthProvider clientId="142195733199-uedts28rg8sbh05v5urqc6o2mel00t59.apps.googleusercontent.com">
      <Router>
        <Header />
        <Suspense fallback={<CircularProgress />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/login" element={<LoginScreen />} />
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
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/shop/:mainCategory" element={<Category />} />
            <Route
              path="/shop/:mainCategory/:subCategory"
              element={<Category />}
            />
            <Route
              path="/product/:type/:productId"
              element={<ProductDetails />}
            />
            <Route path="/shop/:subcategory" element={<FilteredShop />} />
            <Route path="*" element={<p>Not Found</p>} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
