import{j as a,h as s,A as t,J as i,H as l,T as o,k as x,K as r,v as d,x as c,w as h}from"../../../vendor.js";const g=({BlogNav:n})=>a.jsx(s,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:n.map(e=>a.jsxs(t,{sx:{marginBottom:3,maxWidth:500,borderRadius:2,boxShadow:3},children:[a.jsx(i,{component:"img",height:"300",image:e.image,alt:e.name,sx:{objectFit:"cover",borderTopLeftRadius:2,borderTopRightRadius:2}}),a.jsxs(l,{children:[a.jsx(o,{variant:"h5",component:"div",sx:{fontWeight:"bold",marginBottom:1},children:e.name}),a.jsx(o,{variant:"body2",color:"text.secondary",sx:{marginBottom:2},children:e.review}),a.jsxs(s,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[a.jsx(x,{to:"/blog-detailed-standard",style:{textDecoration:"none",color:"black",fontWeight:"bold"},children:"Read More"}),a.jsxs(s,{sx:{display:"flex",alignItems:"center"},children:[a.jsx(o,{sx:{marginRight:1,color:"text.secondary"},children:"Share:"}),a.jsx(r,{"aria-label":"share on Facebook",sx:{color:"#3b5998"},children:a.jsx(d,{})}),a.jsx(r,{"aria-label":"share on Instagram",sx:{color:"#E4405F"},children:a.jsx(c,{})}),a.jsx(r,{"aria-label":"share on Twitter",sx:{color:"#1DA1F2"},children:a.jsx(h,{})})]})]})]})]},e._id))});export{g as B};