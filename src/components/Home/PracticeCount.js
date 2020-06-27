import React from 'react';
import { useQuery } from "@apollo/react-hooks";

import ComponentQueryError from "../shared/QueryState/ComponentQueryError";
import { GET_PRACTICE_COUNT } from "../../graphql";

import StatBox from "./StatBox";

const PracticeCount = () => {
  const { loading, error, data } = useQuery(GET_PRACTICE_COUNT);
  if (error) return <ComponentQueryError err={error} />;

  return (
    <StatBox
      data={data && data.practicesConnection.aggregate.totalCount}
      loading={loading}
      title="Product Lifecycle"
      secondLine="Practices"
    />
  )
};

export default PracticeCount;
