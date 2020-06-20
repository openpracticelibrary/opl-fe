import React from 'react';
import { makeStyles } from '@material-ui/core/styles/index';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import Landing from "../components/Home/Landing";
import Community from "../components/Home/Community";
import CuratedPractices from "../components/Home/CuratedPractices";
import Explore from "../components/Home/Explore";

const useStyles = makeStyles((theme) => ({
  pageWrapper: {
    backgroundColor: theme.palette.common.true_white,
  },
  content: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(20, 2),
    width: "100%",
  },
  contentBox: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "1300px",
  },
}));

export default function Home(props) {
  const classes = useStyles();
  const communityRef = React.useRef(null);

  return (
    <>
      <Grid
        data-testid="pageGrid"
        container
        direction="column"
        className={classes.pageWrapper}
      >
        <Landing
          greeting="Hiya!"
          welcomeMessage="Welcome to this open source library of best practices in digital product development."
          inquiry="Sound up your alley?"
          navigate={props.navigate}
          communityRef={communityRef}
        />
        <Grid
          container
          direction="row"
          className={classes.content}
          spacing={10}
        >
          <Box className={classes.contentBox}>
            <Community communityRef={communityRef} />
            <CuratedPractices />
          </Box>
        </Grid>
        <Explore
          exploreMessage="Learn something new from your peers and experiment with best practices!"
        />
      </Grid>
    </>
  )
};

