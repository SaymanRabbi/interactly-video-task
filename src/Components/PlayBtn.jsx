import React from "react";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
const PlayBtn = () => {
  return (
    <div className="position">
      <PlayCircleFilledWhiteIcon
        className=" text-white cursor-pointer"
        style={{ fontSize: "5.5rem" }}
      />
    </div>
  );
};

export default PlayBtn;
