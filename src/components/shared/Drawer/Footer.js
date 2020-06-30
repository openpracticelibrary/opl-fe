import React from "react";
import { Stack, Icon, Link } from "@chakra-ui/core";

import Disclaimer from "./Disclaimer";

const sections = [
  { title: "Send feedback", url: "#", icon: "webLink" },
  { title: "Our Podcast", url: "#", icon: "webLink" },
];

const Footer = () => (
  <Stack
    justify="center"
    align="flex-start"
    spacing={6}
    p={4}
  >
    {sections.map((section, i) => (
      <Link
        key={i}
        fontFamily="heading"
        fontSize="sm"
        fontWeight="600"
        textTransform="uppercase"
        ml={4}
        href={section.url}
        isExternal
      >
        <Icon name={section.icon} color="blue.500" /> {section.title}
      </Link>
    ))}
    <Disclaimer />
  </Stack>
);

export default Footer;
