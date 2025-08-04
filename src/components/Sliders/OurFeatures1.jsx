import React, { useEffect, useState } from "react";
import icon from "../../Images/icon/1.png";
import icon1 from "../../Images/icon/2.png";
import icon2 from "../../Images/icon/3.png";
import DSC_9355 from "../../Images/HomeImgs/DSC_9355.png";
import DSC_3158 from "../../Images/HomeImgs/DSC_3796.jpg";
import DSC_1362 from "../../Images/HomeImgs/DSC_7813.jpg";
import "./OurFeatures.css";

const featuresData = [
  {
    image: DSC_9355,
    icon: icon,
    title: "A bond beyond words, built on trust",
    link: "/",
  },
  {
    image: DSC_1362,
    icon: icon1,
    title: "Strong women, stronger communities",
    link: "/",
  },
  {
    image: DSC_3158,
    icon: icon2,
    title: "United in purpose, unstoppable in spirit",
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
                    <img src={item.icon} alt="icon" />
                  </span>
                  <div className="service-content service-content-main">
                    <h4 className="box-title">{item.title}</h4>
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
