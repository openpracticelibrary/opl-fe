import React from "react";
import {
  Stack,
  Box,
  Button,
  Accordion,
  Text,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/core";
import { navigate } from "@reach/router";

const TopListItems = props => (
  <Stack pt={8}>
    <Text
      fontFamily="heading"
      textTransform="uppercase"
      fontSize="sm"
      fontWeight="600"
      color="blue.500"
    >
      Practices
    </Text>
    <Button
      variant="ghost"
      fontFamily="heading"
      fontWeight="600"
      justifyContent="flex-start"
      onClick={() => navigate("/practice", { state: { tagArray: [] } })}
    >
      See Everything
    </Button>
    <Accordion allowToggle w="100%">
      <AccordionItem border="0px">
        <AccordionHeader>
          <Box
            border="0px"
            flex="1"
            textAlign="left"
            fontFamily="heading"
            fontSize="md"
            fontWeight="600"
          >
            By Mobius Loop
          </Box>
          <AccordionIcon />
        </AccordionHeader>
        <AccordionPanel pb={4}>
          <Stack fontFamily="heading" fontWeight="400" color="grey.500">
            <Button
              variant="ghost"
              justifyContent="flex-start"
              onClick={() => navigate("/practice", { state: { tagArray: ["Discovery"] } })}
            >
              #Discovery
            </Button>
            <Button
              variant="ghost"
              justifyContent="flex-start"
              onClick={() => navigate("/practice", { state: { tagArray: ["Options"] } })}
            >
              #Options
            </Button>
            <Button
              variant="ghost"
              justifyContent="flex-start"
              onClick={() => navigate("/practice", { state: { tagArray: ["Delivery"] } })}
            >
              #Delivery
            </Button>
            <Button
              variant="ghost"
              justifyContent="flex-start"
              onClick={() => navigate("/practice", { state: { tagArray: ["Foundation"] } })}
            >
              #Foundation
            </Button>
          </Stack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  </Stack>
);

const BottomListItems = () => (
  <Stack>
    <Text
      fontFamily="heading"
      textTransform="uppercase"
      fontSize="sm"
      fontWeight="600"
      color="blue.500"
    >
      Community
    </Text>
    <Button
      variant="ghost"
      fontFamily="heading"
      fontWeight="600"
      justifyContent="flex-start"
    >
      Learn about us
    </Button>
  </Stack>
);

export { TopListItems, BottomListItems };
