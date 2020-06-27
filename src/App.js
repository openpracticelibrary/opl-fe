import React from 'react';
import OPLRouter from './router/OPLRouter';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import customTheme from './theme';
import { ApolloProvider } from '@apollo/react-hooks';
import BodyFooter from './components/shared/BodyFooter'
import { client } from './graphql';

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={customTheme}>
        <CSSReset />
        <OPLRouter />
        <BodyFooter />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
