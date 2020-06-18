import React, { useContext } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";

import LoginContext from "../components/shared/Login/LoginContext";
import { GET_PRACTICE_PAGE, UPDATE_PRACTICE } from "../graphql";
import Loading from "../components/shared/QueryState/Loading.js";
import QueryError from "../components/shared/QueryState/QueryError";
import PracticePage from "../components/practicePage";

const PracticePageWithData = (props) => {
  // Apply context
  const loggedIn = useContext(LoginContext);
  // GraphQL
  const [updatePractice] = useMutation(UPDATE_PRACTICE);
  const { name: slug } = props;
  const { loading, error, data } = useQuery(GET_PRACTICE_PAGE, {
    variables: { slug },
  });

  if (loading) return <Loading />;
  if (error) return <QueryError err={error} />;

  return (
    <PracticePage
      data={data.practices[0]}
      updatePractice={updatePractice}
      loggedIn={loggedIn}
      {...props}
    />
  );
};


export default PracticePageWithData;
