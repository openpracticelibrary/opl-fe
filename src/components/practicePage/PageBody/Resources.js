import React from 'react';
import NewTabIcon from '../../../assets/icons/NewTabIcon.js'
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import { Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

export default function Resources(props) {
  const resourceLinks = props.links.map((resource, i) => {
    switch (resource.linkType) {
      case "web":
        return (
          <Typography key={i}>
          <Link href={resource.link} color="inherit">
            <NewTabIcon /> &nbsp;&nbsp;
            Link: {resource.description}
          </Link>
          </Typography>
        );
      case "download":
        return (
          <Typography key={i}>
          <Link href={resource.link} color="inherit">
            <NewTabIcon /> &nbsp;&nbsp;
            Link: {resource.description}
          </Link>
          </Typography>
        );
      case "podcast":
        return (
          <Typography key={i}>
            <Link href={resource.link} color="inherit">
              <MicNoneOutlinedIcon /> &nbsp;&nbsp;
              Podcast Episode: {resource.description}
            </Link>
          </Typography>
        );
      case "video":
        return (
          <Typography key={i}>
          <Link href={resource.link} color="inherit">
            <VideocamOutlinedIcon /> &nbsp;&nbsp;
            Watch Here: {resource.description}
          </Link>
          </Typography>
        );
      case "purchase":
        return (
          <Typography key={i}>
          <Link href={resource.link} color="inherit">
            <ShoppingCartOutlinedIcon /> &nbsp;&nbsp;
            Purchase Here: {resource.description}
          </Link>
          </Typography>
        );
      case "book":
        return (
          <Typography key={i}>
          <Link href={resource.link} color="inherit">
            <MenuBookOutlinedIcon /> &nbsp;&nbsp;
            Book: {resource.description}
          </Link>
          </Typography>
        );
      default:
        return (
          <Typography key={i}>
          <Link href={resource.link} color="inherit">
            <NewTabIcon /> &nbsp;&nbsp;
            Link: {resource.description}
          </Link>
          </Typography>
        );
    }
  });

  return (
    <Box p={2}>
      {resourceLinks.map(r => r)}
    </Box>
  )
};
