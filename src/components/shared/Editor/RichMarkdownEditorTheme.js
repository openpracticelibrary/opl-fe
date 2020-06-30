import theme from '../../../theme';

const RichMarkdownEditorTheme = () => {
  const edit = {
    fontFamily: "NotoSerif",
    fontWeight: 400,
    zIndex: 100,
    link: theme.colors.blue[500],
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

    blockToolbarTrigger: theme.colors.grey[100],
    blockToolbarTriggerIcon: theme.colors.black,
    blockToolbarItem: theme.colors.black,
    blockToolbarText: theme.colors.black,
    blockToolbarDivider: theme.colors.grey[500],
    background: theme.colors.grey[50],
    textLight: theme.colors.grey[100],
    text: theme.colors.black,
    cursor: theme.colors.black,
    divider: theme.colors.black,
    toolbarBackground: theme.colors.grey[100],
    toolbarInput: theme.colors.grey[50],
    toolbarItem: theme.colors.black,
    blockToolbarBackground: theme.colors.white,
    blockToolbarHoverBackground: theme.colors.grey[50],
  };

  return edit;
};

export default RichMarkdownEditorTheme;
