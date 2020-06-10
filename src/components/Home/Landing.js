import React from 'react';
import { makeStyles } from '@material-ui/core/styles/index';
import Box from '@material-ui/core/Box';
import { SvgIcon, Grid, Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Twemoji } from "react-emoji-render";
import { ArrowDownIcon, OPLLogo } from "../../assets/icons";
import LoginDrawer from "./LoginDrawer";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  titleBox: {
    position: "relative",
    justifyContent: "center",
    backgroundColor: theme.palette.common.white,
    height: "910px",
    width: "100%",
  },
  logo: {
    position: "absolute",
    top: 0,
    left: 0,
    padding: theme.spacing(3),
    height: "50px",
    width: "183px",
  },
  loginBox: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: theme.spacing(3),
  },
  loginButton: {
    height: "34px",
    width: "122px",
    borderRadius: "17px",
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
  welcomeBottom: {
    width: "70%",
    justifyContent: "center",
    textAlign: "center",
    position: "absolute",
    bottom: 0,
  },
  arrowIcon: {
    margin: theme.spacing(2),
    fontSize: "50px",
    color: theme.palette.common.brownish_grey,
  },
  loginDrawerClose: {
    margin: theme.spacing(2),
    borderRadius: "17px",
  },
  loginText: {
    margin: theme.spacing(1),
  },
}));

const Landing = (props) => {
  const [open, setOpen] = React.useState();
  const classes = useStyles();

  const handleClick = () => {
    props.communityRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const toggleLoginDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <Grid
        container
        direction="row"
        className={classes.titleBox}
      >
        <Box className={classes.logo}>
          <OPLLogo />
        </Box>
        <Box className={classes.loginBox}>
          <Button
            variant="outlined"
            className={classes.loginButton}
            onClick={toggleLoginDrawer}
          >
            <Typography variant={"overline"}>
              <b>Login</b>
            </Typography>
          </Button>
        </Box>
        <Box className={classes.textBox}>
          <Typography variant={"h4"} className={classes.hello}>
            <Twemoji data-testid="hellotext" text={props.greeting}/>
          </Typography>
          <Typography variant={"h1"} className={classes.welcome} data-testid="welcomeText">
            {props.welcomeMessage}
          </Typography>
          <Typography variant={"h1"} className={classes.question} data-testid="inquiryText">
            {props.inquiry}
          </Typography>
        </Box>
        <Box className={classes.welcomeBottom}>
          <Typography align="center" variant={"overline"} component="p">
            <b>Tell me more</b>
          </Typography>
          <SvgIcon className={classes.arrowIcon} onClick={handleClick} >
            <ArrowDownIcon />
          </SvgIcon>
        </Box>
      </Grid>
      <LoginDrawer open={open} navigate={props.navigate}>
        <IconButton onClick={toggleLoginDrawer} className={classes.loginDrawerClose}>
          <CloseIcon />
        </IconButton>
        <Typography variant="h2" className={classes.loginText}>Login to the Open Practice Library!</Typography>
      </LoginDrawer>
    </>
  )
};

export default Landing;
