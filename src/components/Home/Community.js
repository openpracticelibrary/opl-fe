import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { navigate } from "@reach/router";

import PracticeCount from "./PracticeCount";
import ContributorCount from "./ContributorCount";
import Collaborators from "./Collaborators";
import RedHatLogo from "../../assets/images/logo-red-hat-hat-color-rgb.png";
import NounProjectLogo from "../../assets/images/noun-project.png";
import MobiusLogo from "../../assets/images/mobius-small.png";
import CCHeartLogo from "../../assets/images/ccheart-black.png";

import { Box, Grid, Typography } from '@material-ui/core';
import OplButton from "../shared/components/OplButton";

const collaborators = [
  {
    name: "Red Hat",
    logo: RedHatLogo,
    text: "Home of our product team and our largest Open Source Contributor."
  },
  {
    name: "The Noun Project",
    logo: NounProjectLogo,
    text: "The community driven icon library we love so much and use for UI design."
  },
  {
    name: "Mobius Loop",
    logo: MobiusLogo,
    text: "Our process model and partner in defining product lifecycle practices."
  },
  {
    name: "Creative Commons",
    logo: CCHeartLogo,
    text: "Under this license, our content is as open source as our application software."
  }
];

const StatBox = (props) => (
  <Box
    display="flex"
    flexDirection="column"
    width={330}
    height={340}
    p={5}
    mt={2}
    mb={12}
    ml={2}
    borderRadius="50%"
    borderColor="secondary.main"
    border={1}
    justifyContent="center"
  >
    {props.children}
  </Box>
);

const Community = (props) => (
  <>
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      width="90%"
      py={12}
      data-testid="communityHeader"
    >
      <Typography variant={"h3"} ref={props.communityRef}>Community driven</Typography>
      <OplButton onClick={() => navigate("#")}>
        About us{"  "}<ArrowForwardIcon color="primary" />
      </OplButton>
    </Box>
    <Grid container item xs={12} justify="center">
      <Grid item xs={12}>
        <Typography variant={"h4"} align="center">We have...</Typography>
      </Grid>
      <StatBox>
        <PracticeCount />
        <Typography variant={"h6"} align="center">Product Lifecycle <br/> Practices</Typography>
      </StatBox>
      <StatBox>
        <ContributorCount />
        <Typography variant={"h6"} align="center">Creative Commons <br/> Contributors</Typography>
      </StatBox>
      <Grid item xs={12}>
        <Typography variant={"h4"} align="center">We have collaborations with...</Typography>
        <Grid container direction="row" justify="center" alignItems="center">
          {collaborators.map(({ logo, name, text }) => (
            <Collaborators key={name} logo={logo} name={name} text={text} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  </>
);

export default Community;
