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
    display: "flex",
    alignItems: "flex-start",
    alignContent: "flex-start",
    justifyContent: "flex-start",
    textAlign: "left",
    paddingTop: theme.spacing(10),
    width: "80%",
    height: "25rem",
    flexWrap: "wrap",
  },
  explore: {
    position: "relative",
    justifyContent: "center",
    backgroundImage: `linear-gradient(${theme.palette.common.true_white}, ${theme.palette.common.white})`,
    width: "100%",
  },
  exploreButton: {
    borderRadius: "32px",
    width: "15rem",
    backgroundColor: "#d7e6f4",
    marginTop: theme.spacing(5),
    padding: theme.spacing(2),
    borderColor: theme.palette.common.discovery_blue,
    borderWidth: "2px",
    borderStyle: "solid",
  },
  learn: {
    textAlign: "left",
    fontWeight: "normal",
  },
  exploreIcon: {
    display: "flex",
    alignItems: "end",
    alignContent: "end",
    justifyContent: "end",
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
      <Grid item xs={6}>
        <Box className={classes.exploreIcon}>
          <Lottie lottieRef={lottieRef} height={350} width={350} />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box className={classes.exploreBox}>
          <Box>
            <Typography variant={"h1"} className={classes.learn} data-testid="exploreMsg">
              {props.exploreMessage}
            </Typography>
          </Box>
          <Box>
            <Button
              variant="contained"
              disableElevation
              className={classes.exploreButton}
              onClick={() => navigate("/practice")}
            >
             Explore the library
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
};

export default Explore;
