import{u,c as l,d as m,e as f,a as i,j as e,B as p,f as d,A as x}from"../../vendor.js";import{a as g}from"../redux/actions/userActions.js";import{F as v}from"./FormContainer.js";import{S as h}from"../../async-vendor.js";import"../../__commonjsHelpers__.js";import"../redux/constants/userConstants.js";import"../redux/constants/orderContants.js";const w=()=>{const o=u(),r=l(),{uid:s,token:t}=m(),{error:a=null,success:c=!1}=f(n=>n.userActivationReducer||{});return i.useEffect(()=>{console.log("Activate component mounted"),console.log("UID:",s),console.log("Token:",t),r(g(s,t))},[r,s,t]),i.useEffect(()=>{c&&(h.fire({title:"Success!",text:"Your account has been activated successfully.",icon:"success"}),o("/login"))},[c,o]),e.jsx(v,{children:e.jsxs(p,{sx:{flexGrow:1,p:3},children:[e.jsx(d,{variant:"h4",gutterBottom:!0,align:"center",children:"Congrats!!! Account Activated Successfully"}),a&&e.jsx(x,{severity:"error",children:a})]})})};export{w as default};