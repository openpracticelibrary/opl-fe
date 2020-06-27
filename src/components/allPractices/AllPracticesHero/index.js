import React from "react";
import {
  Box,
  Stack,
  Heading,
  Image,
  Flex,
} from "@chakra-ui/core";
import { navigate } from "@reach/router";
import ExploreStickies from "../../../assets/images/home-practices.png";
import LoginButton from "../../shared/Login/LoginButton";

const AllPracticesHero = (props) => (
  <Flex justify="center" px={20} bgImage={props.bg} minH="24.25rem">
    <Flex align="center">
      <Stack spacing={3} maxW={450} mt={{ base: 4, md: 0}} mr={{ md: 6 }}>
        <Heading fontSize="5xl" data-testid="herotext">
            Explore the library
        </Heading>
        <Heading fontSize="3xl" fontWeight="400">
            Check out the practices to learn about ways of working with your team.
        </Heading>
      </Stack>
      <Box flexShrink="0">
        <Image src={ExploreStickies} alt="Explore the library" width={{ md: 581 }} />
      </Box>
    </Flex>
    <Box position="absolute" top="0" right="0" p={4}>
      <LoginButton
        navigate={navigate}
        redirect="/practice"
      />
    </Box>
  </Flex>
);

export default AllPracticesHero;
