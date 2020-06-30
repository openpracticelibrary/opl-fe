import React from "react";
import { Image, Stack, Text } from "@chakra-ui/core";

import { OPLLogo } from "../../../assets/icons";
import logoLabs from "../../../assets/images/logo-red-hat-open-innovation-labs-a-standard-rgb.png";

const FooterLogoSection = () => (
  <Stack justify="center">
    <OPLLogo height="37px" width="221px" />
    <Stack
      isInline>
      <Text fontFamily="heading" textTransform="uppercase" fontSize="sm" data-testid="poweredBy">
          powered by
      </Text>
      <Image
        src={logoLabs}
        alt="Open Innovation Labs"
        height="31px"
        width="162px"
      />
    </Stack>
  </Stack>
);

export default FooterLogoSection;
