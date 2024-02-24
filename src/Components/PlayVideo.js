import React, { useEffect } from "react";
import VideoPlayer from "./VideoPlayer";

function PlayVideo({ src }) {
  return (
    <div className="video-wrapper">
      <VideoPlayer src={src} />
    </div>
  );
}

export default PlayVideo;
