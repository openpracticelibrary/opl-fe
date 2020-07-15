import React from "react";
import { useTheme } from "@material-ui/core/styles";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

import LoginButton from "../shared/Login/LoginButton";
import GrayDiagonals from "../../assets/images/graylines.svg";
import HomeStickies from "../../assets/images/WhiteBoarding.png";
import { Box } from "@material-ui/core";
import OplBox from "../shared/components/OplBox";
import OplTypography from "../shared/components/OplTypography";
import OplIconButton from "../shared/components/OplIconButton";

const Landing = props => {
  const theme = useTheme();

  const handleClick = () => {
    props.communityRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <OplBox
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bg={`linear-gradient(180.18deg, #F3F3F3 0%, #FFFFFF 13.64%, #FFFFFF 33.94%, rgba(255,255,255,0.94) 69.58%, rgba(255,255,255,0.62) 100%), url(${GrayDiagonals})`}
      px={8}
    >
      <Box position="absolute" top={2} left={2} p={3}>
        <OplTypography variant="h6" color="primary">
          Open Practice Library
        </OplTypography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        width={{ xs: "100%", md: "25%" }}
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
      <LoginButton navigate={props.navigate} redirect="/practice" />
    </OplBox>
  );
};

export default Landing;
