import{P as s,c as u,d as l,e as t,f as E,g as o,h as d,i as c,j as n,k as T,l as R,m as C,n as _,o as S,p as U,q as p,r as D,s as g,t as i,u as O,b as A,a as P,C as f,v as y,w as L,x as I,y as w}from"../constants/productConstants.js";const a={products:[],loading:!1,error:null},F=(e=a,r)=>{switch(r.type){case l:return{...e,loading:!0,error:null};case u:return{...e,loading:!1,products:r.payload,error:null};case s:return{...e,loading:!1,error:r.payload};default:return e}},Q=(e={product:{reviews:[]}},r)=>{switch(r.type){case o:return{...e,loading:!0,error:null};case E:return{...e,loading:!1,product:r.payload,error:null};case t:return{...e,loading:!1,error:r.payload};default:return e}},G=(e=a,r)=>{switch(r.type){case n:return{...e,loading:!0,error:null};case c:return{...e,loading:!1,products:r.payload,error:null};case d:return{...e,loading:!1,error:r.payload};default:return e}},Y=(e={},r)=>{switch(r.type){case C:return{loading:!0};case R:return{loading:!1,success:!0};case T:return{loading:!1,error:r.payload};default:return e}},V=(e={},r)=>{switch(r.type){case p:return{loading:!0};case U:return{loading:!1,success:!0,product:r.payload};case S:return{loading:!1,error:r.payload};case _:return{};default:return e}},W=(e={product:{}},r)=>{switch(r.type){case O:return{loading:!0};case i:return{loading:!1,success:!0,product:r.payload};case g:return{loading:!1,error:r.payload};case D:return{product:{}};default:return e}},m=(e={categories:[]},r)=>{switch(r.type){case f:return{loading:!0,error:null};case P:return{...e,loading:!1,categories:r.payload,error:null};case A:return{...e,loading:!1,error:r.payload};default:return e}},v=(e={},r)=>{switch(r.type){case w:return{loading:!0};case I:return{loading:!1,success:!0};case L:return{loading:!1,error:r.payload};case y:return{};default:return e}};export{Q as a,G as b,Y as c,V as d,W as e,m as f,v as g,F as p};
