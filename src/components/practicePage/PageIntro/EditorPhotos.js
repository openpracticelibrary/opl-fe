import React from "react";
import { AvatarGroup, Avatar } from "@chakra-ui/core";

const EditorPhotos = props => (
  <AvatarGroup max={3} size="xs">
    {props.editors.map(editor => (
      <Avatar showBorder key={editor.id} src={editor.Avatar} bg="grey.500" />
    ))}
  </AvatarGroup>
);

export default EditorPhotos;
