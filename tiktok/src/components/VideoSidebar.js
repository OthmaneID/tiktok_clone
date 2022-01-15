import React, { useEffect, useState } from "react";
import "./VideoSidebar.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MessageIcon from "@mui/icons-material/Message";
import ShareIcon from "@mui/icons-material/Share";

const VideoSidebar = () => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };
  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        <FavoriteIcon onClick={handleLike} fontSize="large" style style={liked ? { color: "#FE2C55" } : { color: "white" }} />
        <p>100</p>
      </div>
      <div className="videoSidebar__button">
        <MessageIcon fontSize="large" />
        <p>250</p>
      </div>
      <div className="videoSidebar__button">
        <ShareIcon fontSize="large" />
        <p>12</p>
      </div>
    </div>
  );
};

export default VideoSidebar;
