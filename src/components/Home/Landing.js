import React from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { OPLLogo } from "../../assets/icons";
import LoginButton from "../shared/Login/LoginButton";
import GrayDiagonals from "../../assets/icons/graylines.svg";
import HomeStickies from "../../assets/images/WhiteBoarding.png";

import { Box } from '@material-ui/core';

import OplTypography from "../shared/components/OplTypography";
import OplIconButton from "../shared/components/OplIconButton";

const useStyles = makeStyles((theme) => ({
  titleBox: {
    backgroundImage: `linear-gradient(180.18deg, #F3F3F3 0%, #FFFFFF 13.64%, #FFFFFF 33.94%, rgba(255,255,255,0.94) 69.58%, rgba(255,255,255,0.62) 100%), url(${GrayDiagonals})`,
  },
}));

const Landing = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  const handleClick = () => {
    props.communityRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      className={classes.titleBox}
      px={8}
    >
      <Box position="absolute" top={0} left={0} p={3} mt={-12}>
        <OPLLogo height="250px" width="383px" />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        width={{ xs: "100%", md: "25%"}}
        justifyContent="flex-start"
      >
        <OplTypography variant={"h1"} pb={8} data-testid="hellotext">
          {props.greeting}
        </OplTypography>
        <OplTypography variant={"h5"} pb={8} data-testid="welcomeText">
          {props.welcomeMessage}
        </OplTypography>
        <OplTypography variant={"h5"} data-testid="inquiryText">
          {props.inquiry}
        </OplTypography>
        <OplTypography variant={"button"} component="p">
          <b>Tell me more</b>
          <OplIconButton
            m={2}
            iconColor="white"
            hoverColor={theme.palette.secondary.main}
            bgcolor={theme.palette.primary.main}
            onClick={handleClick}
            data-testid="tellMeMoreButton"
          >
            <ArrowDownwardIcon />
          </OplIconButton>
        </OplTypography>
      </Box>
      <img src={HomeStickies} alt="Welcome to OPL" height="auto" width="50%" />
      <Box position="absolute" top={0} right={0} p={3}>
        <LoginButton
          navigate={props.navigate}
          redirect="/practice"
        />
      </Box>
    </Box>
  )
};

export default Landing;
