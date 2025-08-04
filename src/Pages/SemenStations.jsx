import React from "react";
import AboutSection7 from "../components/AboutUs/AboutSection7";
import AboutSection17 from "../components/AboutUs/AboutSection17";
import CommonBanner from "../components/BannersComponents/CommonBanner";

const SemenStations = () => {
  return (
    <div>
      <CommonBanner
        title="Animal Productivity Services"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Animal Productivity Services" },
        ]}
      />
      <AboutSection17 />
      <AboutSection7 />
      <MapComponent />
    </div>
  );
};

export default SemenStations;
