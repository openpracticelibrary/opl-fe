export default {
  MuiCssBaseline: {
    '@global': {
      html: {
        scrollPaddingTop: "90px",
      },
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

