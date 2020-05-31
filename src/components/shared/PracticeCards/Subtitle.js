import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { navigate } from "@reach/router";

const useStyles = makeStyles((theme) => ({
  subtitle: {
    width: 280,
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1.83,
    letterSpacing: 0.3,
    whiteSpace: "normal",
  },
}));

const Subtitle = (props) => {
  const classes = useStyles();

  return (
    <Typography
      data-testid="subtitle"
      variant={"h6"}
      className={classes.subtitle}
      onClick={() => navigate(`/practice/${props.slug}`)}
    >
      {props.subtitle}
    </Typography>
  );
};

export default Subtitle;
