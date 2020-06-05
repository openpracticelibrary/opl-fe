import React from 'react';
import { makeStyles } from '@material-ui/core/styles/index';
import Box from '@material-ui/core/Box';
import Grid from "@material-ui/core/Grid";
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
  practiceBox: {
    display: "flex",
    alignItems: "center",
    flexFlow: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  contribBox: {
    display: "flex",
    alignItems: "center",
    flexFlow: "column",
    justifyContent: "center",
    textAlign: "center",
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
  arrowForward: {
    top: ".15em",
    width: "17px",
    height: "18px",
    position: "relative",
  },
  weHave: {
    textAlign: "center",
  },
  lifecycle: {
    textAlign: "center",
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
        <Typography variant={"overline"} onClick={() => navigate("#")}>
          <b>
            About us{"  "}<ArrowForwardIcon className={classes.arrowForward}/>
          </b>
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Box className={classes.practiceBox}>
          <Typography variant={"h3"} className={classes.weHave}>We have</Typography>
          <PracticeCount />
          <Typography variant={"h3"} className={classes.lifecycle}>Product Lifecycle <br/> Practices</Typography>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box className={classes.contribBox}>
          <Typography variant={"h3"} className={classes.weHave}>We have</Typography>
          <ContributorCount />
          <Typography variant={"h3"} className={classes.lifecycle}>Creative Commons <br/> Contributors</Typography>
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
