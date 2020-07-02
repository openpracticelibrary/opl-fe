import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { navigate } from "@reach/router";
import { useQuery } from "@apollo/react-hooks";

import ComponentLoading from "../shared/QueryState/ComponentLoading";
import ComponentQueryError from "../shared/QueryState/ComponentQueryError";
import { GET_CURATED_PRACTICES } from "../../graphql";
import PracticeCardGrid from "../shared/PracticeCards/PracticeCardGrid";

import { Typography, Grid, Box } from '@material-ui/core';
import OplButton from "../shared/components/OplButton";

const useStyles = makeStyles((theme) => ({
  practiceHeader: {
    paddingBottom: theme.spacing(12),
  },
}));

const CuratedPractices = (props) => {
  const classes = useStyles();

  const { loading, error, data } = useQuery(GET_CURATED_PRACTICES, {
    variables: { sort: "upvotes:desc" }
  });
  if (error) return <ComponentQueryError err={error} />;

  return (
    <>
      <Grid
        container
        item
        xs={11}
        direction="row"
        justify="space-between"
        alignItems="center"
        className={classes.practiceHeader}
        data-testid="curatedList"
      >
        <Typography variant={"h3"}>Popular Practices</Typography>
        <Box display="flex" alignItems="center">
          <OplButton data-testid="seeEverythingButton" onClick={() => navigate("/practice")}>
          See Everything{"  "}<ArrowForwardIcon color="primary" />
          </OplButton>
        </Box>
      </Grid>
      { loading ? <ComponentLoading /> : <PracticeCardGrid practices={data.practices} /> }
    </>
  );
};

export default CuratedPractices;
