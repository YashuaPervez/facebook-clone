import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { findCookie } from "../utils/functions";

const httpLink = createHttpLink({
  uri: "/api/graphql",
});

const authLink = setContext((_, { headers }) => {
  let token = null;
  if (typeof document !== "undefined") {
    const allCookies = document.cookie;
    token = findCookie(allCookies, "fb-clone-auth-token");
  }

  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
