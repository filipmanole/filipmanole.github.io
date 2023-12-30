import{r as a,j as e}from"./index-a81e6543.js";const u=()=>{const[r,o]=a.useState(null),[n,l]=a.useState(!0),[c,i]=a.useState(null);if(a.useEffect(()=>{(async()=>{try{const m=await(await fetch("https://gql.hashnode.com",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`
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
            `})})).json();o(m.data),l(!1)}catch(s){i(s),l(!1)}})()},[]),n)return e.jsx("p",{children:"Loading..."});if(c||!r)return e.jsx(e.Fragment,{});const d=r.user.posts.nodes;return e.jsxs("div",{className:"flex flex-col gap-20 items-center",children:[e.jsx("h2",{className:"text-center text-white",children:"Check out my blog posts"}),e.jsx("div",{className:"flex max-lg:flex-col gap-10",children:d.map((t,s)=>e.jsxs("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",className:"bg-darkgrey max-w-md overflow-hidden rounded-xl shadow-lg block",children:[e.jsx("img",{className:"w-full h-80 object-cover object-center",src:t.coverImage.url,alt:t.title}),e.jsx("div",{className:"px-6 py-8",children:e.jsx("div",{className:"text-white font-bold text-2xl mb-2 line-clamp-2",children:t.title})})]},s))})]})};export{u as default};
