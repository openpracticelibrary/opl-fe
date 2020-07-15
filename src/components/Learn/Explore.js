import React from "react";
import { Button, Box, Typography } from "@material-ui/core";
import { navigate } from "@reach/router";
import GrayRain from "../../assets/images/rain.svg";
import ClosingStickies from "../../assets/images/closingstickies.png";

const Explore = props => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      py={8}
      style={{
        backgroundImage: `linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.95) 71.03%, rgba(255,255,255,0.85) 100%), url(${GrayRain})`
      }}
    >
      <Box
        display="flex"
        justifyContent="flex-end"
        width={{ sm: "100%", md: "50%" }}
      >
        <img
          src={ClosingStickies}
          alt="Closing Message"
          height="auto"
          width="60%"
        />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        width={{ sm: "100%", md: "50%" }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignContent="flex-start"
          width="60%"
        >
          <Typography variant={"h5"} align="left" data-testid="exploreMsg">
            {props.exploreMessage}
          </Typography>
          <Box pt={3}>
            <Button
              variant="contained"
              color="primary"
              data-testid="exploreLibraryButton"
              disableElevation
              onClick={() => navigate("/")}
            >
              Explore the Library
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Explore;
