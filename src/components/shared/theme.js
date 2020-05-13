import {createMuiTheme} from '@material-ui/core/styles';

const oplBlue = "#0B72B9";
const oplOrange = "#FFBA60";

export default createMuiTheme({
    palette: {
        common: {
            blue: `${ oplBlue }`,
            orange: `${ oplOrange }`,
        },
        primary: {
            main: `${ oplBlue }`,
        },
        secondary: {
            main: `${ oplOrange }`,
        }
    },
    typography: {
        fontFamily: [
            'Noto Serif',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif'
        ]
    }
})