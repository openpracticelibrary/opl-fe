export default {
  MuiCssBaseline: {
    '@global': {
      html: {
        scrollPaddingTop: "90px",
      },
    },
  },
  MuiButton: {
    root: {
      padding: 12,
      paddingLeft: 32,
      paddingRight: 32,
      textTransform: "none",
      borderRadius: 26.5,
      fontSize: "1rem",
    },
    contained: {
      backgroundColor: "#dff1ff",
      border: 1,
      borderColor: "#1975ff",
      borderStyle: "solid",
    },
    outlined: {
      borderColor: "#1975ff",
    },
  },
  MuiTooltip: {
    tooltip: {
      height: "30px",
      minWidth: "110px",
      boxSizing: "border-box",
      backgroundColor: "#ffffff",
      color: "#596562",
      borderRadius: "7px",
      border: "1px solid #1975ff",
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
      color: "#1975ff",
      fontWeight: "600",
    },
    clickable: {
      "&:hover": {
        backgroundColor: "#dff1ff",
        fontWeight: "800",
      },
      "&:focus": {
        backgroundColor: "#dff1ff",
        fontWeight: "800",
      },
    },
    label: {
      fontFamily: "Quicksand",
      fontSize: "0.75rem",
      lineHeight: "0.15125rem",
      color: "#596562",
      padding: "8px",
    },
  },
};

