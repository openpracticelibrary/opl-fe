/** @jsx jsx */
import ReactMarkdown from "react-markdown";
import { Flex, Box, Text } from "@chakra-ui/core";
import { jsx } from '@emotion/core'

const FullText = props => (
  <Flex direction="column">
    <Box p={4}>
      <Text
        as="span"
        fontSize="md"
        css={{
          "& > ol, ul": {
            marginBlockStart: "1rem",
            marginBlockEnd: "1rem",
            marginInlineStart: "0px",
            marginInlineEnd: "0px",
            paddingLeft: "1.25rem",
          }
        }}
      >
        <ReactMarkdown source={props.source} />
      </Text>
    </Box>
  </Flex>
);

export default FullText;
