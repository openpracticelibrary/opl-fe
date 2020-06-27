import React from "react";
import { navigate } from "@reach/router";
import { useQuery } from "@apollo/react-hooks";
import {
  Flex,
  Heading,
  Button,
  Icon,
} from "@chakra-ui/core";

import ComponentLoading from "../shared/QueryState/ComponentLoading";
import ComponentQueryError from "../shared/QueryState/ComponentQueryError";
import { GET_CURATED_PRACTICES } from "../../graphql";
import PracticeCardGrid from "../shared/PracticeCards/PracticeCardGrid";

const CuratedPractices = (props) => {
  const { loading, error, data } = useQuery(GET_CURATED_PRACTICES, {
    variables: { sort: "upvotes:desc" }
  });
  if (error) return <ComponentQueryError err={error} />;

  return (
    <>
      <Flex justify="space-between" py={10} data-testid="curatedList">
        <Heading>Popular Practices</Heading>
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
          onClick={() => navigate("/practice")}
        >
          See Everything <Icon name="arrow-forward" fontSize="xl" color="blue.500" ml={2} />
        </Button>
      </Flex>
      <Flex justify="space-around">
        { loading ? <ComponentLoading /> : <PracticeCardGrid practices={data.practices} /> }
      </Flex>
    </>
  );
};

export default CuratedPractices;
