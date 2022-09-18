import React, { useEffect, useRef, useState } from "react";
import PlayBtn from "./PlayBtn";
import ProgressBar from "./ProgressBar";
import VideoControler from "./VideoControler";

const Video = () => {
  const [videoWidth, setVideoWith] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [showPlayBtn, setShowPlayBtn] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoplay = useRef(null);
  //   Get Progress bar Width
  const ref = useRef(null);
  useEffect(() => {
    videoPlaying ? setShowPlayBtn(false) : setShowPlayBtn(true);
  }, [videoPlaying]);
  //-------------------Controls Videos----------------
  const handleToggle = () => {
    setVideoPlaying(!videoPlaying);
    setInterval(() => {
      setCurrentTime(videoplay.current.currentTime);
      setDuration(videoplay.current.duration);
    }, 1200);
    if (videoPlaying) {
      videoplay.current.pause();
    } else {
      videoplay.current.play();
    }
  };
  //-------------------Controls Videos----------------
  //   --------------------Get CurrentTime And Duration-------------------
  useEffect(() => {
    setVideoWith((currentTime / duration) * 100);
    if ((currentTime / duration) * 100 === 100) {
      setVideoPlaying(false);
      videoplay.current.currentTime = 0;
      videoplay.current.pause();
    }
  }, [currentTime, duration]);
  //   --------------------Get CurrentTime And Duration-------------------

  return (
    <div className="h-screen relative" onClick={handleToggle}>
      {/* --------------Video------------------*/}
      <video
        className="w-screen h-screen object-cover cursor-pointer"
        ref={videoplay}
      >
        <source src="https://media.videoask.com/transcoded/435ae671-33f0-45a4-b958-62402c2b6133/video.mp4?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJtZWRpYV9pZCI6IjQzNWFlNjcxLTMzZjAtNDVhNC1iOTU4LTYyNDAyYzJiNjEzMyIsImV4cCI6MTY2MDI4OTg0OH0.yVSV7G8yHNBQ4_zt-Dl5rrOlyVQ67E1kFVupRy9y7OI1U-rdpK7Gr-8UYqymLBUgUWW-2O5Gf1URxkELismj_3g4npfKq8Lp9p1OuLguu-AmxSM8nQRFwNSRiXXq4A6NNogoe5dlanO0Ob6Yz7SGKg0ttKiJTpI2vn-UJ7Ru882TPQi51ELD167GmNyej7n4ASSZWAX4YrWu9xLm3D8gg4FIjQwGPOqbBCe_Eipy996JHfGhPVBTS1-dxy7qxFeHnYMK_k1A8Zd5joa7-uAA_xSjTEasNQwvRxcKswNCHOHH_iR5tEwYLhgJXw71Lx2UQgiNmBDkWD7Zf2RCthy0FCj5M8vboiTdYEdAxPZQMq5uvHFudDjfGhCE5qZ31WlR8SSu625y7f97lT0PzWUDMXuRKStSPSqr8hEZ1PrTXdc457CxbSJhcYWVBhrtGtnonNJ8DhHZjsNAyII2W2nvIObhIVi5uhGrNBm4Iunu66P83qtoTRSzcWWazMSJzlZzW7KODUikLK5-6RvQKUea-9p4yektvfZFWX2iCuQe0PCGFx3FnjvrF8gToTnvzY5n_u5nBOnKwiiq7ARq5DLp2dWk9tkjmF-b961bKJuotyMLbI_roHBXeQIKjJADv8H6U46vXqJr4UnlVfKYrq7aLfd8Ww3_UO7tsySvIRWalnQ" />
      </video>
      {/* --------------Video------------------*/}
      {/* =========video Controler============ */}
      <ProgressBar videoWidth={videoWidth} ref={ref} />
      <VideoControler />
      {showPlayBtn && <PlayBtn />}
      {/* =========video Controler============ */}
    </div>
  );
};

export default Video;
