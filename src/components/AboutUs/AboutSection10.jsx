import React from "react";

const AboutSection10 = () => {
  return (
    <div className="bg-smoke overflow-hidden space">
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div className="col-lg-6 order-1 order-lg-0">
            <div className="title-area">
              <span className="sub-title style1 text-anime-style-2">
                Why Choose Us
              </span>
              <h2 className="sec-title text-anime-style-2">
                Building the Future of Technology Today
              </h2>
              <p className="sec-text me-xl-5 wow fadeInUp" data-wow-delay=".3s">
                A software development company specializes in designing,
                developing, and deploying software applications tailored to meet
                specific client needs. These companies combine technical
                expertise with innovative strategies to deliver cutting-edge
                solutions for businesses across various industries.
              </p>
            </div>
            <div className="choose-about wow fadeInUp">
              <div className="choose-about_icon">
                <img src="assets/img/icon/choose_1_1.svg" alt="image" />
              </div>
              <div className="media-body">
                <h3 className="box-title">Evolving Technologies</h3>
                <p className="choose-about_text pe-xl-5 me-xl-5">
                  Staying updated with the latest trends through continuous
                  learning and innovation.
                </p>
              </div>
            </div>
            <div className="choose-about wow fadeInUp">
              <div className="choose-about_icon">
                <img src="assets/img/icon/choose_1_2.svg" alt="image" />
              </div>
              <div className="media-body">
                <h3 className="box-title">Data Security</h3>
                <p className="choose-about_text pe-xl-5 me-xl-5">
                  Adhering to industry standards like GDPR, HIPAA, and ISO for
                  data protection.
                </p>
              </div>
            </div>
            <div className="choose-about wow fadeInUp">
              <div className="choose-about_icon">
                <img src="assets/img/icon/choose_1_3.svg" alt="image" />
              </div>
              <div className="media-body">
                <h3 className="box-title">Quality Assurance</h3>
                <p className="choose-about_text pe-xl-5 me-xl-5">
                  Rigorous testing processes to deliver bug-free and
                  high-performing software.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-0 order-lg-1">
            <div className="choose-wrapp">
              <div className="img1 global-img">
                <img src="assets/img/choose/choose_3_1.jpg" alt="Choose" />
              </div>
              <div className="img1 global-img">
                <img src="assets/img/choose/choose_3_2.jpg" alt="Choose" />
              </div>
              <div className="img1 global-img">
                <img src="assets/img/choose/choose_3_3.jpg" alt="Choose" />
              </div>
              <div className="img1 global-img">
                <img src="assets/img/choose/choose_3_4.jpg" alt="Choose" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection10;
