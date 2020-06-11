import ApolloClient from 'apollo-boost';

const GRAPHQL_ENDPOINT = process.env.REACT_APP_GRAPHQL_ENDPOINT || '/graphql';

const client = new ApolloClient({
  uri: GRAPHQL_ENDPOINT,
  request: (operation) => {
    const token = localStorage.getItem('token');
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  }
});

export default client;
