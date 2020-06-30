import React from "react";
import {
  Button,
  Text,
  Icon,
} from "@chakra-ui/core";

const KeywordSearchToggle = (props) => {
  const { toggle, keywordSearchToggle } = props;

  return (
    <Button
      data-testid="keywordSearchToggle"
      variant="ghost"
      _focus={{ border: 0, bg: "transparent" }}
      _hover={{ bg: "transparent" }}
      onClick={toggle}
    >
      <Text fontSize="sm" textTransform="uppercase" fontFamily="heading">Filters</Text>
      {keywordSearchToggle ?
        <Icon
          name="filter"
          color="blue.500"
          transform="rotate(180deg)"
          fontSize="lg"
        />
        :
        <Icon
          name="filter"
          color="blue.500"
          fontSize="lg"
        />
      }
    </Button>
  );
};

export default KeywordSearchToggle;
