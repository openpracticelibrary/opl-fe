import ApolloClient from 'apollo-boost';

// TODO: Set URI attribute to env var
const client = new ApolloClient({
  //uri: 'http://localhost:4000'
  uri: 'http://opl-content-api-opl-dev.apps.s44.core.rht-labs.com/graphql'
});

export default client;
