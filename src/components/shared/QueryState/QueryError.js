import React from "react";
import { useLottie, Lottie } from "react-lottie-hook";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from '@material-ui/core/styles/index';
import * as animationData from "./lotties/3227-error-404-facebook-style.json";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    position: "relative",
    backgroundColor: theme.palette.common.black,
    opacity: "40",
    width: "100%",
    height: "1000px",
  },
  errorContainer: {
    position: "absolute",
    marginTop: "10%",
    left: 0,
    right: 0,
  },
  errorText: {
    color: theme.palette.common.white,
    textAlign: "center"
  },
}));

const QueryError = (props) => {
  const classes = useStyles();
  const [lottieRef] = useLottie({
    renderer: "svg",
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  });

  return (
    <Box
      className={classes.root}
    >
      <Box data-testid="errorPage" className={classes.errorContainer}>
        <Typography variant={"h4"} className={classes.errorText}>That's an error...</Typography>
        <Lottie lottieRef={lottieRef} height={400} width={400} />
        <Typography variant={"body1"} className={classes.errorText}>{props.err}</Typography>
      </Box>
    </Box>
  );
};

export default QueryError;

