import React from "react";
import {
  Stack,
  Link,
} from "@chakra-ui/core";

export default function ResourceListItem(props) {
  const link = {
    web: `Citation Link: ${props.description}`,
    book: `Citation Link: ${props.description}`,
    video: `Watch Video: ${props.description}`,
    purchase: `Shopping List: ${props.description}`,
    download: `Download Template: ${props.description}`,
    podcast: `Listen to Podcast: ${props.description}`,
  };

  return (
    <Stack isInline my={1} py={2}>
      {props.children}
      <Link href={props.url} isExternal fontFamily="body" fontSize="md">
        {link[props.linkType]}
      </Link>
    </Stack>
  );
}
