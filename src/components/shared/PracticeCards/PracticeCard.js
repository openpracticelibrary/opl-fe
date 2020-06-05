import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Box } from "@material-ui/core";
import CardCollection from "./CardCollection";
import CoverImage from "./CoverImage";
import PracticeCardTitle from "./PracticeCardTitle";
import Subtitle from "./Subtitle";

const useStyles = makeStyles((theme) => ({
  practiceItemBound: {
    overflow: "visible",
    height: 220,
    margin: 10,
  },
  practiceItem: {
    backgroundColor: "#fff",
    borderRadius: 10,
  },
}));

export default function PracticeCard(props) {
  const classes = useStyles();
  const [hovered, setHovered] = React.useState(false);

  return (
    <Box
      className={classes.practiceItemBound}
      style={{
        zIndex: `${hovered ? "10" : "1"}`,
        transition: `${hovered ? "0.5s" : "0.5s"}`,
      }}
      data-testid={props.practiceId}
    >
      <Box
        data-testid="practicecard"
        className={classes.practiceItem}
        onMouseOut={() => setHovered(false)}
        onMouseOver={() => setHovered(true)}
        style={{
          transform: `${hovered ? "scale(1.1,1.05)" : "scale(1, 1)"}`,
          transition: `${hovered ? "0.5s" : "0.5s"}`,
          zIndex: `${hovered ? "10" : "1"}`,
          boxShadow: `${
            hovered ? "1px 2px 2px 1px rgba(0,0,0,.2)" : "0px 0px 0px 0px"
          }`,
        }}
      >
        <CoverImage
          slug={props.slug}
          practiceTitle={props.practiceTitle}
          coverImage={props.coverImage}
        />
        <Paper
          elevation={0}
          style={{
            transform: `${hovered ? "scale(.9, .95)" : "scale(1, 1)"}`,
            transition: `${hovered ? "0.5s" : "0.5s"}`,
          }}
        >
          <PracticeCardTitle
            slug={props.slug}
            practiceTitle={props.practiceTitle}
            tags={props.tags}
          />
          <Paper
            data-testid="expandedcard"
            elevation={0}
            style={{
              opacity: `${hovered ? "1" : "0"}`,
              transition: `${hovered ? "1.0s" : "0.5s"}`,
            }}
          >
            <Subtitle subtitle={props.subtitle} slug={props.slug} />
            <CardCollection
              practiceId={props.practiceId}
              upvotes={props.upvotes}
              imgCount={props.mediaGallery}
              questions={props.ama}
            />
          </Paper>
        </Paper>
      </Box>
    </Box>
  );
}
