import React from "react";
import {
  Stack,
  Icon,
  Heading,
  Text,
} from "@chakra-ui/core";

const QuestionsAndAnswers = props => (
  <Stack spacing={4} mt={8}>
    {props.ama.map((qAndA, i) => (
      <React.Fragment key={i}>
        <Text
          fontFamily="heading"
          fontSize="sm"
          textTransform="uppercase"
          fontWeight="600"
        >
            Asked by Nova Facilitator | May 28, 2020
        </Text>
        <Stack isInline spacing={4}>
          <Icon name="questions" size="1.6875rem" color="blue.500" />
          <Stack ml={4}>
            <Heading fontSize="lg">
              {qAndA.question}
            </Heading>
            <br/>
            <Text
              fontFamily="heading"
              fontSize="sm"
              textTransform="uppercase"
              fontWeight="600"
            >
              Reply by OPL Team | June 1, 2020
            </Text>
            <Text
              fontSize="md"
              fontWeight="400"
              color="grey.500"
            >
              {qAndA.answers.map((a) => a.answer)}
            </Text>
          </Stack>
        </Stack>
      </React.Fragment>
    ))}
  </Stack>
);

export default QuestionsAndAnswers;
