import React from 'react';
import { Flex, Stack, Heading, IconButton, Image, Box } from "@chakra-ui/core";

import { OPLLogo } from "../../assets/icons";
import LoginButton from "../shared/Login/LoginButton";
import GrayDiagonals from "../../assets/icons/graylines.svg";
import HomeStickies from "../../assets/images/WhiteBoarding.png";

const Landing = (props) => {
  const backgroundImage = `linear-gradient(180.18deg, #F3F3F3 0%, #FFFFFF 13.64%, #FFFFFF 43.94%, rgba(255,255,255,0.94) 79.58%, rgba(255,255,255,0.62) 100%), url(${GrayDiagonals})`;
  const handleClick = () => {
    props.communityRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Flex justify="center" minH={960} px={20} bgImage={backgroundImage}>
      <Box position="absolute" top="0" left="0" mt="-88px" p={4}>
        <OPLLogo height="250px" width="383px" />
      </Box>
      <Flex align="center" m={4}>
        <Stack spacing={8} maxW={500}>
          <Heading as="h1" fontSize="6xl" data-testid="hellotext">
            {props.greeting}
          </Heading>
          <Heading as="h2" fontSize="3xl" fontWeight="400" data-testid="welcomeText">
            {props.welcomeMessage}
          </Heading>
          <Heading as="h2" fontSize="3xl" fontWeight="400" data-testid="inquiryText">
            {props.inquiry}
          </Heading>
          <Heading as="h3" fontSize="md">
            Tell me more
            <IconButton
              isRound
              variantColor="blue"
              aria-label="Scroll to Community"
              onClick={handleClick}
              size="sm"
              fontSize="xl"
              icon="arrow-down"
              ml={6}
            />
          </Heading>
        </Stack>
        <Image src={HomeStickies} alt="Welcome to OPL" height="auto" width="900px" />
      </Flex>
      <Box position="absolute" top="0" right="0" p={4}>
        <LoginButton
          navigate={props.navigate}
          redirect="/practice"
        />
      </Box>
    </Flex>
  )
};

export default Landing;
