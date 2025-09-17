import React from "react";
import { Autoplay } from "swiper/modules";
import AnimatedText from "../AnimatedText";
import { Swiper, SwiperSlide } from "swiper/react";
import cta6shape from "../../Images/MilkProducerImg/cta6shape.png";
import DSC_1059 from "../../Images/MilkProducerImg/DSC_1059.jpg";
import "swiper/css";
import "swiper/css/autoplay";
import mapIcon from "../../Images/MilkProducerImg/mapIcon.png";
import milkIcon from "../../Images/MilkProducerImg/milkIcon.png";
import downturn from "../../Images/MilkProducerImg/downturn.png";
import biogasplant from "../../Images/MilkProducerImg/biogasplant.png";
import teamIcon from "../../Images/MilkProducerImg/teamIcon.png";
import farmerIcon from "../../Images/MilkProducerImg/farmerIcon.png";
import indianwoman from "../../Images/MilkProducerImg/indianwoman.png";
import investorIcon from "../../Images/MilkProducerImg/investorIcon.png";
import violenceagainst from "../../Images/MilkProducerImg/violenceagainst.png";

const highlights = [
  {
    text: "37,000+ Villages across 206 Districts",
    icon: mapIcon,
  },
  {
    text: "Combined turnover of MPOs ₹9,637 crore",
    icon: downturn,
  },
  {
    text: "60 lakh kg Milk Collected Daily",
    icon: milkIcon,
  },
  {
    text: "₹50,773 crore distributed to farmers since inception",
    icon: farmerIcon,
  },
  {
    text: "12 lakh+ farmers linked to markets, lifted by cooperatives",
    icon: teamIcon,
  },
  {
    text: "Empowering 9 lakh+ women to lead India's dairy revolution",
    icon: indianwoman,
  },
  {
    text: "18 out of 24 MPOs led by women",
    icon: violenceagainst,
  },
  {
    text: "1 lakh+ Lakhpati Didis transforming rural economies",
    icon: investorIcon,
  },
  {
    text: "5,000 flexi biogas plants installed in farmers' backyard",
    icon: biogasplant,
  },
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
                    text="Our Footprint"
                    tag="h3"
                    className="sec-title mb-10 heading text-anime-style-3"
                    width="100%"
                    style={{
                      color: "white",
                      marginBottom: "10px",
                      fontSize: "4rem",
                      textTransform: "none", // ✅ text jaisa likha hai waisa hi dikhayega
                    }}
                  />
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
                          className="sec-title text-white pe-xl-5 me-xl-4 text-anime-style-2 d-flex align-items-center gap-3"
                          style={{
                            marginTop: "10px",
                            textTransform: "none", // ✅ force case preserve
                          }}
                        >
                          <img
                            src={item.icon}
                            alt="icon"
                            loading="lazy"
                            style={{
                              width: "80px",
                              height: "80px",
                              flexShrink: 0,
                            }}
                          />
                          <span
                            style={{
                              fontSize: "2.5rem",
                              lineHeight: "1.3",
                              textTransform: "none", // ✅ ye bhi same case maintain karega
                            }}
                          >
                            {item.text}
                          </span>
                        </h2>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                <div className="cta6-shape">
                  <img src={cta6shape} alt="" loading="lazy" />
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
            loading="lazy"
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
