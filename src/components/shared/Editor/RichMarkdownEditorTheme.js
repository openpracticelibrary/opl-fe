import theme from "../../../theme";

const RichMarkdownEditorTheme = () => {
  const edit = {
    fontFamily: "Montserrat",
    fontWeight: 400,
    zIndex: 100,
    link: theme.palette.primary.main,
    placeholder: "#B1BECC",
    textSecondary: "#4E5C6E",
    textHighlight: "#b3e7ff",
    codeComment: "#6a737d",
    codePunctuation: "#5e6687",
    codeNumber: "#d73a49",
    codeProperty: "#c08b30",
    codeTag: "#3d8fd1",
    codeString: "#032f62",
    codeSelector: "#6679cc",
    codeAttr: "#c76b29",
    codeEntity: "#22a2c9",
    codeKeyword: "#d73a49",
    codeFunction: "#6f42c1",
    codeStatement: "#22a2c9",
    codePlaceholder: "#3d8fd1",
    codeInserted: "#202746",
    codeImportant: "#c94922",

    blockToolbarTrigger: theme.palette.grey["500"],
    blockToolbarTriggerIcon: theme.palette.grey["900"],
    blockToolbarItem: theme.palette.grey["900"],
    blockToolbarText: theme.palette.grey["900"],
    blockToolbarDivider: theme.palette.grey["700"],
    background: theme.palette.common.white,
    textLight: theme.palette.common.white,
    text: theme.palette.grey["900"],
    cursor: theme.palette.grey["900"],
    divider: theme.palette.grey["900"],
    toolbarBackground: theme.palette.grey["500"],
    toolbarInput: theme.palette.common.white,
    toolbarItem: theme.palette.grey["900"],
    blockToolbarBackground: theme.palette.common.white,
    blockToolbarHoverBackground: theme.palette.grey["500"]
  };

  return edit;
};

export default RichMarkdownEditorTheme;
