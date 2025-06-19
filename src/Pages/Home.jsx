import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutUs/AboutSection";
import AboutSection1 from "../components/AboutUs/AboutSection1";
import AboutSection2 from "../components/AboutUs/AboutSection2";
import AboutSection3 from "../components/AboutUs/AboutSection3";
import CountNumber from "../components/CountNumber";
import OurFeatures1 from "../components/Sliders/OurFeatures1";
import SocialContainer from "../components/SocialContainer";
import gai from "../Images/gai.gif";
import ColorSwitcher from "../components/ColorSwitcher";
const Home = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };
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
      {/* Color Switcher Drawer */}

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
