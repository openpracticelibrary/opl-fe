import React from "react";
import { Stack, Icon, Text } from "@chakra-ui/core";
import { useMutation } from "@apollo/react-hooks";
import { LIKE_PRACTICE } from "../../../graphql/";

export default function CardCollection(props) {
  const [likePractice] = useMutation(LIKE_PRACTICE);

  const handleLike = () => {
    const originalLikes = props.upvotes;
    const newUpvotes = originalLikes + 1;
    likePractice({
      variables: { practiceId: props.practiceId, upvotes: newUpvotes },
    });
  };

  return (
    <Stack isInline py={3} ml={1}>
      <Text as="b" fontFamily="heading" data-testid="heartIcon" onClick={handleLike}>
        <Icon fontSize="md" name="like" color="grey.100" /> {props.upvotes}
      </Text>
      <Text as="b" fontFamily="heading" data-testid="cameraIcon">
        <Icon fontSize="lg" name="camera" color="grey.100" /> {props.imgCount}
      </Text>
      <Text as="b" fontFamily="heading" data-testid="questionIcon">
        <Icon name="questions" color="grey.100" /> {props.questions}
      </Text>
    </Stack>
  );
}
