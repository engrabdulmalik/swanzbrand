import{c as L,u as D,e as m,a as f,j as e,B as p,f as n,n as i,P as j,T as l,o as g,a8 as S,a9 as _,ab as t,C as T,A as W,L as E}from"../../vendor.js";import{g as B,u as U}from"../redux/actions/userActions.js";import{a as A}from"../redux/actions/orderActions.js";import{c as R,e as d,f as $,u as q,S as I}from"../../async-vendor.js";import"../../__commonjsHelpers__.js";import"../redux/constants/userConstants.js";import"../redux/constants/orderContants.js";import"../redux/constants/cartConstants.js";const O=R({first_name:d().required("First name is required"),last_name:d().required("Last name is required"),email:d().email("Invalid email format").required("Email is required"),password:d().min(6,"Password should be at least 6 characters"),confirmPassword:d().oneOf([$("password"),null],"Passwords must match")}),K=()=>{const o=L(),h=D(),P=m(s=>s.userDetails),{loading:F,error:N,user:a}=P,w=m(s=>s.userLogin),{userInfo:u}=w,v=m(s=>s.userUpdateProfile),{success:c}=v,b=m(s=>s.orderListMy),{loading:y,error:x,orders:C}=b;f.useEffect(()=>{u?(!a||!a.first_name||c)&&(o(B("profile")),o(A())):h("/login")},[o,h,u,a,c]),f.useEffect(()=>{c&&o({type:"USER_UPDATE_PROFILE_RESET"})},[c,o]);const r=q({initialValues:{first_name:(a==null?void 0:a.first_name)||"",last_name:(a==null?void 0:a.last_name)||"",email:(a==null?void 0:a.email)||"",password:"",confirmPassword:""},enableReinitialize:!0,validationSchema:O,onSubmit:async s=>{o(U({id:a._id,first_name:s.first_name,last_name:s.last_name,email:s.email,password:s.password})),I.fire({title:"Great job!",text:`Welcome ${s.first_name} ${s.last_name}, You have Updated Successfully`,icon:"success"}),h("/")}});return e.jsxs(p,{sx:{flexGrow:1,p:3},children:[e.jsx(n,{variant:"h4",gutterBottom:!0,align:"center",children:"User Profile"}),e.jsxs(i,{container:!0,spacing:2,children:[e.jsx(i,{item:!0,xs:12,md:6,children:e.jsx(j,{elevation:3,sx:{p:2},children:e.jsx("form",{onSubmit:r.handleSubmit,children:e.jsxs(i,{container:!0,spacing:2,children:[e.jsx(i,{item:!0,xs:12,children:e.jsx(l,{fullWidth:!0,id:"first_name",name:"first_name",label:"First Name",variant:"outlined",value:r.values.first_name,onChange:r.handleChange,error:r.touched.first_name&&!!r.errors.first_name,helperText:r.touched.first_name&&r.errors.first_name})}),e.jsx(i,{item:!0,xs:12,children:e.jsx(l,{fullWidth:!0,id:"last_name",name:"last_name",label:"Last Name",variant:"outlined",value:r.values.last_name,onChange:r.handleChange,error:r.touched.last_name&&!!r.errors.last_name,helperText:r.touched.last_name&&r.errors.last_name})}),e.jsx(i,{item:!0,xs:12,children:e.jsx(l,{fullWidth:!0,id:"email",name:"email",label:"Email",variant:"outlined",value:r.values.email,onChange:r.handleChange,error:r.touched.email&&!!r.errors.email,helperText:r.touched.email&&r.errors.email})}),e.jsx(i,{item:!0,xs:12,children:e.jsx(l,{fullWidth:!0,id:"password",name:"password",label:"Password",type:"password",variant:"outlined",value:r.values.password,onChange:r.handleChange,error:r.touched.password&&!!r.errors.password,helperText:r.touched.password&&r.errors.password})}),e.jsx(i,{item:!0,xs:12,children:e.jsx(l,{fullWidth:!0,id:"confirmPassword",name:"confirmPassword",label:"Confirm Password",type:"password",variant:"outlined",value:r.values.confirmPassword,onChange:r.handleChange,error:r.touched.confirmPassword&&!!r.errors.confirmPassword,helperText:r.touched.confirmPassword&&r.errors.confirmPassword})}),e.jsx(i,{item:!0,xs:12,children:e.jsx(g,{color:"primary",variant:"contained",fullWidth:!0,type:"submit",children:"Update"})})]})})})}),e.jsx(i,{item:!0,xs:12,md:6,children:e.jsxs(j,{elevation:3,sx:{p:2},children:[e.jsx(n,{variant:"h6",gutterBottom:!0,children:"My Orders"}),e.jsxs(S,{children:[e.jsxs(_,{children:[e.jsx(t,{children:e.jsx(n,{variant:"subtitle1",fontWeight:"bold",color:"textPrimary",children:"ID"})}),e.jsx(t,{sx:{textAlign:"left",marginRight:"20px"},children:e.jsx(n,{variant:"subtitle1",fontWeight:"bold",color:"textPrimary",children:"Date"})}),e.jsx(t,{sx:{textAlign:"left",marginLeft:"20px"},children:e.jsx(n,{variant:"subtitle1",fontWeight:"bold",color:"textPrimary",children:"Total"})}),e.jsx(t,{children:e.jsx(n,{variant:"subtitle1",fontWeight:"bold",color:"textPrimary",children:"Paid"})}),e.jsx(t,{sx:{textAlign:"left",marginRight:"40px"},children:e.jsx(n,{variant:"subtitle1",fontWeight:"bold",color:"textPrimary",children:"Delivered"})}),e.jsx(t,{})]}),y?e.jsx(p,{sx:{display:"flex",justifyContent:"center"},children:e.jsx(T,{})}):x?e.jsx(W,{severity:"error",children:x}):C.map(s=>e.jsxs(_,{children:[e.jsx(t,{children:s._id}),e.jsx(t,{children:new Date(s.createdAt).toLocaleDateString()}),e.jsxs(t,{children:["$",s.totalPrice]}),e.jsx(t,{children:s.isPaid?"Yes":"No"}),e.jsx(t,{children:s.isDelivered?"Yes":"No"}),e.jsx(t,{children:e.jsx(g,{color:"primary",variant:"contained",component:E,to:`/order/${s._id}`,children:"Details"})})]},s._id))]})]})})]})]})};export{K as default};
