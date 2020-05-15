import {createMuiTheme} from '@material-ui/core/styles';

const white = "#f5f5f5";
const insights_yellow = "#fdb815";
const foundation_purple = "#8977b6";
const discovery_blue = "#4b90cd";
const delivery_green = "#3dadae";
const very_light_grey = "#e9e9e9";
const brownish_grey = "#717171";
const brown_grey = "#a0a0a0";
const black = "#2e2e2e";

export default createMuiTheme({
    palette: {
        common: {
            very_light_grey: `${ very_light_grey }`,
            discovery_blue: `${ discovery_blue }`,
            foundation_purple: `${ foundation_purple }`,
            delivery_green: `${ delivery_green }`,
            white: `${ white }`,
            brownish_grey: `${ brownish_grey }`,
        },
        primary: {
            main: `${ discovery_blue }`,
        },
        secondary: {
            main: `${ insights_yellow }`,
        },
        text: {
            primary: `${ black }`,
            secondary: `${ brownish_grey }`,
            light_grey: `${ brown_grey }`,
        }
    },
    typography: {
        fontFamily: [
            'Noto Serif',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif'
        ],
    }
})
