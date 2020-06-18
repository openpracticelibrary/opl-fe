import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_PRACTICES } from "../graphql";
import PracticeCardGrid from "../components/shared/PracticeCards/PracticeCardGrid";
import Practices from "../components/allPractices";
import ComponentLoading from "../components/shared/QueryState/ComponentLoading";
import QueryError from "../components/shared/QueryState/QueryError";

const PracticesWithData = (props) => {
  const { loading, error, data, fetchMore } = useQuery(GET_PRACTICES,
    {
      variables: {
        start: 0,
        limit: 8
      },
      fetchPolicy: "cache-and-network"
    }
  );

  if (error) return <QueryError err={error} />;

  return (
    <Practices {...props}>
      { loading && !data ? <ComponentLoading /> :
        <PracticeCardGrid
          loading={loading}
          practices={data.practices}
          onLoadMore={(page) =>
            fetchMore({
              variables: {
                start: page,
              },
              updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prev;
                return Object.assign({}, prev, {
                  practices: [...prev.practices, ...fetchMoreResult.practices]
                });
              }
            })}
        />}
    </Practices>
  );
};

export default PracticesWithData;
