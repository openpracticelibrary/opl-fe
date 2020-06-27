import React from "react";
import { PseudoBox } from "@chakra-ui/core";

import CardCollection from "./CardCollection";
import CoverImage from "./CoverImage";
import PracticeCardTitle from "./PracticeCardTitle";
import Subtitle from "./Subtitle";

const PracticeCard = (props) => (
  <PseudoBox
    role="group"
    overflow="visible"
    height={220}
    m={3}
    _hover={{
      zIndex: 10,
      transition: "0.5s",
    }}
    data-testid={props.practiceId}
  >
    <PseudoBox
      data-testid="practicecard"
      rounded="10px"
      bg="white"
      transform="scale(1,1)"
      transition="0.5s"
      _groupHover={{
        transform: "scale(1.1,1.05)",
        transition: "0.5s",
        zIndex: 10,
        boxShadow: "1px 2px 2px 1px rgba(0,0,0,.2)"
      }}
    >
      <CoverImage
        slug={props.slug}
        practiceTitle={props.practiceTitle}
        coverImage={props.coverImage}
      />
      <PseudoBox
        transition="0.5s"
        _groupHover={{
          transform: "scale(.9, .95)",
          transition: "0.5s",
          color: "blue.500",
        }}
      >
        <PracticeCardTitle
          slug={props.slug}
          practiceTitle={props.practiceTitle}
          tags={props.tags}
        />
        <PseudoBox
          data-testid="expandedcard"
          transition="0.5s"
          opacity="0"
          _groupHover={{
            opacity: "1",
            transition: "1.0s",
            color: "grey.500",
          }}
        >
          <Subtitle subtitle={props.subtitle} slug={props.slug} />
          <CardCollection
            practiceId={props.practiceId}
            upvotes={props.upvotes}
            imgCount={props.mediaGallery}
            questions={props.ama}
          />
        </PseudoBox>
      </PseudoBox>
    </PseudoBox>
  </PseudoBox>
);

export default PracticeCard;
