import React from "react";
import AboutSection7 from "../components/AboutUs/AboutSection7";
import AboutSection17 from "../components/AboutUs/AboutSection17";
import CommonBanner from "../components/BannersComponents/CommonBanner";

const SemenStations = () => {
  return (
    <div>
      <CommonBanner
        title="Semen Stations"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Semen Stations" },
        ]}
      />
      <AboutSection17 />
      <AboutSection7 />
    </div>
  );
};

export default SemenStations;
