import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from "@material-ui/core";
import OplButton from "../shared/components/OplButton";
import { navigate } from "@reach/router";
import GrayRain from "../../assets/icons/rain.svg";
import ClosingStickies from "../../assets/icons/closingstickies.png";

const useStyles = makeStyles((theme) => ({
  explore: {
    backgroundImage: `linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.95) 71.03%, rgba(255,255,255,0.85) 100%), url(${GrayRain})`,
    padding: theme.spacing(8,0),
  },
}));

const Explore = (props) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      alignContent="center"
      className={classes.explore}
    >
      <Grid item xs>
        <Grid container justify="flex-end">
          <img src={ClosingStickies} alt="Closing Message" />
        </Grid>
      </Grid>
      <Grid item xs>
        <Grid container direction="column" alignContent="flex-start" spacing={4}>
          <Grid item xs={8}>
            <Typography variant={"h5"} align="left"data-testid="exploreMsg">
              {props.exploreMessage}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <OplButton
              variant="contained"
              data-testid="exploreLibraryButton"
              disableElevation
              onClick={() => navigate("/practice")}
            >
             Explore the library
            </OplButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
};

export default Explore;
