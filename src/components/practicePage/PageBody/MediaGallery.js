/** @jsx jsx */
import { useTheme, css, Box, Flex, Heading } from "@chakra-ui/core";
import { jsx } from "@emotion/core";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import DefaultImage from "../../../assets/images/DefaultImage.png";
import AddImage from "../../../assets/images/add.png";
import AddImageCard from "./AddImage";

export default function MediaGallery({ practiceId, title, mediaGallery, mediaRef }) {
  const theme = useTheme();
  const styles = css({
    "& .image-gallery-slide img": {
      height: "530px",
      width: "100%",
      borderRadius: "17px",
      objectFit: "fill",
    },
    "& .image-gallery-thumbnail img": {
      borderRadius: "17px",
      height: "75px",
      objectFit: "cover",
    },
    "& .image-gallery-thumbnail": {
      transition: "none",
      border: 0,
      mx: "12px",
      "&:hover": {
        borderRadius: "17px",
        border: "2px",
        borderColor: "blue.500",
      },
      "&:active": {
        borderRadius: "17px",
        border: "2px",
        borderColor: "blue.500",
      },
      "&:focus": {
        borderRadius: "17px",
        border: "2px",
        borderColor: "blue.500",
      },
    },
    "& .fullscreen .image-gallery-slide img": {
      height: "auto",
      width: "auto",
      minHeight: "50vh",
    },
  })(theme);

  const images = mediaGallery.map(media => {
    const url = new URL(media.link);
    if (url.hostname.includes('youtube') && url.pathname.includes('watch')) {
      const youtubeId = url.searchParams.get('v');
      const link = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
      const embedUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=0&showinfo=1`;
      return {
        original: link,
        thumbnail: link,
        embedUrl,
        renderItem: () => renderVideo({ embedUrl, original: link })
      }
    } else if (url.hostname.includes('youtube') && url.pathname.includes('playlist')) {
      const youtubeId = url.searchParams.get('list');
      const link = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
      const embedUrl = `https://www.youtube.com/embed/?listType=playlist&list=${youtubeId}`;
      return {
        original: link,
        thumbnail: link,
        embedUrl,
        renderItem: () => renderVideo({ embedUrl, original: link })
      }
    } else if (url.hostname.includes('youtu')) {
      const youtubeId = url.pathname.split('/')[1];
      const link = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
      const embedUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=0&showinfo=1`;
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

  images.push({
    original: AddImage,
    thumbnail: AddImage,
    renderThumbInner: () => (<AddImageCard currentMediaGallery={mediaGallery} practiceId={practiceId} />)
  });

  const renderVideo = (item) => {
    return (
      <Box position="relative" overflow="hidden" pt="56.25%">
        <Box
          as="iframe"
          position="absolute"
          border={0}
          height="100%"
          left={0}
          top={0}
          width="100%"
          rounded={17}
          title={item.embedUrl}
          src={item.embedUrl}
          allowFullScreen
        />
      </Box>
    );
  }

  return (
    <Flex direction="column">
      <Heading fontSize="section" ref={mediaRef} py={4}>
        Look at {title}
      </Heading>
      <Box css={styles}>
        <ImageGallery
          items={images}
          showBullets={true}
          showIndex={false}
          showThumbnails={true}
          lazyLoad={true}
          showPlayButton={false}
          showFullscreenButton={true}
          onErrorImageURL={DefaultImage}
          onPlay={(currentIndex) => console.log(images[currentIndex])}
        />
      </Box>
    </Flex>
  );
}
