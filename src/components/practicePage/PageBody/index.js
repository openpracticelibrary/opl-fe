import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import MediaGallery from "./MediaGallery";
import AskMeAnything from "./AskMeAnything";
import WhatIs from "./WhatIs";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import WhyDo from "./WhyDo";
import HowDo from "./HowDo";
import ResourcesWeLove from "./ResourcesWeLove";
import BodyFooter from "../../shared/BodyFooter";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  row: {
    display: "flex",
    padding: theme.spacing(1),
    margin: theme.spacing(1),
  },
}));

export default function PageBody(props) {
  const classes = useStyles();

  const {
    title,
    body: { whatIs, whyDo, howTo },
    mediaGallery,
    resources,
    ama,
  } = props;

  return (
    <>
      <CssBaseline />
      <Container className={classes.root}>
        <main className={classes.content}>
          <WhatIs title={title} source={whatIs} />
          <MediaGallery mediaGallery={mediaGallery} />
          <WhyDo title={title} source={whyDo} />
          <HowDo title={title} source={howTo} />
          <ResourcesWeLove links={resources} />
          <AskMeAnything ama={ama} />
        </main>
        <BodyFooter />
      </Container>
    </>
  );
}
