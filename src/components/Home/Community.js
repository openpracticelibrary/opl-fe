import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { navigate } from "@reach/router";

import PracticeCount from "./PracticeCount";
import ContributorCount from "./ContributorCount";
import RedHatLogo from "../../assets/images/logo-red-hat-hat-color-rgb.png";
import NounProjectLogo from "../../assets/images/noun-project.png";
import MobiusLogo from "../../assets/images/mobius-small.png";
import CCHeartLogo from "../../assets/images/ccheart-black.png";

import { Box, Grid, Typography } from '@material-ui/core';
import OplButton from "../shared/components/OplButton";

const useStyles = makeStyles((theme) => ({
  communityHeader: {
    padding: theme.spacing(12,0),
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
    borderColor: theme.palette.secondary.main,
    borderWidth: "1px",
    boxShadow: "2px 2px 8px 0 rgba(0,0,0,0.1)",
    padding: theme.spacing(5),
    margin: theme.spacing(2,2,12,0),
  },
  collaborators: {
    width: 134,
    height: 72,
    objectFit: "contain",
    margin: theme.spacing(2,6,12,0)
  },
}));

const Community = (props) => {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        item
        xs={11}
        direction="row"
        justify="space-between"
        alignItems="center"
        className={classes.communityHeader}
        data-testid="communityHeader"
      >
        <Typography variant={"h3"} ref={props.communityRef}>Community driven</Typography>
        <OplButton onClick={() => navigate("#")}>
            About us{"  "}<ArrowForwardIcon color="primary" />
        </OplButton>
      </Grid>
      <Grid container item xs={12} justify="center">
        <Grid item xs={12}>
          <Typography variant={"h4"} align="center">We have...</Typography>
        </Grid>
        <Box className={classes.practiceBox}>
          <PracticeCount />
          <Typography variant={"h6"} align="center">Product Lifecycle <br/> Practices</Typography>
        </Box>
        <Box className={classes.practiceBox}>
          <ContributorCount />
          <Typography variant={"h6"} align="center">Creative Commons <br/> Contributors</Typography>
        </Box>
        <Grid item xs={12}>
          <Typography variant={"h4"} align="center">We have collaborations with...</Typography>
          <Grid container direction="row" justify="center" alignItems="center">
            <img src={RedHatLogo} alt="Red Hat" className={classes.collaborators} />
            <img src={NounProjectLogo} alt="Noun Project" className={classes.collaborators} />
            <img src={MobiusLogo} alt="Mobius Project" className={classes.collaborators} />
            <img src={CCHeartLogo} alt="Creative Commons" className={classes.collaborators} />
          </Grid>
        </Grid>
      </Grid>
    </>
  )
};

export default Community;
