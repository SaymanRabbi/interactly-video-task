import React from "react";

const VideoControler = () => {
  return (
    <div className="absolute top-10 right-10  z-10 flex gap-3">
      <span>Current Time</span>
      <span>Duration</span>
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
        className=" text-white font-bol w-10 h-6 px-2 flex justify-center items-center font-bold"
        style={{
          border: "2px solid white",
          borderRadius: "5px",
          outline: "none",
        }}
      >
        CC
      </button>
    </div>
  );
};

export default VideoControler;
