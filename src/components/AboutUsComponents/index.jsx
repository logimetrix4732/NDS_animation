import React from "react";
import OurFeatures2 from "../Sliders/OurFeatures2";
import AboutSection4 from "../AboutUs/AboutSection4";
import AboutSection5 from "../AboutUs/AboutSection5";
import breadcumbbg from "../../assets/img/bg/breadcumb-bg.jpg";
import { Link } from "react-router-dom";
import AboutSection6 from "../AboutUs/AboutSection6";
const AboutUsComponents = () => {
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
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: `url(${breadcumbbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">About Us</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </div>
      <AboutSection4 />
      <AboutSection5 />
      <AboutSection6 />
      <OurFeatures2 />
    </React.Fragment>
  );
};

export default AboutUsComponents;
