import { initializeApollo } from '@/app/lib/apollo-client';
import { gql } from '@apollo/client';
import BlogList from '@/components/BlogList';

export default async function BlogsPage() {
  const client = initializeApollo();
  const { data } = await client.query({
    query: gql`
      query AllBlogs {
        blogs {
          nodes {
            title
            date
            slug
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    `,
  });

  return (
    <div>
      <h1>Latest News</h1>
      <BlogList posts={data.blogs.nodes} />
    </div>
  );
}