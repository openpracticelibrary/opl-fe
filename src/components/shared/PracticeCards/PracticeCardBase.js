import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, Box } from "@material-ui/core";
import { navigate } from "@reach/router";

const useStyles = makeStyles({
  coverImage: {
    borderRadius: 10,
    height: 181,
    width: 295,
  },
});

export default function PracticeCardBase(props) {
  const classes = useStyles();

  return (
    <Box onClick={() => navigate(`/practice/${props.slug}`)}>
      <Paper elevation={0} className={classes.coverImage}>
        <img
          alt={props.practiceTitle}
          src={props.coverImage}
          className={classes.coverImage}
        />
      </Paper>
      <Typography variant={"subtitle2"}>{props.practiceTitle}</Typography>
      {props.tags.map((t, i) => (
        <Typography key={i} variant={"overline"}>
          #{t.tag}{" "}
        </Typography>
      ))}
    </Box>
  );
}
