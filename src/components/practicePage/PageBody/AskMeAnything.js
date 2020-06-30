import React from "react";
import {
  PseudoBox,
  Heading,
  Text,
} from "@chakra-ui/core";

import QuestionsAndAnswers from "./QuestionsAndAnswers";
const AskMeAnything = props => (
  <>
    <Heading fontSize="section" ref={props.amaRef} py={4}>
      Ask me anything
    </Heading>
    <Text fontSize="md" color="grey.500">
      Please send a question to the community about anything you may need for using this practice.
    </Text>
    <PseudoBox
      id="ama"
      as="button"
      w="100%"
      h={70}
      my={4}
      border="1px"
      borderColor="grey.500"
      rounded={6.5}
      alignItems="center"
      display="flex"
    >
      <Heading
        pl={4}
        fontSize="xl"
        fontWeight="500"
        color="blue.500"
      >
        Do you have a question?
      </Heading>
    </PseudoBox>
    <QuestionsAndAnswers ama={props.ama}/>
  </>
);

export default AskMeAnything;
