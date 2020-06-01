import React from 'react';
import OPLDrawer from './components/shared/Drawer/index';
import BodyFooter from "./components/shared/BodyFooter/index";
import OPLRouter from './router/OPLRouter';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './theme';
import { ApolloProvider } from '@apollo/react-hooks';

import { client } from './graphql';

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <OPLDrawer>
          <OPLRouter />
          <BodyFooter/>
        </OPLDrawer>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
