import React, { useReducer } from 'react';
import OPLDrawer from './components/shared/Drawer/index';
import BodyFooter from "./components/shared/BodyFooter/index";
import OPLRouter from './router/OPLRouter';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './theme';
import { ApolloProvider } from '@apollo/react-hooks';

import { client } from './graphql';

function App() {

  const [drawerOpen, toggle] = useReducer(drawerOpen => !drawerOpen, false);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <OPLDrawer open={drawerOpen} toggle={toggle}>
          <OPLRouter />
          <BodyFooter/>
        </OPLDrawer>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
