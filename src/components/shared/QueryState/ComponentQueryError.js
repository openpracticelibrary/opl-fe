import React from "react";
import { Flex } from "@chakra-ui/core";
import { useLottie, Lottie } from "react-lottie-hook";
import * as animationData from "./lotties/3227-error-404-facebook-style.json";

const ComponentLoading = (props) => {
  const [lottieRef] = useLottie({
    renderer: "svg",
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      progressiveLoad: false
    },
    animationData: animationData.default,
  });

  console.error(props.err);

  return (
    <Flex m="5%" data-testid="errorComponent">
      <Lottie lottieRef={lottieRef} height={250} width={350} />
    </Flex>
  );
};

export default ComponentLoading;

