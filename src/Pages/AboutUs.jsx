import React from "react";
import AboutSection4 from "../components/AboutUs/AboutSection4";
import AboutSection5 from "../components/AboutUs/AboutSection5";
import OurFeatures2 from "../components/Sliders/OurFeatures2";
import breadcumbbg from "../assets/img/bg/breadcumb-bg.jpg";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <React.Fragment>
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
      <OurFeatures2 />
    </React.Fragment>
  );
};

export default AboutUs;
