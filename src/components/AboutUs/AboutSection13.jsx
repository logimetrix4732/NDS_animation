import React, { useState } from "react";
import "./AboutSection.css";

import card1 from "../../assets/img/icon/about_card_1.svg";
import card2 from "../../assets/img/icon/about_card_2.svg";
import card3 from "../../assets/img/icon/about_card_3.svg";
import img1 from "../../assets/img/normal/about_11_1.jpg";
import img2 from "../../assets/img/normal/about_11_2.jpg";
import logoIcon from "../../assets/img/logo-icon.svg";
import badgeCircle from "../../assets/img/shape/bullets-circle2.png";
import FVF02218 from "../../Images/NewInitiativeImg/FVF02218.JPG";
import FVF02761 from "../../Images/NewInitiativeImg/FVF02761.JPG";
const AboutSection13 = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const cards = [
    {
      title: "",
      text: "Understanding the importance to ensure greater financial stability and resilience at the farmer household level, NDS is now looking beyond the dairy sector and venturing into select agricultural value chains that align with the existing livelihoods of the producer members of the MPOs supported by us.",
      icon: card1,
    },
    {
      title: "",
      text: "This initiatives aims to unlock additional income opportunities by linking farmers to better markets and value-added processing. In the initial phase, NDS has launched value chain development projects for mango and sunflower seeds in Andhra Pradesh, mustard in Rajasthan and maize in Bihar. These commodities have been identified based on local agricultural practices, farmer capabilities and market potential.",
      icon: card2,
    },
    {
      title: "",
      text: "The approach involves integrating farmers into a more structured and transparent supply chain where in MPOs will handle aggregation, NDS will oversee quality control and warehousing wherever required, and Mother Dairy will take charge of marketing and distribution. The overarching goal is to ensure that farmers benefit from fair and timely payments, better price realisation, and improved profitability.",
      icon: card3,
    },
  ];

  return (
    <div
      className="about-area10 bg-smoke position-relative overflow-hidden space"
      id="about-sec"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="title-area text-center">
              <span className="sub-title style1 text-anime-style-2">
                New Initiatives
              </span>
              <h2 className="sec-title mb-20 text-anime-style-3">
                Diversification through Agricultural Value Chains:
              </h2>
            </div>
          </div>
        </div>

        <div className="row gy-4">
          {/* Left Cards */}
          <div className="col-xl-5 order-1 order-xl-0">
            <div className="about-card2-wrap">
              {cards.map((card, index) => {
                const isExpanded = expandedCard === index;

                return (
                  <div
                    className="about-card2 wow fadeInUp"
                    data-wow-delay={`.${3 + index}s`}
                    key={index}
                    style={{
                      height: isExpanded ? "auto" : "187px",
                      overflow: "hidden",
                      transition: "height 0.4s ease",
                      position: "relative",
                      paddingBottom: isExpanded ? "0" : "40px",
                    }}
                    onMouseLeave={() => setExpandedCard(null)}
                  >
                    <div className="box-centent">
                      <p
                        className="box-text"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: isExpanded ? "unset" : 4,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {card.text}
                      </p>

                      {!isExpanded && (
                        <a
                          href="#"
                          className="line-btn th-icon"
                          style={{
                            position: "absolute",
                            bottom: "10px",
                          }}
                          onClick={(e) => {
                            e.preventDefault();
                            setExpandedCard(index);
                          }}
                        >
                          Learn More{" "}
                          <i className="fa-light fa-arrow-right-long" />
                        </a>
                      )}
                    </div>

                    <div className="box-img">
                      <img src={card.icon} alt="" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Images + Badge */}
          <div className="col-xl-7 order-0 order-xl-1">
            <div className="img-box14 img-box19 img-box ps-xl-2 ms-xl-5">
              <div className="about-img-wrapp position-relative">
                <div className="img1 rounded-img">
                  <img
                    src={FVF02218}
                    alt="About"
                    style={{
                      width: "360px",
                      height: "587px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="img2 rounded-img">
                  <img
                    src={FVF02761}
                    alt="About"
                    style={{
                      width: "360px",
                      height: "587px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div
                  className="position-absolute top-50"
                  style={{
                    left: "52%",
                    transform: "translate(-50%, -50%)",
                    width: "120px",
                    height: "120px",
                    zIndex: 5,
                  }}
                >
                  <div
                    className="rotating-badge rounded-circle bg-white shadow"
                    style={{
                      backgroundImage: `url(${badgeCircle})`,
                      backgroundSize: "cover",
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img src={logoIcon} alt="Logo" style={{ width: "40px" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection13;
