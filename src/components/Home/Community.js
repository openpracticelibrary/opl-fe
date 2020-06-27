import React from 'react';
import { navigate } from "@reach/router";
import {
  Flex,
  Heading,
  Icon,
  Button,
  Stack,
} from "@chakra-ui/core";

import PracticeCount from "./PracticeCount";
import ContributorCount from "./ContributorCount";
import RedHatLogo from "../../assets/images/logo-red-hat-hat-color-rgb.png";
import NounProjectLogo from "../../assets/images/noun-project.png";
import MobiusLogo from "../../assets/images/mobius-small.png";
import CCHeartLogo from "../../assets/images/ccheart-black.png";
import Collaborators from "./Collaborators";

const collaborators = [
  {
    name: "Red Hat",
    logo: RedHatLogo,
    text: "Home of our product team and our largest Open Source Contributor."
  },
  {
    name: "The Noun Project",
    logo: NounProjectLogo,
    text: "The community driven icon library we love so much and use for UI design."
  },
  {
    name: "Mobius Loop",
    logo: MobiusLogo,
    text: "Our process model and partner in defining product lifecycle practices."
  },
  {
    name: "Creative Commons",
    logo: CCHeartLogo,
    text: "Under this license, our content is as open source as our application software."
  }
];

const Community = (props) => (
  <>
    <Flex justify="space-between" py={20} data-testid="communityHeader">
      <Heading ref={props.communityRef}>Community driven</Heading>
      <Button
        rounded="32px"
        fontFamily="heading"
        fontWeight="400"
        variantColor="transparent"
        border="1px"
        borderColor="blue.500"
        color="black"
        height={53}
        px={8}
        onClick={() => navigate("#")}
      >
          About us <Icon name="arrow-forward" fontSize="xl" color="blue.500" ml={2} />
      </Button>
    </Flex>
    <Flex direction="column">
      <Heading
        color="grey.500"
        textAlign="center"
        fontWeight="400"
        fontSize="3xl"
      >
          We have...
      </Heading>
      <Stack isInline justify="center">
        <PracticeCount />
        <ContributorCount />
      </Stack>
    </Flex>
    <Stack justify="center" align="center" py={20}>
      <Heading
        fontWeight="400"
        color="grey.500"
        textAlign="center"
        fontSize="3xl"
      >
          We have collaborations with...
      </Heading>
      <Stack isInline align="center" py={10}>
        {collaborators.map(({ logo, name, text }) => (
          <Collaborators key={name} logo={logo} name={name} text={text} />
        ))}
      </Stack>
    </Stack>
  </>
);

export default Community;
