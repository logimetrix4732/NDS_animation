import React from "react";
import AnimatedText from "../AnimatedText";
import aboutImg5 from "../../Images/aboutImg5.jpg";

const AboutSection5 = () => {
  return (
    <div className="about-4-area overflow-hidden space bg-smoke" id="about-sec">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-6">
            <div className="title-area">
              <span
                className="sub-title text-anime-style-2 wow fadeInUp"
                data-wow-delay=".4s"
              >
                About Us
              </span>

              <AnimatedText
                text="A Complete Guide to Modern Web & Mobile App Development"
                tag="h2"
                className="sec-title mb-10 heading text-anime-style-3"
                width="100%"
              />
            </div>
          </div>
          <div className="col-lg-5">
            <p className="ps-xl-5 wow fadeInUp" data-wow-delay=".4s">
              Web and app development focuses on designing, creating, and
              maintaining websites and mobile applications to enhance digital
              experiences. These services cater to businesses, individuals, and
              organizations looking to establish a strong online presence,
              streamline operations, or connect with their audiences
              effectively.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row gy-4">
          <div className="col-xl-4">
            <div className="img-box9">
              <div className="row gx-30">
                <div className="col-sm-6">
                  <div className="about-item2">
                    <div className="img1 wow fadeInDown" data-wow-delay=".2s">
                      <img src="assets/img/normal/about_8_1.jpg" alt="About" />
                      <a
                        href="assets/img/normal/about_8_1.jpg"
                        className="icon-btn popup-image"
                      >
                        <i className="fa-solid fa-arrow-down-left-and-arrow-up-right-to-center"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="about-item2 mt-60">
                    <div className="img1 wow fadeInUp" data-wow-delay=".2s">
                      <img src="assets/img/normal/about_8_2.jpg" alt="About" />
                      <a
                        href="assets/img/normal/about_8_2.jpg"
                        className="icon-btn popup-image"
                      >
                        <i className="fa-solid fa-arrow-down-left-and-arrow-up-right-to-center"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="about-content-wrapper">
              <div className="about-item-wrap">
                <div className="about-client-box">
                  <div className="client-thumb-group">
                    <div className="thumb wow fadeInUp">
                      <img
                        src="assets/img/shape/client-img-2-1.png"
                        alt="avater"
                      />
                    </div>
                    <div className="thumb wow fadeInUp" data-wow-delay=".1s">
                      <img
                        src="assets/img/shape/client-img-2-2.png"
                        alt="avater"
                      />
                    </div>
                    <div className="thumb wow fadeInUp" data-wow-delay=".2s">
                      <img
                        src="assets/img/shape/client-img-2-3.png"
                        alt="avater"
                      />
                    </div>
                    <div className="thumb wow fadeInUp" data-wow-delay=".3s">
                      <img
                        src="assets/img/shape/client-img-2-4.png"
                        alt="avater"
                      />
                    </div>
                    <div
                      className="thumb wow fadeInUp icon"
                      data-wow-delay=".4s"
                    >
                      <i className="fa-light fa-plus"></i>
                    </div>
                  </div>
                </div>
                <div className="about-item style2">
                  <div className="about-item_img wow fadeInLeft">
                    <img src="assets/img/icon/th-shield.svg" alt="" />
                  </div>
                  <div
                    className="about-item_centent wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <h5 className="box-title">Responsive Design</h5>
                    <p className="about-item_text">
                      Practices designed to safeguard digital assets and ensure
                    </p>
                  </div>
                </div>
                <div className="about-item style2">
                  <div className="about-item_img wow fadeInRight">
                    <img src="assets/img/icon/th-shield.svg" alt="" />
                  </div>
                  <div
                    className="about-item_centent wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <h5 className="box-title">Custom Functionality</h5>
                    <p className="about-item_text">
                      Practices designed to safeguard digital assets and ensure
                    </p>
                  </div>
                </div>
                <div className="about-item style2">
                  <div className="about-item_img wow fadeInLeft">
                    <img src="assets/img/icon/th-shield.svg" alt="" />
                  </div>
                  <div
                    className="about-item_centent wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <h5 className="box-title">Integration Capabilities</h5>
                    <p className="about-item_text">
                      Practices designed to safeguard digital assets and ensure
                    </p>
                  </div>
                </div>
              </div>
              <div className="about-image9 wow fadeInUp" data-wow-delay=".4s">
                <img src="assets/img/normal/about_8_3.jpg" alt="" />
                <div className="cilent-box ">
                  <span className="review">
                    <i className="fa-sharp fa-solid fa-star"></i>16 k+
                  </span>
                  <p className="cilent-box_counter">
                    Business Needs Custom Web & App Development in 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection5;
