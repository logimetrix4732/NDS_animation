import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import DSC_0344 from "../../Images/HomeImgs/DSC_0344.jpg";
import DSC_3158 from "../../Images/HomeImgs/DSC_3158.jpg";
import DSC_4722 from "../../Images/HomeImgs/DSC_4722.jpg";
import villagemeeting from "../../Images/HomeImgs/villagemeeting.jpg";
import DSC_9355 from "../../Images/HomeImgs/DSC_9355.png";

import "./dashboard.css";

const heroImages = [
  {
    src: villagemeeting,
    caption:
      "Training session for women dairy farmers in Mashkhowa village, Dhemaji, Assam.",
  },
  {
    src: DSC_9355,
    caption:
      "A woman dairy farmer nurturing her cows in Savina, Udaipur, Rajasthan.",
  },
  {
    src: DSC_4722,
    caption:
      "A woman farmer displays freshly prepared silage with pride in Motihari, Bihar.",
  },
  {
    src: DSC_3158,
    caption: "An empowered dairy farmer from Saharsa, Bihar.",
  },
  {
    src: DSC_0344,
    caption:
      "High genetic merit bulls being fed at Animal Breeding Centre, Salon, Raebareli.",
  },
];

const Dashboard = () => {
  return (
    <div className="th-hero-wrapper hero-1" id="hero">
      <Swiper
        className="hero-swiper"
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop
        autoplay={{ delay: 6000 }}
      >
        {heroImages.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                backgroundImage: `url(${item.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "92vh",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "left",
                paddingBottom: "190px",
                position: "relative",
              }}
            >
              <h1
                style={{
                  color: "#fff",
                  fontSize: "2.2rem",
                  fontWeight: "bold",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  padding: "12px",
                  borderRadius: "0px 10px 10px 0px",
                  textAlign: "center",
                  width: "400px",
                }}
              >
                Purposeful Growth, Meaningful Impact
              </h1>

              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  right: "0px",
                  backgroundColor: "rgba(255, 255, 255, 0.85)",
                  padding: "10px 14px",
                  borderRadius: "10px 0px 0px 10px",
                  maxWidth: "820px",
                  fontSize: "19px",
                  color: "#333",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
                }}
              >
                {item.caption}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Dashboard;
