import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import DefaultImage from "../../../assets/images/DefaultImage.png"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  space: {
    padding: theme.spacing(1),
  },
  mediaBox: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(1),
  }
}))
;

export default function MediaGallery({ mediaGallery, mediaRef }) {
  const classes = useStyles();
  const images = [];

  mediaGallery.map(media => {
    let image = {
      original: media.link,
      thumbnail: media.link
    };
    return images.push(image);
  });

  //todo: adding video to the gallery
  //   if (url.hostname.includes('youtu')) {
  //     const youtubeId = url.pathname.split('/')[1];
  //     const link = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
  //     return {
  //       link,
  //       original: media.link
  //     }
  //   }

  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.space}>
          <Typography variant={"h2"} ref={mediaRef}>
            Media Gallery
          </Typography>
        </Box>
        <Box className={classes.mediaBox}>
          <ImageGallery
            items={images}
            showBullets={true}
            showIndex={true}
            showThumbnails={true}
            lazyLoad={true}
            showPlayButton={true}
            onErrorImageURL={DefaultImage}
          />
        </Box>
      </Box>
    </>
  );
}
