import React from "react";
import { Stack, IconButton, Box, Text } from "@chakra-ui/core";
import { useMutation } from "@apollo/react-hooks";
import { LIKE_PRACTICE } from "../../../graphql/";

export default function Collection(props) {
  const [likePractice] = useMutation(LIKE_PRACTICE);

  const handleLike = () => {
    const originalLikes = props.upvotes;
    const newUpvotes = originalLikes + 1;
    likePractice({
      variables: {practiceId: props.practiceId, upvotes: newUpvotes},
    });
  };

  return (
    <Stack isInline pt={4} pb={8}>
      <Text
        fontFamily="heading"
        fontSize="sm"
        fontWeight="500"
        textTransform="uppercase"
      >
          Collection
      </Text>
      <Box verticalAlign="middle">
        <Text as="b" fontFamily="heading" data-testid="heartIcon">
          <IconButton
            isRound
            onClick={handleLike}
            height="auto"
            variant="ghost"
            aria-label="Like Practice"
            icon="like"
            color="grey.500"
            data-testid={"heartIcon"}
          />
          {props.upvotes}
        </Text>
        <Text as="b" fontFamily="heading">
          <IconButton
            isRound
            variant="ghost"
            height="auto"
            size="lg"
            aria-label="Image Count"
            color="grey.500"
            icon="camera"
          />
          {props.imgCount}
        </Text>
        <Text as="b" fontFamily="heading">
          <IconButton
            isRound
            variant="ghost"
            height="auto"
            aria-label="Questions Count"
            color="grey.500"
            icon="questions"
          />
          {props.questions}
        </Text>
      </Box>
    </Stack>
  );
}
