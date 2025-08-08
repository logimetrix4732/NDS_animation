import React, { useEffect, useState } from "react";

// Import Background
import linePatternBg from "../../assets/img/bg/line-pattern2.png";

// Import Service Background Images
import serviceBg1 from "../../assets/img/service/service_2_1.jpg";
import serviceBg2 from "../../assets/img/service/service_2_2.jpg";
import serviceBg3 from "../../assets/img/service/service_2_3.jpg";
import serviceBg4 from "../../assets/img/service/service_2_4.jpg";

// Import Service Icons
import icon1 from "../../assets/img/icon/service-2-1.svg";
import icon2 from "../../assets/img/icon/service-2-2.svg";
import icon3 from "../../assets/img/icon/service-2-3.svg";
import icon4 from "../../assets/img/icon/service-2-4.svg";

const services = [
  {
    title: "A bond beyond words, built on trust",
    icon: icon1,
    bg: serviceBg1,
    link: "service-details.html",
  },
  {
    title: "Strong women, stronger communities",
    icon: icon2,
    bg: serviceBg2,
    link: "service-details.html",
  },
  {
    title: "United in purpose, unstoppable in spirit",
    icon: icon3,
    bg: serviceBg3,
    link: "service-details.html",
  },
];

const OurExperties8 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000); // Change service every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="service-area bg-top-center position-relative space-top overflow-hidden"
      id="service-sec"
      style={{ backgroundImage: `url(${linePatternBg})` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="title-area text-center">
              <span className="sub-title text-anime-style-2">
                Services We’re Offering
              </span>
              <h2 className="sec-title text-anime-style-3">
                We Provide our Clients Best Cloud Computing Solution
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="service-list-area">
            {services.map((service, index) => (
              <div
                className={`service-list-wrap sv-list2 ${
                  index === activeIndex ? "active" : ""
                }`}
                key={index}
              >
                <div
                  className="service-list"
                  style={{
                    backgroundImage: `url(${service.bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <span className="service-icon">
                    <img src={service.icon} alt="icon" loading="lazy" />
                  </span>
                  <div className="service-content">
                    <h4 className="box-title">
                      <a href={service.link}>{service.title}</a>
                    </h4>
                    {/* Subtitle removed */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurExperties8;
