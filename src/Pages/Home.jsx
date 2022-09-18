import React, { useState } from "react";
import Content from "../Components/Content";
import Video from "../Components/Video";

const Home = () => {
  const [fullScreen, setFullScreen] = useState(false);
  return (
    <section
      className={`${
        fullScreen ? "w-full" : "lg:grid lg:grid-cols-2"
      } overflow-y-hidden max-h-screen`}
    >
      <Video setFullScreen={setFullScreen} fullScreen={fullScreen} />
      {!fullScreen && <Content />}
    </section>
  );
};

export default Home;
