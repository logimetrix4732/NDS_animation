import React from "react";
import MainBanner from "../components/BannersComponents/mainBanner";
import AboutSection13 from "../components/AboutUs/AboutSection13";

const NewInitiative = () => {
  return (
    <div>
      <MainBanner
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
