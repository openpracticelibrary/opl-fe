import React from "react";
import { Box, Typography } from "@material-ui/core";

const Hero = props => (
  <Box
    display="flex"
    alignItems="center"
    bgcolor="primary.main"
    height="15vh"
    width={1}
  >
    <Box px={6} color="common.white">
      <Typography
        component="h1"
        variant="h3"
        color="inherit"
        data-testid="hellotext"
      >
        About Us
      </Typography>
    </Box>
  </Box>
);

export default Hero;
