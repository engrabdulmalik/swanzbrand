import{u as f,c as g,e as w,a as d,j as e,B as j,A as S,T as c,o as s,J as b,f as m,L as u,a1 as v}from"../../vendor.js";import{c as y}from"../redux/actions/userActions.js";import{F as z}from"../components/FormContainer.js";import{S as i,u as C,c as I,e as h,h as L,i as k,j as B,k as P}from"../../async-vendor.js";import"../../__commonjsHelpers__.js";import"../redux/constants/userConstants.js";import"../redux/constants/orderContants.js";const G=()=>{const n=f(),x=g(),p=w(t=>t.userLogin),{error:o,userInfo:l,loading:F}=p;d.useEffect(()=>{l&&i.fire({title:"Welcome",text:"You have logged in successfully",icon:"success"}).then(()=>{n("/")})},[n,l]),d.useEffect(()=>{o&&i.fire({icon:"error",title:"Oops...",text:o})},[o]);const r=C({initialValues:{email:"",password:""},validationSchema:I({email:h().email("Invalid email address").required("Required"),password:h().min(6,"Password must be at least 6 characters").required("Required")}),onSubmit:async t=>{await x(y(t.email,t.password))}}),a=t=>{i.fire({title:"OAuth Login",text:`Login with ${t} is not implemented yet.`,icon:"info"})};return e.jsx(z,{title:"Login",children:e.jsxs(j,{component:"form",onSubmit:r.handleSubmit,sx:{display:"flex",flexDirection:"column",alignItems:"center",maxWidth:500,mx:"auto",mt:4,p:3,border:"1px solid #ccc",borderRadius:2,boxShadow:1},children:[o&&e.jsx(S,{severity:"error",sx:{width:"100%"},children:o}),e.jsx(c,{label:"Email",variant:"outlined",margin:"normal",fullWidth:!0,id:"email",name:"email",value:r.values.email,onChange:r.handleChange,onBlur:r.handleBlur,error:r.touched.email&&!!r.errors.email,helperText:r.touched.email&&r.errors.email,sx:{marginBottom:2,fontSize:"1.2rem"},InputProps:{style:{fontSize:"1.2rem"}},InputLabelProps:{style:{fontSize:"1.2rem"}}}),e.jsx(c,{label:"Password",type:"password",variant:"outlined",margin:"normal",fullWidth:!0,id:"password",name:"password",value:r.values.password,onChange:r.handleChange,onBlur:r.handleBlur,error:r.touched.password&&!!r.errors.password,helperText:r.touched.password&&r.errors.password,sx:{marginBottom:2,fontSize:"1.2rem"},InputProps:{style:{fontSize:"1.2rem"}},InputLabelProps:{style:{fontSize:"1.2rem"}}}),e.jsx(s,{type:"submit",variant:"contained",color:"primary",size:"large",startIcon:e.jsx(b,{}),sx:{mt:2,padding:"12px 24px",fontSize:"1.2rem"},children:"Login"}),e.jsxs(m,{variant:"body2",sx:{mt:2},children:["New Customer? ",e.jsx(u,{to:"/register",children:"Register Here"})]}),e.jsxs(m,{variant:"body2",sx:{mt:2},children:["Forgot Password? ",e.jsx(u,{to:"/reset-password",children:"Reset Password"})]}),e.jsxs(v,{spacing:2,sx:{mt:4,width:"100%"},children:[e.jsx(s,{variant:"contained",color:"secondary",size:"large",startIcon:e.jsx(L,{}),onClick:()=>a("Google"),sx:{fontSize:"1.2rem"},children:"Continue with Google"}),e.jsx(s,{variant:"contained",color:"primary",size:"large",startIcon:e.jsx(k,{}),onClick:()=>a("Facebook"),sx:{fontSize:"1.2rem"},children:"Continue with Facebook"}),e.jsx(s,{variant:"contained",color:"inherit",size:"large",startIcon:e.jsx(B,{}),onClick:()=>a("GitHub"),sx:{fontSize:"1.2rem"},children:"Continue with GitHub"}),e.jsx(s,{variant:"contained",color:"info",size:"large",startIcon:e.jsx(P,{}),onClick:()=>a("Twitter"),sx:{fontSize:"1.2rem"},children:"Continue with Twitter"})]})]})})};export{G as default};