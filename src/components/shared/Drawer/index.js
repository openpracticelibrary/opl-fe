import React from "react";
import {
  useDisclosure,
  Box,
  Flex,
  IconButton,
  Stack,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/core";
import { Link } from "@reach/router";

import { BottomListItems, TopListItems } from "./ListItems";
import Footer from "./Footer";
import { OPLLogo } from "../../../assets/icons";

const OPLDrawer = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex>
      <Box
        h="100vh"
        w="68px"
        bg="white"
        borderRight="1px solid rgba(0,0,0,0.12)"
        shadow="0 0 10px 0 rgba(0, 0, 0, 0.2)"
        position="sticky"
        top={0}
        zIndex="overlay"
        justify="center"
      >
        <IconButton
          mt={4}
          ml={1}
          size="lg"
          icon="navicon"
          color="blue.500"
          variant="ghost"
          isRound
          onClick={onOpen}
        />
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          blockScrollOnMount={false}
        >
          <DrawerOverlay opacity={0} />
          <DrawerContent
            bgImage="linear-gradient(to bottom, #ffffff, #fbfbfb 60%, #f3f3f3)"
          >
            <DrawerHeader
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              pb={0}
            >
              <Link to="/">
                <OPLLogo height="29px" width="183px"/>
              </Link>
              <IconButton
                size="lg"
                icon="navicon"
                color="blue.500"
                variant="ghost"
                isRound
                onClick={onClose}
              />
            </DrawerHeader>

            <DrawerBody>
              <Stack>
                <TopListItems drawerOpen={isOpen} toggle={props.toggle} />
                <BottomListItems />
              </Stack>
            </DrawerBody>

            <DrawerFooter justifyContent="flex-start" px={0}>
              <Footer />
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
      <Box w="-webkit-fill-available" bg="white">{props.children}</Box>
    </Flex>
  )
};

export default OPLDrawer;
