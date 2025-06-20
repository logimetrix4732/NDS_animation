import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import heroarrowleft from "../../assets/img/icon/hero-arrow-left.svg";
import heroarrowright from "../../assets/img/icon/hero-arrow-right.svg";
import dashboard1 from "../../Images/dashboard1.jpg";
import dashboard2 from "../../Images/dashboard2.jpg";
import dashboard3 from "../../Images/dashboard3.jpg";
import dashboard4 from "../../Images/dashboard4.jpeg";
import "./dashboard.css";
const heroSlides = [
  {
    bg: dashboard1,
    title: "Empowering India's Dairy Sector",
    desc: "NDDB Dairy Services is committed to building a robust producer-owned dairy cooperative network across the country.",
    thumbs: [
      {
        img: dashboard1,
        title: "Producer Organizations",
        desc: "Strengthening farmer institutions through sustainable dairy cooperatives.",
      },
    ],
  },
  {
    bg: dashboard2,
    title: "Sustainable Dairy Development",
    desc: "We promote animal husbandry practices, productivity enhancement, and rural livelihood through innovative solutions.",
    thumbs: [
      {
        img: dashboard2,
        title: "Productivity Initiatives",
        desc: "Focusing on breed improvement, nutrition, and animal health services.",
      },
    ],
  },
  {
    bg: dashboard3,
    title: "Creating Livelihood Opportunities",
    desc: "Our programs benefit lakhs of dairy farmers, especially women, by ensuring regular income through organized dairying.",
    thumbs: [
      {
        img: dashboard3,
        title: "Women Empowerment",
        desc: "Enabling women to lead and participate in dairy-based livelihoods.",
      },
    ],
  },
  {
    bg: dashboard4,
    title: "Innovation in Dairy Services",
    desc: "From digital solutions to cold chain infrastructure, NDS integrates modern tools to transform dairy systems.",
    thumbs: [
      {
        img: dashboard4,
        title: "Technology & Infrastructure",
        desc: "Driving efficiency with digital platforms, automation, cold-chain systems, and robust logistics.",
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
