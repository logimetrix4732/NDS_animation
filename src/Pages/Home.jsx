import React from "react";
import Dashboard from "../components/Dashboard";
import CountNumber from "../components/CountNumber";
import SocialContainer from "../components/SocialContainer";
import OurFeatures1 from "../components/Sliders/OurFeatures1";
import AboutSection from "../components/AboutUs/AboutSection";
import AboutSection2 from "../components/AboutUs/AboutSection2";
import sdgImg from "../Images/HomeImgs/sdgImg.png";
import AnimatedText from "../components/AnimatedText";
import "./Home.css";
const Home = () => {
  return (
    <React.Fragment>
      {/* Mobile Viewport Optimization */}
      <style jsx>{`
        @media (max-width: 768px) {
          .slider-drag-cursor {
            display: none !important;
          }

          .about-area {
            padding: 20px 0 !important;
          }

          .title-area {
            padding: 0 10px !important;
          }

          .sub-title {
            word-wrap: break-word;
            hyphens: auto;
            text-align: center !important;
          }
        }

        @media (max-width: 480px) {
          .about-area {
            padding: 15px 0 !important;
          }

          .container {
            padding-left: 10px !important;
            padding-right: 10px !important;
          }

          .title-area {
            padding: 0 5px !important;
          }
        }

        @media (max-width: 360px) {
          .about-area {
            padding: 10px 0 !important;
          }

          .container {
            padding-left: 5px !important;
            padding-right: 5px !important;
          }
        }
      `}</style>
      <div
        className="slider-drag-cursor d-flex align-items-center justify-content-between"
        style={{
          padding: "8px 15px",
          fontSize: "clamp(12px, 3vw, 16px)",
        }}
      >
        <span className="drag-icon-left">
          <img
            src="assets/img/icon/drag-arrow-left.svg"
            alt=""
            loading="lazy"
            style={{
              width: "clamp(16px, 4vw, 24px)",
              height: "auto",
            }}
          />
        </span>
        <span
          style={{
            fontSize: "clamp(10px, 2.5vw, 14px)",
            fontWeight: "500",
            letterSpacing: "1px",
          }}
        >
          DRAG
        </span>
        <span className="drag-icon-right">
          <img
            src="assets/img/icon/drag-arrow-right.svg"
            alt=""
            loading="lazy"
            style={{
              width: "clamp(16px, 4vw, 24px)",
              height: "auto",
            }}
          />
        </span>
      </div>
      <Dashboard />
      <AboutSection />
      <div
        className="about-area position-relative overflow-hidden"
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
                    fontSize: "clamp(16px, 4vw, 22px)",
                    display: "block",
                    lineHeight: "1.4",
                    marginBottom: "8px",
                  }}
                >
                  We align our strategies with
                </span>
                <span
                  className="sub-title text-anime-style-2 wow fadeInUp"
                  style={{
                    color: "#bd8f59",
                    fontSize: "clamp(20px, 5vw, 30px)",
                    fontWeight: "600",
                    display: "block",
                    lineHeight: "1.3",
                    padding: "0 15px",
                  }}
                >
                  United Nations Sustainable Development Goals (SDGs)
                </span>
              </div>
            </div>
          </div>
          <div
            className="row align-items-center"
            style={{
              marginTop: "clamp(-50px, -8vw, -100px)",
              padding: "0 10px",
            }}
          >
            <div className="col-xl-12 order-1 order-xl-2 position-relative wow fadeInUp">
              <img
                src={sdgImg}
                alt="United Nations Sustainable Development Goals"
                loading="lazy"
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "100%",
                  objectFit: "contain",
                }}
              />
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
