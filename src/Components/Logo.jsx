import React from "react";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";

const Logo = () => {
  return (
    <div className=" absolute bottom-16 left-16 flex justify-center items-center">
      <div className=" w-32 h-14 logo-bg px-2 text-white font-bold rounded-md">
        <span>Powered By:</span>
        <h2 className=" flex gap-1">
          <SentimentSatisfiedIcon />
          videoask
        </h2>
      </div>
    </div>
  );
};

export default Logo;
