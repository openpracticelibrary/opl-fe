import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { navigate } from "@reach/router";
import { useQuery } from "@apollo/react-hooks";

import ComponentLoading from "../shared/QueryState/ComponentLoading";
import ComponentQueryError from "../shared/QueryState/ComponentQueryError";
import { GET_CURATED_PRACTICES } from "../../graphql";
import PracticeCardGrid from "../shared/PracticeCards/PracticeCardGrid";

import { Typography, Button, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  practiceHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: theme.spacing(12),
  },
  aboutTitle: {
    textAlign: "right",
  },
  arrowForward: {
    color: theme.palette.common.discovery_blue,
  },
  libraryButton: {
    borderRadius: "32px",
    padding: theme.spacing(2),
    width: "14rem",
    borderColor: theme.palette.common.discovery_blue,
    borderWidth: "1px",
    borderStyle: "solid",
    backgroundColor: theme.palette.common.true_white,
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
      <Box className={classes.practiceHeader} data-testid="curatedList">
        <Typography variant={"h1"}>Popular Practices</Typography>
        <Button data-testid="seeEverythingButton" className={classes.libraryButton} variant="contained" onClick={() => navigate("/practice")}>
          See Everything{"  "}<ArrowForwardIcon className={classes.arrowForward}/>
        </Button>
      </Box>
      { loading ? <ComponentLoading /> : <PracticeCardGrid practices={data.practices} /> }
    </>
  );
};

export default CuratedPractices;
