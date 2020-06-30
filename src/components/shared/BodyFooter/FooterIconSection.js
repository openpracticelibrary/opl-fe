import React from "react";
import {
  Stack,
  Link,
  Icon,
} from "@chakra-ui/core";

const sections = [
  { url: "mailto:info@openpracticelibrary.com", icon: "email" },
  { url: "https://www.instagram.com/openpracticelibrary/?hl=en", icon: "instagram" },
  { url: "https://github.com/openpracticelibrary", icon: "github" },
  { url: "https://podcasts.apple.com/us/podcast/open-practice-podcast/id1501715186", icon: "pod" },
  { url: "https://www.youtube.com/channel/UCBGbB7xVsmf-yQ8NXn7TOVg?view_as=subscriber", icon: "youtube" },
];

const FooterIconSection = props => (
  <Stack
    isInline
    spacing={2}
  >
    {sections.map((section, i) => (
      <Link key={i} href={section.url} isExternal px={2}>
        <Icon name={section.icon} color="blue.500" size="1.5rem" />
      </Link>
    ))}
  </Stack>
);

export default FooterIconSection;
