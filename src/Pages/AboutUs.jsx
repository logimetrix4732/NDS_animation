import React from "react";
import OurFeatures2 from "../components/Sliders/OurFeatures2";
import AboutSection4 from "../components/AboutUs/AboutSection4";
import AboutSection14 from "../components/AboutUs/AboutSection14";
import MainBanner from "../components/BannersComponents/mainBanner";

const AboutUs = () => {
  return (
    <React.Fragment>
      <MainBanner
        title="About Us"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "About Us" }]}
      />
      <AboutSection4 />
      <AboutSection14 />
      <OurFeatures2 />
    </React.Fragment>
  );
};

export default AboutUs;
