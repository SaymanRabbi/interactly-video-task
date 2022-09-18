import React from "react";
import Content from "../Components/Content";
import Video from "../Components/Video";

const Home = () => {
  return (
    <section className="sm:flex justify-between overflow-y-hidden">
      <Video />
      <Content />
    </section>
  );
};

export default Home;
