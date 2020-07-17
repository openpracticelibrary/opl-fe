import React from "react";
import { Box, Link, Typography } from "@material-ui/core";
import { WebLinkIcon } from "../../assets/icons";

const ProcessModel = () => {
  return (
    <Box data-testid="pageGrid" my={4}>
      <Typography gutterBottom variant="h4" data-testid="processModel">
        Our process model
      </Typography>
      <Box my={2}>
        <iframe
          title="Open Practice Library"
          src="https://www.youtube.com/embed/N4mBIZg8MnQ"
          width="100%"
          height="600rem"
          allowFullScreen
        ></iframe>
      </Box>
      <Box my={2}>
        <Link href="https://mobiusloop.com/">
          <WebLinkIcon /> Learn more on mobiusloop.com
        </Link>
      </Box>
    </Box>
  );
};

export default ProcessModel;
