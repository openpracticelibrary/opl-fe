import React from "react";
import Box from "@material-ui/core/Box";
import Hero from "../components/About/Hero";
import HistoryValues from "../components/About/HistoryValues";
import ProductTeam from "../components/About/ProductTeam";
import Feedback from "../components/About/Feedback";
import Contributors from "../components/About/Contributors";

export default function About(props) {
  return (
    <Box data-testid="aboutPageGrid" display="flex" flexDirection="column">
      <Hero />
      <Box maxWidth="70rem" alignSelf="center" mx={6}>
        <HistoryValues />
        <ProductTeam />
        <Contributors />
      </Box>
      <Feedback />
    </Box>
  );
}
