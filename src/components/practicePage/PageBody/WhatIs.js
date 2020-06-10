import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles/index";
import ReactMarkdown from "react-markdown";
import Box from "@material-ui/core/Box";
import Editor from "rich-markdown-editor";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  space: {
    padding: theme.spacing(1),
  },
  editorText: {
    ...theme.typography.body1,
  },
}));

export default function WhatIs(props) {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.space}>
          <Typography variant={"h2"} ref={props.whatIsRef} component={'span'}>
            What is {props.title}?
          </Typography>
        </Box>
        <Box className={classes.space}>
          {props.editing ?
            <Editor
              theme={{ ...classes.editorText }}
              defaultValue={props.source}
            /> :
            <Typography variant={"body1"} component={'span'}>
              <ReactMarkdown source={props.source} />
            </Typography>
          }
        </Box>
      </Box>
    </>
  );
}
