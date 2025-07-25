import React from "react";
import { Link } from "react-router-dom";
import AnimatedText from "../AnimatedText";
import DSC_1967 from "../../Images/OurExpertiesImg/DSC_1967.jpg";
const AboutSection12 = () => {
  return (
    <div className="choose-area space">
      <div className="container">
        <div className="row gy-4 align-items-center flex-row-reverse">
          <div className="col-lg-6 order-1 order-lg-0">
            <div className="ps-xl-5">
              <div className="title-area">
                <AnimatedText
                  text="Setting up MPOs"
                  tag="h2"
                  className="sec-title mb-10 heading text-anime-style-3"
                  width="100%"
                />
                <p className="wow fadeInUp">
                  At NDDB Dairy Services, we specialise in establishing
                  sustainable and professionally managed Milk Producer
                  Organisations (MPOs). These farmers owned institutions drive
                  sustainable income, self-reliance and rural resilience. Our
                  end-to-end approach focuses on empowering dairy farmers
                  through structured processes, scalable systems and an assured
                  market access. The goal is to transition rural dairy farmers
                  from informal milk suppliers to organised and empowered
                  stakeholders in the mainstream economy through structured and
                  value-driven enterprises that strengthen the cooperative
                  movement across the country. 
                </p>
              </div>
              <div className="mt-30 wow fadeInUp" data-wow-delay=".4s">
                <Link to="/milkproducer" className="th-btn th-icon">
                  Learn more <i className="fa-light fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-0 order-lg-1">
            <div className="choose-imgbox text-center text-md-start">
              <div className="row align-items-center">
                <div className="col-sm-7 col-md-7 col-xl-7">
                  <div className="img1 wow fadeInLeft" data-wow-delay=".1s">
                    <img
                      className="w-100"
                      src={DSC_1967}
                      alt="About"
                      style={{
                        width: "368px",
                        height: "512.64px",
                        objectFit: "cover",
                        borderRadius: "25px",
                      }}
                    />
                  </div>
                </div>
                <div className="col-sm-5 col-md-5 col-xl-5 d-lg-none d-xl-block">
                  <div className="img-box-sm wow fadeInUp" data-wow-delay=".2s">
                    <div className="img2 mb-25">
                      <img
                        className="th-radius"
                        src="assets/img/normal/about_10_2.jpg"
                        alt="About"
                      />
                    </div>
                    <div className="img3 wow fadeInRight" data-wow-delay=".3s">
                      <img
                        className="th-radius"
                        src="assets/img/normal/about_10_3.jpg"
                        alt="About"
                      />
                    </div>
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

export default AboutSection12;
