import React from "react";
import SmartDairySolutionImg from "../../Images/OurExpertiesImg/SmartDairySolutionImg.JPG";
import DrawerModal from "../DrawerModal";
import { useMediaQuery, useTheme } from "@mui/material";
import AnimatedText from "../AnimatedText";
const AboutSection16 = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const ClimateSustainability = {
    title: "Smart Dairy Solutions",
    content: [
      "In our pursuit of enhancing efficiency and quality across the dairy value chain, NDS in collaboration with National Cooperative Dairy Federation of India (NCDFI) has launched Smart Dairy Solutions, an initiative aimed at providing top quality dairy and farm equipment directly to MPOs across the country. This initiative is tailored to meet the diverse and evolving needs of MPOs and dairy farmers. By aggregating demand and collaborating with reputed manufacturers, Smart Dairy Solutions ensures that stakeholders gain access to reliable, cost-effective and high-performing dairy equipments. The product range includes essentials such as milking machines, cryocans, veterinary equipment, AI tools, cow mats, milk cans, cow collar device, applicators, AI Sheaths, AI applicator device and ear tags etc. ",
      "Smart Dairy Solutions is more than just a procurement channel, it is a strategic step towards modernising rural dairying, reducing input costs and empowering producers with tools that enhance productivity, animal welfare and operational efficiency. As a trusted partner in dairy excellence, NDS remains committed to support producer owned organisations through innovative, transparent and value driven solutions. ",
    ],
  };
  return (
    <div className="about-area space-bottom space">
      <DrawerModal
        isMobile={isMobile}
        open={open}
        anchor="left"
        toggleDrawer={toggleDrawer}
        title={ClimateSustainability.title}
        content={ClimateSustainability.content}
      />
      <div className="container">
        <div className="row gy-30 mb-60 align-items-center">
          <div className="col-xl-6 mt-10">
            <div className="ps-xl-3 ms-xl-3 ps-xl-5 ms-xxl-5">
              <div className="title-area about-7-titlebox mb-20 mt-40">
                <AnimatedText
                  text="Smart Dairy Solutions "
                  tag="h2"
                  className="sec-title mb-20 heading text-anime-style-3"
                  width="100%"
                />
                <p className="sec-text mb-10 wow fadeInUp" data-wow-delay=".4s">
                  In our pursuit of enhancing efficiency and quality across the
                  dairy value chain, NDS in collaboration with National
                  Cooperative Dairy Federation of India (NCDFI) has launched
                  Smart Dairy Solutions, an initiative aimed at providing top
                  quality dairy and farm equipment directly to MPOs across the
                  country. This initiative is tailored to meet the diverse and
                  evolving needs of MPOs and dairy farmers. By aggregating
                  demand and collaborating with reputed manufacturers, Smart
                  Dairy Solutions ensures that stakeholders gain access to
                  reliable, cost-effective and high-performing dairy equipments.
                  The product range includes essentials such as milking
                  machines, cryocans, veterinary equipment, AI tools, cow mats,
                  milk cans, cow collar device, applicators, AI Sheaths, AI
                  applicator device and ear tags etc. 
                  <br />
                  Smart Dairy Solutions is more than just a procurement channel,
                  it is a strategic step towards modernising rural dairying,
                  reducing input.
                </p>
                <div className=" wow fadeInUp" data-wow-delay=".4s">
                  <button
                    onClick={toggleDrawer(true)}
                    className="th-btn th-icon"
                  >
                    Learn more <i className="fa-light fa-arrow-right-long" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-0 order-lg-1">
            <div className="about-image ab-img16 global-img">
              <img
                src={SmartDairySolutionImg}
                alt=""
                style={{
                  width: "648px",
                  height: "541.33px",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection16;
