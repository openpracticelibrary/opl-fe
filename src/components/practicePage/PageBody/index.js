import React from 'react';
import { Typography } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import MediaGallery from './MediaGallery';
import Resources from './Resources';
import AskMeAnything from './AskMeAnything';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    backgroundColor: '#fff'
  }
}));

export default function PageBody(props) {
  const classes = useStyles();

  const {
    title,
    body: {
      whatIs,
      whyDo,
      howTo
    },
    mediaGallery,
    resources,
    ama
  } = props;

  return (
    <Box className={classes.root}>
      <Typography variant={"h5"} href="#whatis">
        <strong>What is { title }?</strong>
      </Typography>
      <Typography>
        <ReactMarkdown source={whatIs} />
      </Typography>
      <Typography variant={"h5"} href="media">
        <strong>Media Gallery</strong>
      </Typography>
      <MediaGallery mediaGallery={ mediaGallery } />
      <Typography variant={"h5"} href="whatis">
        <strong>Why do { title }?</strong>
      </Typography>
      <Typography>
        <ReactMarkdown source={whyDo} />
      </Typography>
      <Typography variant={"h5"} href="howto">
        <strong>How to do { title }?</strong>
      </Typography>
      <Typography>
        <ReactMarkdown source={howTo} />
      </Typography>
      <Typography variant={"h5"} href="resources">
        <strong>Resources we love</strong>
      </Typography>
      <Resources links={ resources } />
      <Typography variant={"h5"} href="howto">
        <strong>Ask me anything</strong>
      </Typography>
      <AskMeAnything ama={ ama } />
    </Box>
  )
};

