import React from "react";
import AboutSection3 from "../components/AboutUs/AboutSection3";
import AboutSection10 from "../components/AboutUs/AboutSection10";
import AboutSection11 from "../components/AboutUs/AboutSection11";
import AboutSection12 from "../components/AboutUs/AboutSection12";
import AboutSection16 from "../components/AboutUs/AboutSection16";
import CommonBanner from "../components/BannersComponents/CommonBanner";

const OurExperties = () => {
  return (
    <React.Fragment>
      <CommonBanner
        title="Our Experties"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Our Experties" }]}
      />
      <AboutSection12 />
      <AboutSection3 />
      <AboutSection10 />
      <AboutSection11 />
      <AboutSection16 />
    </React.Fragment>
  );
};

export default OurExperties;
