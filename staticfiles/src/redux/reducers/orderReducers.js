import{p as a,k as s,j as R,i as E,b as d,a as t,O as u,q as l,r as o,s as _,t as n,o as c,e as S,d as D,c as T,h as i,g as O,f as L,u as g,n as p,m as I,l as f}from"../constants/orderContants.js";const A=(r={},e)=>{switch(e.type){case E:return{loading:!0};case R:return{loading:!1,success:!0,order:e.payload};case s:return{loading:!1,error:e.payload};case a:return{};default:return r}},C=(r={loading:!0,orderItems:[],shippingAddress:{}},e)=>{switch(e.type){case u:return{...r,loading:!0};case t:return{loading:!1,order:e.payload};case d:return{loading:!1,error:e.payload};default:return r}},U=(r={},e)=>{switch(e.type){case n:return{loading:!0};case _:return{loading:!1,success:!0};case o:return{loading:!1,error:e.payload};case l:return{};default:return r}},h=(r={orders:[]},e)=>{switch(e.type){case T:return{loading:!0};case D:return{loading:!1,orders:e.payload};case S:return{loading:!1,error:e.payload};case c:return{orders:[]};default:return r}},Y=(r={orders:[]},e)=>{switch(e.type){case L:return{loading:!0};case O:return{loading:!1,orders:e.payload};case i:return{loading:!1,error:e.payload};default:return r}},w=(r={},e)=>{switch(e.type){case f:return{loading:!0};case I:return{loading:!1,success:!0};case p:return{loading:!1,error:e.payload};case g:return{};default:return r}};export{C as a,U as b,h as c,Y as d,w as e,A as o};