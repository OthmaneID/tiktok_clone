import React, { useRef, useState } from "react";
import "./Videos.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

const Videos = ({ channel, description, song, likes, comments, shares, url }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <video onClick={handleVideoPress} className="video__player" loop ref={videoRef} src={url}>
      </video>

      <PlayArrowIcon onClick={handleVideoPress} className="PlayIcon" fontSize="large" style={playing ? { display: "none" } : { display: "block" }} />
      {/* Video Footer */}
      <VideoFooter channel={channel} description={description} song={song} />
      {/* Video Sidebar */}
      <VideoSidebar likes={likes} comments={comments} shares={shares} />
    </div>
  );
};

export default Videos;
