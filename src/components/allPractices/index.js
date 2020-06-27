import React from "react";
import {
  Flex,
  Box,
} from "@chakra-ui/core";
import AllPracticesHero from "./AllPracticesHero";
import FilterTags from "./FilterBar/FilterTags";
import KeywordSearchToggle from "./FilterBar/KeywordSearchToggle";
import DropDownSelectionFilter from "./FilterBar/DropDownSelectionFilter";
import KeywordSearchBox from "./FilterBar/KeywordSearchBox";
import PopularFilter from "./FilterBar/PopularFilter";
import Typography from "@material-ui/core/Typography";
import grayDiagonals from "../../assets/icons/graylines.svg";

const Practices = (props) => {
  const backgroundImage = `linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.76) 63.23%, rgba(255,255,255,0) 100%), url(${grayDiagonals})`;

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

  const advancedFilters = () => (
    <Flex
      direction="row"
      justify="space-evenly"
      align="center"
    >
      <DropDownSelectionFilter
        inputLabel="Entire Process Model"
        items={mobiusLoopArray}
        selectedFilter={selectedMobiusLoopFilter}
        handleFilterSelect={handleFilterChange}
      />
      <KeywordSearchBox dispatch={handleFilterChange} />
    </Flex>
  );

  return (
    <>
      <AllPracticesHero bg={backgroundImage} />
      <Flex direction="row" justify="space-between" py={8} mx={10}>
        <Box>
          <PopularFilter
            selectedItem={selectedPopularFilter}
            handleFilterChange={handleFilterChange}
            menuItems={Object.keys(popularMenuItems)}
          />
        </Box>
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
          <FilterTags
            tags={filterTags}
            filter={handleFilterChange}
            selectedFilter={selectedFilterTag}
          />
        </Box>
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
          <KeywordSearchToggle
            toggle={toggleKeywordSearch}
            keywordSearchToggle={keywordSearchToggle}
          />
        </Box>
      </Flex>

      {keywordSearchToggle && advancedFilters()}

      <Flex justify="center" align="center" pt={27} mb={100} pl={8}>
        {props.children}
      </Flex>
    </>
  );
};

export default Practices;
