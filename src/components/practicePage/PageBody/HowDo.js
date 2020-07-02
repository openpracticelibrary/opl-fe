import React from "react";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles/index";
import ReactMarkdown from "react-markdown";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  space: {
    padding: theme.spacing(1),
  },
}));

export default function HowDo(props) {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.space}>
          <Typography variant={"h4"} ref={props.howToRef}>
            <b>How to do {props.title}?</b>
          </Typography>
        </Box>
        <Box className={classes.space}>
          {props.editing ?
            props.children
            :
            <Typography variant={"body1"} component={'span'}>
              <ReactMarkdown source={props.source} />
            </Typography>
          }
        </Box>
      </Box>
    </>
  );
}
