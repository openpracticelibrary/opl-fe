import React from "react";
import { Flex } from "@chakra-ui/core";
import { useLottie, Lottie } from "react-lottie-hook";
import * as animationData from "./lotties/23590-loading.json";

const ComponentLoading = () => {
  const [lottieRef] = useLottie({
    renderer: "svg",
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      progressiveLoad: false
    },
    animationData: animationData.default,
  });

  return (
    <Flex m="5%" data-testid="loadingComponent">
      <Lottie lottieRef={lottieRef} height={250} width={350} />
    </Flex>
  );
};

export default ComponentLoading;

