import{j as a,f as s,y as n,z as i,A as l,T as o,h as d,J as r,s as x,u as c,t as h}from"../../../vendor.js";const g=({BlogNav:t})=>a.jsx(s,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:t.map(e=>a.jsxs(n,{sx:{marginBottom:3,maxWidth:500,borderRadius:2,boxShadow:3},children:[a.jsx(i,{component:"img",height:"300",image:e.image,alt:e.name,sx:{objectFit:"cover",borderTopLeftRadius:2,borderTopRightRadius:2}}),a.jsxs(l,{children:[a.jsx(o,{variant:"h5",component:"div",sx:{fontWeight:"bold",marginBottom:1},children:e.name}),a.jsx(o,{variant:"body2",color:"text.secondary",sx:{marginBottom:2},children:e.review}),a.jsxs(s,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[a.jsx(d,{to:"/blog-detailed-standard",style:{textDecoration:"none",color:"black",fontWeight:"bold"},children:"Read More"}),a.jsxs(s,{sx:{display:"flex",alignItems:"center"},children:[a.jsx(o,{sx:{marginRight:1,color:"text.secondary"},children:"Share:"}),a.jsx(r,{"aria-label":"share on Facebook",sx:{color:"#3b5998"},children:a.jsx(x,{})}),a.jsx(r,{"aria-label":"share on Instagram",sx:{color:"#E4405F"},children:a.jsx(c,{})}),a.jsx(r,{"aria-label":"share on Twitter",sx:{color:"#1DA1F2"},children:a.jsx(h,{})})]})]})]})]},e._id))});export{g as B};