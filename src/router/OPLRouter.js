import React from "react";
import { Router, Location } from "@reach/router";
import { useQuery } from "@apollo/react-hooks";

import LoginContext from "../components/shared/Login/LoginContext";
import { LearnPage, AllPracticesPage, PracticePage, AboutPage } from "../pages";
import { currentUserQuery } from "../graphql";

/* Somewhat hacky workaround the scroll position problem
 * https://stackoverflow.com/questions/53058110/stop-reach-router-scrolling-down-the-page-after-navigating-to-new-page
 */
class OnRouteChangeWorker extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.props.action();
    }
  }

  render() {
    return null;
  }
}

const OnRouteChange = ({ action }) => (
  <Location>
    {({ location }) => (
      <OnRouteChangeWorker location={location} action={action} />
    )}
  </Location>
);

const OPLRouter = props => {
  const { data: loggedIn } = useQuery(currentUserQuery);

  return (
    <LoginContext.Provider value={loggedIn}>
      <Router>
        <AllPracticesPage path="/" />
        <PracticePage path="/practice/:name" />
        <LearnPage path="/learn" />
        <AboutPage path="/about" />
      </Router>
      <OnRouteChange action={() => window.scrollTo(0, 0)} />
    </LoginContext.Provider>
  );
};

export default OPLRouter;
