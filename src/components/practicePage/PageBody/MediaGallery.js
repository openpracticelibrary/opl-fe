import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Box from '@material-ui/core/Box';
import {Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(1),
    margin: theme.spacing(1)
  },
  space: {
    padding: theme.spacing(1),
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));

export default function MediaGallery({mediaGallery}) {
  const classes = useStyles();

  const images = mediaGallery.map(media => {
    const url = new URL(media.link);

    if (url.hostname.includes('youtu')) {
      const youtubeId = url.pathname.split('/')[1];
      const link = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
      return {
        link,
        original: media.link
      }
    }
    return {
      link: media.link
    }
  });

  return (
      <>
        <Box className={classes.root}>
          <Box className={classes.space}>
            <Typography variant={"h2"} href="#media">
              Media Gallery
            </Typography>
          </Box>
          <Box className={classes.space}>
            <GridList cellHeight={160} className={classes.gridList} cols={mediaGallery.length}>
              {images.map(tile => (
                  <GridListTile key={tile.link} cols={tile.cols || 1}>
                    <img src={tile.link} alt="Practice Image"/>
                  </GridListTile>
              ))}
            </GridList>
          </Box>
        </Box>
      </>
  )
};

