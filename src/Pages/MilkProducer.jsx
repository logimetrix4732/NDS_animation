import { Link } from "react-router-dom";
import Banner from "../components/BannersComponents/Banner";
import OurExperties7 from "../components/Sliders/OurExperties7";
import AboutSection1 from "../components/AboutUs/AboutSection1";
import AboutSection8 from "../components/AboutUs/AboutSection8";
import CommonBanner from "../components/BannersComponents/CommonBanner";
import OurFeatures from "../components/Sliders/OurFeatures4";

const MilkProducer = () => {
  return (
    <div>
      <CommonBanner
        title="Milk Producer Organisations (MPOs)"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "MPOs" }]}
      />
      <OurExperties7 />
      <AboutSection1 />
      <Banner />
      <AboutSection8 />
      <OurFeatures />
    </div>
  );
};

export default MilkProducer;
