import{j as e,f as n,g as p,L as g,h as j,T as i,D as x,G as a,o as r,y as f,z as b,J as l,s as v,u as y,t as C,A as k,a1 as w,a2 as A,a3 as W,a4 as B,r as h}from"../../../vendor.js";import{p as T}from"../../assets/images/pic36.js";import{p as D}from"../../assets/images/pic37.js";import{p as I}from"../../assets/images/pic38.js";import{p as S}from"../../assets/images/pic39.js";const M=[{id:1,label:"Projects Done",value:360,icon:e.jsx(w,{})},{id:2,label:"Cups of Coffee",value:690,icon:e.jsx(A,{})},{id:3,label:"Branding",value:100,icon:e.jsx(W,{})},{id:4,label:"Happy Clients",value:420,icon:e.jsx(B,{})}],z=({label:s,value:t,icon:o})=>{const[m,u]=h.useState(0);return h.useEffect(()=>{const c=setInterval(()=>{u(d=>d>=t?(clearInterval(c),t):d+Math.ceil(t/100))},30);return()=>clearInterval(c)},[t]),e.jsx(a,{item:!0,xs:12,sm:6,md:3,children:e.jsxs(r,{elevation:3,sx:{padding:3,textAlign:"center",height:"200px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",borderRadius:2},children:[e.jsx(n,{sx:{fontSize:40,mb:2},children:o}),e.jsx(i,{variant:"h6",sx:{fontWeight:"bold"},children:s}),e.jsx(i,{variant:"h4",sx:{fontWeight:"bold"},children:m})]})})},q=()=>{const s=[{image:T,name:"Sir Asim",description:"Head of Department"},{image:S,name:"Sir Abdul-Malik",description:"Divisional Head"},{image:D,name:"Sir Amish",description:"Developer"},{image:I,name:"Sir Aamer",description:"Product Manager"}];return e.jsxs(n,{children:[e.jsx(n,{sx:{width:"100%",backgroundColor:"lightgrey",padding:2,textAlign:"center"},children:e.jsxs(p,{"aria-label":"breadcrumb",separator:"/",sx:{justifyContent:"center",display:"inline-flex",fontSize:"1.5rem"},children:[e.jsx(g,{component:j,to:"/",underline:"hover",color:"inherit",sx:{fontSize:"1.5rem"},children:"Home"}),e.jsx(i,{color:"textPrimary",sx:{fontSize:"1.5rem"},children:"About Us"})]})}),e.jsxs(n,{sx:{padding:4,textAlign:"center"},children:[e.jsx(i,{variant:"h5",gutterBottom:!0,children:"Who We Are"}),e.jsxs(n,{sx:{display:"inline-block",textAlign:"center"},children:[e.jsx(i,{variant:"h3",sx:{marginTop:4},children:"Welcome to Flone"}),e.jsx(x,{sx:{marginTop:1,marginBottom:2,width:"100%",backgroundColor:"black",height:"2px"}})]}),e.jsx(i,{sx:{marginTop:2,marginBottom:2},children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labor et dolore magna aliqua."}),e.jsx(i,{sx:{marginTop:2,marginBottom:2},children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo consequat irure."}),e.jsx(i,{sx:{fontWeight:"bold"},children:"Thank you for visiting our page!"})]}),e.jsx(n,{sx:{padding:4},children:e.jsxs(a,{container:!0,spacing:4,children:[e.jsx(a,{item:!0,xs:12,sm:4,children:e.jsxs(r,{elevation:3,sx:{padding:3,textAlign:"center",height:"200px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",borderRadius:2},children:[e.jsx(i,{variant:"h5",sx:{fontWeight:"bold"},children:"Our Vision"}),e.jsx(i,{children:"Flone provides how all this mistaken idea of denouncing pleasure and pain was born and will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth."})]})}),e.jsx(a,{item:!0,xs:12,sm:4,children:e.jsxs(r,{elevation:3,sx:{padding:3,textAlign:"center",height:"200px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",borderRadius:2},children:[e.jsx(i,{variant:"h5",sx:{fontWeight:"bold"},children:"Our Mission"}),e.jsx(i,{children:"Flone provides how all this mistaken idea of denouncing pleasure and pain was born and will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth."})]})}),e.jsx(a,{item:!0,xs:12,sm:4,children:e.jsxs(r,{elevation:3,sx:{padding:3,textAlign:"center",height:"200px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",borderRadius:2},children:[e.jsx(i,{variant:"h5",sx:{fontWeight:"bold"},children:"Our Goals"}),e.jsx(i,{children:"Flone provides how all this mistaken idea of denouncing pleasure and pain was born and will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth."})]})})]})}),e.jsx(n,{sx:{padding:4,backgroundColor:"lightgrey",height:"auto",minHeight:"200px",marginTop:"2%",marginBottom:"2%"},children:e.jsx(a,{container:!0,spacing:4,children:M.map(t=>e.jsx(z,{label:t.label,value:t.value,icon:t.icon},t.id))})}),e.jsxs(n,{sx:{padding:4,textAlign:"center"},children:[e.jsx(i,{variant:"h4",fontWeight:"bold",gutterBottom:!0,children:"Meet Our Team Members"}),e.jsx(x,{sx:{width:"100%",maxWidth:"400px",margin:"auto",backgroundColor:"black",height:"2px"}}),e.jsx(i,{sx:{marginTop:2,marginBottom:2},children:"Lorem ipsum dolor sit amet conse ctetu."})]}),e.jsx(n,{sx:{padding:4},children:e.jsx(a,{container:!0,spacing:4,children:s.map((t,o)=>e.jsx(a,{item:!0,xs:12,sm:6,md:3,children:e.jsxs(f,{sx:{maxWidth:345,position:"relative","&:hover .hover-icons":{opacity:1}},children:[e.jsx(b,{component:"img",height:"300",image:t.image,alt:t.name}),e.jsxs(n,{className:"hover-icons",sx:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",opacity:0,transition:"opacity 0.3s ease-in-out",backgroundColor:"rgba(0, 0, 0, 0.5)"},children:[e.jsx(l,{"aria-label":"share on facebook",sx:{color:"white"},children:e.jsx(v,{})}),e.jsx(l,{"aria-label":"share on instagram",sx:{color:"white"},children:e.jsx(y,{})}),e.jsx(l,{"aria-label":"share on twitter",sx:{color:"white"},children:e.jsx(C,{})})]}),e.jsxs(k,{children:[e.jsx(i,{gutterBottom:!0,variant:"h5",component:"div",children:t.name}),e.jsx(i,{variant:"body2",color:"text.secondary",children:t.description})]})]})},o))})})]})};export{q as A};
