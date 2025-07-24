import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import project_bg from "../../assets/img/bg/project_bg.jpg";
import project_1_1 from "../../assets/img/project/project_1_1.jpg";
import project_1_2 from "../../assets/img/project/project_1_2.jpg";
import project_1_3 from "../../assets/img/project/project_1_3.jpg";
import leftArrow from "../../assets/img/icon/left-arrow2.svg";
import rightArrow from "../../assets/img/icon/right-arrow2.svg";

const OurFeatures4 = () => {
  return (
    <section
      className="project-area position-relative project-overlay overflow-hidden bg-top-center space"
      style={{
        position: "relative",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${project_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "59%",
          zIndex: 0,
        }}
      ></div>
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title text-white text-anime-style-2">
            Showcasing Our Impact
          </span>
          <h2 className="sec-title text-white text-anime-style-3">
            films produced by/on MPOs
          </h2>
        </div>

        <div className="slider-area position-relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".slider-next",
              prevEl: ".slider-prev",
            }}
            spaceBetween={30}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
              1300: { slidesPerView: 3 },
            }}
            className="th-slider"
          >
            {[
              {
                img: project_1_1,
                title: "Digital Product Design",
                text: "Graphics Design",
              },
              {
                img: project_1_2,
                title: "Project for Software dev.",
                text: "Web Development",
              },
              {
                img: project_1_3,
                title: "Cyber Security Analysis",
                text: "Django Theme",
              },
              {
                img: project_1_1,
                title: "Digital Product Design",
                text: "Ai Mechanigm",
              },
              {
                img: project_1_2,
                title: "Project for Software dev.",
                text: "Java Developer",
              },
              {
                img: project_1_3,
                title: "Cyber Security Analysis",
                text: "UiXi Designer",
              },
            ].map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="project-item">
                  <div className="box-img global-img">
                    <img src={slide.img} alt={`project-${index}`} />
                  </div>
                  <div className="box-content">
                    <h3 className="box-title">
                      <a href="project-details.html">{slide.title}</a>
                    </h3>
                    <p className="box-text">{slide.text}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Slider Arrows */}
          <button className="slider-arrow slider-prev">
            <img src={leftArrow} alt="Previous" />
          </button>
          <button className="slider-arrow slider-next">
            <img src={rightArrow} alt="Next" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurFeatures4;
