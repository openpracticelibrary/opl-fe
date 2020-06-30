import React from "react";
import {
  Stack,
  Text,
  Link,
} from "@chakra-ui/core";
import { navigate } from "@reach/router";

import FooterIconSection from "./FooterIconSection";

const sections = [
  { title: "Practices", url: "/practice" },
  { title: "About", url: "#" },
  { title: "Latest", url: "#" },
  { title: "Terms", url: "#" },
  { title: "Help", url: "#" },
];

const FooterLogoSection = () => (
  <Stack
    justify="center"
    align="flex-end"
    w="65%"
    spacing={2}
  >
    <Stack
      isInline
      spacing={8}
    >
      {sections.map((section, i) => (
        <Link
          key={i}
          as="button"
          fontFamily="heading"
          onClick={() => navigate(section.url)}
        >
          {section.title}
        </Link>
      ))}
    </Stack>
    <Stack
      isInline
      spacing={2}
    >
      <Text
        as="span"
        fontFamily="heading"
        fontSize="md"
        fontWeight="500"
        data-testid="connect"
      >
          Please connect with us:
      </Text>
      <FooterIconSection />
    </Stack>
  </Stack>
);

export default FooterLogoSection;
