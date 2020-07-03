import React from "react";

import { Box, Typography } from "@material-ui/core";
import AllPracticesHero from "./AllPracticesHero";
import FilterTags from "./FilterBar/FilterTags";
import KeywordSearchToggle from "./FilterBar/KeywordSearchToggle";
import DropDownSelectionFilter from "./FilterBar/DropDownSelectionFilter";
import KeywordSearchBox from "./FilterBar/KeywordSearchBox";
import PopularFilter from "./FilterBar/PopularFilter";
import grayDiagonals from "../../assets/icons/graylines.svg";

import OplBox from "../shared/components/OplBox";

const Practices = (props) => (
  <>
    <OplBox
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      height="24.5rem"
      width="100%"
      bg={`linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.76) 63.23%, rgba(255,255,255,0) 100%), url(${grayDiagonals})`}
    >
      <AllPracticesHero />
    </OplBox>
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      justifyContent="space-around"
      alignItems="center"
      py={3}
      data-testid="popularFilterComponent"
    >
      <PopularFilter
        selectedItem={props.selectedPopularFilter}
        handleFilterChange={props.handleFilterChange}
        menuItems={Object.keys(props.popularMenuItems)}
      />
      <FilterTags
        tags={props.filterTags}
        filter={props.handleFilterChange}
        selectedFilter={props.selectedFilterTag}
      />
      <KeywordSearchToggle
        toggle={props.toggleKeywordSearch}
        keywordSearchToggle={props.keywordSearchToggle}
      />
    </Box>

    {props.keywordSearchToggle &&
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-around"
        alignItems="center"
        py={3}
        data-testid="popularFilterComponent"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Typography variant={"overline"} color="textSecondary">By Mobius Loop</Typography>
          <DropDownSelectionFilter
            inputLabel="Entire Process Model"
            items={props.mobiusLoopArray}
            selectedFilter={props.selectedMobiusLoopFilter}
            handleFilterSelect={props.handleFilterChange}
          />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Typography variant={"overline"} color="textSecondary" >Keyword Search</Typography>
          <KeywordSearchBox dispatch={props.handleFilterChange} />
        </Box>
      </Box>
    }
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      alignContent="center"
      mx={6}
    >
      {props.children}
    </Box>
  </>
);

export default Practices;
