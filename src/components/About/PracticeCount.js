import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { CircularProgress } from "@material-ui/core";
import ComponentQueryError from "../shared/QueryState/ComponentQueryError";
import { GET_PRACTICE_COUNT } from "../../graphql";

const PracticeCount = ({ color }) => {
  const { loading, error, data } = useQuery(GET_PRACTICE_COUNT);
  if (loading) return <CircularProgress size="10rem" color={color} />;
  if (error) return <ComponentQueryError err={error} />;
  return (
    <div data-testid="practiceNum">
      {data.practicesConnection.aggregate.totalCount}
    </div>
  );
};

export default PracticeCount;
