import React from 'react';
import {
  Box,
  Typography
} from "@material-ui/core";
import OPLProductTeamImage from "../../assets/images/opl-product-team.png";

const ProductTeam = () => (
  <Box
    data-testid="pageGrid"
    width="100%"
    my={8}
  >
    <Typography
      gutterBottom
      variant={"h1"}
    >
      Our product team
    </Typography>
    <Typography
      gutterBottom
      variant={"body1"}
    >
      The 2020 pandemic led to forming a small Global remote product team for improving the library and delivering upon the growth strategy. This cross-functional group included product management, product design, and engineering to bring a balanced approach for continuous discovery and continuous delivery.
    </Typography>
    <Box
      my={4}
    >
      <img src={OPLProductTeamImage}
        alt="OPL Product Team"
        height="auto"
        width="100%"
      />  
    </Box>
    <Typography
      variant={"body1"}
      gutterBottom
    >
      There was a focus on bringing the team together culturally and using various activities for getting to know one another. To align with a process that meets the most user needs the team based discovery practices on human-centered design methodologies with regular user feedback cycles for informing design and product decision making.
    </Typography> 
    <Typography
      variant={"body1"}
      gutterBottom
    >
      The development approach included pulling from [open source technology, middleware, test-driven, Agile, devops.
    </Typography>
  </Box>
);


export default ProductTeam;
