import{v as n,j as o,y as d,z as c,A as l,T as r,N as p}from"../../../vendor.js";import{S as x}from"../../assets/js/ShopId.js";const h=({productId:a})=>{const i=n(),t=x.find(e=>e._id===a);if(console.log("ShopCard Product:",t),!t)return null;const s=()=>{i(`/product-details/${t._id}/shopid`)};return o.jsxs(d,{sx:{maxWidth:345,marginBottom:2,position:"relative",cursor:"pointer",boxShadow:3,borderRadius:"8px"},onClick:s,children:[o.jsx(c,{component:"img",height:"350",image:t.image,alt:t.title,sx:{borderRadius:"8px 8px 0 0"}}),o.jsxs(l,{children:[o.jsx(r,{gutterBottom:!0,variant:"h5",component:"div",children:t.title}),o.jsx(p,{name:`rating-${t._id}`,value:t.rating||0,readOnly:!0,size:"small",sx:{mb:1}}),o.jsxs(r,{variant:"body2",color:"text.secondary",children:["Price: ",t.price||"N/A"]}),o.jsxs(r,{variant:"body2",color:"text.secondary",children:["Discount: ",t.discount||"N/A"]})]})]})};export{h as S};
