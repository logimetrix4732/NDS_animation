import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import map2 from "../../assets/img/bg/map2.png";
import AnimatedText from "../AnimatedText";

const AboutSection6 = () => {
  return (
    <section
      className="testi-area7 bg-smoke overflow-hidden space"
      id="testi-sec"
      style={{
        backgroundImage: `url(${map2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="title-area mb-40">
              <span className="sub-title text-anime-style-2 wow fadeInUp">
                Testimonial
              </span>
              <AnimatedText
                text="What Client Say About us"
                tag="h2"
                className="sec-title mb-10 heading text-anime-style-3"
                width="100%"
              />
            </div>

            <Swiper
              modules={[Thumbs]}
              spaceBetween={30}
              slidesPerView={1}
              loop={false}
              className="testiSlide5"
            >
              {[
                "Sarah Rahman",
                "Angelina Rose",
                "Michel Smith",
                "Jesmen",
                "Sarah Rahman",
                "Angelina Rose",
              ].map((name, idx) => (
                <SwiperSlide key={idx}>
                  <div className="testi-grid2 wow fadeInUp">
                    <div className="box-content">
                      <p className="box-text">
                        “Cybersecurity is more critical than ever in a world
                        increasingly reliant on digital technologies. By
                        investing in robust cybersecurity measures, individuals
                        and organizations can protect themselves from threats
                        and secure their digital assets for the future.”
                      </p>
                      <h6 className="box-title">{name}</h6>
                      <span className="box-desig">
                        {
                          [
                            "UI/UX Designer",
                            "App Developer",
                            "Software Engineer",
                            "Graphics Designer",
                            "It Officer",
                            "Back-End Developer",
                          ][idx]
                        }
                      </span>
                      <div className="box-review">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="fa-solid fa-star"></i>
                        ))}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* <div className="swiper th-slider testi-grid2-thumb style2">
              <div className="icon-box">
                <button className="slider-arrow default">
                  <img src="assets/img/icon/right-arrow2.svg" alt="prev" />
                </button>
                <button className="slider-arrow default">
                  <img src="assets/img/icon/left-arrow2.svg" alt="next" />
                </button>
              </div>
            </div> */}
          </div>

          <div className="col-xl-6">
            <div className="testi-image-wrapp2">
              <div className="testi-img wow fadeInUp" data-wow-delay=".4s">
                <img src="assets/img/testimonial/testi-img1.jpg" alt="" />
              </div>
              <div className="testi-img2 wow  fadeInLeft">
                <img src="assets/img/testimonial/testi-img2.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection6;
