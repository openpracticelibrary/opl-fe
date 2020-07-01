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
const highlight_blue = "#DFF1FF";

export default createMuiTheme({
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
      main: "#1975ff",
    },
    secondary: {
      main: "#10d4a0",
    },
    text: {
      primary: "#2e2e2e",
      secondary: "#1975ff",
      brown_grey: `${brown_grey}`,
    },
  },

  typography: {
    fontFamily: ["Quicksand", "Noto Serif"],
    body1: {
      fontFamily: "Noto Serif",
    },
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        height: "30px",
        minWidth: "110px",
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
    },
    MuiChip: {
      root: {
        backgroundColor: "transparent",
        color: `${discovery_blue}`,
        fontWeight: "600",
      },
      clickable: {
        "&:hover": {
          backgroundColor: `${highlight_blue}`,
          fontWeight: "800",
        },
        "&:focus": {
          backgroundColor: `${highlight_blue}`,
          fontWeight: "800",
        },
      },
      label: {
        fontFamily: "Quicksand",
        fontSize: "0.75rem",
        lineHeight: "0.15125rem",
        color: `${brown_grey}`,
        padding: "8px",
      },
    },
  },
});
