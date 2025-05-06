import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

let client;

function createApolloClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: "https://astralpaints.kwebmakerdigitalagency.com/graphql",
      fetchOptions: {
        mode: "cors",
      },
      onError: ({ networkError, graphQLErrors }) => {
        if (graphQLErrors) {
          graphQLErrors.forEach(({ message, locations, path }) => {
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            );
          });
        }
        if (networkError) {
          console.log(`[Network error]: ${networkError}`);
        }
      },
    }),
    cache: new InMemoryCache(),
    ssrMode: typeof window === "undefined",
  });
}

export function initializeApollo(initialState = null) {
  const _client = client ?? createApolloClient();

  if (initialState) {
    _client.cache.restore(initialState);
  }

  if (typeof window === "undefined") return _client;
  if (!client) client = _client;

  return _client;
}
