import React from 'react';
import NewTabIcon from '../../../assets/icons/NewTabIcon.js'
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import {Typography} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import ReactMarkdown from 'react-markdown';
import ResourceListItem from './ResourceListItem';
import {makeStyles} from "@material-ui/core/styles/index";

// todo: get the icons from design

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(1),
    margin: theme.spacing(1)
  },
  space: {
    padding: theme.spacing(1),
  }
}));

const linkIcon = (linkType) => {
  switch (linkType) {
    case "web":
      return (<NewTabIcon/>);
    case "download":
      return (<NewTabIcon/>);
    case "podcast":
      return (<MicNoneOutlinedIcon/>);
    case "video":
      return (<VideocamOutlinedIcon/>);
    case "purchase":
      return (<ShoppingCartOutlinedIcon/>);
    case "book":
      return (<MenuBookOutlinedIcon/>);
    default:
      return (<NewTabIcon/>);
  }
};

export default function ResourcesWeLove(props) {
  const classes = useStyles();

  return (
      <>
        <Box className={classes.root}>
          <Box className={classes.space}>
            <Typography variant={"h2"} href="#WhyDoIt">
              Resources we love
            </Typography>
          </Box>

          <Box className={classes.space}>
            <Typography variant={"body1"}>
              <ReactMarkdown source={props.source}/>
            </Typography>
          </Box>

          <Box className={classes.space}>
            {props.links.map((resource, i) => (
                <ResourceListItem key={i} url={resource.link} description={resource.description}>
                  {linkIcon(resource.linkType)}
                </ResourceListItem>
            ))}
          </Box>
        </Box>
      </>
  )
};
