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
    "& img": {
      borderRadius: 17,
    }
  },
  videoWrapper: {
    overflow: "hidden",
    paddingTop: "56.25%",
    position: "relative",
    "& iframe": {
      position: "absolute",
      border: 0,
      height: "100%",
      left: 0,
      top: 0,
      width: "100%",
      borderRadius: 17,
    },
  },
}))
;

export default function MediaGallery({ title, mediaGallery, mediaRef }) {
  const classes = useStyles();
  const images = mediaGallery.map(media => {
    const url = new URL(media.link);
    if (url.hostname.includes('youtube') && url.pathname.includes('watch')) {
      const youtubeId = url.searchParams.get('v');
      const link = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
      const embedUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&showinfo=0`;
      return {
        original: link,
        thumbnail: link,
        embedUrl,
        renderItem: () => renderVideo({ embedUrl, original: link })
      }
    } else if (url.hostname.includes('youtube') && url.pathname.includes('playlist')) {
      const youtubeId = url.searchParams.get('list');
      const link = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
      const embedUrl = `https://www.youtube.com/embed/videoSeries?list=${youtubeId}`;
      return {
        original: link,
        thumbnail: link,
        embedUrl,
        renderItem: () => renderVideo({ embedUrl, original: link })
      }
    } else if (url.hostname.includes('youtu')) {
      const youtubeId = url.pathname.split('/')[1];
      const link = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
      const embedUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&showinfo=0`;
      return {
        original: link,
        thumbnail: link,
        embedUrl,
        renderItem: () => renderVideo({ embedUrl, original: link })
      }
    } else {
      return {
        original: media.link,
        thumbnail: media.link
      };
    };
  });

  const renderVideo = (item) => {
    return (
      <div>
        <div className={classes.videoWrapper}>
          <iframe
            title={item.embedUrl}
            src={item.embedUrl}
            allowFullScreen
          >
          </iframe>
        </div>
      </div>
    );
  }

  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.space}>
          <Typography variant={"h2"} ref={mediaRef}>
            Look at {title}
          </Typography>
        </Box>
        <Box className={classes.mediaBox}>
          <ImageGallery
            items={images}
            showBullets={true}
            showIndex={false}
            showThumbnails={true}
            lazyLoad={true}
            showPlayButton={false}
            showFullscreenButton={false}
            onErrorImageURL={DefaultImage}
            onPlay={(currentIndex) => console.log(images[currentIndex])}
          />
        </Box>
      </Box>
    </>
  );
}
