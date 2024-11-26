import{j as s,B as o,R as t,a as e}from"../vendor.js";import{H as r}from"./components/header/Header.js";import{F as m}from"./components/footer/Footer.js";import{H as a}from"./components/body/Home.js";import{S as p}from"./components/body/Shop.js";import{C as i}from"./components/body/Collection.js";import{P as j}from"./components/body/Pages.js";import{B as x}from"./components/screens/BlogStandard.js";import{B as h}from"./components/screens/BlogNoSidebar.js";import{B as n}from"./components/screens/BlogRightSidebar.js";import{B as l}from"./components/screens/BlogDetailedStandard.js";import{C as c}from"./components/screens/Cart.js";import{C as f}from"./components/screens/Checkout.js";import{C as d}from"./components/screens/Wishlist.js";import{R as u}from"./components/screens/Register.js";import{M as g}from"./components/screens/MyAccount.js";import{A as B}from"./components/screens/AboutUs.js";import{C}from"./components/screens/Contact.js";import{E as b}from"./components/screens/Error.js";import{B as k}from"./components/body/Blog.js";import{C as w}from"./components/body/ContactUs.js";import{C as A}from"./components/screens/Compare.js";import{N as S}from"./components/screens/NewArrivals.js";import{M as F}from"./components/Categories/MenWatches.js";import{M as P}from"./components/Categories/MenShoes.js";import{M as K}from"./components/Categories/MenFormals.js";import{M}from"./components/Categories/MenAccessories.js";import{B as y}from"./components/screens/BestSellers.js";import{S as R}from"./components/screens/SalesItems.js";import{P as H}from"./components/body/ProductDetails.js";import{D}from"./components/Categories/Dresses.js";import{J as E}from"./components/Categories/Jewlery.js";import{W as O}from"./components/Categories/WomenShoes.js";import{B as N}from"./components/Categories/Bags.js";import{C as W}from"./components/Categories/Cosmetics.js";import{F as v}from"./components/Categories/Furniture.js";import{E as I}from"./components/Categories/Electronics.js";import{O as J}from"./components/Categories/OrganicFood.js";import{C as U}from"./components/Categories/Cakes.js";import{P as T}from"./components/Categories/PetFood.js";import{K as $}from"./components/Categories/KidsDresses.js";import{K as q}from"./components/Categories/KidsShoes.js";import{K as z}from"./components/Categories/KidsAccessories.js";import{K as G}from"./components/Categories/KidsToys.js";import{B as L}from"./components/Categories/Books.js";import{F as Q}from"./components/Categories/Flower.js";import{P as V}from"./components/Categories/Plants.js";import{P as X}from"./components/Categories/PhoneCases.js";import{K as Y}from"./components/Categories/KitchenAccessories.js";import{O as Z}from"./components/Categories/OfficeAccessories.js";import{B as _}from"./components/Categories/BathroomAccessories.js";import{A as ss}from"./components/Categories/AutoParts.js";import{H as es}from"./components/Categories/Handmade.js";import{F as os}from"./components/Categories/FilteredShop.js";const te=()=>s.jsxs(o,{children:[s.jsx(r,{}),s.jsxs(t,{children:[s.jsx(e,{path:"/",element:s.jsx(a,{})}),s.jsx(e,{path:"/shop",element:s.jsx(p,{})}),s.jsx(e,{path:"/collection",element:s.jsx(i,{})}),s.jsx(e,{path:"/pages",element:s.jsx(j,{})}),s.jsx(e,{path:"/cart",element:s.jsx(c,{})}),s.jsx(e,{path:"/checkout",element:s.jsx(f,{})}),s.jsx(e,{path:"/wishlist",element:s.jsx(d,{})}),s.jsx(e,{path:"/register",element:s.jsx(u,{})}),s.jsx(e,{path:"/myaccount",element:s.jsx(g,{})}),s.jsx(e,{path:"/compare",element:s.jsx(A,{})}),s.jsx(e,{path:"/aboutus",element:s.jsx(B,{})}),s.jsx(e,{path:"/contact",element:s.jsx(C,{})}),s.jsx(e,{path:"/error",element:s.jsx(b,{})}),s.jsx(e,{path:"/blog-standard",element:s.jsx(x,{})}),s.jsx(e,{path:"/blog-no-sidebar",element:s.jsx(h,{})}),s.jsx(e,{path:"/blog-right-sidebar",element:s.jsx(n,{})}),s.jsx(e,{path:"/blog-detailed-standard",element:s.jsx(l,{})}),s.jsx(e,{path:"/contactus",element:s.jsx(w,{})}),s.jsx(e,{path:"/blog",element:s.jsx(k,{})}),s.jsx(e,{path:"/shop/men/watches",element:s.jsx(F,{})}),s.jsx(e,{path:"/shop/men/shoes",element:s.jsx(P,{})}),s.jsx(e,{path:"/shop/men/formals",element:s.jsx(K,{})}),s.jsx(e,{path:"/shop/men/accessories",element:s.jsx(M,{})}),s.jsx(e,{path:"/product/:type/:productId",element:s.jsx(H,{})}),s.jsx(e,{path:"/new-arrivals",element:s.jsx(S,{})}),s.jsx(e,{path:"/best-sellers",element:s.jsx(y,{})}),s.jsx(e,{path:"/sales-items",element:s.jsx(R,{})}),s.jsx(e,{path:"/shop/women/dresses",element:s.jsx(D,{})}),s.jsx(e,{path:"/shop/women/jewelry",element:s.jsx(E,{})}),s.jsx(e,{path:"/shop/women/shoes",element:s.jsx(O,{})}),s.jsx(e,{path:"/shop/women/bags",element:s.jsx(N,{})}),s.jsx(e,{path:"/shop/women/cosmetics",element:s.jsx(W,{})}),s.jsx(e,{path:"/shop/:subcategory",element:s.jsx(os,{})}),s.jsx(e,{path:"/shop/electronics/electronics",element:s.jsx(I,{})}),s.jsx(e,{path:"/shop/furniture/furniture",element:s.jsx(v,{})}),s.jsx(e,{path:"/shop/food/organic-food",element:s.jsx(J,{})}),s.jsx(e,{path:"/shop/food/cakes",element:s.jsx(U,{})}),s.jsx(e,{path:"/shop/food/pet-food",element:s.jsx(T,{})}),s.jsx(e,{path:"/shop/kids/kids-dresses",element:s.jsx($,{})}),s.jsx(e,{path:"/shop/kids/kids-shoes",element:s.jsx(q,{})}),s.jsx(e,{path:"/shop/kids/kids-accessories",element:s.jsx(z,{})}),s.jsx(e,{path:"/shop/kids/kids-toys",element:s.jsx(G,{})}),s.jsx(e,{path:"/shop/books/books",element:s.jsx(L,{})}),s.jsx(e,{path:"/shop/plants/plants",element:s.jsx(V,{})}),s.jsx(e,{path:"/shop/plants/flower",element:s.jsx(Q,{})}),s.jsx(e,{path:"/shop/accessories/phonecases",element:s.jsx(X,{})}),s.jsx(e,{path:"/shop/accessories/kitchen-accessories",element:s.jsx(Y,{})}),s.jsx(e,{path:"/shop/accessories/bathroom-accessories",element:s.jsx(_,{})}),s.jsx(e,{path:"/shop/accessories/office-accessories",element:s.jsx(Z,{})}),s.jsx(e,{path:"/shop/accessories/handmade",element:s.jsx(es,{})}),s.jsx(e,{path:"/shop/accessories/autoparts",element:s.jsx(ss,{})})]}),s.jsx(m,{})]});export{te as A};