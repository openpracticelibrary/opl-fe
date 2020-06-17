import React from "react";

import { useQuery } from "@apollo/react-hooks";
import { GET_PRACTICES } from "../graphql";
import { Grid, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles/index";
import PracticeCardGrid from "../components/shared/PracticeCards/PracticeCardGrid";
import AllPracticesHero from "../components/allPractices/AllPracticesHero";
import ComponentLoading from "../components/shared/QueryState/ComponentLoading";
import QueryError from "../components/shared/QueryState/QueryError";


const useStyles = makeStyles((theme) => ({
  pageWrapper: {
    backgroundColor: theme.palette.common.true_white,
  },
  root: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    padding: theme.spacing(1),
    width: "100%",
    paddingTop: 27,
    marginBottom: "75px",
    height: 'auto',
  },
  titleBox: {
    display: "flex",
    flexDirection: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.common.lighter_white,
    height: "24.25rem",
    width: "100%",
  },
  practicesPane: {
    display: "flex",
    flexDirection: "center",
    paddingLeft: theme.spacing(10),
    width: "100%",
    padding: theme.spacing(2, 0),
  },
}));

export default function Practices(props) {
  const classes = useStyles();
  const { loading, error, data, fetchMore } = useQuery(GET_PRACTICES,
    {
      variables: {
        start: 0,
        limit: 12
      },
      fetchPolicy: "cache-and-network"
    }
  );

  if (error) return <QueryError err={error} />;

  return (
    <>
      <Grid className={classes.pageWrapper}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.titleBox}
        >
          <AllPracticesHero />
        </Grid>
        <Divider />
        <Grid
          container
          direction="column"
          justify="center"
          alignContent="center"
          alignItems="center"
          className={classes.root}
        >
          <Grid className={classes.practicePane} item xs={9}>
            { loading && !data ? <ComponentLoading /> :
              <PracticeCardGrid
                loading={loading}
                practices={data.practices}
                onLoadMore={(page) =>
                  fetchMore({
                    variables: {
                      start: page,
                    },
                    updateQuery: (prev, { fetchMoreResult }) => {
                      if (!fetchMoreResult) return prev;
                      return Object.assign({}, prev, {
                        practices: [...prev.practices, ...fetchMoreResult.practices]
                      });
                    }
                  })}
              />}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
