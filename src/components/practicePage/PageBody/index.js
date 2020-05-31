import React from "react";
import MediaGallery from "./MediaGallery";
import AskMeAnything from "./AskMeAnything";
import WhatIs from "./WhatIs";
import WhyDo from "./WhyDo";
import HowDo from "./HowDo";
import ResourcesWeLove from "./ResourcesWeLove";
import BodyFooter from "../../shared/BodyFooter";
import Box from '@material-ui/core/Box';
import {makeStyles} from "@material-ui/core/styles/index";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(7),
  },
}));

export default function PageBody(props) {
  const classes = useStyles();

  const {
    title,
    body: {whatIs, whyDo, howTo},
    mediaGallery,
    resources,
    ama,
  } = props;

  return (
    <>
      <Box className={classes.root}>
        <WhatIs title={title} source={whatIs}/>
        <MediaGallery mediaGallery={mediaGallery}/>
        <WhyDo title={title} source={whyDo}/>
        <HowDo title={title} source={howTo}/>
        <ResourcesWeLove links={resources}/>
        <AskMeAnything ama={ama}/>
        <BodyFooter/>
      </Box>
    </>
  );
}
