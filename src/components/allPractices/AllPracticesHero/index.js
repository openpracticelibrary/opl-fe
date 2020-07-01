import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import { navigate } from "@reach/router";
import ExploreStickies from "../../../assets/icons/explorestickies.png";
import LoginButton from "../../shared/Login/LoginButton";

import { Typography, Grid, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  textBox: {
    display: "flex",
    flexWrap: "wrap",
    width: "80%",
  },
  loginBox: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: theme.spacing(3),
  },
}));

const AllPracticesHero = () => {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={4}>
        <Box className={classes.textBox}>
          <Typography align="left" variant={"h1"} data-testid="herotext">
            Explore the library
          </Typography>
          <Typography align="left" variant={"h5"}>
            Check out the practices to learn about ways of working with your team.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <img src={ExploreStickies} alt="Explore the library" />
        <Box className={classes.loginBox}>
          <LoginButton
            navigate={navigate}
            redirect="/practice"
          />
        </Box>
      </Grid>
    </>
  );
};

export default AllPracticesHero;
