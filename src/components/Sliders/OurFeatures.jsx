import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import category_bg_1 from "../../assets/img/bg/category_bg_1.png";
import category_1_1 from "../../assets/img/category/category_1_1.jpg";
import category_1_2 from "../../assets/img/category/category_1_2.jpg";
import category_1_3 from "../../assets/img/category/category_1_3.jpg";
import category_1_4 from "../../assets/img/category/category_1_4.jpg";
import category_1_5 from "../../assets/img/category/category_1_5.jpg";

const features = [
  {
    img: category_1_1,
    title: "Enhanced Cybersecurity",
    desc: "Advanced security measures like firewalls, encryption,",
  },
  {
    img: category_1_2,
    title: "Cloud Integration",
    desc: "Access to scalable cloud-based services for storage",
  },
  {
    img: category_1_3,
    title: "Customized Services",
    desc: "Tailored IT solutions designed to meet specific business needs.",
  },
  {
    img: category_1_4,
    title: "24/7 IT Support",
    desc: "Around-the-clock monitoring and troubleshooting.",
  },
  {
    img: category_1_5,
    title: "End-to-End Solution",
    desc: "Covers all aspects of IT, from consu-lting and planning",
  },
  {
    img: category_1_1,
    title: "Airbirds",
    desc: "Advanced security measures like firewalls, encryption,",
  },
  {
    img: category_1_2,
    title: "Enhanced Cybersecurity",
    desc: "Access to scalable cloud-based services for storage",
  },
  {
    img: category_1_3,
    title: "Hiking",
    desc: "Tailored IT solutions designed to meet specific business needs.",
  },
  {
    img: category_1_4,
    title: "Cloud Integration",
    desc: "Around-the-clock monitoring and troubleshooting.",
  },
  {
    img: category_1_5,
    title: "Cruises",
    desc: "Covers all aspects of IT, from consu-lting and planning",
  },
  {
    img: category_1_1,
    title: "Customized Services",
    desc: "Advanced security measures like firewalls, encryption,",
  },
  {
    img: category_1_2,
    title: "Walking",
    desc: "Access to scalable cloud-based services for storage",
  },
  {
    img: category_1_3,
    title: "24/7 IT Support",
    desc: "Tailored IT solutions designed to meet specific business needs.",
  },
  {
    img: category_1_4,
    title: "Walking",
    desc: "Around-the-clock monitoring and troubleshooting.",
  },
  {
    img: category_1_5,
    title: "Customized Services",
    desc: "Covers all aspects of IT, from consu-lting and planning",
  },
];

const OurFeatures = () => {
  return (
    <section
      className="category-area bg-top-center space curved-section"
      style={{
        backgroundImage: `url(${category_bg_1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container th-container">
        <div className="title-area mb-60 text-center">
          <span className="sub-title text-anime-style-2">Our Features</span>
          <h2 className="sec-title text-anime-style-3">
            Reliable IT for Unstoppable Growth
          </h2>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 3000 }}
          loop={true}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 3 },
            1400: { slidesPerView: 5, spaceBetween: 45 },
          }}
          className="categorySlider"
        >
          {features.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="category-card single">
                <div className="box-img global-img">
                  <img src={item.img} alt="Image" />
                </div>
                <h3 className="box-title">
                  <a href="service.html">{item.title}</a>
                </h3>
                <p className="sec-text">{item.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurFeatures;
