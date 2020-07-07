import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import RichMarkdownEditor from "../../shared/Editor/RichMarkdownEditor";

const useStyles = makeStyles({
  editorWrap: {
    boxShadow: "inset 0 1px 3px 0 rgba(16,16,16,0.26)",
  },
});

const BodyEditor = ({ bg, source, dispatch }) => {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      bgcolor="grey.100"
      border={1}
      borderColor="grey.100"
      borderRadius={6}
      className={classes.editorWrap}
      p={1}
    >
      <RichMarkdownEditor
        source={source}
        handleChange={dispatch}
      />
    </Box>
  )
};

export default BodyEditor;

