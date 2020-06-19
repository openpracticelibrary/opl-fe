import React from "react";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import ReactMarkdown from "react-markdown";
import ResourceListItem from "./ResourceListItem";
import { makeStyles } from "@material-ui/core/styles/index";
import { DownloadIcon, PodcastIcon, WebLinkIcon } from "../../../assets/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  space: {
    padding: theme.spacing(1),
  },
  indent: {
    paddingLeft: theme.spacing(3),
  },
}));

//todo: (@Darcie) icons for video, purchase, books
//todo: review the structure of the resource.description

const Icon = {
  web: <WebLinkIcon />,
  download: <DownloadIcon />,
  podcast: <PodcastIcon />,
  video: <PodcastIcon />,
  purchase: <WebLinkIcon />,
  book: <WebLinkIcon />,
};

export default function ResourcesWeLove(props) {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.space}>
          <Typography variant={"h2"} ref={props.resourceRef}>
            Links we love
          </Typography>
        </Box>

        <Box className={classes.space}>
          <Typography variant={"body1"}>
            <ReactMarkdown source={props.source} />
          </Typography>
        </Box>

        <Box className={classes.indent}>
          {props.links.map((resource, i) => (
            <ResourceListItem
              key={i}
              listItemKey={i}
              url={resource.link}
              description={resource.description}
            >
              {Icon[resource.linkType]}
            </ResourceListItem>
          ))}
        </Box>
      </Box>
    </>
  );
}
