import React from "react";
import {
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
} from "@chakra-ui/core";

const KeywordSearchBox = (props) => {
  const searchInputRef = React.useRef();

  const handleSearchClick = () => {
    if (searchInputRef.current.value.includes(",")) {
      const multiWord = searchInputRef.current.value.split(",").map(keyword => keyword.trim());
      props.dispatch({ type: "keywordSearchChange", content: multiWord });
    }

    props.dispatch({ type: "keywordSearchChange", content: searchInputRef.current.value });
  };

  return (
    <FormControl>
      <FormLabel
        textTransform="uppercase"
        color="grey.500"
        fontSize="sm"
        fontWeight="400"
        mb={2}
        htmlFor="keywordFilter"
      >
        Keyword Search
      </FormLabel>
      <InputGroup>
        <Input
          size="lg"
          minW="20rem"
          minH="48px"
          rounded={6.5}
          ref={searchInputRef}
          placeholder="Search by Keyword"
          fontFamily="heading"
          focusBorderColor="blue.500"
        />
        <InputRightElement
          children={
            <IconButton variant="ghost" icon="search" color="blue.500" />
          }
          onClick={handleSearchClick}
        />
      </InputGroup>
    </FormControl>
  );
};

export default KeywordSearchBox;
