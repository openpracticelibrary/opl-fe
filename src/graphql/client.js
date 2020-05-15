import ApolloClient from 'apollo-boost';

// TODO: Set URI attribute to env var
const client = new ApolloClient({
  uri: 'http://localhost:4000'
});

export default client;
