import React from "react";
import OurFeatures2 from "../components/Sliders/OurFeatures2";
import AboutSection4 from "../components/AboutUs/AboutSection4";
import AboutSection14 from "../components/AboutUs/AboutSection14";
import CommonBanner from "../components/BannersComponents/CommonBanner";
import OurFeatures5 from "../components/Sliders/OurFeatures5";

const AboutUs = () => {
  return (
    <React.Fragment>
      <CommonBanner
        title="About Us"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "About Us" }]}
      />
      <AboutSection4 />
      <AboutSection14 />
      <OurFeatures5 />
      <OurFeatures2 />
    </React.Fragment>
  );
};

export default AboutUs;
