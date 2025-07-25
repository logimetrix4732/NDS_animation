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

const heroImages = [villagemeeting, DSC_9355, DSC_4722, DSC_3158, DSC_0344];

const Dashboard = () => {
  return (
    <div className="th-hero-wrapper hero-1" id="hero">
      <Swiper
        className="hero-swiper"
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop
        autoplay={{ delay: 4000 }}
      >
        {heroImages.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "92vh",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "left",
                paddingBottom: "80px",
              }}
            >
              {index === 0 && (
                <h1
                  style={{
                    color: "#fff",
                    fontSize: "3.5rem",
                    fontWeight: "bold",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    padding: "12px 30px",
                    borderRadius: "10px",
                    textAlign: "center",
                    width: "700px",
                    wordSpacing: "10px",
                  }}
                >
                  Purposeful Growth, Meaningful Impact
                </h1>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Dashboard;
