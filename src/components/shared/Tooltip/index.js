import React from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverHeader,
  PopoverContent,
  PopoverArrow,
  PopoverBody
} from "@chakra-ui/core";

const Tooltip = (props) => {
  const { placement } = props;
  const arrowBorders = {
    borderRightColor: (placement === "top" || placement === "left") ? "blue.500" : "transparent",
    borderBottomColor: (placement === "top" || placement === "right") ? "blue.500" : "transparent",
    borderTopColor: (placement === "bottom" || placement === "left") ? "blue.500" : "transparent",
    borderLeftColor: (placement === "bottom" || placement === "rignt") ? "blue.500" : "transparent",
  };

  return (
    <Popover
      placement={props.placement}
      trigger="hover"
      onOpen={props.open ? () => props.open(true) : ""}
      onClose={props.open ? () => props.open(false) : ""}
    >
      <PopoverTrigger>
        {props.children}
      </PopoverTrigger>
      <PopoverContent
        zIndex={4}
        bg="white"
        borderColor="blue.500"
        borderRadius="7px"
        color="black"
        minH={props.minH}
        minW={props.minW}
        maxW={237}
        width={props.w}
      >
        {props.header &&
          <PopoverHeader
            fontWeight="bold"
            fontFamily="heading"
            textAlign="Center"
          >
            {props.header}
          </PopoverHeader>
        }
        <PopoverArrow
          border="1px"
          {...arrowBorders}
        />
        <PopoverBody
          fontSize="sm"
          color="grey.500"
          textAlign="center"
          textTransform={props.transform}
        >
          {props.text}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
};

export default Tooltip;
