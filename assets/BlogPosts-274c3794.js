import{j as e,r as o,S as h}from"./index-0f4c7910.js";import{F as m}from"./index.esm-b8b66027.js";const p=({label:s,link:l,iconSVG:n})=>{const r=()=>{window.open(l,"_blank")};return e.jsx("div",{className:"bg-darkgrey hover:scale-100 hover:-translate-y-2 hover:drop-shadow-xl transition-all duration-200 text-white font-bold text-[1.6rem] py-4 px-8 rounded-lg cursor-pointer w-96",onClick:r,children:e.jsxs("div",{className:"flex flex-row gap-10 justify-center",children:[e.jsx(n,{className:"w-max h-10"}),s]})})},g=()=>{const[s,l]=o.useState(null),[n,r]=o.useState(!0),[c,i]=o.useState(null);if(o.useEffect(()=>{(async()=>{try{const x=await(await fetch("https://gql.hashnode.com",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`
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
            `})})).json();l(x.data),r(!1)}catch(a){i(a),r(!1)}})()},[]),n)return e.jsx(h,{});if(c||!s)return e.jsx(e.Fragment,{});const d=s.user.posts.nodes;return e.jsxs("div",{className:"flex flex-col gap-20 items-center",children:[e.jsx("h2",{className:"text-center text-white",children:"My blog posts"}),e.jsx("div",{className:"flex max-lg:flex-col gap-10",children:d.map((t,a)=>e.jsxs("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",className:"w-96 hover:scale-100 hover:-translate-y-2 hover:drop-shadow-xl transition-all duration-200 bg-darkgrey max-w-md overflow-hidden rounded-xl shadow-lg block",children:[e.jsx("img",{className:"w-full h-80 object-cover object-center",src:t.coverImage.url,alt:t.title}),e.jsx("div",{className:"px-6 py-8",children:e.jsx("div",{className:"text-white text-2xl mb-2 line-clamp-2",children:t.title})})]},a))}),e.jsx(p,{link:"http://blog.filipmanole.com",iconSVG:m,label:"More posts..."})]})};export{g as default};
