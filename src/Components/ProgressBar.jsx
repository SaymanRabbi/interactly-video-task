import React from "react";

const ProgressBar = ({ videoWidth }) => {
  return (
    <div className="absolute top-0 right-0 left-0 z-10">
      <div className="bg-[#706f70] h-2 w-full">
        <div
          className={`bg-primary h-full`}
          style={{ width: `${videoWidth}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
