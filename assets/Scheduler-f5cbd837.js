import{r as p,O as v,j as _}from"./index-a81e6543.js";const y="https://app.cal.com/embed/embed.js";function g(a=y){(function(t,l,s){let c=function(r,n){r.q.push(n)},f=t.document;t.Cal=t.Cal||function(){let r=t.Cal,n=arguments;if(r.loaded||(r.ns={},r.q=r.q||[],f.head.appendChild(f.createElement("script")).src=l,r.loaded=!0),n[0]===s){const e=function(){c(e,arguments)},i=n[1];e.q=e.q||[],typeof i=="string"?(r.ns[i]=e)&&c(e,n):c(r,n);return}c(r,n)}})(window,a,"init");/*!  Copying ends here. */return window.Cal}g.toString();function O(a){const[t,l]=p.useState();return p.useEffect(()=>{l(()=>g(a))},[]),t}var h={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E;function w(){if(E)return u;E=1;var a=v,t=Symbol.for("react.element"),l=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function r(n,e,i){var o,d={},m=null,x=null;i!==void 0&&(m=""+i),e.key!==void 0&&(m=""+e.key),e.ref!==void 0&&(x=e.ref);for(o in e)s.call(e,o)&&!f.hasOwnProperty(o)&&(d[o]=e[o]);if(n&&n.defaultProps)for(o in e=n.defaultProps,e)d[o]===void 0&&(d[o]=e[o]);return{$$typeof:t,type:n,key:m,ref:x,props:d,_owner:c.current}}return u.Fragment=l,u.jsx=r,u.jsxs=r,u}h.exports=w();var R=h.exports;const j=R.jsx,S=function(a){const{calLink:t,calOrigin:l,config:s,initConfig:c={},embedJsUrl:f,...r}=a;if(!t)throw new Error("calLink is required");const n=p.useRef(!1),e=O(f),i=p.useRef(null);return p.useEffect(()=>{if(!e||n.current||!i.current)return;n.current=!0;const o=i.current;e("init",{...c,origin:l}),e("inline",{elementOrSelector:o,calLink:t,config:s})},[e,t,s,l,c]),e?j("div",{ref:i,...r}):null},k=S,L=()=>_.jsxs("div",{className:"flex flex-col gap-20 ",children:[_.jsx("h2",{className:"text-center text-white",children:"Book a free consulting call"}),_.jsx(k,{calLink:"filipmanole/15min"})]});export{L as default};
