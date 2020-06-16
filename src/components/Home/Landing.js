import React from 'react';
import { makeStyles } from '@material-ui/core/styles/index';
import Box from '@material-ui/core/Box';
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { Twemoji } from "react-emoji-render";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { OPLLogo } from "../../assets/icons";
import LoginButton from "../shared/Login/LoginButton";

const useStyles = makeStyles((theme) => ({
  titleBox: {
    position: "relative",
    justifyContent: "center",
    backgroundImage: `linear-gradient(${theme.palette.common.true_white}, ${theme.palette.common.white})`,
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
    position: "absolute",
    marginRight: "auto",
    marginLeft: "auto",
    width: "40%",
    marginTop: "10%",
    left: 0,
    right: 0,
    justifyContent: "left",
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
    <>
      <Grid
        container
        direction="row"
        className={classes.titleBox}
      >
        <Box className={classes.logo}>
          <OPLLogo height="250px" width="383px" />
        </Box>
        <Box className={classes.loginBox}>
          <LoginButton
            navigate={props.navigate}
            redirect="/practice"
          />
        </Box>
        <Box className={classes.textBox}>
          <Typography variant={"h4"} className={classes.hello}>
            <Twemoji data-testid="hellotext" text={props.greeting}/>
          </Typography>
          <Typography variant={"h5"} className={classes.welcome} data-testid="welcomeText">
            {props.welcomeMessage}
          </Typography>
          <Typography variant={"h5"} className={classes.question} data-testid="inquiryText">
            {props.inquiry}
          </Typography>
          <Typography variant={"button"} component="p">
            <b>Tell me more</b>
            <IconButton className={classes.arrowIcon} onClick={handleClick} >
              <ArrowDownwardIcon />
            </IconButton>
          </Typography>
        </Box>
      </Grid>
    </>
  )
};

export default Landing;
