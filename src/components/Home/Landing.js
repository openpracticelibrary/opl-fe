import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { OPLLogo } from "../../assets/icons";
import LoginButton from "../shared/Login/LoginButton";
import GrayDiagonals from "../../assets/icons/graylines.svg";
import HomeStickies from "../../assets/images/WhiteBoarding.png";

import { Box, Grid, IconButton, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  titleBox: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    backgroundImage: `linear-gradient(180.18deg, #F3F3F3 0%, #FFFFFF 13.64%, #FFFFFF 43.94%, rgba(255,255,255,0.94) 79.58%, rgba(255,255,255,0.62) 100%), url(${GrayDiagonals})`,
    height: "910px",
    width: "100%",
  },
  logo: {
    position: "absolute",
    top: 0,
    left: 0,
    marginTop: theme.spacing(-12),
    padding: theme.spacing(3),
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
    paddingBottom: theme.spacing(8),
  },
  welcome: {
    paddingBottom: theme.spacing(8),
  },
  arrowIcon: {
    margin: theme.spacing(2),
    color: theme.palette.common.true_white,
    backgroundColor: theme.palette.common.discovery_blue,
  },
}));

const Landing = (props) => {
  const classes = useStyles();

  const handleClick = () => {
    props.communityRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Grid
      container
      direction="row"
      className={classes.titleBox}
    >
      <Grid item xs={1}>
      </Grid>
      <Grid item xs={3}>
        <Box className={classes.logo}>
          <OPLLogo height="250px" width="383px" />
        </Box>
        <Box className={classes.textBox}>
          <Typography variant={"h1"} className={classes.hello} data-testid="hellotext">
            <b>{props.greeting}</b>
          </Typography>
          <Typography variant={"h5"} className={classes.welcome} data-testid="welcomeText">
            {props.welcomeMessage}
          </Typography>
          <Typography variant={"h5"} className={classes.question} data-testid="inquiryText">
            {props.inquiry}
          </Typography>
          <Typography variant={"button"} component="p">
            <b>Tell me more</b>
            <IconButton className={classes.arrowIcon} onClick={handleClick} data-testid="tellMeMoreButton">
              <ArrowDownwardIcon />
            </IconButton>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <img src={HomeStickies} alt="Welcome to OPL" height="auto" width="900px" />
        <Box className={classes.loginBox}>
          <LoginButton
            navigate={props.navigate}
            redirect="/practice"
          />
        </Box>
      </Grid>
    </Grid>
  )
};

export default Landing;
