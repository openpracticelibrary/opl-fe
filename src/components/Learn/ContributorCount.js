import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import OplTypography from "../shared/components/OplTypography";
import ComponentLoading from "../shared/QueryState/ComponentLoading";
import ComponentQueryError from "../shared/QueryState/ComponentQueryError";
import { GET_CONTRIBUTORS } from "../../graphql";

const ContributorCount = (props) => {
  const { loading, error, data } = useQuery(GET_CONTRIBUTORS);
  if (loading) return <ComponentLoading />;
  if (error) return  <ComponentQueryError err={error} />;

  return (
    <OplTypography
      variant="h1"
      fontSize={120}
      color="primary"
      align="center"
      data-testid="contributorNum"
    >
      {data.usersConnection.aggregate.totalCount}
    </OplTypography>
  )
};

export default ContributorCount;
