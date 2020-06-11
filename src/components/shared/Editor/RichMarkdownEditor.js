import React from "react";
import RichMarkdownEditorTheme from "../../shared/Editor/RichMarkdownEditorTheme";
import Editor from "rich-markdown-editor";

const RichMarkdownEditor = (props) => (
  <Editor
    data-testid="richEditor"
    theme={RichMarkdownEditorTheme}
    defaultValue={props.source}
    onChange={props.handleChange}
  />
);

export default RichMarkdownEditor;
