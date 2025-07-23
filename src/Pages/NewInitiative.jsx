import React from "react";
import AboutSection13 from "../components/AboutUs/AboutSection13";
import CommonBanner from "../components/BannersComponents/CommonBanner";

const NewInitiative = () => {
  return (
    <div>
      <CommonBanner
        title="New Initiative"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "New Initiative" },
        ]}
      />
      <AboutSection13 />
    </div>
  );
};

export default NewInitiative;
