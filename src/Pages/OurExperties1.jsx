import React from "react";
import { Link } from "react-router-dom";
import breadcumbbg from "../assets/img/bg/breadcumb-bg.jpg";
import OurFeatures3 from "../components/Sliders/OurFeatures3";
import OurFeatures4 from "../components/Sliders/OurFeatures4";
import AboutSection1 from "../components/AboutUs/AboutSection1";
import AboutSection3 from "../components/AboutUs/AboutSection3";
import AboutSection6 from "../components/AboutUs/AboutSection6";
import AboutSection7 from "../components/AboutUs/AboutSection7";
import AboutSection8 from "../components/AboutUs/AboutSection8";
import AboutSection9 from "../components/AboutUs/AboutSection9";
import AboutSection10 from "../components/AboutUs/AboutSection10";
import AboutSection11 from "../components/AboutUs/AboutSection11";
import AboutSection12 from "../components/AboutUs/AboutSection12";
import BlogAndArticle from "../components/BlogandArticleComponents/BlogAndArticle";
import BlogAndArticle1 from "../components/BlogandArticleComponents/BlogAndArticle1";
import AboutSection13 from "../components/AboutUs/AboutSection13";
import OurFeatures5 from "../components/Sliders/OurFeatures5";
import AboutSection14 from "../components/AboutUs/AboutSection14";
import OurExperties7 from "../components/Sliders/OurExperties7";
import AboutSection15 from "../components/AboutUs/AboutSection15";

const OurExperties1 = () => {
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
            <h1 className="breadcumb-title">Our Experties</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Our Experties</li>
            </ul>
          </div>
        </div>
      </div>
      <AboutSection9 />

      <AboutSection7 />
      <AboutSection6 />
      <BlogAndArticle />
      <OurFeatures3 />
      <OurFeatures4 />
      <OurFeatures5 />
      <BlogAndArticle1 />
    </React.Fragment>
  );
};

export default OurExperties1;
