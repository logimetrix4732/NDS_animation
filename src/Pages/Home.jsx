import React from "react";
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
      <div className="color-scheme-wrap active">
        <button className="switchIcon">
          <i className="fa-solid fa-palette" />
        </button>
        <h4 className="color-scheme-wrap-title">
          <i className="far fa-palette" />
          STYLE SWITCHER
        </h4>
        <div className="color-switch-btns">
          <button data-color="#684DF4">
            <i className="fa-solid fa-droplet" />
          </button>
          <button data-color="#086ad8">
            <i className="fa-solid fa-droplet" />
          </button>
          <button data-color="#FC3737">
            <i className="fa-solid fa-droplet" />
          </button>
          <button data-color="#8a2be2">
            <i className="fa-solid fa-droplet" />
          </button>
          <button data-color="#104CBA">
            <i className="fa-solid fa-droplet" />
          </button>
          <button data-color="#ffbf4f">
            <i className="fa-solid fa-droplet" />
          </button>
          <button data-color="#323F7C">
            <i className="fa-solid fa-droplet" />
          </button>
          <button data-color="#0e2bc5">
            <i className="fa-solid fa-droplet" />
          </button>
          <button data-color="#F79C53">
            <i className="fa-solid fa-droplet" />
          </button>
          <button data-color="#6957af">
            <i className="fa-solid fa-droplet" />
          </button>
        </div>
        <a
          href="https://themeforest.net/search/themehour"
          className="th-btn text-center"
        >
          <i className="fa fa-shopping-cart me-2" /> Purchase
        </a>
      </div>
      <div className="preloader">
        <button className="th-btn preloaderCls">Cancel Preloader</button>
        <div className="preloader-inner">
          <img src="assets/img/logo-icon3.svg" alt="img" />
          <span className="loader">
            NDDB <span className="loading-text">NDDB</span>
          </span>
        </div>
      </div>
      <Header />
      <Dashboard />
      <AboutSection />
      <AboutSection2 />
      <AboutSection3 />
      <OurFeatures1 />
      <SocialContainer />
      <CountNumber />
      <Footer />
      <div className="scroll-top">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              transition: "stroke-dashoffset 10ms linear 0s",
              strokeDasharray: "307.919, 307.919",
              strokeDashoffset: "307.919",
            }}
          />
        </svg>
      </div>
    </React.Fragment>
  );
};

export default Home;
