import React from "react";
import { Box } from "@chakra-ui/core";

import ContentSection from "./ContentSection";
import MediaGallery from "./MediaGallery";
import ResourcesWeLove from "./ResourcesWeLove";
import AskMeAnything from "./AskMeAnything";
import FullText from "./FullText";

export default function PageBody(props) {
  const {
    practiceId,
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
    editing,
    whatIsEditor,
    whyDoEditor,
    howToEditor,
  } = props;

  const sections = [
    {
      title: `What is ${title}?`,
      source: whatIs,
      ref: whatIsRef,
      editor: whatIsEditor,
    },
    {
      title: `Why do ${title}?`,
      source: whyDo,
      ref: whyDoRef,
      editor: whyDoEditor,
    },
    {
      title: `How to do ${title}?`,
      source: howTo,
      ref: howToRef,
      editor: howToEditor,
    }
  ];

  if (whatIs && whyDo && howTo) {
    return (
      <Box my="3rem">
        {sections.map((section, i) => (
          <ContentSection
            key={i}
            title={section.title}
            source={section.source}
            sectionRef={section.ref}
            editing={editing}
          >
            {section.editor}
          </ContentSection>
        ))}
        <MediaGallery
          practiceId={practiceId}
          title={title}
          mediaGallery={mediaGallery}
          mediaRef={mediaRef}
        />
        <ResourcesWeLove
          practiceId={practiceId}
          links={resources}
          resourceRef={resourceRef}
        />
        <AskMeAnything ama={ama} amaRef={amaRef} />
      </Box>
    );
  } else {
    return (
      <Box my="3rem">
        <FullText source={fullText} />
      </Box>
    );
  }
}
