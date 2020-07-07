import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import OplTypography from "../shared/components/OplTypography";

import ComponentLoading from "../shared/QueryState/ComponentLoading";
import ComponentQueryError from "../shared/QueryState/ComponentQueryError";
import { GET_PRACTICE_COUNT } from "../../graphql";

const PracticeCount = () => {
  const { loading, error, data } = useQuery(GET_PRACTICE_COUNT);
  if (loading) return <ComponentLoading />;
  if (error) return <ComponentQueryError err={error} />;

  return (
    <OplTypography
      variant="h1"
      fontSize={120}
      color="primary"
      align="center"
      data-testid="practiceNum"
    >
      {data.practicesConnection.aggregate.totalCount}
    </OplTypography>
  )
};

export default PracticeCount;
