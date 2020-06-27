import React from "react";
import { Image } from "@chakra-ui/core";
import { navigate } from "@reach/router";

const CoverImage = (props) => (
  <Image
    data-testid="coverimage"
    alt={props.practiceTitle}
    src={props.coverImage}
    height={181}
    width={295}
    rounded={10}
    onClick={() => navigate(`/practice/${props.slug}`)}
  />
);

export default CoverImage;
