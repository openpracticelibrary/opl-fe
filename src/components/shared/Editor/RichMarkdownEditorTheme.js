import theme from '../../../theme';

const RichMarkdownEditorTheme = () => {
  const edit = {
    borderStyle: "dotted",
    fontWeight: 400,
    zIndex: 100,
    link: theme.palette.common.discovery_blue,
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

    blockToolbarTrigger: theme.palette.common.very_light_grey,
    blockToolbarTriggerIcon: theme.palette.common.black,
    blockToolbarItem: theme.palette.common.black,
    blockToolbarText: theme.palette.common.black,
    blockToolbarDivider: theme.palette.common.brown_grey,
    background: theme.palette.common.white,
    textLight: theme.palette.common.white,
    text: theme.palette.common.black,
    cursor: theme.palette.common.black,
    divider: theme.palette.common.black,
    toolbarBackground: theme.palette.common.very_light_grey,
    toolbarInput: theme.palette.common.white,
    toolbarItem: theme.palette.common.black,
    blockToolbarBackground: theme.palette.common.true_white,
    blockToolbarHoverBackground: theme.palette.common.very_light_grey,
  };

  return edit;
};

export default RichMarkdownEditorTheme;
