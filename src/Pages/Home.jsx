import React from "react";
import gai from "../Images/gai.gif";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Dashboard from "../components/Dashboard";
import CountNumber from "../components/CountNumber";
import ColorSwitcher from "../components/ColorSwitcher";
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
      <div className="preloader">
        <button className="th-btn preloaderCls">Cancel Preloader</button>
        <div className="preloader-inner">
          <img src={gai} alt="img" style={{ width: "auto", height: "180px" }} />

          <span className="loader">
            NDDB <span className="loading-text">NDDB</span>
          </span>
        </div>
      </div>
      <Header />
      <Dashboard />
      <AboutSection />
      <AboutSection2 />
      <OurFeatures1 />
      <CountNumber />
      <SocialContainer />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
