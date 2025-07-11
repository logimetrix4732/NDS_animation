import React from "react";
import "./AboutSection.css"; // 👈 Custom styles likhni hongi rotating effect ke liye

import card1 from "../../assets/img/icon/about_card_1.svg";
import card2 from "../../assets/img/icon/about_card_2.svg";
import card3 from "../../assets/img/icon/about_card_3.svg";
import img1 from "../../assets/img/normal/about_11_1.jpg";
import img2 from "../../assets/img/normal/about_11_2.jpg";
import logoIcon from "../../assets/img/logo-icon.svg";
import badgeCircle from "../../assets/img/shape/bullets-circle2.png";

const AboutSection13 = () => {
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
                About Us
              </span>
              <h2 className="sec-title mb-20 text-anime-style-3">
                Digital Transformation: The Key to Competitive Advantage.
              </h2>
            </div>
          </div>
        </div>
        <div className="row gy-4">
          {/* Left Cards */}
          <div className="col-xl-5 order-1 order-xl-0">
            <div className="about-card2-wrap">
              {[
                {
                  title: "Improved Efficiency",
                  text: "Automation and AI-driven solutions optimize workflows and reduce manual tasks.",
                  icon: card1,
                },
                {
                  title: "Cost Savings",
                  text: "Cloud-based solutions and automation reduce operational costs over time.",
                  icon: card2,
                },
                {
                  title: "Stronger Security",
                  text: "Digital transformation includes cybersecurity measures to protect sensitive data.",
                  icon: card3,
                },
              ].map((card, index) => (
                <div
                  className="about-card2 wow fadeInUp"
                  data-wow-delay={`.${3 + index}s`}
                  key={index}
                >
                  <div className="box-centent">
                    <h5 className="box-title">{card.title}</h5>
                    <p className="box-text">{card.text}</p>
                    <a href="blog-details.html" className="line-btn th-icon">
                      Learn More <i className="fa-light fa-arrow-right-long" />
                    </a>
                  </div>
                  <div className="box-img">
                    <img src={card.icon} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Images + Badge */}
          <div className="col-xl-7 order-0 order-xl-1">
            <div className="img-box14 img-box19 img-box ps-xl-2 ms-xl-5">
              <div className="about-img-wrapp position-relative">
                <div className="img1 rounded-img">
                  <img src={img1} alt="About" />
                </div>
                <div className="img2 rounded-img">
                  <img src={img2} alt="About" />
                </div>

                {/* Rotating Badge in Center */}
                <div className="about-circle">
                  <div className="company-wrapp">
                    <a href="index.html" className="icon">
                      <img src={logoIcon} alt="" />
                    </a>
                    <div className="discount-wrapp">
                      <div
                        className="discount-tag rotating-badge"
                        style={{
                          backgroundImage: `url(${badgeCircle})`,
                        }}
                      >
                        <span className="discount-anime text-white">
                          Software Development Company .
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End badge */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection13;
