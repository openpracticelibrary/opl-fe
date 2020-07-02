import React from 'react';
import { Stack, Text, Flex, Skeleton } from "@chakra-ui/core";

const StatBox = (props) => (
  <Flex
    border="1px"
    borderRadius="50%"
    borderStyle="solid"
    borderColor="grey.100"
    shadow="2px 2px 8px 0 rgba(0,0,0,0.1)"
    justify="center"
    height={340}
    width={330}
    m={5}
  >
    <Stack justify="center" spacing={0}>
      <Skeleton isLoaded={!props.loading}>
        <Text
          fontFamily="heading"
          fontSize={120}
          textAlign="center"
          fontWeight="700"
          color="blue.500"
          data-testid="practiceNum"
        >
          {props.data}
        </Text>
      </Skeleton>
      <Text
        mt={-4}
        fontFamily="heading"
        fontSize="lg"
        fontWeight="500"
        textAlign="center"
      >
        {props.title}<br />{props.secondLine}
      </Text>
    </Stack>
  </Flex>
);

export default StatBox;
