import React from 'react';
import { makeStyles } from '@material-ui/core/styles/index';
import Box from '@material-ui/core/Box';
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Typography from "@material-ui/core/Typography";
import { navigate } from "@reach/router";

import PracticeCount from "./PracticeCount";
import ContributorCount from "./ContributorCount";
import RedHatLogo from "../../assets/images/logo-red-hat-hat-color-rgb.png";
import NounProjectLogo from "../../assets/images/noun-project.png";
import MobiusLogo from "../../assets/images/mobius-small.png";
import CCHeartLogo from "../../assets/images/ccheart-black.png";

const useStyles = makeStyles((theme) => ({
  communityBox: {
    display: "flex",
    justifyContent: "center",
  },
  practiceBox: {
    display: "flex",
    alignItems: "center",
    flexFlow: "column",
    justifyContent: "center",
    textAlign: "center",
    boxSizing: "border-box",
    height: "340px",
    width: "330px",
    borderRadius: "50%",
    borderStyle: "solid",
    borderColor: "#00cc99",
    borderWidth: "1px",
    boxShadow: "2px 2px 8px 0 rgba(0,0,0,0.1)",
    padding: theme.spacing(5),
    margin: theme.spacing(2),
  },
  contribBox: {
    display: "flex",
    alignItems: "center",
    flexFlow: "column",
    justifyContent: "center",
    textAlign: "center",
    boxSizing: "border-box",
    height: "340px",
    width: "340px",
    borderRadius: "50%",
    borderStyle: "solid",
    borderColor: "#00cc99",
    borderWidth: "1px",
    boxShadow: "2px 2px 8px 0 rgba(0,0,0,0.1)",
    padding: theme.spacing(5),
    margin: theme.spacing(2),
  },
  collabBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconBox: {
    display: "flex",
    padding: theme.spacing(2),
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "70px",
  },
  aboutButton: {
    borderRadius: "32px",
    padding: theme.spacing(2),
    width: "11rem",
    borderColor: theme.palette.common.discovery_blue,
    borderWidth: "1px",
    borderStyle: "solid",
    backgroundColor: theme.palette.common.true_white,
  },
  arrowForward: {
    color: theme.palette.common.discovery_blue,
  },
  weHave: {
    textAlign: "center",
  },
  lifecycle: {
    color: theme.palette.common.black,
    textAlign: "center",
    fontSize: "1.375rem",
  },
  redHat: {
    width: "92.2px",
    height: "70px",
    objectFit: "contain",
    marginRight: "47.8px",
  },
  nounProject: {
    width: "148px",
    height: "148px",
    objectFit: "contain",
    marginRight: "54px",
  },
  mobius: {
    width: "140px",
    height: "63px",
    objectFit: "contain",
    marginRight: "57px",
  },
  ccHeart: {
    width: "82px",
    height: "72px",
    objectFit: "contain",
  },
}));

const Community = (props) => {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={10} data-testid="communityHeader">
        <Typography variant={"h1"} ref={props.communityRef}>Community driven</Typography>
      </Grid>
      <Grid item xs={2} className={classes.aboutTitle}>
        <Button className={classes.aboutButton} variant="contained" onClick={() => navigate("#")}>
            About us{"  "}<ArrowForwardIcon className={classes.arrowForward}/>
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Typography variant={"h3"} className={classes.weHave}>We have...</Typography>
        <Box className={classes.communityBox}>
          <Box className={classes.practiceBox}>
            <PracticeCount />
            <Typography variant={"h3"} className={classes.lifecycle}>Product Lifecycle <br/> Practices</Typography>
          </Box>
          <Box className={classes.contribBox}>
            <ContributorCount />
            <Typography variant={"h3"} className={classes.lifecycle}>Creative Commons <br/> Contributors</Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box className={classes.collabBox}>
          <Typography variant={"h3"} className={classes.weHave}>We have collaborations with...</Typography>
          <Box className={classes.iconBox}>
            <img src={RedHatLogo} alt="Red Hat" className={classes.redHat} />
            <img src={NounProjectLogo} alt="Noun Project" className={classes.nounProject} />
            <img src={MobiusLogo} alt="Mobius Project" className={classes.mobius} />
            <img src={CCHeartLogo} alt="Creative Commons" className={classes.ccHeart} />
          </Box>
        </Box>
      </Grid>
    </>
  )
};

export default Community;
