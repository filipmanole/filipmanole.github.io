import{r as d,O as E,j as m}from"./index-76b990ff.js";const y="https://app.cal.com/embed/embed.js";function _(l=y){(function(n,s,a){let i=function(r,t){r.q.push(t)},u=n.document;n.Cal=n.Cal||function(){let r=n.Cal,t=arguments;if(r.loaded||(r.ns={},r.q=r.q||[],u.head.appendChild(u.createElement("script")).src=s,r.loaded=!0),t[0]===a){const e=function(){i(e,arguments)},c=t[1];e.q=e.q||[],typeof c=="string"?(r.ns[c]=e)&&i(e,t):i(r,t);return}i(r,t)}})(window,l,"init");/*!  Copying ends here. */return window.Cal}_.toString();function v(l){const[n,s]=d.useState();return d.useEffect(()=>{s(()=>_(l))},[]),n}var w={exports:{}},f={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h;function j(){if(h)return f;h=1;var l=E,n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function r(t,e,c){var o,p={},x=null,g=null;c!==void 0&&(x=""+c),e.key!==void 0&&(x=""+e.key),e.ref!==void 0&&(g=e.ref);for(o in e)a.call(e,o)&&!u.hasOwnProperty(o)&&(p[o]=e[o]);if(t&&t.defaultProps)for(o in e=t.defaultProps,e)p[o]===void 0&&(p[o]=e[o]);return{$$typeof:n,type:t,key:x,ref:g,props:p,_owner:i.current}}return f.Fragment=s,f.jsx=r,f.jsxs=r,f}w.exports=j();var O=w.exports;const R=O.jsx,k=function(l){const{calLink:n,calOrigin:s,config:a,initConfig:i={},embedJsUrl:u,...r}=l;if(!n)throw new Error("calLink is required");const t=d.useRef(!1),e=v(u),c=d.useRef(null);return d.useEffect(()=>{if(!e||t.current||!c.current)return;t.current=!0;const o=c.current;e("init",{...i,origin:s}),e("inline",{elementOrSelector:o,calLink:n,config:a})},[e,n,a,s,i]),e?R("div",{ref:c,...r}):null},S=k,C=()=>m.jsxs("div",{className:"flex flex-col gap-20",children:[m.jsx("h2",{className:"text-center text-white",children:"Book a free consulting call"}),m.jsx("p",{className:"w-3/5 max-lg:w-4/5 text-justify text-white mx-auto",children:"I am eager to understand your current challenges and contribute impactful results to your business while also establishing the groundwork for future innovations."}),m.jsx(S,{calLink:"filipmanole/consulting-call"})]});export{C as default};
