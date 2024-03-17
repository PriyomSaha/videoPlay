import React from "react";
import VideoPlayer from "./Old/VideoPlayer";
import { Box } from "@mui/material";
import TrailerThumbnail from "Assets/TrailerThumbnail.png";

function Trailer({ src }) {
  return (
    <Box >
      {/* <Box className="trailer-video-wrapper"> */}
      {/* <video
        className="trailer-video-player"
        src={src}
        poster={TrailerThumbnail}
        controls
      /> */}
      
      <iframe
        src="https://www.youtube.com/embed/j5KI26ViQ40?si=epHwSWU_I_d1ncSO"
        title="Vivekam"
        allowFullScreen
        // style={{
        //   width: "clamp(10vw, 100% 100vw)",
        //   height: "clamp(10vh, 50vh, 50vh)",
        // }}
      ></iframe>

      {/* </Box> */}
    </Box>
  );
}

export default Trailer;
