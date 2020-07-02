import React from 'react';
import { makeStyles } from '@material-ui/core/styles/index';
import Box from '@material-ui/core/Box';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LoginButton from "../shared/Login/LoginButton";
import GrayDiagonals from "../../assets/icons/graylines.svg";
import ExploreStickies from "../../assets/icons/explorestickies.png";

const useStyles = makeStyles((theme) => ({
  titleBox: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    backgroundImage: `linear-gradient(180.18deg, #F3F3F3 0%, #FFFFFF 13.64%, #FFFFFF 43.94%, rgba(255,255,255,0.94) 79.58%, rgba(255,255,255,0.62) 100%), url(${GrayDiagonals})`,
    height: theme.spacing(55),
    width: "100%",
  },
  loginBox: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: theme.spacing(3),
  },
  textBox: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "left",
    width: "75%",
  },  
  hello: {
    paddingBottom: theme.spacing(5),
  },
  welcome: {
    paddingBottom: theme.spacing(1),
  },
}));

const Landing = (props) => {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        direction="row"
        className={classes.titleBox}
      >
        <Grid item xs={1}/>
        <Grid item xs={5}>
          <Box className={classes.textBox}>
            <Typography variant={"h1"} className={classes.hello} data-testid="hellotext">
              {props.greeting}
            </Typography>
            <Typography variant={"h5"} className={classes.welcome} data-testid="welcomeText">
              {props.welcomeMessage}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <img src={ExploreStickies} alt="About Us" height="auto" width="600px" />
          <Box className={classes.loginBox}>
            <LoginButton
              navigate={props.navigate}
              redirect="/practice"
            />
          </Box>
        </Grid>
      </Grid>
    </>
  )
};

export default Landing;
