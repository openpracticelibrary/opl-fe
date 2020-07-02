import React from "react";
import { makeStyles } from "@material-ui/core/styles/index";
import { AvatarGroup } from "@material-ui/lab";
import { Avatar } from "@material-ui/core";
import { UserIcon } from "../../../assets/icons";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    backgroundColor: "transparent",
  },
}));

const EditorPhotos = props => {
  const classes = useStyles();

  return (
    <AvatarGroup max={3}>
      {props.editors.map(editor => (
        <Avatar key={editor.id} src={editor.Avatar} className={classes.small}>
          <UserIcon />
        </Avatar>
      ))}
    </AvatarGroup>
  );
}

export default EditorPhotos;

