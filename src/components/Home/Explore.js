import React from 'react';
import {
  Stack,
  Box,
  Heading,
  Flex,
  Image,
  Button,
} from "@chakra-ui/core";
import { navigate } from "@reach/router";

import GrayRain from "../../assets/icons/rain.svg";
import ClosingStickies from "../../assets/images/home-practices.png";

const backgroundImage = `linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.95) 71.03%, rgba(255,255,255,0.85) 100%), url(${GrayRain})`;

const Explore = (props) => (
  <Flex justify="center" minH={500} px={20} mt={10} bgImage={backgroundImage}>
    <Flex align="center" m={4}>
      <Image src={ClosingStickies} alt="Closing Message" width={561} height={357} />
      <Stack spacing={6} maxW={700} px={10}>
        <Heading fontSize="3xl" fontWeight="500" data-testid="exploreMsg">
          {props.exploreMessage}
        </Heading>
        <Box>
          <Button
            variantColor="lightBlue"
            size="lg"
            border="1px"
            borderColor="blue.500"
            rounded="32px"
            px={8}
            fontSize="md"
            color="black"
            fontFamily="heading"
            fontWeight="500"
            onClick={() => navigate("/practice")}
          >
             Explore the library
          </Button>
        </Box>
      </Stack>
    </Flex>
  </Flex>
);

export default Explore;
