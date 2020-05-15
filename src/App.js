import React from 'react';
import OPLDrawer from './components/shared/Drawer/index';
import OPLRouter from './router/OPLRouter';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './components/theme';

function App() {
    return (
        <ThemeProvider theme={theme}>
          <OPLDrawer>
            <OPLRouter />
          </OPLDrawer>
        </ThemeProvider>
    );
}

export default App;
