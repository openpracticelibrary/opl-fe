import React from 'react';
import { Flex } from "@chakra-ui/core";

import Landing from "../components/Home/Landing";
import Community from "../components/Home/Community";
import CuratedPractices from "../components/Home/CuratedPractices";
import Explore from "../components/Home/Explore";

export default function Home(props) {
  const communityRef = React.useRef(null);

  return (
    <>
      <Landing
        greeting="Hiya!"
        welcomeMessage="Welcome to this open source library of best practices in digital product development."
        inquiry="Sound up your alley?"
        navigate={props.navigate}
        communityRef={communityRef}
      />
      <Flex justify="center" data-testid="pageGrid">
        <Flex direction="column" maxW={1300}>
          <Community communityRef={communityRef} />
          <CuratedPractices />
        </Flex>
      </Flex>
      <Explore
        exploreMessage="Learn something new from your peers and experiment with best practices!"
      />
    </>
  )
};

