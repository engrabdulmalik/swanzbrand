import{u as f,c as x,d as _,e as d,a as p,j as r,n as i,T as n,ae as j,aj as g,o as v}from"../../vendor.js";import{c as U,e as l,q as b,u as C,S as E}from"../../async-vendor.js";import{F as A}from"../components/FormContainer.js";import{g as S,e as q}from"../redux/actions/userActions.js";import{J as T}from"../redux/constants/userConstants.js";import"../../__commonjsHelpers__.js";import"../redux/constants/orderContants.js";const F=U({first_name:l().required("First Name is required"),last_name:l().required("Last Name is required"),isAdmin:b(),username:l().required("Username is required"),email:l().email("Invalid email address").required("Email is required")}),P=()=>{const u=f(),t=x(),{id:m}=_(),c=d(s=>s.userDetails),{loading:D,error:y,user:e}=c,h=d(s=>s.userUpdate),{loading:B,error:N,success:o}=h;p.useEffect(()=>{o?(t({type:T}),u("/admin/user-list")):!e||e._id!==m?t(S(m)):a.setValues({first_name:(e==null?void 0:e.first_name)||"",last_name:(e==null?void 0:e.last_name)||"",isAdmin:(e==null?void 0:e.isAdmin)||!1,username:(e==null?void 0:e.username)||"",email:(e==null?void 0:e.email)||""})},[t,m,e,o]);const a=C({initialValues:{first_name:(e==null?void 0:e.first_name)||"",last_name:(e==null?void 0:e.last_name)||"",isAdmin:(e==null?void 0:e.isAdmin)||!1,username:(e==null?void 0:e.username)||"",email:(e==null?void 0:e.email)||""},validationSchema:F,enableReinitialize:!0,onSubmit:s=>{t(q({_id:e._id,...s})),E.fire({title:"Great job!",text:`User ${s.first_name} ${s.last_name} has been updated successfully`,icon:"success"})}});return r.jsx(A,{title:"Edit User",children:r.jsx("form",{onSubmit:a.handleSubmit,children:r.jsxs(i,{container:!0,spacing:2,children:[r.jsx(i,{item:!0,xs:12,children:r.jsx(n,{fullWidth:!0,id:"first_name",name:"first_name",label:"First Name",variant:"outlined",value:a.values.first_name,onChange:a.handleChange,error:a.touched.first_name&&!!a.errors.first_name,helperText:a.touched.first_name&&a.errors.first_name})}),r.jsx(i,{item:!0,xs:12,children:r.jsx(n,{fullWidth:!0,id:"last_name",name:"last_name",label:"Last Name",variant:"outlined",value:a.values.last_name,onChange:a.handleChange,error:a.touched.last_name&&!!a.errors.last_name,helperText:a.touched.last_name&&a.errors.last_name})}),r.jsx(i,{item:!0,xs:12,children:r.jsx(n,{fullWidth:!0,id:"username",name:"username",label:"Username",variant:"outlined",value:a.values.username,onChange:a.handleChange,error:a.touched.username&&!!a.errors.username,helperText:a.touched.username&&a.errors.username})}),r.jsx(i,{item:!0,xs:12,children:r.jsx(n,{fullWidth:!0,id:"email",name:"email",label:"Email",variant:"outlined",value:a.values.email,onChange:a.handleChange,error:a.touched.email&&!!a.errors.email,helperText:a.touched.email&&a.errors.email})}),r.jsx(i,{item:!0,xs:12,children:r.jsx(j,{control:r.jsx(g,{id:"isAdmin",name:"isAdmin",checked:a.values.isAdmin,onChange:a.handleChange,color:"primary"}),label:"Admin"})}),r.jsx(i,{item:!0,xs:12,children:r.jsx(v,{color:"primary",variant:"contained",fullWidth:!0,type:"submit",children:"Update"})})]})})})};export{P as default};
