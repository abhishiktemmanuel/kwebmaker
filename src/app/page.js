import { initializeApollo } from "@/app/lib/apollo-client";
import { gql } from "@apollo/client";
import HomePageClient from "@/components/HomePageClient";

export const metadata = {
  title: "Tennis Academy",
  description: "Professional tennis training",
  openGraph: {
    images: ["/default-og.jpg"],
  },
};

async function getMetadata() {
  const client = initializeApollo();
  const { data } = await client.query({
    query: gql`
      query HomeSEO {
        pages(where: { name: "Homepage" }) {
          nodes {
            homepage {
              seo {
                title
                metaDesc
                opengraphImage {
                  mediaItemUrl
                }
              }
            }
          }
        }
      }
    `,
  });

  const seo = data?.pages?.nodes[0]?.homepage?.seo || {};

  return {
    title: seo.title || "Tennis Academy",
    description: seo.metaDesc || "Professional tennis training",
    openGraph: {
      images: seo.opengraphImage?.mediaItemUrl
        ? [seo.opengraphImage.mediaItemUrl]
        : ["/default-og.jpg"],
    },
  };
}

export default async function HomePage() {
  const client = initializeApollo();
  const { data } = await client.query({
    query: gql`
      query HomeData {
        pages(where: { name: "Homepage" }) {
          nodes {
            homepage {
              banners {
                bannerImage {
                  node {
                    sourceUrl
                  }
                }
                bannersTitle
                bannerDescription
                bannerButton {
                  title
                  url
                  target
                }
              }
              homeAboutTitle
              homeAboutSubtitle
              homeAboutDescription
              categories {
                title
                link
                image {
                  node {
                    sourceUrl
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  return <HomePageClient data={data?.pages?.nodes[0]?.homepage} />;
}
