import React from "react";
import { Stack, Box, Text } from "@chakra-ui/core";
import { navigate } from "@reach/router";

const PracticeCardTitle = (props) => {
  const tags = () => {
    const tagsLength = props.tags.length;
    let initialTags = props.tags;
    if (tagsLength > 3) {
      initialTags = initialTags.slice(0, 3);
    }

    return (
      <Stack isInline spacing={2} py={2}>
        {initialTags.map((t, i) => (
          <Box key={i} rounded={3} pl={1} bg="rgba(16,16,16,0.1)">
            <Text fontFamily="heading" fontSize="sm" textTransform="uppercase" color="grey.500">
                #{t.tag}&nbsp;
            </Text>
          </Box>
        ))}
      </Stack>
    );
  };

  return (
    <div onClick={() => navigate(`/practice/${props.slug}`)}>
      <Text data-testid="practicetitle">{props.practiceTitle}</Text>
      {tags()}
    </div>
  );
};

export default PracticeCardTitle;
