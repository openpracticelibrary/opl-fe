import React from 'react';
import {
  Box,
  Typography
} from '@material-ui/core';
import GrayDiagonals from "../../assets/icons/graylines.svg";
import ExploreStickies from "../../assets/icons/explorestickies.png";

const Hero = (props) => (
  <Box
    display="flex"
    alignContent="center"
    alignItems="center"
    justifyContent="space-around"
    style={{
      backgroundImage: `linear-gradient(180.18deg, #F3F3F3 0%, #FFFFFF 13.64%, #FFFFFF 43.94%, rgba(255,255,255,0.94) 79.58%, rgba(255,255,255,0.62) 100%), url(${GrayDiagonals})`
    }}
    height="28rem"
    width={1}
  >
    <Box>
      <Typography
        component="h1"
        variant="h3"
        gutterBottom
        data-testid="hellotext"
      >
        {props.greeting}
      </Typography>
      <Typography
        variant={"h5"}
        gutterBottom
        data-testid="welcomeText"
      >
        {props.welcomeMessage}
      </Typography>
    </Box>
    <Box>
      <img src={ExploreStickies} alt="About Us" width="100%" />
    </Box>
  </Box>
);

export default Hero;
