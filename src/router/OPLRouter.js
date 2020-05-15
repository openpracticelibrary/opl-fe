import React from "react";
import { Router } from "@reach/router";
import { Home, Practices, PracticePageContent } from "../pages";

const OPLRouter = (props) => (
  <Router>
    <Home path="/" />
    <Practices path="/practice" />
    <PracticePageContent path="/practice/:name" />
  </Router>
);

export default OPLRouter;

