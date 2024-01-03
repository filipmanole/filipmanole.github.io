import{j as e,L as m,r as c}from"./index-a30d0e33.js";import{F as p}from"./index.esm-899adfb5.js";const u=({onClick:a,label:l,link:x,value:o,iconSVG:n,buttoncolor:r,buttonhovercolor:d,type:s,elementType:t})=>{const i={onClick:a,type:s,className:`bg-darkgrey text-white drop-shadow-2xl border-none py-4 px-8 rounded-lg text-[1.6rem] transition-all duration-200 flex flex-row gap-4 justify-center items-center cursor-pointer ${r} ${d} max-lg:text-3xl max-lg:py-8 max-lg:px-16 max-lg:rounded-xl
    shadow-xl hover:scale-100 hover:-translate-y-2 hover:drop-shadow-xl transition-all duration-200 w-max`};return t==="input"?e.jsx("input",{...i,value:o}):e.jsx(m,{to:x||"",className:"no-underline",children:e.jsxs("button",{...i,children:[n?e.jsx(n,{className:"w-max h-10"}):e.jsx("img",{src:r||"",alt:`${l}-icon`,className:`bg-[${r||""}] w-16 `}),l]})})},f=()=>{const[a,l]=c.useState(null),[x,o]=c.useState(!0),[n,r]=c.useState(null);if(c.useEffect(()=>{(async()=>{try{const i=await(await fetch("https://gql.hashnode.com",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`
              query {
                user(username: "filipmanole") {
                  posts(
                    pageSize: 3,
                    page: 1,
                    sortBy: DATE_PUBLISHED_DESC
                  ) {
                    nodes {
                      title
                      url
                      coverImage {
                        url
                      }
                    }
                  }
                }
              }
            `})})).json();l(i.data),o(!1)}catch(t){r(t),o(!1)}})()},[]),x)return e.jsx("p",{children:"Loading..."});if(n||!a)return e.jsx(e.Fragment,{});const d=a.user.posts.nodes;return e.jsxs("div",{className:"flex flex-col gap-20 items-center",children:[e.jsx("h2",{className:"text-center text-white",children:"Blog posts"}),e.jsx("div",{className:"flex max-lg:flex-col gap-10",children:d.map((s,t)=>e.jsxs("a",{href:s.url,target:"_blank",rel:"noopener noreferrer",className:"bg-darkgrey max-w-md overflow-hidden rounded-xl shadow-lg block",children:[e.jsx("img",{className:"w-full h-80 object-cover object-center",src:s.coverImage.url,alt:s.title}),e.jsx("div",{className:"px-6 py-8",children:e.jsx("div",{className:"text-white text-2xl mb-2 line-clamp-2",children:s.title})})]},t))}),e.jsx(u,{link:"http://blog.filipmanole.com",iconSVG:p,label:"More posts..."})]})};export{f as default};
