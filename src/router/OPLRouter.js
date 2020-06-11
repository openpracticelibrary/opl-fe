import React from "react";
import { Router } from "@reach/router";
import { useQuery } from "@apollo/react-hooks";

import LoginContext from '../components/shared/Login/LoginContext';
import { HomePage, PracticesPage, PracticePageContentPage } from "../pages";
import { currentUserQuery } from "../graphql";

const OPLRouter = (props) => {
  const { data: loggedIn } = useQuery(currentUserQuery);

  return (
    <LoginContext.Provider value={loggedIn}>
      <Router>
        <HomePage path="/" />
        <PracticesPage path="/practice"/>
        <PracticePageContentPage path="/practice/:name"/>
      </Router>
    </LoginContext.Provider>
  );
};

export default OPLRouter;

