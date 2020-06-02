import React from 'react';
import OPLRouter from './router/OPLRouter';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './theme';
import { ApolloProvider } from '@apollo/react-hooks';

import { client } from './graphql';

function App() {

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <OPLRouter />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
