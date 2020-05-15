import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));

export default function MediaGallery({ mediaGallery }) {
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
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={mediaGallery.length}>
        { images.map(tile => (
          <GridListTile key={tile.link} cols={tile.cols || 1}>
            <img src={tile.link} alt="An image" />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
};

