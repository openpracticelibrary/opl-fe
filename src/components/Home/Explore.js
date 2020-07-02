import React from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from "@material-ui/core";
import OplButton from "../shared/components/OplButton";
import { navigate } from "@reach/router";
import GrayRain from "../../assets/icons/rain.svg";
import ClosingStickies from "../../assets/icons/closingstickies.png";

const useStyles = makeStyles((theme) => ({
  explore: {
    backgroundImage: `linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.95) 71.03%, rgba(255,255,255,0.85) 100%), url(${GrayRain})`,
  },
}));

const Explore = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      py={8}
      className={classes.explore}
    >
      <Box display="flex" justifyContent="flex-end" width={{ sm: "100%", md: "50%" }}>
        <img src={ClosingStickies} alt="Closing Message" height="auto" width="60%" />
      </Box>
      <Box display="flex" justifyContent="center" width={{ sm: "100%", md: "50%" }}>
        <Box display="flex" flexDirection="column" alignContent="flex-start" width="60%">
          <Typography variant={"h5"} align="left"data-testid="exploreMsg">
            {props.exploreMessage}
          </Typography>
          <Box pt={3}>
            <OplButton
              variant="contained"
              bg={theme.palette.primary.light}
              data-testid="exploreLibraryButton"
              disableElevation
              onClick={() => navigate("/practice")}
            >
             Explore the library
            </OplButton>
          </Box>
        </Box>
      </Box>
    </Box>
  )
};

export default Explore;
