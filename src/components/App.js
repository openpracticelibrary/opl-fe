import React from 'react';
import OPLDrawer from './shared/Drawer/index';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './theme';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <OPLDrawer/>
        </ThemeProvider>
    );
}

export default App;
