import { theme } from "@chakra-ui/core";
import customIcons from "./customIcons";

export default {
  ...theme,
  fonts: {
    heading: "Quicksand",
    body: "Noto Serif",
  },
  fontSizes: {
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.25rem",
    xl: "1.5rem",
    "2xl": "1.625rem",
    "3xl": "2rem",
    "4xl": "2.5rem",
    "5xl": "2.875rem",
    "6xl": "6rem",
  },
  colors: {
    ...theme.colors,
    lightBlue: {
      500: "#DFF1FF",
    },
    blue: {
      500: "#1975FF"
    },
    grey: {
      100: "#9fa4a3",
      500: "#596562",
    },
    green: {
      500: "#10D4A0",
    },
    yellow: {
      500: "#FDB815",
    },
    purple: {
      500: "#8977B6",
    },
  },
  icons: {
    ...theme.icons,
    ...customIcons,
  },
  brand: {
    buttons: {
      loginButton: {
        variantColor: "lightBlue",
        size: "lg",
        border: "1px",
        borderColor: "blue.500",
        rounded: "32px",
        px: 8,
        fontSize: "md",
        color: "black",
        fontFamily: "heading",
        fontWeight: "500",
      },
    },
  },
};

