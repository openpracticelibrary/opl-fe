import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { navigate } from "@reach/router";
import { useQuery } from "@apollo/react-hooks";

import ComponentLoading from "../shared/QueryState/ComponentLoading";
import ComponentQueryError from "../shared/QueryState/ComponentQueryError";
import { GET_CURATED_PRACTICES } from "../../graphql";
import PracticeCardGrid from "../shared/PracticeCards/PracticeCardGrid";

import { Typography, Box } from "@material-ui/core";
import OplButton from "../shared/components/OplButton";

const CuratedPractices = props => {
  const { loading, error, data } = useQuery(GET_CURATED_PRACTICES, {
    variables: { sort: "upvotes:desc" }
  });
  if (error) return <ComponentQueryError err={error} />;

  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        width="90%"
        pb={12}
        data-testid="curatedList"
      >
        <Typography variant={"h3"}>Popular Practices</Typography>
        <OplButton
          data-testid="seeEverythingButton"
          onClick={() => navigate("/")}
        >
          See Everything{"  "}
          <ArrowForwardIcon color="primary" />
        </OplButton>
      </Box>
      <Box maxWidth="1440px">
        {loading ? (
          <ComponentLoading />
        ) : (
          <PracticeCardGrid practices={data.practices} />
        )}
      </Box>
    </>
  );
};

export default CuratedPractices;
