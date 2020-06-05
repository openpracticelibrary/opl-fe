import React from "react";
import { makeStyles } from '@material-ui/core/styles/index';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { navigate } from "@reach/router";
import { useQuery } from "@apollo/react-hooks";

import ComponentLoading from "../shared/QueryState/ComponentLoading";
import ComponentQueryError from "../shared/QueryState/ComponentQueryError";
import { GET_CURATED_PRACTICES } from "../../graphql";
import PracticeCardGrid from "../shared/PracticeCards/PracticeCardGrid";

const useStyles = makeStyles((theme) => ({
  aboutTitle: {
    textAlign: "right",
  },
  arrowForward: {
    top: ".15em",
    width: "17px",
    height: "18px",
    position: "relative",
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
      <Grid item xs={10} data-testid="curatedList">
        <Typography variant={"h1"}>Popular Practices</Typography>
      </Grid>
      <Grid item xs={2} className={classes.aboutTitle}>
        <Typography
          variant={"overline"}
          onClick={() => navigate("/practice")}
        >
          <b>
              See Everything{"  "}<ArrowForwardIcon className={classes.arrowForward}/>
          </b>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        { loading ? <ComponentLoading /> : <PracticeCardGrid practices={data.practices} /> }
      </Grid>
    </>
  );
};

export default CuratedPractices;
