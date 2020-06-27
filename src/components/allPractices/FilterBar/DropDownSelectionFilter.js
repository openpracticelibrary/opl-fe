import React from "react";
import {
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/core";

const DropDownSelectionFilter = (props) => {
  const { items, handleFilterSelect, selectedFilter } = props;
  console.log(selectedFilter);
  return (
    <FormControl>
      <FormLabel
        textTransform="uppercase"
        color="grey.500"
        fontSize="sm"
        fontWeight="400"
        mb={2}
        htmlFor="mobiusFilter"
      >
        By Mobius Loop
      </FormLabel>
      <Select
        size="lg"
        rounded={6.5}
        minW="20rem"
        fontFamily="heading"
        fontSize="0.875rem"
        textTransform="uppercase"
        value={selectedFilter}
        focusBorderColor="blue.500"
        iconColor="blue.500"
        onChange={(event) => handleFilterSelect({ type: 'mobiusFilterChange', content: event.target.value })}
      >
        {items.map((item, i) => (
          <option value={item} key={i}>
            {item === "Entire Process Model" ? "" : "#"}{item}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropDownSelectionFilter;
