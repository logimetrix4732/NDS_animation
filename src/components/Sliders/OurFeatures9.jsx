import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import carImg from "../../Images/CarrerImg/SDS_8609.JPG";
import carImg1 from "../../Images/CarrerImg/276A2656.jpg";
import carImg2 from "../../Images/CarrerImg/276A2799.jpg";
import carImg3 from "../../Images/CarrerImg/276A8941.jpg";
import carImg4 from "../../Images/CarrerImg/276A8967.jpg";
import carImg5 from "../../Images/CarrerImg/276A8976.jpg";
import carImg6 from "../../Images/CarrerImg/IMG_0113.jpg";
import carImg7 from "../../Images/CarrerImg/IMG_0262.jpg";
import carImg8 from "../../Images/CarrerImg/DSC_1876.JPG";
import carImg9 from "../../Images/CarrerImg/DSC09570.JPG";
import carImg10 from "../../Images/CarrerImg/SDS_8229.JPG";
import IMG_20190610_123604 from "../../Images/CarrerImg/IMG_20190610_123604.jpg";
import IMG_20190723_173443 from "../../Images/CarrerImg/IMG_20190723_173443.jpg";
import IMG_20200312 from "../../Images/CarrerImg/IMG_20200312.jpg";
import IMG20200311174755 from "../../Images/CarrerImg/IMG20200311174755.jpg";
import WhatsApp_imgCar from "../../Images/CarrerImg/WhatsApp_imgCar.jpg";
import WhatsApp_imgCar1 from "../../Images/CarrerImg/WhatsApp_imgCar1.jpg";
import DSC_1457 from "../../Images/CarrerImg/DSC_1457.JPG";
import DSC_2343 from "../../Images/CarrerImg/DSC_2343.JPG";
import SDS_8204 from "../../Images/CarrerImg/SDS_8204.JPG";

const slideData = [
  {
    img: carImg,
    title: "Cost Efficiency",
    subtitle:
      "Reduce your IT overhead with our cost effective cloud solutions.",
  },
  {
    img: carImg8,
    title: "End-to-End Support",
    subtitle: "We provide 24/7 monitoring and support to ensure your systems.",
  },
  {
    img: carImg1,
    title: "Cost Efficiency",
    subtitle: "Reduce your IT overhead with our cost effective cloud",
  },
  {
    img: carImg9,
    title: "Cost Efficiency",
    subtitle: "Reduce your IT overhead with our cost effective cloud",
  },
  {
    img: carImg2,
    title: "Expertise You Can Trust",
    subtitle:
      "We stay ahead of industry trends and implement cutting-edge tools.",
  },
  {
    img: carImg3,
    title: "Customized Solutions",
    subtitle:
      "We understand that every business is unique. Our cloud solutions.",
  },
  {
    img: carImg10,
    title: "Customized Solutions",
    subtitle:
      "We understand that every business is unique. Our cloud solutions.",
  },
  {
    img: carImg4,
    title: "End-to-End Support",
    subtitle: "We provide 24/7 monitoring and support to ensure your systems.",
  },
  {
    img: carImg5,
    title: "End-to-End Support",
    subtitle: "We provide 24/7 monitoring and support to ensure your systems.",
  },
  {
    img: carImg6,
    title: "End-to-End Support",
    subtitle: "We provide 24/7 monitoring and support to ensure your systems.",
  },
  {
    img: carImg7,
    title: "End-to-End Support",
    subtitle: "We provide 24/7 monitoring and support to ensure your systems.",
  },
];
const slideData1 = [
  {
    img: IMG_20190610_123604,
    title: "Seamless Integration",
    subtitle: "We ensure that our cloud solutions integrate smoothly.",
  },
  {
    img: IMG_20190723_173443,
    title: "Cost Efficiency",
    subtitle:
      "Reduce your IT overhead with our cost effective cloud solutions.",
  },
  {
    img: DSC_2343,
    title: "Cost Efficiency",
    subtitle:
      "Reduce your IT overhead with our cost effective cloud solutions.",
  },
  {
    img: IMG_20200312,
    title: "Expertise You Can Trust",
    subtitle:
      "We stay ahead of industry trends and implement cutting-edge tools.",
  },
  {
    img: IMG20200311174755,
    title: "Customized Solutions",
    subtitle:
      "We understand that every business is unique. Our cloud solutions.",
  },
  {
    img: WhatsApp_imgCar,
    title: "End-to-End Support",
    subtitle: "We provide 24/7 monitoring and support to ensure your systems.",
  },
  {
    img: SDS_8204,
    title: "End-to-End Support",
    subtitle: "We provide 24/7 monitoring and support to ensure your systems.",
  },
  {
    img: WhatsApp_imgCar1,
    title: "End-to-End Support",
    subtitle: "We provide 24/7 monitoring and support to ensure your systems.",
  },
  {
    img: DSC_1457,
    title: "End-to-End Support",
    subtitle: "We provide 24/7 monitoring and support to ensure your systems.",
  },
];
const OurExperties9 = () => {
  return (
    <>
      <section className="choose-area bg-top-center space-top">
        <div className="container th-container6">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-9 col-lg-8">
              <div className="title-area text-center">
                <h2 className="sec-title text-anime-style-3">Life @ NDS</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEFT TO RIGHT */}
      <Swiper
        modules={[Autoplay]}
        loop={true}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        slidesPerView={2}
        spaceBetween={30}
        breakpoints={{
          0: { slidesPerView: 1 },
          576: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
          1400: { slidesPerView: 4 },
          1400: { slidesPerView: 5 },
        }}
        className="th-slider whySlider2"
      >
        {Array(3)
          .fill(slideData)
          .flat()
          .map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="category-card single2"
                style={{ paddingTop: "60px" }}
              >
                <div className="box-img global-img">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "250px",
                      objectFit: "cover",
                      borderRadius: "20px",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* RIGHT TO LEFT */}
      <Swiper
        modules={[Autoplay]}
        loop={true}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        slidesPerView={2}
        spaceBetween={30}
        breakpoints={{
          0: { slidesPerView: 1 },
          576: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
          1400: { slidesPerView: 4 },
          1400: { slidesPerView: 5 },
        }}
        className="th-slider whySlider2"
        dir="rtl"
      >
        {Array(3)
          .fill(slideData1)
          .flat()
          .map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="category-card single2"
                style={{ paddingTop: "60px" }}
              >
                <div className="box-img global-img">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "250px",
                      objectFit: "cover",
                      borderRadius: "20px",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default OurExperties9;
