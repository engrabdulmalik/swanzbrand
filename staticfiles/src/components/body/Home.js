import{j as r,p as s,B as i,f as o,k as m}from"../../../vendor.js";import{S as p}from"../cards/ShippingCards.js";import{M as a}from"../cards/MainCards.js";import{B as e}from"../cards/BlogCards.js";import{S as n}from"../../assets/js/Shipping.js";import{M as d}from"../../assets/js/Main.js";import{B as x}from"../../assets/js/Blog.js";import{D as l}from"./DailyDeals.js";import"../../../__commonjsHelpers__.js";import"../Ratings.js";import"../../../async-vendor.js";import"../../redux/actions/productActions.js";import"../../redux/constants/productConstants.js";import"../../assets/images/pic1.js";import"../../assets/images/pic2.js";import"../../assets/images/pic3.js";import"../../assets/images/pic4.js";import"../../assets/images/pic5.js";import"../../assets/images/pic6.js";import"../../assets/images/pic7.js";import"../../assets/images/pic8.js";import"../../assets/images/pic9.js";import"../../assets/images/pic10.js";import"../../assets/images/pic11.js";const I=()=>r.jsxs(s,{sx:{mt:4,mb:4},children:[r.jsx(i,{sx:{display:"flex",overflowX:"auto",mb:4},children:n.map(t=>r.jsx(i,{sx:{flex:"0 0 auto",minWidth:"250px",mx:1},children:r.jsx(p,{product:t})},t._id))}),r.jsx(l,{}),r.jsx(o,{container:!0,spacing:4,children:d.map(t=>r.jsx(o,{item:!0,xs:12,sm:6,md:3,children:r.jsx(a,{product:t})},t._id))}),r.jsx(m,{variant:"h4",sx:{fontWeight:"bold",textAlign:"center",mt:4,mb:2,position:"relative","&::before, &::after":{content:'""',position:"absolute",top:"50%",width:"40%",borderBottom:"1px solid #000",transform:"translateY(-50%)"},"&::before":{left:0},"&::after":{right:0}},children:"OUR BLOG"}),r.jsx(o,{container:!0,spacing:4,sx:{mt:4},children:x.map(t=>r.jsx(o,{item:!0,xs:12,sm:6,md:4,children:r.jsx(e,{productId:t.id})},t.id))})]});export{I as default};
