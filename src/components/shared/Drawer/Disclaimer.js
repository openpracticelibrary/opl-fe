import React from "react";
import { Box, Stack, Image, Icon, Text } from "@chakra-ui/core";
import disclaimerIcon from "../../../assets/icons/noun-project@3x.png";

const Disclaimer = () => (
  <Stack
    isInline
    spacing={6}
  >
    <Stack justify="center" align="center">
      <Icon name="ccHeart" />
      <Image
        src={disclaimerIcon}
        alt="Disclaimer"
        height="8px"
        width="26px"
      />
    </Stack>

    <Box w={160}>
      <Text fontFamily="caption" fontSize="xs">
        {
          "Except where otherwise noted, content on this site is licensed under a Creative Commons Attribution 4.0 International license. Icons by The Noun Project."
        }
      </Text>
    </Box>
  </Stack>
);

export default Disclaimer;
