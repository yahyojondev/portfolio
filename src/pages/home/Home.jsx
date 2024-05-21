import React, { memo } from "react";
import Hero from "../../components/hero/Hero";
import About from "../about/About";
import Project from "../project/Project";
import Contact from "../contact/Contact";

const Home = () => {
  window.scrollTo(0, 0);
  return (
    <div className="home">
      <Hero />
      <About />
      <Project />
      <Contact />
    </div>
  );
};

export default memo(Home);
