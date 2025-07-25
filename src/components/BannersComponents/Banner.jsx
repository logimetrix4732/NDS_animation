import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import cta6shape from "../../assets/img/shape/cta6-shape.png";
import ctaimg6 from "../../assets/img/normal/cta-img-6.jpg";
import AnimatedText from "../AnimatedText";
import DSC_1059 from "../../Images/MilkProducerImg/DSC_1059.jpg";

const highlights = [
  "37,000+ Villages across 206 Districts",
  "Combined turnover of MPOs ₹9,637 crore",
  "60 lakh kg Milk Collected Daily",
  "₹50,773 crore distributed to farmers since inception",
  "12 lakh+ farmers linked to markets, lifted by cooperatives",
  "Empowering 9 lakh+ women to lead India’s dairy revolution",
  "18 out of 23 MPOs led by women",
  "1 lakh+ Lakhpati Didis transforming rural economies",
  "5,000 flexi biogas plants installed in farmers’ backyard",
];

const Banner = () => {
  return (
    <div className="position-relative overflow-hidden space">
      <div className="cta-sec6 theme-bg position-relative overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <div
                className="cta-area6 text-center text-md-start position-relative"
                style={{ padding: "120px 0px 100px 0px" }}
              >
                <div className="title-area mb-0">
                  <AnimatedText
                    text="Highlights of MPOs"
                    tag="h3"
                    className="sec-title mb-10 heading text-anime-style-3"
                    width="100%"
                    style={{ color: "white", marginBottom: "10px" }}
                  />
                  <p
                    className="text-white wow fadeInUp"
                    data-wow-delay=".4s"
                    style={{ marginTop: "0" }}
                  >
                    Vectors and number driven (also we can put the map of India)
                  </p>

                  <Swiper
                    direction="vertical"
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    loop={true}
                    slidesPerView={1}
                    className="text-white"
                    style={{ height: "210px" }}
                    modules={[Autoplay]}
                  >
                    {highlights.map((item, index) => (
                      <SwiperSlide key={index}>
                        <h2
                          className="sec-title text-white pe-xl-5 me-xl-4 text-anime-style-2 d-flex align-items-start gap-2"
                          style={{ marginTop: "10px" }}
                        >
                          <span>{item}</span>
                        </h2>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                <div className="cta6-shape">
                  <img src={cta6shape} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="shape-mockup wow fadeInRight"
          style={{ position: "absolute", bottom: 0, right: 0 }}
        >
          <img
            src={DSC_1059}
            alt=""
            style={{
              width: "780px",
              height: "527.29px",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
