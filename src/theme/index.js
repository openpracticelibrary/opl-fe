import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import MuiOverrides from "./MuiOverrides";

const white = "#f5f5f5";
const lighter_white = "#fafafa";
const insights_yellow = "#fdb815";
const foundation_purple = "#8977b6";
const discovery_blue = "#1975ff";
const delivery_green = "#10D4A0";
const very_light_grey = "#e9e9e9";
const brownish_grey = "#717171";
const brown_grey = "#596562";
const black = "#2e2e2e";
const true_white = "#ffffff";
const green_gray = "#596562";
const highlight_blue = "#DFF1FF";

const theme = createMuiTheme({
  palette: {
    common: {
      discovery_blue: `${discovery_blue}`,
      highlight_blue: `${highlight_blue}`,
      foundation_purple: `${foundation_purple}`,
      delivery_green: `${delivery_green}`,
      insights_yellow: `${insights_yellow}`,
      white: `${white}`,
      very_light_grey: `${very_light_grey}`,
      brownish_grey: `${brownish_grey}`,
      brown_grey: `${brown_grey}`,
      black: `${black}`,
      lighter_white: `${lighter_white}`,
      true_white: `${true_white}`,
      green_gray: `${green_gray}`,
    },
    primary: {
      light: "#dff1ff",
      main: "#1975ff",
    },
    secondary: {
      main: "#10d4a0",
    },
    grey: {
      A400: "#596562",
    },
    text: {
      primary: "#2e2e2e",
      secondary: "#1975ff",
    },
  },

  typography: {
    fontFamily: ["Quicksand", "Noto Serif"],
    h1: {
      fontWeight: 'bold',
    },
    h2: {
      fontWeight: 'bold',
    },
    h3: {
      fontWeight: 'bold',
    },
    body1: {
      fontFamily: "Noto Serif",
    },
  },
  overrides: {
    ...MuiOverrides
  },
});

export default responsiveFontSizes(theme);
