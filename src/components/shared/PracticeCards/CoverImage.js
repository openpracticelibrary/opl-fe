import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { navigate } from "@reach/router";
import { Paper } from '@material-ui/core';

const useStyles = makeStyles({
  coverImage: {
    borderRadius: 10,
    height: 181,
    width: 295,
  },
});

const CoverImage = (props) => {
  const classes = useStyles();

  return (
    <Paper
      elevation={0}
      className={classes.coverImage}
      onClick={() => navigate(`/practice/${props.slug}`)}
    >
      <img
        data-testid="coverimage"
        alt={props.practiceTitle}
        src={props.coverImage}
        className={classes.coverImage}
      />
    </Paper>
  );
};

export default CoverImage;
