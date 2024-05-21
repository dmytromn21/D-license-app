import { ApolloClient, InMemoryCache } from "@apollo/client";

const apollo = new ApolloClient({
  uri: "http://localhost:4000/gql",
  cache: new InMemoryCache(),
});

export default apollo;
