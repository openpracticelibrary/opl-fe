/** @jsx jsx */
import ReactMarkdown from "react-markdown";
import { useTheme, css, Flex, Box, Heading, Text } from "@chakra-ui/core";
import { jsx } from '@emotion/core'

const ContentSection = props => {
  const theme = useTheme();
  const bodyStyles = css({
    "& > ol, ul": {
      marginBlockStart: "1rem",
      marginBlockEnd: "1rem",
      marginInlineStart: "0px",
      marginInlineEnd: "0px",
      paddingLeft: "1.25rem",
    },
    "& > h2": {
      fontFamily: "heading",
      fontWeight: "500",
      color: "blue.500",
      fontSize: "xl",
      marginBlockStart: "0.5rem",
      marginBlockEnd: "0.5rem",
      marginInlineStart: "0px",
      marginInlineEnd: "0px",
    },
    "& > h4": {
      marginBlockStart: "1rem",
      marginBlockEnd: "1rem",
      marginInlineStart: "0px",
      marginInlineEnd: "0px",
      fontWeight: "600",
      fontFamily: "heading",
      fontSize: "lg",
    },
    "& > blockquote": {
      marginBlockStart: "1em",
      marginBlockEnd: "1em",
      marginInlineStart: "40px",
      marginInlineEnd: "40px",
    },
  })(theme);

  return (
    <Flex direction="column">
      <Heading fontSize="section" ref={props.sectionRef} py={4}>
        {props.title}
      </Heading>
      <Box p="8px">
        {props.editing ?
          props.children
          :
          <Text
            as="span"
            fontSize="md"
            css={bodyStyles}
          >
            <ReactMarkdown source={props.source} />
          </Text>
        }
      </Box>
    </Flex>
  )
};

export default ContentSection;
