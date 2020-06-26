import React from "react";

import { Grid, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles/index";
import AllPracticesHero from "./AllPracticesHero";
import FilterTags from "./FilterBar/FilterTags";
import KeywordSearchToggle from "./FilterBar/KeywordSearchToggle";
import DropDownSelectionFilter from "./FilterBar/DropDownSelectionFilter";
import KeywordSearchBox from "./FilterBar/KeywordSearchBox";
import PopularFilter from "./FilterBar/PopularFilter";
import Typography from "@material-ui/core/Typography";
import grayDiagonals from "../../assets/icons/graylines.svg";

const useStyles = makeStyles((theme) => ({
  pageWrapper: {
    backgroundColor: theme.palette.common.true_white,
  },
  root: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    padding: theme.spacing(1),
    width: "95%",
    paddingTop: 27,
    marginBottom: "100px",
    marginLeft: "66px",
    height: 'auto',
  },
  titleBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundImage: `linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.76) 63.23%, rgba(255,255,255,0) 100%), url(${grayDiagonals})`,
    height: "24.25rem",
    width: "100%",
    paddingLeft: theme.spacing(12),
  },
  practicesPane: {
    display: "flex",
    paddingLeft: theme.spacing(8),
    maxWidth: "95%",
  },
  filterBar: {
    padding: theme.spacing(3, 0),
  },
}));

const Practices = (props) => {
  const classes = useStyles();

  const {
    selectedPopularFilter,
    popularMenuItems,
    filterTags,
    selectedFilterTag,
    keywordSearchToggle,
    mobiusLoopArray,
    selectedMobiusLoopFilter,
    handleFilterChange,
    toggleKeywordSearch,
  } = props;

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
          className={classes.filterBar}
        >
          <Grid item data-testid="popularFilterComponent">
            <PopularFilter
              selectedItem={selectedPopularFilter}
              handleFilterChange={handleFilterChange}
              menuItems={Object.keys(popularMenuItems)}
            />
          </Grid>
          <Grid item>
            <FilterTags
              tags={filterTags}
              filter={handleFilterChange}
              selectedFilter={selectedFilterTag}
            />
          </Grid>
          <Grid item>
            <KeywordSearchToggle
              toggle={toggleKeywordSearch}
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
            className={classes.filterBar}
          >
            <Grid item>
              <Grid
                container
                direction="column"
                justify="space-between"
                alignItems="flex-start"
              >
                <Grid item>
                  <Typography variant={"overline"} color="textSecondary">By Mobius Loop</Typography>
                </Grid>
                <Grid item>
                  <DropDownSelectionFilter
                    inputLabel="Entire Process Model"
                    items={mobiusLoopArray}
                    selectedFilter={selectedMobiusLoopFilter}
                    handleFilterSelect={handleFilterChange}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="column"
                justify="space-between"
                alignItems="flex-start"
              >
                <Grid item>
                  <Typography variant={"overline"} color="textSecondary" >Keyword Search</Typography>
                </Grid>
                <Grid item>
                  <KeywordSearchBox dispatch={handleFilterChange} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
        <Grid
          container
          direction="column"
          justify="space-evenly"
          alignContent="center"
          className={classes.root}
        >
          <Grid item xs={12}>
            {props.children}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Practices;
