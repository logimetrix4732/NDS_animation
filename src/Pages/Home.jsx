import React from "react";
import Dashboard from "../components/Dashboard";
import CountNumber from "../components/CountNumber";
import SocialContainer from "../components/SocialContainer";
import OurFeatures1 from "../components/Sliders/OurFeatures1";
import AboutSection from "../components/AboutUs/AboutSection";
import AboutSection2 from "../components/AboutUs/AboutSection2";
import BlogAndArticle1 from "../components/BlogandArticleComponents/BlogAndArticle1";
import banner from "../Images/banner2.png";
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="space-bottom"
      >
        <img src={banner} alt="" />
      </div>
      <AboutSection2 />
      <OurFeatures1 />
      <CountNumber />
      <SocialContainer />
    </React.Fragment>
  );
};

export default Home;
