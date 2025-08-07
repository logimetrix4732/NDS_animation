import React from "react";
import Dashboard from "../components/Dashboard";
import CountNumber from "../components/CountNumber";
import SocialContainer from "../components/SocialContainer";
import OurFeatures1 from "../components/Sliders/OurFeatures1";
import AboutSection from "../components/AboutUs/AboutSection";
import AboutSection2 from "../components/AboutUs/AboutSection2";
import sdgImg from "../Images/HomeImgs/sdgImg.png";
import AnimatedText from "../components/AnimatedText";
const Home = () => {
  return (
    <React.Fragment>
      <div className="slider-drag-cursor d-flex align-items-center justify-content-between">
        <span className="drag-icon-left">
          <img
            src="assets/img/icon/drag-arrow-left.svg"
            alt=""
            loading="lazy"
          />
        </span>
        DRAG
        <span className="drag-icon-right">
          <img
            src="assets/img/icon/drag-arrow-right.svg"
            alt=""
            loading="lazy"
          />
        </span>
      </div>
      <Dashboard />
      <AboutSection />
      <div
        className="about-area position-relative overflow-hidden space-top"
        id="about-sec"
        style={{ backgroundColor: "white", zIndex: 1 }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="title-area text-center">
                <span
                  className="sub-title text-anime-style-2 wow fadeInUp"
                  style={{
                    color: "#bd8f59",
                    fontSize: "22px",
                    display: "block",
                  }}
                >
                  We align our strategies with
                </span>
                <span
                  className="sub-title text-anime-style-2 wow fadeInUp"
                  style={{
                    color: "#bd8f59",
                    fontSize: "30px",
                    fontWeight: "600",
                    display: "block",
                  }}
                >
                  United Nations Sustainable Development Goals (SDGs)
                </span>
              </div>
            </div>
          </div>
          <div
            className="row align-items-center"
            style={{ marginTop: "-100px" }}
          >
            <div className="col-xl-12 order-1 order-xl-2 position-relative wow fadeInUp">
              <img src={sdgImg} alt="" loading="lazy" />
            </div>
          </div>
        </div>
      </div>

      <AboutSection2 />
      <OurFeatures1 />
      <CountNumber />
      <SocialContainer />
    </React.Fragment>
  );
};

export default Home;
