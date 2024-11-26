import{u as g,c as f,e as p,a as j,j as e,n as a,T as s,o as t,f as c,L as b,ai as w}from"../../vendor.js";import{c as C,e as i,f as _,u as v,h as k,i as y,j as F,k as S,S as h}from"../../async-vendor.js";import{F as G}from"../components/FormContainer.js";import{r as T,d as W}from"../redux/actions/userActions.js";import"../../__commonjsHelpers__.js";import"../redux/constants/userConstants.js";import"../redux/constants/orderContants.js";const q=C({first_name:i().required("First name is required"),last_name:i().required("Last name is required"),email:i().email("Invalid email address").required("Email is required"),password:i().required("Password is required").min(6,"Password must be at least 6 characters"),re_password:i().oneOf([_("password"),null],"Passwords must match").required("Confirm Password is required")}),N=()=>{const n=g(),d=f(),m=p(o=>o.userRegister),{loading:L,error:A,userInfo:u}=m,r=v({initialValues:{first_name:"",last_name:"",email:"",password:"",re_password:""},validationSchema:q,onSubmit:async o=>{d(T(o.first_name,o.last_name,o.email,o.password,o.re_password)),h.fire({title:"Great job!",text:`Welcome ${o.first_name}, you have registered successfully`,icon:"success"}),n("/login")}}),x=async o=>{try{const{credential:l}=o;await d(W(l)),h.fire({title:"Great job!",text:"You have logged in successfully with Google",icon:"success"}),n("/")}catch(l){console.error("Google authentication failed",l)}};return j.useEffect(()=>{u&&n("/")},[u,n]),e.jsx(G,{title:"Register",children:e.jsx("form",{onSubmit:r.handleSubmit,children:e.jsxs(a,{container:!0,spacing:2,children:[e.jsx(a,{item:!0,xs:12,children:e.jsx(s,{fullWidth:!0,id:"first_name",name:"first_name",label:"First Name",variant:"outlined",value:r.values.first_name,onChange:r.handleChange,error:r.touched.first_name&&!!r.errors.first_name,helperText:r.touched.first_name&&r.errors.first_name})}),e.jsx(a,{item:!0,xs:12,children:e.jsx(s,{fullWidth:!0,id:"last_name",name:"last_name",label:"Last Name",variant:"outlined",value:r.values.last_name,onChange:r.handleChange,error:r.touched.last_name&&!!r.errors.last_name,helperText:r.touched.last_name&&r.errors.last_name})}),e.jsx(a,{item:!0,xs:12,children:e.jsx(s,{fullWidth:!0,id:"email",name:"email",label:"Email",variant:"outlined",value:r.values.email,onChange:r.handleChange,error:r.touched.email&&!!r.errors.email,helperText:r.touched.email&&r.errors.email})}),e.jsx(a,{item:!0,xs:12,children:e.jsx(s,{fullWidth:!0,id:"password",name:"password",label:"Password",type:"password",variant:"outlined",value:r.values.password,onChange:r.handleChange,error:r.touched.password&&!!r.errors.password,helperText:r.touched.password&&r.errors.password})}),e.jsx(a,{item:!0,xs:12,children:e.jsx(s,{fullWidth:!0,id:"re_password",name:"re_password",label:"Confirm Password",type:"password",variant:"outlined",value:r.values.re_password,onChange:r.handleChange,error:r.touched.re_password&&!!r.errors.re_password,helperText:r.touched.re_password&&r.errors.re_password})}),e.jsx(a,{item:!0,xs:12,children:e.jsx(t,{color:"primary",variant:"contained",fullWidth:!0,type:"submit",children:"Register"})}),e.jsx(a,{item:!0,xs:12,children:e.jsxs(c,{variant:"body2",sx:{mt:2},children:["Already a customer? ",e.jsx(b,{to:"/login",children:"Login"})]})}),e.jsxs(a,{item:!0,xs:12,children:[e.jsx(c,{variant:"body2",sx:{mt:2,textAlign:"center"},children:"Or continue with"}),e.jsxs(a,{container:!0,spacing:2,justifyContent:"center",sx:{mt:1},children:[e.jsx(a,{item:!0,children:e.jsx(w,{onSuccess:x,onFailure:o=>console.log(o),buttonText:"Google",render:o=>e.jsx(t,{variant:"outlined",startIcon:e.jsx(k,{}),onClick:o.onClick,disabled:o.disabled,fullWidth:!0,sx:{color:"white",backgroundColor:"#4285F4",borderColor:"#4285F4","&:hover":{backgroundColor:"#357AE8",borderColor:"#357AE8"}},children:"Google"})})}),e.jsx(a,{item:!0,children:e.jsx(t,{variant:"outlined",startIcon:e.jsx(y,{}),onClick:()=>handleSocialLogin("Facebook"),fullWidth:!0,sx:{color:"white",backgroundColor:"#3b5998",borderColor:"#3b5998","&:hover":{backgroundColor:"#2d4373",borderColor:"#2d4373"}},children:"Facebook"})}),e.jsx(a,{item:!0,children:e.jsx(t,{variant:"outlined",startIcon:e.jsx(F,{}),onClick:()=>handleSocialLogin("GitHub"),fullWidth:!0,sx:{color:"white",backgroundColor:"#333",borderColor:"#333","&:hover":{backgroundColor:"#24292e",borderColor:"#24292e"}},children:"GitHub"})}),e.jsx(a,{item:!0,children:e.jsx(t,{variant:"outlined",startIcon:e.jsx(S,{}),onClick:()=>handleSocialLogin("Twitter"),fullWidth:!0,sx:{color:"white",backgroundColor:"#1DA1F2",borderColor:"#1DA1F2","&:hover":{backgroundColor:"#0d95e8",borderColor:"#0d95e8"}},children:"Twitter"})})]})]})]})})})};export{N as default};
