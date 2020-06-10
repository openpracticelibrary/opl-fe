import React from "react";
import MediaGallery from "./MediaGallery";
import AskMeAnything from "./AskMeAnything";
import WhatIs from "./WhatIs";
import WhyDo from "./WhyDo";
import HowDo from "./HowDo";
import ResourcesWeLove from "./ResourcesWeLove";
import FullText from "./FullText";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles/index";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(6, 0),
  },
}));

export default function PageBody(props) {
  const classes = useStyles();

  const {
    title,
    body: { whatIs, whyDo, howTo, fullText },
    mediaGallery,
    resources,
    ama,
    whatIsRef,
    mediaRef,
    whyDoRef,
    howToRef,
    resourceRef,
    amaRef,
  } = props;

  if (whatIs && whyDo && howTo) {
    return (
      <>
        <Box className={classes.root}>
          <WhatIs
            title={title}
            source={whatIs}
            whatIsRef={whatIsRef}
            editing={props.editing}
          />
          <WhyDo
            title={title}
            source={whyDo}
            whyDoRef={whyDoRef}
            editing={props.editing}
          />
          <HowDo
            title={title}
            source={howTo}
            howToRef={howToRef}
            editing={props.editing}
          />
          <MediaGallery
            mediaGallery={mediaGallery}
            mediaRef={mediaRef}
          />
          <ResourcesWeLove links={resources} resourceRef={resourceRef} />
          <AskMeAnything ama={ama} amaRef={amaRef} />
        </Box>
      </>
    );
  } else {
    return (
      <Box className={classes.root}>
        <FullText source={fullText} />
      </Box>
    );
  }
}
