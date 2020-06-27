import React from 'react';
import { useQuery } from "@apollo/react-hooks";

import ComponentQueryError from "../shared/QueryState/ComponentQueryError";
import { GET_CONTRIBUTORS } from "../../graphql";

import StatBox from "./StatBox";

const PracticeCount = () => {
  const { loading, error, data } = useQuery(GET_CONTRIBUTORS);
  if (error) return  <ComponentQueryError err={error} />;

  return (
    <StatBox
      data={data && data.usersConnection.aggregate.totalCount}
      loading={loading}
      title="Creative Commons"
      secondLine="Contributors"
    />
  )
};

export default PracticeCount;
