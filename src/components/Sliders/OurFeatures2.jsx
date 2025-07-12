import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import service_4_1 from "../../assets/img/service/service_4_1.jpg";
import service_4_2 from "../../assets/img/service/service_4_2.jpg";
import service_4_3 from "../../assets/img/service/service_4_3.jpg";
import service_4_1Icon from "../../assets/img/icon/service_4_1.svg";
import service_4_2Icon from "../../assets/img/icon/service_4_2.svg";
import service_4_3Icon from "../../assets/img/icon/service_4_3.svg";
import AnimatedText from "../AnimatedText";

const serviceItems = [
  {
    img: service_4_1,
    icon: service_4_1Icon,
    title: "Dr. Meenesh Shah",
    author: "Chairman, NDDB and NDDB Dairy Services ",
    desc: "From idea to execution, the agency helps startups design, develop, and launch software products, apps, and platforms. Focus on user-centric design (UI/UX) to ensure an engaging customer.",
  },
  {
    img: service_4_2,
    icon: service_4_2Icon,
    title: "Dr. C. P. Devanand",
    author: "Managing Director ",
    desc: "Crafting innovative marketing strategies tailored to each client's needs and target audience. Utilizing data-driven insights to optimize campaigns for maximum impact.",
  },
  {
    img: service_4_3,
    icon: service_4_3Icon,
    title: "Dr. Rajeev Krishnan",
    author: "Executive Director ",
    desc: "Developing unique brand identities that resonate with consumers and differentiate from competitors. Building visual assets and brand guidelines for cohesive brand representation.",
  },
  {
    img: service_4_2,
    icon: service_4_2Icon,
    title: "Shri S. Regupathi",
    author: "Executive Director, Operations, NDDB ",
    desc: "Crafting innovative marketing strategies tailored to each client's needs and target audience. Utilizing data-driven insights to optimize campaigns for maximum impact.",
  },
  {
    img: service_4_3,
    icon: service_4_3Icon,
    title: "Shri T.M. Vijay Bhaskar",
    author: "Retired IAS ",
    desc: "Developing unique brand identities that resonate with consumers and differentiate from competitors. Building visual assets and brand guidelines for cohesive brand representation.",
  },
  {
    img: service_4_1,
    icon: service_4_1Icon,
    title: "Shri Manish Bandlish",
    author: "Managing Director, Mother Dairy Fruit and Vegetables Pvt Ltd ",
    desc: "Developing unique brand identities that resonate with consumers and differentiate from competitors. Building visual assets and brand guidelines for cohesive brand representation.",
  },
  {
    img: service_4_2,
    icon: service_4_2Icon,
    author: "General Manager ",
    title: "Shri Abhijeet Bhattacharjee",
    desc: "Developing unique brand identities that resonate with consumers and differentiate from competitors. Building visual assets and brand guidelines for cohesive brand representation.",
  },
  {
    img: service_4_2,
    icon: service_4_2Icon,
    title: "Dr. Alka Mahajan",
    author: "",
    desc: "Developing unique brand identities that resonate with consumers and differentiate from competitors. Building visual assets and brand guidelines for cohesive brand representation.",
  },
  {
    img: service_4_2,
    icon: service_4_2Icon,
    title: "Shri Durga Shanker Mishra",
    author: "",
    desc: "Developing unique brand identities that resonate with consumers and differentiate from competitors. Building visual assets and brand guidelines for cohesive brand representation.",
  },
  {
    img: service_4_2,
    icon: service_4_2Icon,
    title: "Shri Kamlesh Trivedi",
    author: "",
    desc: "Developing unique brand identities that resonate with consumers and differentiate from competitors. Building visual assets and brand guidelines for cohesive brand representation.",
  },
];

const OurFeatures2 = () => {
  return (
    <section
      className="service-area4 space-bottom"
      id="service-sec"
      style={{
        backgroundColor: "#f2f5fa",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="title-area text-center">
              <span className="sub-title text-anime-style-2 wow fadeInUp">
                Services We’re Offering
              </span>
              <AnimatedText
                text="Key Services Offered by a Startup Tech Agency"
                tag="h2"
                className="sec-title mb-10 heading"
                width="100%"
                style={{ justifyContent: "center" }}
              />
            </div>
          </div>
        </div>

        <div className="slider-area position-relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            navigation={{
              nextEl: ".slider-next",
              prevEl: ".slider-prev",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            className="th-slider has-shadow"
          >
            {serviceItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="service-item style4 th-ani">
                  <div className="service-img position-relative wow fadeInUp">
                    <a href="service-details.html">
                      <img src={item.img} alt="service" />
                    </a>
                    <span className="service-icon">
                      <img src={item.icon} alt="" />
                    </span>
                  </div>
                  <div className="service-content text-start wow fadeInUp">
                    <h3 className="box-title">
                      <a href="service-details.html">{item.title}</a>
                    </h3>
                    <p className="service-text">{item.desc}</p>
                    <div className="bd-news__border">
                      <div className="bd-news__meta">
                        <div className="bd-news__meta-item">
                          <span>
                            <i
                              className="fa-solid fa-user"
                              style={{ color: "#5b8c51", marginRight: "5px" }}
                            />
                            {item.author}
                          </span>
                        </div>
                      </div>
                    </div>
                    <a
                      href="service-details.html"
                      className="th-btn style4 th-icon"
                    >
                      Read More <i className="fa-light fa-arrow-right-long" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="slider-arrow slider-prev">
            <img src="assets/img/icon/service-left.svg" alt="" />
          </button>
          <button className="slider-arrow slider-next">
            <img src="assets/img/icon/service-right.svg" alt="" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurFeatures2;
