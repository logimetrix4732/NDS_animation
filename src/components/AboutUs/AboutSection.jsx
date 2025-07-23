import React from "react";
import AnimatedText from "../AnimatedText";
import bgCow from "../../Images/bg-cow.png";
import aboutImg from "../../Images/aboutImg.jpg";
import aboutImg1 from "../../Images/aboutImg1.jpg";
import aboutImg2 from "../../Images/aboutImg2.jpg";
import { Link } from "react-router-dom";
import DSC_7694 from "../../Images/HomeImgs/DSC_7694.jpg";
import DSC_2802 from "../../Images/HomeImgs/DSC_2802.jpg";
import DSC_0344 from "../../Images/HomeImgs/DSC_0344.jpg";

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
              <img src={bgCow} alt="Background Cow" style={{ width: "100%" }} />
            </div>

            <div
              className="ps-xl-4 ms-xxl-4 position-relative"
              style={{ zIndex: 1 }}
            >
              <div className="title-area about1-title-box mb-20 pe-xxl-5 me-xxl-5">
                <span
                  className="sub-title style1 text-anime-style-2 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  About Us
                </span>
                <AnimatedText
                  text="NDDB Dairy Services"
                  tag="h2"
                  className="sec-title mb-10 heading text-anime-style-3"
                  width="100%"
                />
                <p className="sec-text mb-30 wow fadeInUp" data-wow-delay=".1s">
                  NDDB Dairy Services (NDS), a Section 8 company registered
                  under the Companies Act, is a wholly owned subsidiary of the
                  National Dairy Development Board (NDDB). It functions as the
                  delivery arm of NDDB for field operations relating to
                  promoting Milk Producer Organisations (MPOs) and Productivity
                  Enhancement Services for milch animals.
                </p>
              </div>

              <div className="about-item-wrap">
                <div className="about-item wow fadeInUp" data-wow-delay=".2s">
                  <div className="about-item_img">
                    <img src="assets/img/icon/map3.svg" alt="Mission" />
                  </div>
                  <div className="about-item_centent">
                    <h5 className="box-title">Our Mission</h5>
                    <p className="about-item_text">
                      Empowering dairy farmers by building efficient,
                      transparent, and sustainable milk production and
                      procurement systems.
                    </p>
                  </div>
                </div>
                <div className="about-item wow fadeInUp" data-wow-delay=".3s">
                  <div className="about-item_img">
                    <img src="assets/img/icon/guide.svg" alt="Vision" />
                  </div>
                  <div className="about-item_centent">
                    <h5 className="box-title">Our Vision</h5>
                    <p className="about-item_text">
                      To be the leading enabler of farmer-owned institutions
                      delivering end-to-end dairy solutions for long-term rural
                      prosperity.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-35 wow fadeInUp"></div>
            </div>
          </div>

          <div className="col-xl-6 order-2 order-xl-1 mt-4 mt-xl-0">
            <div className="img-box1">
              <div className="img1 wow fadeInLeft" data-wow-delay=".4s">
                <img
                  src={DSC_7694}
                  alt="About"
                  style={{
                    width: "325px",
                    height: "630px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="img2 wow fadeInRight" data-wow-delay=".4s">
                <img
                  src={DSC_2802}
                  alt="About"
                  style={{
                    width: "312px",
                    height: "315px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="img3 wow fadeInUp" data-wow-delay=".4s">
                <img
                  src={DSC_0344}
                  alt="About"
                  style={{
                    width: "312px",
                    height: "315px",
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
          <img src={bgCow} alt="shape" style={{ width: "100%" }} />
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
