import React from "react";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
const PlayBtn = ({ handleToggle }) => {
  return (
    <div className="position">
      <PlayCircleFilledWhiteIcon
        className=" text-white cursor-pointer"
        style={{ fontSize: "5.5rem" }}
        onClick={handleToggle}
      />
    </div>
  );
};

export default PlayBtn;
