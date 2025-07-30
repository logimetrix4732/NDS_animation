import React from "react";
import { Link } from "react-router-dom";
import DrawerModal from "../DrawerModal";
import { useMediaQuery, useTheme } from "@mui/material";
import AnimatedText from "../AnimatedText";
import ClimateSustainabilityImg from "../../Images/OurExpertiesImg/ClimateSustainabilityImg.JPG";
import finalcover from "../../Images/OurExpertiesImg/DSC_9992.JPG";
import DSC_2582 from "../../Images/OurExpertiesImg/DSC_9845.JPG";
const AboutSection9 = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const ClimateSustainability = {
    title: "Climate & Sustainability",
    content: [
      "At NDS, sustainability is integrated into every layer of our dairy initiatives. Through environment-friendly technologies and renewable energy solutions, we aim to reduce the carbon footprint of dairying and promote climate-resilient practices. In our efforts to build sustainable ecosystems, we have facilitated the installation of flexi biogas plants that convert cow dung into clean cooking fuel, reducing dependence on firewood and fossil fuels. Hydroponics units have been introduced to ensure year-round production of green fodder using minimal water and space helping farmers to maintain animal nutrition even in dry areas. ",
      "To enhance energy efficiency, solar-powered BMCs have been deployed ensuring uninterrupted chilling while lowering diesel use and operational costs. In line with India’s green mobility goals, Electric Vehicles (EVs) have also being introduced for milk collection and logistics. These climate-smart interventions have been successfully implemented in MPOs like Bapudham, Maahi, Sakhi, Asha and Shwetdhara serving as models for clean, efficient and inclusive dairy value chains that benefit both farmers and the planet.",
      "As part of these climate smart interventions, Maahi and Bapudham Milk Producer Organisations in Gujarat and Bihar respectively have adopted a Roll-on Roll-off (Ro-Ro) ferry service to transport milk. This innovative shift from road to sea has reduced travel distance and transit time, helping preserve milk freshness and reduce spoilage. It also lowers carbon emissions and fuel consumption while improving supply chain reliability and cost efficiency.",
    ],
  };
  return (
    <div
      className="about-area  position-relative overflow-hidden space-bottom"
      id="about-sec"
    >
      <DrawerModal
        isMobile={isMobile}
        open={open}
        handleClose={handleClose}
        title={ClimateSustainability.title}
        content={ClimateSustainability.content}
        width="60%"
      />
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="img-box6">
              <div className="img1 reveal wow fadeInLeft" data-wow-delay=".2s">
                <img
                  src={finalcover}
                  alt="About"
                  style={{
                    width: "328px",
                    height: "606px",
                    objectFit: "cover",
                    borderRadius: "30px",
                  }}
                />
              </div>
              <div className="img2 reveal wow fadeInUp" data-wow-delay=".3s">
                <img
                  src={ClimateSustainabilityImg}
                  alt="About"
                  style={{
                    width: "328px",
                    height: "291px",
                    objectFit: "cover",
                    borderRadius: "30px",
                  }}
                />
              </div>
              <div className="img3 reveal wow fadeInRight" data-wow-delay=".4s">
                <img
                  src={DSC_2582}
                  alt="About"
                  style={{
                    width: "328px",
                    height: "291px",
                    objectFit: "cover",
                    borderRadius: "30px",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6 mt-10">
            <div className="ps-xl-3 ms-xl-3 ps-xl-5 ms-xxl-5">
              <div className="title-area about-7-titlebox mb-20">
                <AnimatedText
                  text="Climate & Sustainability"
                  tag="h2"
                  className="sec-title mb-20 heading text-anime-style-3"
                  width="100%"
                />
                <p className="sec-text mb-10 wow fadeInUp" data-wow-delay=".4s">
                  At NDS, sustainability is integrated into every layer of our
                  dairy initiatives. Through environment-friendly technologies
                  and renewable energy solutions, we aim to reduce the carbon
                  footprint of dairying and promote climate-resilient practices.
                  In our efforts to build sustainable ecosystems, we have
                  facilitated the installation of flexi biogas plants that
                  convert cow dung into clean cooking fuel, reducing dependence
                  on firewood and fossil fuels. Hydroponics units have been
                  introduced to ensure year-round production of green fodder
                  using minimal water and space helping farmers to maintain
                  animal nutrition even in dry areas. 
                  <br />
                  To enhance energy efficiency, solar-powered BMCs have been
                  deployed ensuring uninterrupted chilling while lowering diesel
                  use and operational costs. In line with India’s green mobility
                  goals, Electric Vehicles (EVs) have also being introduced for
                  milk collection and logistics.
                </p>
                <div className=" wow fadeInUp" data-wow-delay=".4s">
                  <button onClick={handleClickOpen} className="th-btn th-icon">
                    Learn more <i className="fa-light fa-arrow-right-long" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection9;
