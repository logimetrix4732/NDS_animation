import React from "react";
import AnimatedText from "../AnimatedText";
import bgCow from "../../Images/bg-cow.png";
import video4 from "../../Images/Videos/video4.mp4";
import aboutImg from "../../Images/aboutImg.jpg";
import aboutImg1 from "../../Images/aboutImg1.jpg";
import aboutImg2 from "../../Images/aboutImg2.jpg";
import { Link } from "react-router-dom";
const AboutSection = () => {
  return (
    <div
      className="about-area position-relative overflow-hidden space"
      id="about-sec"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="img-box1">
              <div className="img1 wow fadeInUp" data-wow-delay=".4s">
                <img
                  src={aboutImg2}
                  alt="About"
                  style={{
                    width: "325px",
                    height: "630px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="img2 wow fadeInLeft" data-wow-delay=".4s">
                <img
                  src={aboutImg1}
                  alt="About"
                  style={{
                    width: "312px",
                    height: "315px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="img3 wow fadeInLeft" data-wow-delay=".4s">
                <img
                  src={aboutImg}
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
          <div className="col-xl-6">
            <div className="ps-xl-4 ms-xxl-4">
              <div className="title-area about1-title-box mb-20 pe-xxl-5 me-xxl-5">
                <span
                  className="sub-title style1 text-anime-style-2 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  About Us Our Company
                </span>
                <AnimatedText
                  text="NDDB Dairy Services"
                  tag="h2"
                  className="sec-title mb-10 heading text-anime-style-3"
                  width="100%"
                />
                <p className="sec-text mb-30 wow fadeInUp" data-wow-delay=".1s">
                  NDDB Dairy Services (NDS) is a not-for-profit Section 8
                  company, fully owned by the National Dairy Development Board
                  (NDDB). Acting as NDDB's field-level implementation arm, NDS
                  supports the formation and strengthening of Farmer Producer
                  Companies (PCs) and drives productivity enhancement
                  initiatives for dairy animals across India.
                </p>
              </div>
              <div className="about-item-wrap">
                <div className="about-item wow fadeInUp" data-wow-delay=".2s">
                  <div className="about-item_img">
                    <img src="assets/img/icon/map3.svg" alt="" />
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
                    <img src="assets/img/icon/guide.svg" alt="" />
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
              <div className="mt-35 wow fadeInUp">
                <Link to="/" className="th-btn th-icon">
                  Learn More <i className="fa-light fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className=""
          style={{
            position: "absolute",
            bottom: "16%",
            right: "-8%",
            zIndex: 1,
            backgroundSize: "contain",
            backgroundPosition: "right center",
            backgroundRepeat: "no-repeat",
            opacity: 0.1,
            pointerEvents: "none",
          }}
        >
          <img src={bgCow} alt="shape" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
