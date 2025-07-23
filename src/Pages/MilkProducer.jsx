import { Link } from "react-router-dom";
import OurExperties7 from "../components/Sliders/OurExperties7";
import AboutSection1 from "../components/AboutUs/AboutSection1";
import Banner from "../components/BannersComponents/Banner";
import AboutSection8 from "../components/AboutUs/AboutSection8";
import CommonBanner from "../components/BannersComponents/CommonBanner";

const MilkProducer = () => {
  return (
    <div>
      <CommonBanner
        title="Milk Producer"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Milk Producer" }]}
      />
      <OurExperties7 />
      <AboutSection1 />
      <Banner />
      <AboutSection8 />
    </div>
  );
};

export default MilkProducer;
