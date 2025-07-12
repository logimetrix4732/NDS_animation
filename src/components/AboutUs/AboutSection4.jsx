import React from "react";
import AnimatedText from "../AnimatedText";
import aboutImg3 from "../../Images/aboutImg3.jpg";
import aboutImg4 from "../../Images/aboutImg4.jpg";

const AboutSection4 = () => {
  return (
    <div
      className="about-area position-relative overflow-hidden space"
      id="about-sec"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-xxl-7">
            <div className="img-box2">
              <div className="img1 reveal wow fadeInLeft" data-wow-delay=".4s">
                <img
                  src={aboutImg3}
                  alt="About"
                  style={{ width: "585px", height: "622px" }}
                />
              </div>
              <div className="img2 wow fadeInUp" data-wow-delay=".4s">
                <img
                  src={aboutImg4}
                  alt="About"
                  style={{ width: "393px", height: "352px" }}
                />
                <a
                  href="https://youtu.be/KvoAbuVT7SE?si=ZJWHA8cbOcAQqzcj"
                  className="play-btn popup-video"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-sharp fa-solid fa-play" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-xxl-5">
            <div className="">
              <div className="title-area about4-titlebox mb-20">
                <span
                  className="sub-title style1 text-anime-style-2 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  About Us
                </span>
                <AnimatedText
                  text="Empowering India's Dairy Farmers"
                  tag="h2"
                  className="sec-title mb-10 heading text-anime-style-3"
                  width="100%"
                />
              </div>
              <p className="sec-text mb-30 wow fadeInUp" data-wow-delay=".3s">
                NDDB Dairy Services (NDS) is a not-for-profit company (Section
                8), a wholly-owned subsidiary of NDDB. We are committed to
                strengthening India’s dairy sector through sustainable and
                inclusive development models, empowering farmers with tools,
                technologies, and transparent systems.
              </p>
              <div className="about-item-wrap">
                <div className="about-item wow fadeInUp" data-wow-delay=".2s">
                  <div className="about-item_img">
                    <img src="assets/img/icon/map3.svg" alt="" />
                  </div>
                  <div className="about-item_centent">
                    <h5 className="box-title">Inclusive Development</h5>
                    <p className="about-item_text">
                      We help establish Milk Producer Organisations (MPOs) with
                      technical and market support, ensuring fair and direct
                      payments to farmers.
                    </p>
                  </div>
                </div>
                <div className="about-item wow fadeInUp" data-wow-delay=".3s">
                  <div className="about-item_img">
                    <img src="assets/img/icon/guide.svg" alt="" />
                  </div>
                  <div className="about-item_centent">
                    <h5 className="box-title">Capacity Building</h5>
                    <p className="about-item_text">
                      We focus on training and empowering dairy farmers, with
                      special attention to women, enabling them to lead and
                      manage organizations effectively.
                    </p>
                  </div>
                </div>
                <div className="about-item wow fadeInUp" data-wow-delay=".4s">
                  <div className="about-item_img">
                    <img src="assets/img/icon/headphone.svg" alt="" />
                  </div>
                  <div className="about-item_centent">
                    <h5 className="box-title">Breeding Innovations</h5>
                    <p className="about-item_text">
                      Through advanced technologies like Embryo Transfer and AI,
                      our world-class semen stations improve productivity and
                      genetics of milch animals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection4;
