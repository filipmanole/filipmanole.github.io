import{j as e,L as n}from"./index-eba0c5f7.js";import{h as o}from"./data-d47983fb.js";import"./index.esm-23ff2f70.js";const l=({onClick:t,link:r,iconSVG:a})=>{const s={onClick:t,className:`bg-darkgrey text-white drop-shadow-2xl border-none py-4 px-8 rounded-xl text-[1.6rem] transition-all duration-200 flex flex-row gap-4 justify-center items-center cursor-pointer max-lg:text-3xl max-lg:py-8 max-lg:px-16 max-lg:rounded-xl
    shadow-xl hover:scale-100 hover:-translate-y-2 hover:drop-shadow-xl transition-all duration-200 w-max`};return e.jsx(n,{to:r||"",className:"no-underline",children:e.jsx("button",{...s,children:e.jsx(a,{className:" h-10"})})})},d=()=>e.jsxs("div",{className:"flex flex-col gap-20 items-center",children:[e.jsx("h2",{className:"text-white",children:"Let's stay in touch!"}),e.jsx("div",{className:"button-container flex items-center justify-center gap-10",children:o.socials.map((t,r)=>e.jsx(l,{iconSVG:t.icon,link:t.link},r))})]});export{d as default};