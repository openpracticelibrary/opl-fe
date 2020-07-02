import React from "react";
import { navigate } from "@reach/router";
import ExploreStickies from "../../../assets/icons/explorestickies.png";
import LoginButton from "../../shared/Login/LoginButton";

import { Box } from '@material-ui/core';
import OplTypography from "../../shared/components/OplTypography";

const AllPracticesHero = () => (
  <Box
    display="flex"
    flexDirection="row"
    justifyContent="center"
    alignItems="center"
  >
    <Box display="flex" flexDirection="column" width="30%" mx={2}>
      <OplTypography align="left" py={2} variant={"h3"} data-testid="herotext">
            Explore the library
      </OplTypography>
      <OplTypography align="left" variant={"h4"}>
            Check out the practices to learn about ways of working with your team.
      </OplTypography>
    </Box>
    <Box display="flex" flexDirection="column" width="40%">
      <img src={ExploreStickies} alt="Explore the library" height="auto" width="90%" />
    </Box>
    <Box position="absolute" top={0} right={0} p={3}>
      <LoginButton
        navigate={navigate}
        redirect="/practice"
      />
    </Box>
  </Box>
);

export default AllPracticesHero;
