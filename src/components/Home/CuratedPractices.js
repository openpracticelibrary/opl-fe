import React from "react";
import { makeStyles } from '@material-ui/core/styles/index';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { navigate } from "@reach/router";
import { useQuery } from "@apollo/react-hooks";

import ComponentLoading from "../shared/QueryState/ComponentLoading";
import ComponentQueryError from "../shared/QueryState/ComponentQueryError";
import { GET_CURATED_PRACTICES } from "../../graphql";
import PracticeCardGrid from "../shared/PracticeCards/PracticeCardGrid";

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
      <Grid item xs={12} className={classes.practiceHeader} data-testid="curatedList">
        <Typography variant={"h1"}>Popular Practices</Typography>
        <Button className={classes.libraryButton} variant="contained" onClick={() => navigate("/practice")}>
          See Everything{"  "}<ArrowForwardIcon className={classes.arrowForward}/>
        </Button>
      </Grid>
      <Grid item xs={12}>
        { loading ? <ComponentLoading /> : <PracticeCardGrid practices={data.practices} /> }
      </Grid>
    </>
  );
};

export default CuratedPractices;
