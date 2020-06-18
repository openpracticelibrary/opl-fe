import { createMuiTheme } from "@material-ui/core/styles";

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
      lighter_white: `${lighter_white}`,
      true_white: `${true_white}`,
      green_gray: `${green_gray}`,
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
    fontFamily: ["Noto Serif", "Roboto", "Quicksand"],

    //Main Title
    h1: {
      fontFamily: "Quicksand",
      fontWeight: "bold",
      fontSize: "2.875rem",
      color: `${black}`,
    },

    //Section Titles
    h2: {
      fontFamily: "Quicksand",
      fontWeight: "bold",
      fontSize: "1.625rem",
      color: `${black}`,
    },

    //Pull quote
    h3: {
      fontFamily: "Noto Serif",
      fontWeight: "normal",
      fontStyle: "italic",
      fontSize: "1.625rem",
      color: `${brown_grey}`,
    },

    // Landing page large text
    h4: {
      fontFamily: "Quicksand",
      fontWeight: "bold",
      fontSize: "6rem",
      color: `${black}`,
    },

    // Landing page text
    h5: {
      fontFamily: "Quicksand",
      fontWeight: "normal",
      fontSize: "2rem",
      color: `${black}`,
    },

    //Subtitle
    subtitle1: {
      fontFamily: "Quicksand",
      fontWeight: "normal",
      fontSize: "1.25rem",
      lineHeight: "1.8125rem",
      color: `${brownish_grey}`,
    },

    //List Text
    subtitle2: {
      fontFamily: "Quicksand",
      fontWeight: "normal",
      fontSize: "2rem",
      lineHeight: "2.375rem",
      color: `${brownish_grey}`,
    },

    //card sub Text
    h6: {
      fontFamily: "Noto Serif",
      fontWeight: "normal",
      fontSize: "0.75rem",
      lineHeight: "1.375rem",
      color: `${brown_grey}`,
    },

    //Body text
    body1: {
      fontFamily: "Noto Serif",
      fontWeight: "normal",
      fontSize: "1rem",
      lineHeight: "1.375rem",
      color: `${brownish_grey}`,
    },

    //NotoSerif-Bold
    body2: {
      fontFamily: "Quicksand",
      fontWeight: "bold",
      fontSize: "1rem",
      lineHeight: "1.375rem",
      color: `${brownish_grey}`,
    },

    //Navigation Text
    button: {
      fontFamily: "Quicksand",
      fontWeight: "600",
      fontSize: "1.00rem",
      lineHeight: "1.8125rem",
      letterSpacing: "0.05625rem",
      color: `${brownish_grey}`,
      textTransform: "none",
    },

    //Tiny Text
    caption: {
      fontFamily: "Quicksand",
      fontWeight: "normal",
      fontSize: "0.5rem",
      lineHeight: "0.5rem",
      letterSpacing: "-0.00625rem",
      color: `${brownish_grey}`,
    },

    //Assistant SemiBold
    overline: {
      fontFamily: "Quicksand",
      fontWeight: "600",
      fontSize: "0.75rem",
      lineHeight: "0.15125rem",
      color: `${brown_grey}`,
    },
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        height: "30px",
        width: "110px",
        boxSizing: "border-box",
        backgroundColor: `${true_white}`,
        color: `${brown_grey}`,
        borderRadius: "7px",
        border: `1px solid ${discovery_blue}`,
        boxShadow: "2px 0 4px 0 rgba(0,0,0,0.1)",
        transform: "scaleY(-1)",
        fontSize: "0.75rem",
        fontFamily: "Quicksand",
        fontWeight: "600",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textTransform: "uppercase",
      },
    }
  },
});
