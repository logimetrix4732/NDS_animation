import React from "react";
import AnimatedText from "../AnimatedText";
import bgCow from "../../Images/bg-cow.png";
import DSC_7694 from "../../Images/HomeImgs/DSC_4579.jpg";
import DSC_2802 from "../../Images/HomeImgs/DSC_2802.jpg";
import DSC_0344 from "../../Images/HomeImgs/SUN0545.JPG";
import { HashLink as Link } from "react-router-hash-link";

const AboutSection = () => {
  return (
    <div
      className="about-area position-relative overflow-hidden space"
      id="about-sec"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 order-1 order-xl-2 position-relative">
            <div
              className="d-block d-xl-none"
              style={{
                position: "absolute",
                top: "10%",
                right: "-10%",
                zIndex: 0,
                width: "100%",
                height: "100%",
                backgroundSize: "contain",
                backgroundPosition: "right center",
                backgroundRepeat: "no-repeat",
                opacity: 0.08,
                pointerEvents: "none",
              }}
            >
              <img
                src={bgCow}
                alt="Background Cow"
                style={{ width: "100%" }}
                loading="lazy"
              />
            </div>

            <div
              className="ps-xl-4 ms-xxl-4 position-relative"
              style={{ zIndex: 1 }}
            >
              <div className="title-area about1-title-box mb-10 pe-xxl-5 me-xxl-5">
                <AnimatedText
                  text="NDDB Dairy Services"
                  tag="h2"
                  className="sec-title heading text-anime-style-3"
                  width="100%"
                />
                <p className="sec-text wow fadeInUp" data-wow-delay=".1s">
                  NDDB Dairy Services (NDS), a Section 8 company registered
                  under the Companies Act, is a wholly owned subsidiary of the
                  National Dairy Development Board (NDDB). It functions as the
                  delivery arm of NDDB for field operations relating to
                  promoting Milk Producer Organisations (MPOs) and Productivity
                  Enhancement Services for milch animals.
                  <br />
                  NDS works towards enhancing rural livelihoods by assisting
                  farmers in establishing ‘Producer owned enterprises’ (POEs)
                  which are incorporated under provisions of Part XXI A of the
                  Companies Act. These enterprises run on the principles of
                  mutual assistance.
                  <br />
                  NDS’ efforts to improve milch animal productivity are evident
                  in its innovative breeding initiatives. With four world-class
                  semen stations producing over 50 million semen doses annually,
                  NDS is serving more than 35% of India’s requirement.
                  Technologies such as Embryo Transfer and AI have improved the
                  birth rate of female calves, enhancing gene quality and milk
                  output.
                  <br />
                  Committed to inclusive growth, NDS empowers smallholder dairy
                  farmers, especially women, and facilitates access to markets,
                  technology, and capacity building contributing to a
                  self-reliant and robust rural dairy sector.
                </p>
              </div>
              <div className="mt-20 wow fadeInUp">
                <Link to="/aboutUs" className="th-btn th-icon">
                  Learn more <i className="fa-light fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-xl-6 order-2 order-xl-1 mt-4 mt-xl-0">
            <div className="img-box1">
              <div className="img1 wow fadeInLeft" data-wow-delay=".4s">
                <img
                  src={DSC_7694}
                  alt="About"
                  loading="lazy"
                  style={{
                    width: "325px",
                    height: "650px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="img2 wow fadeInRight" data-wow-delay=".4s">
                <img
                  src={DSC_2802}
                  alt="About"
                  loading="lazy"
                  style={{
                    width: "312px",
                    height: "325px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="img3 wow fadeInUp " data-wow-delay=".4s">
                <img
                  src={DSC_0344}
                  alt="About"
                  loading="lazy"
                  style={{
                    width: "312px",
                    height: "325px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="d-none d-xl-block"
          style={{
            position: "absolute",
            bottom: "16%",
            right: "-8%",
            zIndex: 1,
            backgroundSize: "contain",
            backgroundPosition: "right center",
            backgroundRepeat: "no-repeat",
            pointerEvents: "none",
            animation: "fadeInLight 1s ease forwards",
            opacity: 0,
          }}
        >
          <img
            src={bgCow}
            alt="shape"
            style={{ width: "100%" }}
            loading="lazy"
          />
          <style>
            {`
      @keyframes fadeInLight {
        0% { opacity: 0; }
        100% { opacity: 0.1; }
      }
    `}
          </style>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
