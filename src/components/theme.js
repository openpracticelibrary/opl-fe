import { createMuiTheme } from "@material-ui/core/styles";

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
      discovery_blue: `${discovery_blue}`,
      foundation_purple: `${foundation_purple}`,
      delivery_green: `${delivery_green}`,
      insights_yellow: `${insights_yellow}`,
      white: `${white}`,
      very_light_grey: `${very_light_grey}`,
      brownish_grey: `${brownish_grey}`,
      brown_grey: `${brown_grey}`,
      black: `${black}`,
    },
    primary: {
      main: `${black}`,
    },
    secondary: {
      main: `${brownish_grey}`,
    },
    text: {
      primary: `${black}`,
      secondary: `${brownish_grey}`,
      brown_grey: `${brown_grey}`,
    },
  },

  typography: {
    fontFamily: ["Noto Serif", "Assistant", "Roboto"],

    //Main Title
    h1: {
      fontFamily: "Noto Serif",
      fontWeight: "bold",
      fontSize: "2.5rem",
      color: `${black}`,
    },

    //Section Titles
    h2: {
      fontFamily: "Noto Serif",
      fontWeight: "bold",
      fontSize: "1.625rem",
      color: `${black}`,
    },

    //Pull quote
    h3: {
      fontFamily: "Noto Serif",
      fontWeight: "normal italic",
      fontSize: "1.625rem",
      color: `${brown_grey}`,
    },

    //Subtitle
    subtitle1: {
      fontFamily: "Noto Serif",
      fontWeight: "normal",
      fontSize: "1.25rem",
      lineHeight: "1.8125rem",
      color: `${brownish_grey}`,
    },

    //List Text
    subtitle2: {
      fontFamily: "Noto Serif",
      fontWeight: "normal",
      fontSize: "1rem",
      lineHeight: "2.375rem",
      color: `${brownish_grey}`,
    },

    //Body text
    body1: {
      fontFamily: "Noto Serif",
      fontWeight: "normal",
      fontSize: "1rem",
      lineHeight: "1.375rem",
      color: `${brownish_grey}`,
    },

    //Navigation Text
    button: {
      fontFamily: "Assistant",
      fontWeight: "SemiBold",
      fontSize: "0.75rem",
      lineHeight: "1.8125rem",
      letterSpacing: "0.05625rem",
      color: `${brownish_grey}`,
    },

    //Tiny Text
    caption: {
      fontFamily: "Assistant",
      fontWeight: "normal",
      fontSize: "0.5rem",
      lineHeight: "0.5625rem",
      letterSpacing: "-0.00625rem",
      color: `${brownish_grey}`,
    },

    //Assistant SemiBold
    overline: {
      fontFamily: "Assistant",
      fontWeight: "normal",
      fontSize: "0.75rem",
      lineHeight: "0.15125rem",
      letterSpacing: "0.05625rem",
      color: `${brown_grey}`,
    },
  },
});
