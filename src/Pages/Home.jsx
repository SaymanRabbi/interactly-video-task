import React from "react";
import Content from "../Components/Content";
import Video from "../Components/Video";

const Home = () => {
  return (
    <section className="lg:grid lg:grid-cols-2 overflow-y-hidden max-h-screen">
      <Video />
      <Content />
    </section>
  );
};

export default Home;
