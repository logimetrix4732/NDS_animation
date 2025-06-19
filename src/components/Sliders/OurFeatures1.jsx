import React, { useEffect, useState } from "react";
import SuccessStoriesImg from "../../Images/SuccessStoriesImg.jpg";
import SuccessStoriesImg1 from "../../Images/SuccessStoriesImg1.jpg";
import SuccessStoriesImg2 from "../../Images/SuccessStoriesImg2.jpg";
import icon from "../../Images/icon/1.png";
import icon1 from "../../Images/icon/2.png";
import icon2 from "../../Images/icon/3.png";
import { Link } from "react-router-dom";
import "./OurFeatures.css";

const featuresData = [
  {
    image: SuccessStoriesImg,
    icon: icon,
    title: "Premium Cattle Feed",
    subtitle:
      "Nutritionally balanced feed for dairy cattle, enhancing milk production and animal health.",
    link: "/",
  },
  {
    image: SuccessStoriesImg1,
    icon: icon1,
    title: "Dairy Mineral Mixture",
    subtitle:
      "Essential mineral supplement for dairy animals to improve overall health and productivity.",
    link: "/",
  },
  {
    image: SuccessStoriesImg2,
    icon: icon2,
    title: "Calf Starter Feed",
    subtitle:
      "Specially formulated feed for calves to ensure proper growth and development.",
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
  }, [isHovered]); // rerun on hover state change

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
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
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
                    <img src={item.icon} alt="" />
                  </span>
                  <div className="service-content">
                    <h4 className="box-title">{item.title}</h4>

                    <span
                      className="service-subtitle wow fadeInUp"
                      data-wow-delay=".4s"
                    >
                      {item.subtitle}
                    </span>
                  </div>
                  <Link to={item.link} className="th-btn style2">
                    View Details{" "}
                    <i className="fa-light fa-arrow-right-long"></i>
                  </Link>
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
