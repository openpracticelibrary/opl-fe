import React from "react";
import { Flex, Box, Heading, Text } from "@chakra-ui/core";
import { useLottie, Lottie } from "react-lottie-hook";
import * as animationData from "./lotties/3227-error-404-facebook-style.json";

const QueryError = (props) => {
  const [lottieRef] = useLottie({
    renderer: "svg",
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  });

  return (
    <Flex
      position="relative"
      bg="black"
      w="100%"
      h="1000px"
      opacity={40}
    >
      <Box position="absolute" mt="10%" left={0} right={0} data-testid="errorPage">
        <Heading color="white" textAlign="center">That's an error...</Heading>
        <Lottie lottieRef={lottieRef} height={400} width={400} />
        <Text color="grey.500">{props.err}</Text>
      </Box>
    </Flex>
  );
};

export default QueryError;

