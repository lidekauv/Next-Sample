import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://app.panhara.work",
  cache: new InMemoryCache(),
});

export default client;
