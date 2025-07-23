import React from "react";
import MainBanner from "../components/BannersComponents/mainBanner";
import AboutSection7 from "../components/AboutUs/AboutSection7";
import AboutSection15 from "../components/AboutUs/AboutSection15";

const SemenStations = () => {
  return (
    <div>
      <MainBanner
        title="Semen Stations"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Semen Stations" },
        ]}
      />
      <AboutSection15 />
      <AboutSection7 />
    </div>
  );
};

export default SemenStations;
