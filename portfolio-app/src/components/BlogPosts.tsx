import { useState, useEffect } from 'react';
import Button from './Button';
import { FiBookOpen } from "react-icons/fi";

type TPost = {
  title: string;
  url: string;
  coverImage: { url: string };
}

const BlogPosts = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://gql.hashnode.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
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
            `,
          }),
        });

        const result = await response.json();

        setData(result.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error || !data) return <></>;

  // Access your GraphQL data in the 'data' variable
  const posts = data.user.posts.nodes;

  return (
    <div className="flex flex-col gap-20 items-center">
      <h2 className="text-center text-white">
        Blog posts
      </h2>

      <div className="flex max-lg:flex-col gap-10">
        {posts.map((post: TPost, index: number) => (
          <a 
            key={index} 
            href={post.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-darkgrey max-w-md overflow-hidden rounded-xl shadow-lg block">
            <img className="w-full h-80 object-cover object-center" src={post.coverImage.url} alt={post.title} />
            <div className="px-6 py-8">
              <div className="text-white text-2xl mb-2 line-clamp-2">{post.title}</div>
            </div>
          </a>
        ))}
      </div>

      <Button link="http://blog.filipmanole.com" iconSVG={FiBookOpen} label="More posts..."/>
    </div>

  );
};

export default BlogPosts;
