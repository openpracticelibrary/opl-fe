// TODO: Render Links and Image Entity Types.

import React from "react";
import { EditorState, convertFromRaw, convertToRaw, RichUtils } from "draft-js";
import 'draft-js/dist/Draft.css';
import { markdownToDraft, draftToMarkdown } from "markdown-draft-js";
import { DraftailEditor, BLOCK_TYPE, INLINE_STYLE, ENTITY_TYPE } from "draftail";

const Editor = (props) => {
  const [editorState, setEditorState] = React.useState(() => {
    const markdownString = props.source;
    const rawData = markdownToDraft(markdownString);
    const contentState = convertFromRaw(rawData);
    return EditorState.createWithContent(contentState);
  });

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      return 'handled';
    }

    return 'not handled';
  }

  const handleChange = (newState) => {
    setEditorState(newState);

    const content = editorState.getCurrentContent();
    const rawObject = convertToRaw(content);
    const markdownString = draftToMarkdown(rawObject);

    console.log(markdownString);
  }

  return (
    <DraftailEditor
      editorState={editorState}
      handleKeyCommand={handleKeyCommand}
      onChange={handleChange}
      blockTypes={[
        { type: BLOCK_TYPE.HEADER_TWO },
        { type: BLOCK_TYPE.HEADER_THREE },
        { type: BLOCK_TYPE.HEADER_FOUR },
        { type: BLOCK_TYPE.HEADER_FIVE },
        { type: BLOCK_TYPE.UNORDERED_LIST_ITEM },
        { type: BLOCK_TYPE.ORDERED_LIST_ITEM },
        { type: BLOCK_TYPE.CODE },
        { type: BLOCK_TYPE.BLOCKQUOTE },
      ]}
      inlineStyles={[
        { type: INLINE_STYLE.BOLD },
        { type: INLINE_STYLE.ITALIC},
        { type: INLINE_STYLE.UNDERLINE },
        { type: INLINE_STYLE.STRIKETHROUGH },
        { type: INLINE_STYLE.CODE },
      ]}
      entityTypes={[
        {
          type: ENTITY_TYPE.LINK,
          icon: "#icon-link",
          attributes: ["url"],
          whitelist: {
            href: "^(?![#/])",
          },
        },
        { type: ENTITY_TYPE.IMAGE },
      ]}
    />
  );
}

export default Editor;
