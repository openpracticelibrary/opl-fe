import React from 'react';
import {
  useTheme,
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

const Explore = (props) => {
  const theme = useTheme();
  const backgroundImage = `linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.95) 71.03%, rgba(255,255,255,0.85) 100%), url(${GrayRain})`;

  return (
    <Flex justify="center" minH={500} px={20} mt={10} bgImage={backgroundImage}>
      <Flex align="center" m={4}>
        <Image src={ClosingStickies} alt="Closing Message" width={561} height={357} />
        <Stack spacing={6} maxW={700} px={10}>
          <Heading fontSize="3xl" fontWeight="500" data-testid="exploreMsg">
            {props.exploreMessage}
          </Heading>
          <Box>
            <Button
              {...theme.brand.buttons.loginButton}
              onClick={() => navigate("/practice")}
            >
             Explore the library
            </Button>
          </Box>
        </Stack>
      </Flex>
    </Flex>
  );
};
export default Explore;
