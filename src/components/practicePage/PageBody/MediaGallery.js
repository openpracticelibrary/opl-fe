import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import {Typography} from '@material-ui/core';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

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
  gallery: {
    display: "flex",
    justifyContent: "center",
    margin: theme.spacing(1),
    padding: theme.spacing(1),
  },
}));

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

export default function MediaGallery({mediaGallery}) {
  const classes = useStyles();

  // const images = mediaGallery.map(media => {
  //   const url = new URL(media.link);
  //
  //   if (url.hostname.includes('youtu')) {
  //     const youtubeId = url.pathname.split('/')[1];
  //     const link = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
  //     return {
  //       link,
  //       original: media.link
  //     }
  //   }
  //   return {
  //     link: media.link
  //   }
  // });

  return (
      <>
        <Box className={classes.root}>
          <Box className={classes.space}>
            <Typography variant={"h2"} href="#media">
              Media Gallery
            </Typography>
          </Box>
          <Box className={classes.gallery}>
            {/*<GridList cellHeight={160} className={classes.gridList} cols={mediaGallery.length}>*/}
            {/*{ images.map(tile => (*/}
            {/*<GridListTile key={tile.link} cols={tile.cols || 1}>*/}
            {/*<img src={tile.link} alt="An image" />*/}
            {/*</GridListTile>*/}
            {/*))}*/}
            {/*</GridList>*/}
            <ImageGallery items={images}/>
          </Box>
        </Box>
      </>
  )
};

