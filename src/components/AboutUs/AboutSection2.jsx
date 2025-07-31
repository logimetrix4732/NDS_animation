import React from "react";
import AnimatedText from "../AnimatedText";
import video from "../../Images/Videos/video.mp4";
import DSC_4156 from "../../Images/HomeImgs/DSC_4156.jpg";
import DSC_9821 from "../../Images/HomeImgs/DSC_9821.jpg";
import checkMarkIcon from "../../Images/HomeImgs/checkMarkIcon.png";
import { Link } from "react-router-dom";
const AboutSection2 = () => {
  return (
    <div
      className="about-area position-relative overflow-hidden"
      id="about-sec"
      style={{ zIndex: 1 }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="title-area mb-10 mt-35">
              <AnimatedText
                text="Success Stories"
                tag="h2"
                className="sec-title mb-10 heading text-anime-style-3"
                width="100%"
              />
              <p
                className="sec-text wow fadeInUp desktop-margin-bottom"
                data-wow-delay=".2s"
              >
                At the heart of NDDB Dairy Services lies the spirit of rural
                women who are not just dairy farmers but changemakers. Through
                our programs, thousands of women have unlocked new
                opportunities, financial independence and community leadership.
                Here we share real stories of courage, resilience and
                transformation directly from the women who are redefining rural
                India
              </p>
            </div>
            <div className="img-box8">
              <div className="row">
                <div
                  className="col-xl-6 col-md-6 col-sm-6 col-12 d-flex justify-content-center wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div className="img1 reveal">
                    <img
                      src={DSC_4156}
                      alt="About"
                      style={{
                        width: "312px",
                        height: "331.05px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
                <div
                  className="col-xl-6 col-md-6 col-sm-6 col-12 d-flex justify-content-center wow fadeInRight"
                  data-wow-delay=".4s"
                >
                  <div className="img2 reveal ">
                    <img
                      src={DSC_9821}
                      alt="About"
                      style={{
                        width: "312px",
                        height: "331.05px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 mb-4 mb-lg-0">
            <div className="img-box8 ms-xl-5 mt-40">
              <div className="reveal">
                <video
                  src={video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "40px",
                  }}
                ></video>
              </div>
              <div className="about-feature-list mt-20">
                <ul>
                  <li className="wow fadeInUp" data-wow-delay=".5s">
                    <span className="about-feature-icon">
                      <img
                        src={checkMarkIcon}
                        alt=""
                        style={{ width: "28px", height: "24px" }}
                      />
                    </span>
                    <p className="sec-text wow fadeInUp" data-wow-delay=".2s">
                      Empowered through skill building to run dairy operations
                      independently.
                    </p>
                  </li>
                  <li className="wow fadeInUp" data-wow-delay=".5s">
                    <span className="about-feature-icon">
                      <img
                        src={checkMarkIcon}
                        alt=""
                        style={{ width: "28px", height: "24px" }}
                      />
                    </span>
                    <p className="sec-text wow fadeInUp" data-wow-delay=".2s">
                      Creating community impact by inspiring change beyond their
                      households.
                    </p>
                  </li>
                  <li className="wow fadeInUp" data-wow-delay=".5s">
                    <span className="about-feature-icon">
                      <img
                        src={checkMarkIcon}
                        alt=""
                        style={{ width: "28px", height: "24px" }}
                      />
                    </span>
                    <p className="sec-text wow fadeInUp" data-wow-delay=".2s">
                      Breaking barriers and rising above social and economic
                      challenges.
                    </p>
                  </li>
                  <li className="wow fadeInUp" data-wow-delay=".4s">
                    <span className="about-feature-icon">
                      <img
                        src={checkMarkIcon}
                        alt=""
                        style={{ width: "28px", height: "24px" }}
                      />
                    </span>
                    <p className="sec-text wow fadeInUp" data-wow-delay=".2s">
                      From milking to managing, Women are leading dairy
                      cooperatives with confidence.
                    </p>
                  </li>
                  <li className="wow fadeInUp" data-wow-delay=".5s">
                    <span className="about-feature-icon">
                      <img
                        src={checkMarkIcon}
                        alt=""
                        style={{ width: "28px", height: "24px" }}
                      />
                    </span>
                    <p className="sec-text wow fadeInUp" data-wow-delay=".2s">
                      Achieving financial freedom by earning through dairy and
                      becoming self reliant.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="mt-35 wow fadeInUp" data-wow-delay=".5s"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection2;
