import React from "react";
import moment from "moment";
import {
  Text,
  Flex,
  Stack,
} from "@chakra-ui/core";

import PhotoAndName from "./PhotoAndName";
import EditorPhotos from "./EditorPhotos";

export default function ContributedBy(props) {
  const formatDate = (date) => {
    return moment(date).format("MMMM D, YYYY");
  };
  let contributors = [];
  let editors = [];

  if (props.authors.length > 2) {
    contributors = props.authors.slice(0, 2);
    editors = props.authors.slice(2, props.authors.length);
  } else {
    contributors = props.authors;
  }

  return (
    <Stack isInline spacing={3} py={2}>
      <Stack>
        <Text
          fontFamily="heading"
          fontSize="sm"
          fontWeight="500"
          textTransform="uppercase"
        >
          Contributed by
        </Text>
        <Flex direction="row">
          {contributors.map((author, i) => (
            <PhotoAndName
              key={author.id}
              authorName={`${author.firstName} ${author.lastName}`}
              authorLink={author.mediaLink}
              avatar={author.Avatar}
            />
          ))}
        </Flex>
      </Stack>
      { (editors.length > 0) &&
        <Stack>
          <Text
            fontFamily="heading"
            fontSize="sm"
            fontWeight="500"
            textTransform="uppercase"
          >
            Edited By
          </Text>
          <Flex direction="row">
            <EditorPhotos editors={editors} />
          </Flex>
        </Stack>
      }
      <Text
        fontFamily="heading"
        fontSize="sm"
        textTransform="uppercase"
        mt="auto"
      >
        Published {formatDate(props.createdAt)} | Last edited{" "}
        {formatDate(props.updatedAt)}
      </Text>
    </Stack>
  );
}
