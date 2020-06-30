import React from "react";
import { Flex } from "@chakra-ui/core";

import FooterLogoSection from "./FooterLogoSection";
import FooterLinkSection from "./FooterLinkSection";

const BodyFooter = () => (
  <Flex
    borderTop="1px solid rgba(0, 0, 0, 0.12)"
    py={6}
    h={141}
    justify="space-around"
    data-testid="footer"
  >
    <FooterLogoSection/>
    <FooterLinkSection/>
  </Flex>
);

export default BodyFooter;
