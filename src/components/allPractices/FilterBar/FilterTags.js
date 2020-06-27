import React from "react";
import {
  Flex,
  PseudoBox
} from "@chakra-ui/core";

const Tag = ({ tag, filter, selectedFilter }) => {
  const buttonRef = React.useRef(null);

  const hashtag = tag === "ALL" ? tag : `#${tag}`;

  return (
    <PseudoBox
      as="button"
      ref={buttonRef}
      rounded={16.5}
      fontSize="sm"
      p={4}
      _hover={{
        bg: "lightBlue.500",
        border: "1px",
        borderColor: "blue.500",
        fontWeight: "600"
      }}
      _active={{
        bg: "lightBlue.500",
        fontWeight: "600",
      }}
      _focus={{
        bg: "lightBlue.500",
        fontWeight: "600",
      }}
      onClick={() => filter({ type: 'tagFilterChange', content: tag })}
    >
      {hashtag}
    </PseudoBox>
  );
};

const FilterTags = (props) => {
  const { tags, selectedFilter, filter } = props;

  return (
    <Flex data-testid="filterTags">
      {tags.map((tag) => (
        <Tag
          key={tag}
          tag={tag}
          selectedFilter={selectedFilter}
          filter={filter}
        />
      ))}
    </Flex>
  );
};

export default FilterTags;
