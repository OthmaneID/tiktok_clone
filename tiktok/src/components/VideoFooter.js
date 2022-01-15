import React from "react";
import "./VideoFooter.css";
import Ticker from "react-ticker";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

const VideoFooter = () => {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@uuuser13DJ</h3>
        <p>This is some Description</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />

          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>this is a Song !!: ....</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img className="videoFooter__record" src="https://static.thenounproject.com/png/934821-200.png" alt="" />
      
    </div>
  );
};

export default VideoFooter;
