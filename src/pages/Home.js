import React from 'react';

import Landing from "../components/Home/Landing";
import Community from "../components/Home/Community";
import CuratedPractices from "../components/Home/CuratedPractices";
import Explore from "../components/Home/Explore";

import { Grid } from '@material-ui/core';

export default function Home(props) {
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
      <Grid container direction="column" alignItems="center">
        <Community communityRef={communityRef} />
        <CuratedPractices />
      </Grid>
      <Explore
        exploreMessage="Learn something new from your peers and experiment with best practices!"
      />
    </>
  )
}

