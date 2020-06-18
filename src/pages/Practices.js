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
import DropDownSelectionFilter from "../components/allPractices/FilterBar/DropDownSelectionFilter";
import PopularFilter from "../components/allPractices/FilterBar/PopularFilter";
import Typography from "@material-ui/core/Typography";

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

  const mobiusLoopArray = [
    "Entire Process Model",
    "Discovery",
    "Options",
    "Delivery",
    "Foundation",
  ];

  // manage state of filter tags
  const [selectedFilterTag, setFilterTag] = React.useState(filterTags[0]);

  // manage state of page value for practice card grid
  const [page, setPage] = React.useState(0);

  // manage state of keyword search toggle
  const [keywordSearchToggle, setKeywordSearchToggle] = React.useState(false);

  //manage filter selection mobius loop
  const [
    selectedMobiusLoopFilter,
    setSelectedMobiusLoopFilter,
  ] = React.useState(mobiusLoopArray[0]);

  const popularMenuItems = {
    Popular: "upvotes:DESC",
    Newest: "createdAt:DESC",
    Curated: "curated:DESC",
  };

  const [selectedPopularFilter, setPopularFilterTitle] = React.useState(
    Object.keys(popularMenuItems)[0]
  );

  const tagArray = [
    ...(selectedFilterTag !== "ALL" ? [selectedFilterTag.toLowerCase()] : []),
    ...(selectedMobiusLoopFilter !== "Entire Process Model"
      ? [selectedMobiusLoopFilter.toLowerCase()]
      : []),
  ];

  const handlePopularFilterChange = (item) => {
    setPopularFilterTitle(item);
    refetch({
      variables: {
        start: 0,
        limit: 8,
        tag: tagArray,
        sort: popularMenuItems[item],
      },
    });
    setPage(8);
  };

  const ToggleKeywordSearch = () =>
    setKeywordSearchToggle(!keywordSearchToggle);

  const ChangeFilterTag = (tag) => {
    setFilterTag(tag);
    refetch({
      variables: {
        start: 0,
        limit: 8,
        sort: popularMenuItems[selectedPopularFilter],
        tag: [
          ...(tag !== "ALL" ? [tag.toLowerCase()] : []),
          ...(selectedMobiusLoopFilter !== "Entire Process Model"
            ? [selectedMobiusLoopFilter.toLowerCase()]
            : []),
        ],
      },
    });
    setPage(8);
  };

  const HandleMobiusLoopSelect = (event) => {
    setSelectedMobiusLoopFilter(event.target.value);
    const tagArray = [
      ...(selectedFilterTag !== "ALL" ? [selectedFilterTag.toLowerCase()] : []),
      ...(event.target.value !== "Entire Process Model"
        ? [event.target.value.toLowerCase()]
        : []),
    ];
    refetch({
      variables: {
        start: 0,
        limit: 8,
        tag: tagArray,
        sort: popularMenuItems[selectedPopularFilter],
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
        tag: tagArray,
        sort: popularMenuItems[selectedPopularFilter],
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
        tag: tagArray,
        sort: popularMenuItems[selectedPopularFilter],
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
          <PopularFilter
            selectedItem={selectedPopularFilter}
            handleFilterChange={handlePopularFilterChange}
            menuItems={Object.keys(popularMenuItems)}
          />
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
            <Grid
              container
              direction="column"
              justify="space-between"
              alignItems="flex-start"
            >
              <Grid item>
                <Typography>BY MOBIUS LOOP</Typography>
              </Grid>
              <Grid item>
                <DropDownSelectionFilter
                  inputLabel="Entire Process Model"
                  items={mobiusLoopArray}
                  selectedFilter={selectedMobiusLoopFilter}
                  handleFilterSelect={HandleMobiusLoopSelect}
                />
              </Grid>
            </Grid>
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
  );
}
