import React from "react";
import { Flex, Box, Heading } from "@chakra-ui/core";
import { useLottie, Lottie } from "react-lottie-hook";
import * as animationData from "./lotties/17896-wash-your-hands.json";

const Loading = () => {
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
      bg="grey.50"
      opacity={40}
      w="100%"
      h="1000px"
    >
      <Box position="absolute" mt="10%" left={0} right={0} data-testid="loadingPage">
        <Heading textAlign="center">Washing our hands...</Heading>
        <Lottie lottieRef={lottieRef} height={400} width={400} />
      </Box>
    </Flex>
  );
};

export default Loading;

