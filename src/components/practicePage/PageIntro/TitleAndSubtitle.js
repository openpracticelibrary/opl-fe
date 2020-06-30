import React from "react";
import { Stack, Heading, Text, Box } from "@chakra-ui/core";

const TitleAndSubtitle = props => (
  <Stack>
    <Box>
      {props.children}
      <Heading
        as="h1"
        fontSize="5xl"
        data-testid={"title"}
      >
        {props.editing ?
          props.titleEdit : props.title
        }
      </Heading>
      <Stack isInline spacing={2}>
        {props.tags && props.tags.map((t, i) => (
          <Box key={i} rounded={3} pl={1} bg="rgba(16,16,16,0.1)">
            <Text fontFamily="heading" fontSize="sm" textTransform="uppercase" color="grey.500">
              #{t.tag}&nbsp;
            </Text>
          </Box>
        ))}
      </Stack>
    </Box>
    <Box py={2}>
      <Text
        fontSize="lg"
        data-testid={"subtitle"}
      >
        {props.editing ?
          props.subtitleEdit :
          props.subtitle
        }
      </Text>
    </Box>
  </Stack>
);

export default TitleAndSubtitle;
