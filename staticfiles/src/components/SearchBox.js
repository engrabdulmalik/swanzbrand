import{r as a,j as e,bc as l,aZ as h,I as p,d7 as c}from"../../vendor.js";const x=({onSearch:r})=>{const[t,n]=a.useState(""),s=o=>{n(o.target.value)},d=o=>{o.key==="Enter"&&r(t)},i=()=>{r(t)};return e.jsx(l,{variant:"outlined",placeholder:"Search...",value:t,onChange:s,onKeyPress:d,InputProps:{endAdornment:e.jsx(h,{position:"end",children:e.jsx(p,{onClick:i,children:e.jsx(c,{sx:{color:"white"}})})}),style:{color:"white",height:"45px"}},sx:{width:"400px",input:{color:"white",height:"50px",padding:"0 14px"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#0B4392",borderWidth:"2px"},"&:hover fieldset":{borderColor:"#0B4392",borderWidth:"2px"},"&.Mui-focused fieldset":{borderColor:"#0B4392",borderWidth:"2px"}}}})};export{x as S};
