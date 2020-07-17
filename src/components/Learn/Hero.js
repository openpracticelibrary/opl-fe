import React from "react";
import { ArrowDownward, ArrowForward } from "@material-ui/icons";
import { Box, Button, Typography } from "@material-ui/core";

const Hero = ({ navigate, scrollTo }) => {
  const scrollDown = () => {
    scrollTo.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <>
      <Box position="absolute" top="2rem" left="2rem">
        <Typography variant="h6" color="primary">
          Open Practice Library
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        bgcolor="grey.300"
        flexWrap="wrap"
      >
        <Box mx={8} textAlign="center" width="100%">
          <Typography variant="h2" gutterBottom>
            Deliver real business value quickly and move past the buzzwords.
          </Typography>
          <Button
            size="large"
            variant="contained"
            color="primary"
            endIcon={<ArrowForward />}
            onClick={() => {
              navigate("/");
            }}
          >
            Jump In
          </Button>
        </Box>

        <Box mx="auto" position="absolute" bottom="2rem">
          <Button
            size="large"
            variant="outlined"
            color="primary"
            endIcon={<ArrowDownward />}
            onClick={scrollDown}
          >
            Learn
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
