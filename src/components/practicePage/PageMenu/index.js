import React from "react";
import { Flex, Button } from "@chakra-ui/core";

import SocialLinks from "./SocialLinks";

const sections = [
  {title: "What", ref: "whatIsRef"},
  {title: "Why", ref: "whyDoRef"},
  {title: "How", ref: "howToRef"},
  {title: "Look", ref: "mediaRef"},
  {title: "Links", ref: "resourceRef"},
  {title: "AMA", ref: "amaRef"},
];

export default function PageMenu(props) {
  const handleClick = (ref) => {
    props[ref].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <Flex
      direction="row"
      justify="flex-end"
      align="center"
      w={["950px", "30%", "40%", "55%"]}
      py="1.25rem"
    >
      <Flex
        direction="row"
        justify="space-between"
        maxW={950}
        display={["flex", "none", "none", "flex"]}
      >
        {sections.map((section, i) => (
          <Button
            key={i}
            variant="ghost"
            rounded={17}
            minW={90}
            maxH={34}
            color="grey.500"
            fontFamily="heading"
            fontSize="sm"
            textTransform="uppercase"
            _hover={{ bg: "lightBlue.500", color: "blue.500" }}
            _focus={{ bg: "lightBlue.500", color: "blue.500" }}
            _active={{ bg: "lightBlue.500" }}
            onClick={() => handleClick(section.ref)}
          >
            {section.title}
          </Button>
        ))}
      </Flex>
      <Flex
        justify="flex-end"
        align="center"
        position="absolute"
        right={0}
        w={["40%", "100%", "100%", "40%"]}
        pr={25}
      >
        <SocialLinks
          practiceId={props.practiceId}
          upvotes={props.upvotes}
          coverImage={props.coverImage}
        />
      </Flex>
    </Flex>
  );
}
