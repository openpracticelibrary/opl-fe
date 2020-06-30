import React from "react";
import {
  Stack,
  Avatar,
  Link,
} from "@chakra-ui/core";

const PhotoAndName = props => (
  <Stack isInline pr={3}>
    <Avatar src={props.avatar} size="xs" />
    <Link
      fontSize="md"
      fontFamily="body"
      href={props.authorLink}
      isExternal
      data-testid={"authorName"}
    >
      {props.authorName}
    </Link>
  </Stack>
);

export default PhotoAndName;
