import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player/lazy";
import thumbnail from "Assets/TrailerThumbnail.png";

function VideoPlayer({ src }) {
  const videoRef = useRef(null);
  const intervalRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [useNativeControls, setUseNativeControls] = useState(
    window.innerWidth < 767
  );
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => {
      setUseNativeControls(window.innerWidth < 767);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, [width]);

  const updateProgress = () => {
    if (videoRef.current) {
      const value =
        (videoRef.current.currenTime / videoRef.current.duration) * 100;
      setProgress(value);
    }
  };
  const startProgressLoop = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      updateProgress();
    }, 1000);
  };

  const stopProgressLoop = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
        startProgressLoop();
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
        stopProgressLoop();
      }
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    const handleVideoEnd = () => {
      setIsPlaying(false);
      setProgress(0);
      stopProgressLoop();
    };
    if (video) {
      video.addEventListener("ended", handleVideoEnd);
    }
    return () => {
      if (video) {
        video.removeEventListener("ended", handleVideoEnd);
      }
      stopProgressLoop();
    };
  }, []);
  return (
    <>
      <video
        autoplay={true}
        className="video-player"
        ref={videoRef}
        src={src}
        poster={thumbnail}
        onClick={togglePlayPause}
        onPlay={startProgressLoop}
        onPause={stopProgressLoop}
        controls
        // controls={useNativeControls}
      />
      {/* {!useNativeControls && renderCustomControls()} */}
    </>
  );
}

export default VideoPlayer;
