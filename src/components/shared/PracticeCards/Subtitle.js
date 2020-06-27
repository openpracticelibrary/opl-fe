import React from "react";
import { Text } from "@chakra-ui/core";
import { navigate } from "@reach/router";

const Subtitle = (props) => (
  <Text
    data-testid="subtitle"
    fontSize="sm"
    onClick={() => navigate(`/practice/${props.slug}`)}
  >
    {props.subtitle}
  </Text>
);

export default Subtitle;
