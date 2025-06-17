import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import hero_bg_1_1 from "../../assets/img/hero/hero_bg_1_1.jpg";
import hero_bg_1_2 from "../../assets/img/hero/hero_bg_1_2.jpg";
import hero_bg_1_3 from "../../assets/img/hero/hero_bg_1_3.jpg";
import hero1shape from "../../assets/img/shape/hero-1-shape.png";
import dashboard from "../../Images/dashboard.jpg";
const slideData = [
  {
    image: hero_bg_1_1,
    title: "Precision IT Solutions, Tailored for You",
  },
  {
    image: hero_bg_1_2,
    title: "Smart IT Consulting for Modern Businesses",
  },
  {
    image: hero_bg_1_3,
    title: "Your Trusted Partner in Tech & Strategy",
  },
];

const Dashboard = () => {
  return (
    <div className="th-hero-wrapper hero-1 space-bottom" id="hero">
      <Swiper
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        effect="fade"
        navigation={{
          nextEl: ".slider-next",
          prevEl: ".slider-prev",
        }}
        pagination={{ el: ".slider-pagination", clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="hero-slider-1"
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="hero-inner">
              <div
                className="th-hero-bg"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div
                className="hero-1-shape d-none d-lg-block"
                data-ani="slideinleft"
                data-ani-delay="0.4s"
              >
                <img src={hero1shape} alt="hero-shape" />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-9 col-lg-8">
                    <div className="hero-style1">
                      <span className="sub-title style1">
                        Dynamic IT, Dynamic Results.
                      </span>
                      <h1
                        className="hero-title"
                        data-ani="slideinup"
                        data-ani-delay="0.4s"
                      >
                        {slide.title}
                      </h1>
                      <p
                        className="hero-text text-white"
                        data-ani="slideinup"
                        data-ani-delay="0.6s"
                      >
                        Welcome to Atek where we specialize in delivering
                        tailored technology and IT solutions.
                      </p>
                      <div
                        className="btn-group"
                        data-ani="slideinup"
                        data-ani-delay="0.8s"
                      >
                        <a
                          href="contact.html"
                          className="th-btn style7 th-icon"
                        >
                          Discover More
                          <i className="fa-light fa-arrow-right-long" />
                        </a>
                        <a
                          href="service.html"
                          className="th-btn style2 th-icon"
                        >
                          Our Services
                          <i className="fa-light fa-arrow-right-long" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="th-swiper-custom">
          <button className="slider-arrow slider-prev">
            <img src="/assets/img/icon/right-arrow.svg" alt="Prev" />
          </button>
          <div className="slider-pagination" />
          <button className="slider-arrow slider-next">
            <img src="/assets/img/icon/left-arrow.svg" alt="Next" />
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default Dashboard;
