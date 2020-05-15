import React from 'react';
import OPLDrawer from './components/shared/Drawer/index';
import OPLRouter from './router/OPLRouter';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './components/theme';
import { ApolloProvider } from '@apollo/react-hooks';

import { client } from './graphql';

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <OPLDrawer>
          <OPLRouter />
        </OPLDrawer>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
