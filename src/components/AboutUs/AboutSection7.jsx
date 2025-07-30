import React from "react";
import AnimatedText from "../AnimatedText";
import { Link } from "react-router-dom";
import ME7A8877 from "../../Images/AnimalProductivityImg/ME7A8877.JPG";
import _SUN7366 from "../../Images/AnimalProductivityImg/sag.JPG";
import DSC_0492 from "../../Images/AnimalProductivityImg/sag1.JPG";
import checkMarkIcon from "../../Images/checkMarkIcon.jpg";
const AboutSection7 = () => {
  return (
    <div
      className="about-area position-relative overflow-hidden space overflow-hidden"
      id="about-sec"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-7">
            <div className="img-box3 style1">
              <div className="img1 reveal">
                <img
                  src={_SUN7366}
                  alt="About"
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
                  style={{
                    width: "434px",
                    height: "448px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="img3 movingX">
                <img
                  src={DSC_0492}
                  alt="About"
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
                <span className="sub-title style1 text-anime-style-2 wow fadeInLeft">
                  Importance and Impact of Semen Stations
                </span>
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
                  Our semen stations together produce and distribute about 50
                  million semen doses annually. Across India, the widespread use
                  of SAG Frozen Semen Doses (FSD) leads to the birth of a high
                  genetic merit calf every two seconds. NDS managed semen
                  stations are graded ‘A’ by the Central Monitoring Unit (CMU),
                  Government of India and have been consistently ranked among
                  the top semen stations in the country.
                </span>
              </p>

              <div class="about-feature-wrap">
                <div class="about-feature-list">
                  <ul>
                    <li class="wow fadeInUp" data-wow-delay=".4s">
                      <span class="about-feature-icon">
                        <img
                          src={checkMarkIcon}
                          alt=""
                          style={{
                            width: "26px",
                            height: "22px",
                          }}
                        />
                      </span>
                      Genetic Selection - Sourcing and breeding genetically
                      superior bulls through structured Progeny Testing and
                      Pedigree Selection programs
                    </li>
                    <li class="wow fadeInUp" data-wow-delay=".5s">
                      <span class="about-feature-icon">
                        <img
                          src={checkMarkIcon}
                          alt=""
                          style={{ width: "26px", height: "22px" }}
                        />
                      </span>
                      Biosecurity & Welfare - Ensuring animal health, comfort
                      and biosecurity through high-standard management
                      practices. 
                    </li>
                    <li class="wow fadeInUp" data-wow-delay=".5s">
                      <span class="about-feature-icon">
                        <img
                          src={checkMarkIcon}
                          alt=""
                          style={{ width: "26px", height: "22px" }}
                        />
                      </span>
                      Technology Integration - Using digital platforms for semen
                      inventory, traceability and performance tracking. 
                    </li>
                    <li class="wow fadeInUp" data-wow-delay=".5s">
                      <span class="about-feature-icon">
                        <img
                          src={checkMarkIcon}
                          alt=""
                          style={{ width: "26px", height: "22px" }}
                        />
                      </span>
                      Farmer Access - Facilitating seamless access to quality
                      semen through Producer Organisations and field AI
                      networks. 
                    </li>
                  </ul>
                </div>
              </div>
              <div class="mt-35 wow fadeInUp" data-wow-delay=".6s">
                <Link to="/animalProductivity" class="th-btn th-icon">
                  Learn More <i class="fa-light fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection7;
