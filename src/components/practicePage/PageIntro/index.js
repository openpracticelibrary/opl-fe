import React from "react";
import { Stack } from "@chakra-ui/core";

import TitleAndSubtitle from "./TitleAndSubtitle";
import ContributedBy from "./ContributedBy";
import Collection from "./Collection";

const PageIntro = props => (
  <Stack spacing={2}>
    <TitleAndSubtitle
      title={props.title}
      tags={props.tags}
      subtitle={props.subtitle}
      editing={props.editing}
      titleEdit={props.titleEdit}
      subtitleEdit={props.subtitleEdit}
    >
      {props.children}
    </TitleAndSubtitle>
    <ContributedBy
      authors={props.authors}
      createdAt={props.createdAt}
      updatedAt={props.updatedAt}
    />
    <Collection
      practiceId={props.practiceId}
      upvotes={props.upvotes}
      imgCount={props.imgCount}
      questions={props.questions}
    />
  </Stack>
);

export default PageIntro;
