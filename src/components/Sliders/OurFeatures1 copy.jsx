import React, { useEffect, useState } from "react";
import DSC_9355 from "../../Images/HomeImgs/DSC_6873.jpg";
import DSC_3158 from "../../Images/HomeImgs/DSC_3796.jpg";
import DSC_3464 from "../../Images/HomeImgs/DSC_3464.jpg";
import icon from "../../Images/HomeImgs/deal.png";
import icon1 from "../../Images/HomeImgs/group.png";
import icon2 from "../../Images/HomeImgs/hands.png";

import "./OurFeatures.css";

const featuresData = [
  {
    image: DSC_9355,
    icon: icon,
    title: "A bond beyond words, built on trust",
    subtitle: "",
    link: "/",
  },
  {
    image: DSC_3464,
    icon: icon1,
    title: "Strong women, stronger communities",
    subtitle: "",
    link: "/",
  },
  {
    image: DSC_3158,
    icon: icon2,
    title: "United in purpose, unstoppable in spirit",
    subtitle: "",
    link: "/",
  },
];

const OurFeatures1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval = null;
    if (!isHovered) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % featuresData.length);
      }, 2000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovered]);

  return (
    <div className="service-area" id="service-sec">
      <div className="container">
        <div className="row">
          <div className="service-list-area">
            {featuresData.map((item, index) => (
              <div
                className={`service-list-wrap sv-list2 service7-list ${
                  index === activeIndex ? "active" : ""
                }`}
                key={index}
              >
                <div
                  className="service-list"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <span className="service-icon">
                    <img
                      src={item.icon}
                      alt=""
                      style={{
                        width: "55px",
                        height: "55px",
                        objectFit: "cover", // or "contain"
                      }}
                    />
                  </span>
                  <div className="service-content service-content-main">
                    <h4 className="box-title">{item.title}</h4>

                    <span
                      className="service-subtitle wow fadeInUp"
                      data-wow-delay=".4s"
                    >
                      {item.subtitle}
                    </span>
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

export default OurFeatures1;
