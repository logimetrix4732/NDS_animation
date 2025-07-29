import React from "react";
import AnimatedText from "../AnimatedText";
import { Link } from "react-router-dom";
import SemenStationsImg from "../../Images/OurExpertiesImg/DSC_0524.JPG";
import animalImg from "../../Images/OurExpertiesImg/21046.jpg";
import IMG_6393 from "../../Images/OurExpertiesImg/IMG_6393.JPG";
const AboutSection3 = () => {
  return (
    <section className="choose-6-area space-bottom">
      <div className="container">
        <div className="row gy-4 align-items-start">
          <div className="col-xl-5 order-1 order-xl-0 mt-50">
            <div className="title-area mb-20 pe-xl-5">
              <AnimatedText
                text="Animal Productivity Enhancement Services"
                tag="h2"
                className="sec-title mb-20 heading text-anime-style-3"
                width="100%"
              />
            </div>
            <p className="sec-text mb-10 wow fadeInUp">
              Improving animal productivity and advancing breed quality is a key
              objective of NDS. We owned and managed the four major semen
              stations in the country – Sabarmati Ashram Gaushala in Bidaj
              (Gujarat); Animal Breeding Centre, Salon (Uttar Pradesh); Alamadhi
              Semen Station (Tamil Nadu); and Rahuri Semen Station
              (Maharashtra), that produce and supply high-quality bovine semen
              under the ‘SAG’ (Superior Animal Genetics) brand, to promote
              genetic improvement in milch animals. Collectively catering over
              35% of the country’s semen dose requirement, these stations form
              the backbone of our genetic improvement programmes with a strong
              focus on enhancing productivity, fertility, and overall
              profitability in the dairy sector.
            </p>
            <div className="mt-30 wow fadeInUp" data-wow-delay=".4s">
              <Link to="/animalProductivity" className="th-btn th-icon">
                Learn more <i className="fa-light fa-arrow-right-long" />
              </Link>
            </div>
          </div>

          <div className="col-xl-7 mt-80 order-0 order-xl-1">
            <div className="choose-wrapper text-end position-relative mb-80">
              <div className="choose-item4">
                <div className="choose-img wow fadeInUp">
                  <img
                    src={animalImg}
                    alt="Animal Productivity Services 1"
                    style={{
                      width: "302px",
                      height: "268px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
              <div className="choose-item4">
                <div className="choose-img wow fadeInRight">
                  <img
                    src={SemenStationsImg}
                    alt="Animal Productivity Services 2"
                    style={{
                      width: "672px",
                      height: "487px",
                      objectFit: "cover",
                      borderRadius: "28px",
                    }}
                  />
                </div>
              </div>
              <div className="choose-item4">
                <div className="choose-img wow fadeInUp">
                  <img
                    src={IMG_6393}
                    alt="Animal Productivity Services 3"
                    style={{
                      width: "506px",
                      height: "251px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection3;
