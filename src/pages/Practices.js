import React from "react";

import { useQuery } from "@apollo/react-hooks";
import { GET_PRACTICES_BY_TAG_PAGINATION } from "../graphql";
import { Grid, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles/index";
import PracticeCardGrid from "../components/shared/PracticeCards/PracticeCardGrid";
import AllPracticesHero from "../components/allPractices/AllPracticesHero";
import ComponentLoading from "../components/shared/QueryState/ComponentLoading";
import QueryError from "../components/shared/QueryState/QueryError";
import FilterTags from "../components/allPractices/FilterBar/FilterTags";
import KeywordSearchToggle from "../components/allPractices/FilterBar/KeywordSearchToggle";

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
    height: "auto",
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

  const filterTags = [
    "ALL",
    "VALIDATE",
    "VALUE",
    "INSIGHT",
    "IDEATE",
    "BUILD",
    "ANALYZE",
    "METHODS",
    "CULTURE",
  ];

  // manage state of filter tags
  const [selectedFilterTag, setFilterTag] = React.useState(filterTags[0]);

  // manage state of page value for practice card grid
  const [page, setPage] = React.useState(0);

  // manage state of keyword search toggle
  const [keywordSearchToggle, setKeywordSearchToggle] = React.useState(false);

  const ToggleKeywordSearch = () =>
    setKeywordSearchToggle(!keywordSearchToggle);

  const ChangeFilterTag = (tag) => {
    setFilterTag(tag);
    refetch({
      variables: {
        start: 0,
        limit: 8,
        ...(tag !== "ALL" && {
          tag: tag.toLowerCase(),
        }),
      },
    });
    setPage(8);
  };

  const { loading, error, data, refetch, networkStatus, fetchMore } = useQuery(
    GET_PRACTICES_BY_TAG_PAGINATION,
    {
      variables: {
        start: 0,
        limit: 8,
        ...(selectedFilterTag !== "ALL" && {
          tag: selectedFilterTag.toLowerCase(),
        }),
      },
      fetchPolicy: "cache-and-network",
      notifyOnNetworkStatusChange: true,
    }
  );

  const onLoadMore = (page) => {
    const newPage = page + 8;
    fetchMore({
      variables: {
        start: newPage,
        ...(selectedFilterTag !== "ALL" && {
          tag: selectedFilterTag.toLowerCase(),
        }),
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return Object.assign({}, prev, {
          practices: [...prev.practices, ...fetchMoreResult.practices],
        });
      },
    });
    setPage(newPage);
  };

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
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Grid item>
            <h1>popular</h1>
          </Grid>
          <Grid item>
            <FilterTags
              tags={filterTags}
              filter={ChangeFilterTag}
              selectedFilter={selectedFilterTag}
            />
          </Grid>
          <Grid item>
            <KeywordSearchToggle
              toggle={ToggleKeywordSearch}
              keywordSearchToggle={keywordSearchToggle}
            />
          </Grid>
        </Grid>

        {keywordSearchToggle && (
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            <Grid item>
              <h1>mobius</h1>
            </Grid>
            <Grid item>
              <h1>keyword</h1>
            </Grid>
          </Grid>
        )}

        <Grid
          container
          direction="column"
          justify="center"
          alignContent="center"
          alignItems="center"
          className={classes.root}
        >
          <Grid className={classes.practicePane} item xs={9}>
            {(loading && !data) || networkStatus === 4 ? (
              <ComponentLoading />
            ) : (
              <PracticeCardGrid
                loading={loading}
                practices={data.practices}
                page={page}
                onLoadMore={onLoadMore}
              />
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
