import React from "react";
import { Router } from "@reach/router";
import { HomePage, PracticesPage, PracticePageContentPage } from "../pages";

const OPLRouter = (props) => (
  <Router>
    <HomePage path="/" />
    <PracticesPage path="/practice"/>
    <PracticePageContentPage path="/practice/:name"/>
  </Router>
);

export default OPLRouter;

