import React from "react";
import AboutSection13 from "../components/AboutUs/AboutSection13";
import CommonBanner from "../components/BannersComponents/CommonBanner";
import AboutSection10 from "../components/AboutUs/AboutSection10";

const NewInitiative = () => {
  return (
    <div>
      <CommonBanner
        title="New Initiatives"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "New Initiatives" },
        ]}
      />
      <AboutSection10 />
    </div>
  );
};

export default NewInitiative;
