import React, { useRef, useState } from "react";
import "./Videos.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { IconButton } from "@mui/material";

const Videos = () => {
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
      <video
        onClick={handleVideoPress}
        className="video__player"
        loop
        ref={videoRef}
        src="https://v16-webapp.tiktok.com/0738638ca2fe000ac92866023a744465/61e31347/video/tos/useast5/tos-useast5-ve-0068c003-tx/d6ffc0a8c9824f46b2d3eaef8a90292c/?a=1988&br=3266&bt=1633&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FRnkag3-I&l=2022011512321301022307604201A74F0D&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajl5dGc6Zm83OjMzZzczNEApZWQ3NzlnNjtlN2k3OjQ0ZWdqamo2cjRfb19gLS1kMS9zc2JiMWNiL2NhNl4xY2E2MF86Yw%3D%3D&vl=&vr="
      ></video>

      <PlayArrowIcon onClick={handleVideoPress} className="PlayIcon" fontSize="large" style={playing ? { display: "none" } : { display: "block" }} />
      {/* Video Footer */}
      {/* Video Sidebar */}
    </div>
  );
};

export default Videos;
