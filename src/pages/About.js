import React from 'react';
import Box from "@material-ui/core/Box";
import Hero from "../components/About/Hero";
import HistoryValues from "../components/About/HistoryValues";
import ProductTeam from "../components/About/ProductTeam";
import ProcessModel from "../components/About/ProcessModel";
import FindMentor from "../components/About/FindMentor";
import Feedback from "../components/About/Feedback";

export default function About(props) {
  return (
    <Box
      data-testid="aboutPageGrid"
      display="flex"
      flexDirection="column"
    >
      <Hero
        greeting="Learn about us"
        inquiry="Sound up your alley?"
        navigate={props.navigate}
      />
      <Box
        maxWidth="80rem"
        alignSelf="center"
        mx={6}
      >
        <HistoryValues />
        <ProductTeam />
        <ProcessModel />
        <FindMentor />
        <Feedback />
      </Box>
    </Box>
  );
};
