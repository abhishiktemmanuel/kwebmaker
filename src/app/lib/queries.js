import { gql } from "@apollo/client";

export const HOME_QUERY = gql`
  query HomePage {
    pages(where: {name: "Homepage"}) {
      nodes {
        homepage {
          # ... fields
        }
      }
    }
  }
`;

export const BLOG_QUERY = gql`
  query AllBlogs {
    blogs {
      nodes {
        # ... blog fields
      }
    }
  }
`;
