import React, { useEffect, useState } from "react";
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
import "./dashboard.css";
const heroSlides = [
  {
    bg: hero_bg_2_1,
    title: "Elevate Your Business to the Cloud",
    desc: "Welcome to Atek where we specialize in delivering tailored technology and Cloud Computing solutions.",
    thumbs: [
      {
        img: hero_bg_2_1,
        title: "Private Cloud",
        desc: "Combines private and public cloud environment",
      },
    ],
  },
  {
    bg: hero_bg_2_2,
    title: "Elevate Your Business to the Cloud",
    desc: "Welcome to Atek where we specialize in delivering tailored technology and Cloud Computing solutions.",
    thumbs: [
      {
        img: hero_bg_2_2,
        title: "Hybrid Cloud",
        desc: "Combines private and public cloud environment",
      },
    ],
  },
];

const Dashboard = () => {
  const [animateThumbs, setAnimateThumbs] = useState(false);

  useEffect(() => {
    setAnimateThumbs(true);
  }, []);

  return (
    <div className="hero-2 " id="hero">
      <Swiper
        className="hero-slider-2"
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        effect="fade"
        loop
        autoplay={{ delay: 5000 }}
        navigation={{
          nextEl: ".slider-next",
          prevEl: ".slider-prev",
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="hero-inner">
              <div
                className="th-hero-bg"
                style={{
                  backgroundImage: `url(${slide.bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="container">
                <div className="hero-style2 text-center text-md-start">
                  <h1 className="hero-title mb-20">{slide.title}</h1>
                  <p className="hero-desc">{slide.desc}</p>
                </div>

                <div
                  className={`swiper heroThumbs style2 mt-5 ${
                    animateThumbs ? "animate-in" : ""
                  }`}
                >
                  <div className="swiper-wrapper d-flex gap-4 flex-wrap">
                    {slide.thumbs.map((thumb, thumbIndex) => (
                      <div className="swiper-slide" key={thumbIndex}>
                        <div className="hero-card">
                          <div className="hero-img">
                            <img src={thumb.img} alt={thumb.title} />
                          </div>
                          <div className="hero-card_content">
                            <h3 className="box-title">{thumb.title}</h3>
                            <p className="sec-text text-white">{thumb.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="th-swiper-custom">
        <div className="swiper-pagination" />
        <div className="hero-icon">
          <button className="hero-arrow slider-prev">
            <img src={heroarrowleft} alt="Previous" />
          </button>
          <button className="hero-arrow slider-next">
            <img src={heroarrowright} alt="Next" />
          </button>
        </div>
      </div>

      <div className="scroll-down">
        <div
          className="scroll-wrap"
          style={{ cursor: "pointer" }}
          onClick={() => window.scrollBy({ top: 740, behavior: "smooth" })}
        >
          <span>
            <img src="assets/img/icon/down-arrow.svg" alt="Scroll down" />
          </span>
          Scroll Down
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
