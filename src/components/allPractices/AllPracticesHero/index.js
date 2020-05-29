import React from "react";
import Typography from "@material-ui/core/Typography";
import { Emojione } from "react-emoji-render";

const AllPracticesHero = () => (
  <Typography align="center" variant={"h1"}>
    <Emojione data-testid="herotext" text="Explore the library 📚" />
  </Typography>
);

export default AllPracticesHero;
