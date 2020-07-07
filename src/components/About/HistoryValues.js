import React from 'react';
import { 
  Box,
  Grid,
  Typography
} from '@material-ui/core';
import FriendlyIcon from "../../assets/icons/about-friendly.svg"
import InspiringIcon from "../../assets/icons/about-inspiring.svg"
import TrustworthyIcon from "../../assets/icons/about-trustworthy.svg"
import TextCircle from './TextCircle';

const HistoryValues = () => (
  <Box
    my={4}
  >
    <Typography
      variant={"h1"}
      data-testid="historyValuesHeader"
      gutterBottom
    >
      Our history & values
    </Typography>
    <Typography
      variant={"body1"}
      gutterBottom
    >
      [3 years and 7 months ago], Red Hat Open Innovation Labs saw an opportunity to document the open practices and principles they used during customer engagements, thus was born the Open Practice Library. That vision turned into a website of DevOps and product development practices for running workshops and learning about the discovery and delivery of software."
    </Typography>
    <Box
      my={4}
    >
      <Grid
        container
        justify="center"
        spacing={2}
      >
        <Grid
          item
        >
          <TextCircle
            icon={FriendlyIcon}
            title="Friendly"
            text="We are here to be friends with and make connections for the Open Practice Library community."
          />
        </Grid>
        <Grid
          item
        >
          <TextCircle
            icon={TrustworthyIcon}
            title="Trustworthy"
            text="We strive to provide expertise and advice that will seamless fit into our users work life."
          />
        </Grid>
        <Grid
          item
        >       
          <TextCircle
            icon={InspiringIcon}
            title="Inspiring"
            text="We will venture into the unknown and share experiments that will drive innovation of the library."
          />
        </Grid>
      </Grid>
    </Box>
    <Typography variant={"body1"}>
      Fast forward through a few iterations and to the present day, the library has grown quite a bit in its strategy and approach to include the above core values. The product vision has evolved to adopt a value proposition with inclusion for a broader cross-functional community.
    </Typography>
  </Box>
);

export default HistoryValues;
