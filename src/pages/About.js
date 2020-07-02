import React from 'react';
import { makeStyles } from '@material-ui/core/styles/index';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import Landing from "../components/About/Landing";
import HistoryValues from "../components/About/HistoryValues";
import ProductTeam from "../components/About/ProductTeam";
import ProcessModel from "../components/About/ProcessModel";
import FindMentor from "../components/About/FindMentor";
import Feedback from "../components/About/Feedback";

import FriendlyIcon from "../assets/icons/about-friendly.svg"
import InspiringIcon from "../assets/icons/about-inspiring.svg"
import TrustworthyIcon from "../assets/icons/about-trustworthy.svg"
import SlackLogo from "../assets/images/slack.png";
import { ArrowRightIcon, WebLinkIcon } from "../assets/icons";
import OPLProductTeamImage from "../assets/images/opl-product-team.png";

const useStyles = makeStyles((theme) => ({
  pageWrapper: {
    backgroundColor: theme.palette.common.true_white,
  },
  content: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(20, 2),
    width: "100%",
  },
  contentBox: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "1300px",
  },
}));

export default function About(props) {
  const classes = useStyles();

  return (
    <Grid
      data-testid="aboutPageGrid"
      container
      direction="column"
      className={classes.pageWrapper}
    >
      <Landing
        greeting="Learn about us"
        welcomeMessage="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        inquiry="Sound up your alley?"
        navigate={props.navigate}
      />
      <Grid
        container
        direction="row"
        className={classes.content}
        spacing={1}
      >
        <Box className={classes.contentBox}>
          <HistoryValues
            header="Our history & values"
            bodyPara1="[3 years and 7 months ago], Red Hat Open Innovation Labs saw an opportunity to document the open practices and principles they used during customer engagements, thus was born the Open Practice Library. That vision turned into a website of Devops and product development practices for running workshops and learning about the discovery and delivery of software."
            circleIcon1={FriendlyIcon}
            circleTitle1="Friendly"
            circleText1="We are here to be friends with and make connections for the Open Practice Library community."
            circleIcon2={TrustworthyIcon}
            circleTitle2="Trustworthy"
            circleText2="We strive to provide expertise and advice that will seamless fit into our users work life."
            circleIcon3={InspiringIcon}
            circleTitle3="Inspiring"
            circleText3="We will venture into the unknown and share experiments that will drive innovation of the library."
            bodyPara2="Fast forward through a few iterations and to the present day, the library has grown quite a bit in its strategy and approach to include the above core values. The product vision has evolved to adopt a value proposition with inclusion for a broader cross-functional community."
          />
          <ProductTeam 
            header="Our product team"
            bodyPara1="The 2020 pandemic led to forming a small Global remote product team for improving the library and delivering upon the growth strategy. This cross-functional group included product management, product design, and engineering to bring a balanced approach for continuous discovery and continuous delivery."
            bodyPara2="There was a focus on bringing the team together culturally and using various activities for getting to know one another. To align with a process that meets the most user needs the team based discovery practices on human-centered design methodologies with regular user feedback cycles for informing design and product decision making."
            bodyPara3="The development approach included pulling from [open source technology, middleware, test-driven, Agile, devops] because... liquam id diam maecenas ultricies mi eget mauris. Odio tempor orci dapibus ultrices in. Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Suspendisse faucibus interdum posuere lorem ipsum."
            teamImage={OPLProductTeamImage}
          />
          <ProcessModel 
            header="Our process model"
            bodyPara1="The 2020 pandemic led to forming a small Global remote product team for improving the library and delivering upon the growth strategy. This cross-functional group included product management, product design, and engineering to bring a balanced approach for continuous discovery and continuous delivery."
            bodyPara2="The Open Practice Library utilizes the sections of this process model for tagging and organizing practices within the application. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper eget duis at tellus. Enim facilisis gravida neque convallis a cras. Bibendum enim facilisis gravida neque. Vitae et leo duis ut diam. Senectus et netus et malesuada fames ac."
            videoUrl="https://www.youtube.com/embed/N4mBIZg8MnQ"
            mobiusLinkIcon={<WebLinkIcon/>}
            mobiusLinkText="Learn more on mobiusloop.com"
            mobiusLinkRef="https://mobiusloop.com/"
          />
          <FindMentor
            header="Find a mentor & more"
            bodyPara="We are dedicated to our core values and seek to connect directly with the Open Practice Library community. We love engaging in conversation about the practices and are looking to develop a mentorship program, formulate a beta group, and are always recruiting users for testing needs."
            logo={SlackLogo}
            linkIcon={<WebLinkIcon/>}
            linkText="Join the conversation"
            linkTarget="https://openpracticelibrary.slack.com/"
          />
          <Feedback  
            header="Please give us feedback"
            subheader="We are human-centered at our core and rely on user feedback for product iterations."
            buttonText="Share your thoughts"
            buttonIcon={<ArrowRightIcon/>}
            buttonTarget="https://forms.gle/nXCvPEkjx6VdF6Px6"
          />
        </Box>
      </Grid>
    </Grid>
  );
};
