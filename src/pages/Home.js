import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Landing from "../components/Home/Landing";
import Community from "../components/Home/Community";
import CuratedPractices from "../components/Home/CuratedPractices";
import Explore from "../components/Home/Explore";

import { Grid, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(20, 2),
    width: "100%",
  },
  contentBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));

export default function Home(props) {
  const classes = useStyles();
  const communityRef = React.useRef(null);

  return (
    <>
      <Landing
        greeting="Hiya!"
        welcomeMessage="Welcome to this open source library of best practices in digital product development."
        inquiry="Sound up your alley?"
        navigate={props.navigate}
        communityRef={communityRef}
      />
      <Box className={classes.contentBox}>
        <Community communityRef={communityRef} />
        <CuratedPractices />
      </Box>
      <Explore
        exploreMessage="Learn something new from your peers and experiment with best practices!"
      />
    </>
  )
}

