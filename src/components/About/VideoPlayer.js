import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";

const VideoPlayer = (props) => {

  return (
    <>
      <iframe
        title='Open Practice Library'
        src={props.videoUrl}
        width="100%"
        height="600rem"
        allowFullScreen
      >
      </iframe>
    </>
  );
}

export default VideoPlayer;