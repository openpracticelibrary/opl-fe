import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles/index";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  space: {
    padding: theme.spacing(1),
  }
}));

export default function TitleAndSubtitle(props) {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.space}>
          <Typography variant={"h1"} data-testid={"title"}>{props.title}</Typography>
        </Box>
        <Box className={classes.space}>
          <Typography variant={"subtitle1"} data-testid={"subtitle"}>{props.subtitle}</Typography>
        </Box>
      </Box>
    </>
  );
}
