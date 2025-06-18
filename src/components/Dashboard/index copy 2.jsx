import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import hero_bg_2_1 from "../../assets/img/hero/hero_bg_2_1.jpg";
import hero_bg_2_2 from "../../assets/img/hero/hero_bg_2_2.jpg";
import heroarrowleft from "../../assets/img/icon/hero-arrow-left.svg";
import heroarrowright from "../../assets/img/icon/hero-arrow-right.svg";
const Dashboard = () => {
  return (
    <div className="hero-2" id="hero">
      <div className="swiper hero-slider-2" id="heroSlide2">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="hero-inner">
              <div
                className="th-hero-bg"
                data-bg-src="assets/img/hero/hero_bg_2_1.jpg"
                style={{
                  backgroundImage: `url(${hero_bg_2_1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="container">
                <div className="hero-style2 text-center text-md-start">
                  <h1
                    className="hero-title mb-20"
                    data-ani="slideinup"
                    data-ani-delay="0.4s"
                  >
                    Elevate Your Business to the Cloud
                  </h1>
                  <p
                    className="hero-desc"
                    data-ani="slideinup"
                    data-ani-delay="0.5s"
                  >
                    Welcome to Atek where we specialize in delivering tailored
                    technology and Cloud Computing solutions.
                  </p>
                  <div
                    className="btn-group text-center text-md-start"
                    data-ani="slideinup"
                    data-ani-delay="0.8s"
                  >
                    <a href="contact.html" className="th-btn style7 th-icon">
                      Discover More
                      <i className="fa-light fa-arrow-right-long" />{" "}
                    </a>
                    <a href="service.html" className="th-btn style2 th-icon">
                      Our Services{" "}
                      <i className="fa-light fa-arrow-right-long" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="hero-inner">
              <div
                className="th-hero-bg"
                data-bg-src="assets/img/hero/hero_bg_2_2.jpg"
                style={{
                  backgroundImage: `url(${hero_bg_2_2})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="container">
                <div className="hero-style2 text-center text-md-start">
                  <h1
                    className="hero-title mb-20"
                    data-ani="slideinup"
                    data-ani-delay="0.4s"
                  >
                    Elevate Your Business to the Cloud
                  </h1>
                  <p
                    className="hero-desc"
                    data-ani="slideinup"
                    data-ani-delay="0.5s"
                  >
                    Welcome to Atek where we specialize in delivering tailored
                    technology and Cloud Computing solutions.
                  </p>
                  <div
                    className="btn-group text-center text-md-start"
                    data-ani="slideinup"
                    data-ani-delay="0.8s"
                  >
                    <a href="contact.html" className="th-btn style7 th-icon">
                      Discover More
                      <i className="fa-light fa-arrow-right-long" />{" "}
                    </a>
                    <a href="service.html" className="th-btn style2 th-icon">
                      Our Services{" "}
                      <i className="fa-light fa-arrow-right-long" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="hero-inner">
              <div
                className="th-hero-bg"
                data-bg-src="assets/img/hero/hero_bg_2_1.jpg"
                style={{
                  backgroundImage: `url(${hero_bg_2_1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="container">
                <div className="hero-style2 text-center text-md-start">
                  <h1
                    className="hero-title mb-20"
                    data-ani="slideinup"
                    data-ani-delay="0.4s"
                  >
                    Elevate Your Business to the Cloud
                  </h1>
                  <p
                    className="hero-desc"
                    data-ani="slideinup"
                    data-ani-delay="0.5s"
                  >
                    Welcome to Atek where we specialize in delivering tailored
                    technology and Cloud Computing solutions.
                  </p>
                  <div
                    className="btn-group text-center text-md-start"
                    data-ani="slideinup"
                    data-ani-delay="0.8s"
                  >
                    <a href="contact.html" className="th-btn style7 th-icon">
                      Discover More
                      <i className="fa-light fa-arrow-right-long" />{" "}
                    </a>
                    <a href="service.html" className="th-btn style2 th-icon">
                      Our Services{" "}
                      <i className="fa-light fa-arrow-right-long" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="hero-inner">
              <div
                className="th-hero-bg"
                data-bg-src="assets/img/hero/hero_bg_2_2.jpg"
                style={{
                  backgroundImage: `url(${hero_bg_2_2})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="container">
                <div className="hero-style2 text-center text-md-start">
                  <h1
                    className="hero-title mb-20"
                    data-ani="slideinup"
                    data-ani-delay="0.4s"
                  >
                    Elevate Your Business to the Cloud
                  </h1>
                  <p
                    className="hero-desc"
                    data-ani="slideinup"
                    data-ani-delay="0.5s"
                  >
                    Welcome to Atek where we specialize in delivering tailored
                    technology and Cloud Computing solutions.
                  </p>
                  <div
                    className="btn-group text-center text-md-start"
                    data-ani="slideinup"
                    data-ani-delay="0.8s"
                  >
                    <a href="contact.html" className="th-btn style7 th-icon">
                      Discover More
                      <i className="fa-light fa-arrow-right-long" />{" "}
                    </a>
                    <a href="service.html" className="th-btn style2 th-icon">
                      Our Services{" "}
                      <i className="fa-light fa-arrow-right-long" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="th-swiper-custom">
          <div className="swiper-pagination" />
          <div className="hero-icon">
            <button
              data-slider-prev="#heroSlide2"
              className="hero-arrow slider-prev"
            >
              <img src={heroarrowleft} alt="" />
            </button>
            <button
              data-slider-next="#heroSlide2"
              className="hero-arrow slider-next"
            >
              <img src={heroarrowright} alt="" />
            </button>
          </div>
        </div>
        <div className="swiper heroThumbs style2" id="heroSlide3">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="hero-inner">
                <div className="hero-card">
                  <div className="hero-img">
                    <img src={hero_bg_2_1} alt="" />
                  </div>
                  <div className="hero-card_content">
                    <h3 className="box-title">Hybrid Cloud</h3>
                    <p className="sec-text text-white">
                      Combines private and public cloud environment
                    </p>
                    <a href="service-details.html" className="th-btn style2">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="hero-inner">
                <div className="hero-card">
                  <div className="hero-img">
                    <img src={hero_bg_2_2} alt="" />
                  </div>
                  <div className="hero-card_content">
                    <h3 className="box-title">Private Cloud</h3>
                    <p className="sec-text text-white">
                      Combines private and public cloud environment
                    </p>
                    <a href="service-details.html" className="th-btn style2">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="hero-inner">
                <div className="hero-card">
                  <div className="hero-img">
                    <img src={hero_bg_2_1} alt="" />
                  </div>
                  <div className="hero-card_content">
                    <h3 className="box-title">Hybrid Cloud</h3>
                    <p className="sec-text text-white">
                      Combines private and public cloud environment
                    </p>
                    <a href="service-details.html" className="th-btn style2">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="hero-inner">
                <div className="hero-card">
                  <div className="hero-img">
                    <img src={hero_bg_2_2} alt="" />
                  </div>
                  <div className="hero-card_content">
                    <h3 className="box-title">Local Cloud</h3>
                    <p className="sec-text text-white">
                      Combines private and public cloud environment
                    </p>
                    <a href="service-details.html" className="th-btn style2">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-down">
          <a href="#service-sec" className="scroll-wrap">
            <span>
              <img src="assets/img/icon/down-arrow.svg" alt="" />
            </span>
            Scroll Down
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
