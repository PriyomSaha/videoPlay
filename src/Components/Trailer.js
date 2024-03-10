import React from "react";
import VideoPlayer from "./Old/VideoPlayer";
import { Box } from "@mui/material";
import TrailerThumbnail from "../Assets/TrailerThumbnail.png";

function Trailer({ src }) {
  return (
    <Box className="trailer-video-wrapper">
      <video
        className="trailer-video-player"
        src={src}
        poster={TrailerThumbnail}
        controls
      />
    </Box>
  );
}

export default Trailer;
