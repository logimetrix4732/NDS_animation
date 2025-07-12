import React from "react";
import AnimatedText from "../AnimatedText";
import aboutImg6 from "../../Images/aboutImg6.jpg";
import aboutImg7 from "../../Images/aboutImg9.jpg";
import aboutImg8 from "../../Images/aboutImg8.jpg";

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
                Shaping India's Dairy Future
              </span>

              <AnimatedText
                text="Enabling Farmers, Enriching India"
                tag="h2"
                className="sec-title mb-10 heading text-anime-style-3"
                width="100%"
              />
            </div>
          </div>

          <div className="col-lg-5">
            <p className="ps-xl-5 wow fadeInUp" data-wow-delay=".4s">
              NDDB Dairy Services (NDS) is a Section 8 company under the
              Companies Act, 2013 and a wholly-owned subsidiary of NDDB. We are
              dedicated to strengthening rural livelihoods through sustainable
              dairy initiatives, improved animal productivity, and transparent
              farmer support systems.
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
                      <img src={aboutImg6} alt="About" />
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
                      <img src={aboutImg7} alt="About" />
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
                <div className="about-item style2">
                  <div className="about-item_img wow fadeInLeft">
                    <img src="assets/img/icon/th-shield.svg" alt="" />
                  </div>
                  <div
                    className="about-item_centent wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <h5 className="box-title">Empowering Farmers</h5>
                    <p className="about-item_text">
                      We support Milk Producer Organisations (MPOs) with assured
                      markets, fair pricing, and direct bank payments to
                      farmers.
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
                    <h5 className="box-title">Breed Improvement</h5>
                    <p className="about-item_text">
                      With four world-class semen stations, we provide over 50
                      million semen doses annually, improving gene quality and
                      milk yield.
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
                    <h5 className="box-title">Women Inclusion</h5>
                    <p className="about-item_text">
                      Our programs empower women dairy farmers across rural
                      India, enabling them to take leadership roles in the dairy
                      ecosystem.
                    </p>
                  </div>
                </div>
              </div>

              <div className="about-image9 wow fadeInUp" data-wow-delay=".4s">
                <img src={aboutImg8} alt="" />
                <div className="cilent-box">
                  <span className="review">
                    <i className="fa-sharp fa-solid fa-star"></i>35%+
                  </span>
                  <p className="cilent-box_counter">
                    India’s semen requirement served by NDS stations annually
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
