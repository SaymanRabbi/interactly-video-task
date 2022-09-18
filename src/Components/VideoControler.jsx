import React from "react";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
const VideoControler = ({ handelSpeed, speed, currentTime, duration }) => {
  return (
    <div className="absolute top-10 right-10  z-10 flex gap-3">
      <span className=" text-white font-bold">
        {Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60)}
      </span>
      <span className=" text-white font-bold">/</span>
      <span className="text-white font-bold">
        {Math.floor(duration / 60)}:{Math.floor(duration % 60)}
      </span>
      <button
        className=" text-white font-bol w-10 h-6 px-2 flex justify-center items-center font-bold"
        style={{
          border: "2px solid white",
          borderRadius: "5px",
          outline: "none",
        }}
      >
        CC
      </button>
      <button
        onClick={handelSpeed}
        className=" text-white font-bol w-10 h-6 px-2 flex justify-center items-center font-bold"
        style={{
          border: "2px solid white",
          borderRadius: "5px",
          outline: "none",
        }}
      >
        {speed}X
      </button>
      <button
        className=" text-white font-bol w-10 h-6 px-2 flex justify-center items-center font-bold"
        style={{
          border: "2px solid white",
          borderRadius: "5px",
          outline: "none",
        }}
      >
        <FullscreenIcon />
      </button>
    </div>
  );
};

export default VideoControler;
