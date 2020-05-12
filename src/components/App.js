import React from 'react';
import OPLDrawer from './ui/Drawer/index';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './ui/theme';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <OPLDrawer/>
        </ThemeProvider>
    );
}

export default App;
