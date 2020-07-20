import React from "react";
import { CircularProgress } from "@material-ui/core";
import { useQuery } from "@apollo/react-hooks";
import ComponentQueryError from "../shared/QueryState/ComponentQueryError";
import { GET_CONTRIBUTORS } from "../../graphql";

const ContributorCount = ({ color }) => {
  const { loading, error, data } = useQuery(GET_CONTRIBUTORS);
  if (loading) return <CircularProgress color={color} size="10rem" />;
  if (error) return <ComponentQueryError err={error} />;

  return (
    <div data-testid="contributorNum">
      {data.usersConnection.aggregate.totalCount}
    </div>
  );
};

export default ContributorCount;
