import React from "react";
import About from "../About";
import Header from "../Header";
import Banner from "./Banner";
import Contact from "./Contact";
import Projects from "./Projects";
import Services from "./Services";

const Home = () => {
  return (
    <div className="lg:px-24 overflow-x-hidden">
      <Banner />
      <About></About>
      <Services></Services>
      <Projects />
    </div>
  );
};

export default Home;
