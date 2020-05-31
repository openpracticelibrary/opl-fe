import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles/index";
import ReactMarkdown from "react-markdown";
import Box from "@material-ui/core/Box";

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
          <Typography variant={"h2"} href="#WhyDoIt">
            How to do {props.title}?
          </Typography>
        </Box>
        <Box className={classes.space}>
          <Typography variant={"body1"}>
            <ReactMarkdown source={props.source} />
          </Typography>
        </Box>
      </Box>
    </>
  );
}
