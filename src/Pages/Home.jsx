import React from "react";
import Dashboard from "../components/Dashboard";
import CountNumber from "../components/CountNumber";
import SocialContainer from "../components/SocialContainer";
import OurFeatures1 from "../components/Sliders/OurFeatures1";
import AboutSection from "../components/AboutUs/AboutSection";
import AboutSection2 from "../components/AboutUs/AboutSection2";
const Home = () => {
  return (
    <React.Fragment>
      <div className="slider-drag-cursor d-flex align-items-center justify-content-between">
        <span className="drag-icon-left">
          <img src="assets/img/icon/drag-arrow-left.svg" alt="" />
        </span>
        DRAG
        <span className="drag-icon-right">
          <img src="assets/img/icon/drag-arrow-right.svg" alt="" />
        </span>
      </div>
      <Dashboard />
      <AboutSection />
      <AboutSection2 />
      <OurFeatures1 />
      <CountNumber />
      <SocialContainer />
    </React.Fragment>
  );
};

export default Home;
