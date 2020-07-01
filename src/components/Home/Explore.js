import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Box, Typography } from "@material-ui/core";
import { navigate } from "@reach/router";
import GrayRain from "../../assets/icons/rain.svg";
import ClosingStickies from "../../assets/icons/closingstickies.png";

const useStyles = makeStyles((theme) => ({
  exploreBox: {
    display: "flex",
    alignContent: "flex-start",
    textAlign: "left",
    width: "80%",
    flexWrap: "wrap",
  },
  explore: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundImage: `linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.95) 71.03%, rgba(255,255,255,0.85) 100%), url(${GrayRain})`,
    width: "100%",
    height: "500px",
  },
  exploreButton: {
    borderRadius: "32px",
    width: "15rem",
    backgroundColor: "#DFF1FF",
    marginTop: theme.spacing(5),
    padding: theme.spacing(2),
    borderColor: theme.palette.common.discovery_blue,
    borderWidth: "1px",
    borderStyle: "solid",
  },
  learn: {
    textAlign: "left",
    fontWeight: "normal",
  },
  exploreIcon: {
    display: "flex",
    alignItems: "flex-end",
    alignContent: "flex-end",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 4),
  },
}));

const Explore = (props) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      className={classes.explore}
    >
      <Grid item xs={6}>
        <Box className={classes.exploreIcon}>
          <img src={ClosingStickies} alt="Closing Message" />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box className={classes.exploreBox}>
          <Box>
            <Typography variant={"h5"} className={classes.learn} data-testid="exploreMsg">
              {props.exploreMessage}
            </Typography>
          </Box>
          <Box>
            <Button
              variant="contained"
              data-testid="exploreLibraryButton"
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
