import React from "react";
import AnimatedText from "../AnimatedText";
import { Link } from "react-router-dom";
import DrawerModal from "../DrawerModal";
import ME7A8877 from "../../Images/AnimalProductivityImg/ME7A8877.JPG";
import sag from "../../Images/AnimalProductivityImg/semonStationApp.jpg";
import _SUN7366 from "../../Images/AnimalProductivityImg/_SUN7366.JPG";
import checkMarkIcon from "../../Images/HomeImgs/checkMarkIcon.png";
import { useTheme, useMediaQuery } from "@mui/material";
const AboutSection7 = () => {
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
    title: "Importance and Impact of Semen Stations",
    content: [
      "While Artificial Insemination (AI) remains a critical and widely adopted tool for mass genetic improvement, NDS has consistently worked to popularise and expand the adoption of other advanced reproductive technologies such as In-Vitro Fertilisation (IVF) and Embryo Transfer (ET).",
      "As a part of this initiative, NDS is acting as a key implementing agency under Rashtriya Gokul Mission’s (RGM’s) Accelerated Breed Improvement Programme (ABIP), delivering these advanced reproductive technologies directly to farmers across various regions of the country.",
      "Our semen stations together produce and distribute about 50 million semen doses annually. Across India, the widespread use of SAG Frozen Semen Doses (FSD) leads to the birth of a high genetic merit calf every two seconds. NDS managed semen stations are graded ‘A’ by the Central Monitoring Unit (CMU), Government of India and have been consistently ranked among the top semen stations in the country.",
      "A key technological advancement is the introduction of indigenous sex sorted semen technology called Gausort. Developed by NDDB with support from the DAHD, GoI, this innovation envisions to transform the country’s dairy ecosystem by increasing the birth of female calves and enhancing the genetic quality and productivity of dairy herds. NDS by contributions to the commercialisation is making cost effective sex-sorted semen accessible for farmers, Gausort will help improve farm profitability and contribute to sustainable dairy development across India.",
      "We focus on -  ",
      "♦ Genetic Selection - Sourcing and breeding genetically superior bulls through structured Progeny Testing and Pedigree Selection programs.",
      "♦ Biosecurity & Welfare - Ensuring animal health, comfort and biosecurity through high-standard management practices. ",
      "♦ Technology Integration - Using digital platforms for semen inventory, traceability and performance tracking. ",
      "♦ Farmer Access - Facilitating seamless access to quality semen through Producer Organisations and field AI networks. ",
      "Our commitment is to deliver reliable, affordable, and scientific genetic solutions that contribute to long-term productivity enhancement and breed improvement across the country. ",
    ],
  };
  return (
    <div
      className="about-area position-relative overflow-hidden space-bottom overflow-hidden"
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
          <div className="col-xl-7">
            <div className="img-box3 style1">
              <div className="img1 reveal">
                <img
                  src={sag}
                  alt="About"
                  loading="lazy"
                  style={{
                    width: "424px",
                    height: "432px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="img2 wow fadeInRight" data-wow-delay=".3s">
                <img
                  src={ME7A8877}
                  alt="About"
                  loading="lazy"
                  style={{
                    width: "434px",
                    height: "448px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="img3 movingX">
                <img
                  src={_SUN7366}
                  alt="About"
                  loading="lazy"
                  style={{
                    width: "434px",
                    height: "330px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-5">
            <div className="ps-xxl-2">
              <div className="title-area about-3-titlebox mb-20 pe-xxl-1 me-xxl-1">
                <AnimatedText
                  text="Semen Stations"
                  tag="h2"
                  className="sec-title mb-10 heading text-anime-style-3"
                  width="100%"
                />
              </div>
              <p
                className="sec-text mb-10 wow fadeInUp ellipsis-5"
                data-wow-delay=".1s"
              >
                While Artificial Insemination (AI) remains a critical and widely
                adopted tool for mass genetic improvement, NDS has consistently
                worked to popularise and expand the adoption of other advanced
                reproductive technologies such as In-Vitro Fertilisation (IVF)
                and Embryo Transfer (ET).
                <span style={{ display: "block", marginTop: "5px" }}>
                  As a part of this initiative, NDS is acting as a key
                  implementing agency under Rashtriya Gokul Mission’s (RGM’s)
                  Accelerated Breed Improvement Programme (ABIP), delivering
                  these advanced reproductive technologies directly to farmers
                  across various regions of the country.
                </span>
                <span style={{ display: "block", marginTop: "5px" }}>
                  We focus on -  
                </span>
              </p>

              <div className="about-feature-wrap">
                <div className="about-feature-list">
                  <ul>
                    <li className="wow fadeInUp" data-wow-delay=".4s">
                      <span className="about-feature-icon">
                        <img
                          src={checkMarkIcon}
                          alt=""
                          loading="lazy"
                          style={{
                            width: "26px",
                            height: "22px",
                          }}
                        />
                      </span>
                      <p className="sec-text wow fadeInUp" data-wow-delay=".2s">
                        Genetic Selection - Sourcing and breeding genetically
                        superior bulls through structured Progeny Testing and
                        Pedigree Selection programs.
                      </p>
                    </li>
                    <li className="wow fadeInUp" data-wow-delay=".5s">
                      <span className="about-feature-icon">
                        <img
                          src={checkMarkIcon}
                          alt=""
                          loading="lazy"
                          style={{ width: "26px", height: "22px" }}
                        />
                      </span>
                      <p className="sec-text wow fadeInUp" data-wow-delay=".2s">
                        Biosecurity & Welfare - Ensuring animal health, comfort
                        and biosecurity through high-standard management
                        practices. 
                      </p>
                    </li>
                    <li className="wow fadeInUp" data-wow-delay=".5s">
                      <span className="about-feature-icon">
                        <img
                          src={checkMarkIcon}
                          alt=""
                          loading="lazy"
                          style={{ width: "26px", height: "22px" }}
                        />
                      </span>
                      <p className="sec-text wow fadeInUp" data-wow-delay=".2s">
                        Technology Integration - Using digital platforms for
                        semen inventory, traceability and performance tracking. 
                      </p>
                    </li>
                    <li className="wow fadeInUp" data-wow-delay=".5s">
                      <span className="about-feature-icon">
                        <img
                          src={checkMarkIcon}
                          alt=""
                          loading="lazy"
                          style={{ width: "26px", height: "22px" }}
                        />
                      </span>
                      <p className="sec-text wow fadeInUp" data-wow-delay=".2s">
                        Farmer Access - Facilitating seamless access to quality
                        semen through Producer Organisations and field AI
                        networks. 
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-35 wow fadeInUp" data-wow-delay=".4s">
                <button onClick={handleClickOpen} className="th-btn th-icon">
                  Learn more <i className="fa-light fa-arrow-right-long" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection7;
