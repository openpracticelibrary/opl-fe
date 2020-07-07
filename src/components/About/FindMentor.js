import React from 'react';
import { 
  Box,
  Grid,
  Typography
} from "@material-ui/core";
import Link from "@material-ui/core/Link";
import SlackLogo from "../../assets/images/slack.png";
import { WebLinkIcon } from "../../assets/icons";

const FindMentor = () => (
  <Box
    my={4}
    data-testid="pageGrid"
  >
    <Typography
      variant={"h1"}
      data-testid="findMentor"
    >
      Find a mentor & more
    </Typography>
    <Grid
      container
      alignItems="center"
      spacing={4}
    >
      <Grid
        item
        xs={7}
      >  
        <Typography variant={"body1"}>
          We are dedicated to our core values and seek to connect directly with the Open Practice Library community. We love engaging in conversation about the practices and are looking to develop a mentorship program, formulate a beta group, and are always recruiting users for testing needs.
        </Typography>
      </Grid>
      <Grid
        item
        xs={5}
      >
        <Link href="https://openpracticelibrary.slack.com/">
          <img src={SlackLogo} alt="Logo" width="100%"/>
        </Link>
      </Grid>

    </Grid>
    <Link href="https://openpracticelibrary.slack.com/">
      <WebLinkIcon/> Join the conversation
    </Link>
  </Box>
);

export default FindMentor;
