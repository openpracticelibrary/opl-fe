import React from 'react';
import {
  Icon,
  Stack,
  Image,
  Popover,
  PopoverTrigger,
  PopoverHeader,
  PopoverContent,
  PopoverArrow,
  PopoverBody
} from "@chakra-ui/core";

const Collaborators = (props) => {
  const [pop, setPop] = React.useState(false);

  return (
    <Stack align="center" spacing={8} px={45}>
      <Image src={props.logo} width={134} height={72} objectFit="contain" />
      <Popover
        trigger="hover"
        onOpen={() => setPop(true)}
        onClose={() => setPop(false)}
      >
        <PopoverTrigger>
          { pop ?
            <Icon name="plus" color="blue.500" fontSize="2xl" />
            :
            <Icon name="plusOutline" color="blue.500" fontSize="2xl" />
          }
        </PopoverTrigger>
        <PopoverContent
          zIndex={4}
          bg="white"
          borderColor="blue.500"
          borderRadius="7px"
          color="black"
          maxW={237}
        >
          <PopoverHeader
            fontWeight="bold"
            fontFamily="heading"
            textAlign="Center"
          >
            {props.name}
          </PopoverHeader>
          <PopoverArrow
            border="1px"
            borderBottom="transparent"
            borderRight="transparent"
            borderTopColor="blue.500"
            borderLeftColor="blue.500"
          />
          <PopoverBody fontSize="sm" color="grey.500" textAlign="center">
            {props.text}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Stack>
  )
};

export default Collaborators;
