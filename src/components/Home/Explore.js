import React from 'react';
import { makeStyles } from '@material-ui/core/styles/index';
import Box from '@material-ui/core/Box';
import { Grid, Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { navigate } from "@reach/router";
import { useLottie, Lottie } from "react-lottie-hook";

import * as animationData from "./lotties/17059-galacticons-animated.json";

const useStyles = makeStyles((theme) => ({
  exploreBox: {
    position: "absolute",
    marginRight: "auto",
    marginLeft: "auto",
    width: "30%",
    marginTop: "10%",
    left: 0,
    right: 0,
    justifyContent: "center",
    textAlign: "center",
  },
  explore: {
    position: "relative",
    justifyContent: "center",
    backgroundColor: theme.palette.common.white,
    height: "670px",
    width: "100%",
  },
  exploreButton: {
    textAlign: "center",
    height: "70px",
    width: "343px",
    borderRadius: "35px",
    backgroundColor: theme.palette.common.true_white,
    margin: "41px",
  },
  learn: {
    textAlign: "center",
  },
}));

const Explore = (props) => {
  const classes = useStyles();

  const [lottieRef] = useLottie({
    renderer: "svg",
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  });

  return (
    <Grid
      container
      direction="row"
      className={classes.explore}
    >
      <Box className={classes.exploreBox}>
        <Typography variant={"h1"} className={classes.learn} data-testid="exploreMsg">
          {props.exploreMessage}
        </Typography>
        <Button
          variant="contained"
          disableElevation
          className={classes.exploreButton}
          onClick={() => navigate("/practice")}
        >
          <Typography variant={"overline"}>
            <b>Explore the library</b>
          </Typography>
        </Button>
        <Lottie lottieRef={lottieRef} height={120} width={120} />
      </Box>
    </Grid>
  )
};

export default Explore;
