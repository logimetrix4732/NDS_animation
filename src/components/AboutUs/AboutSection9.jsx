import React from "react";

const AboutSection9 = () => {
  return (
    <div
      className="about-area smoke-bg position-relative overflow-hidden space"
      id="about-sec"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="img-box6">
              <div className="img1 reveal">
                <img src="assets/img/normal/about_6_1.jpg" alt="About" />
              </div>
              <div className="img2 reveal">
                <img src="assets/img/normal/about_6_2.jpg" alt="About" />
              </div>
              <div className="img3 reveal">
                <img src="assets/img/normal/about_6_3.jpg" alt="About" />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="ps-xl-3 ms-xl-3 ps-xl-5 ms-xxl-5">
              <div className="title-area about-7-titlebox mb-20">
                <span className="sub-title style1 text-anime-style-2">
                  About Us
                </span>
                <h2 className="sec-title mb-20 text-anime-style-3">
                  The First Call You Make for Tech Solutions.
                </h2>
                <p className="sec-text mb-30 wow fadeInUp" data-wow-delay=".4s">
                  Tech support services provide assistance to individuals and
                  organizations in resolving technical issues related to
                  hardware, software, networks, and other IT systems. These
                  services are crucial for ensuring smooth operations,
                  minimizing downtime.
                </p>
              </div>
              <div className="about-item-wrap">
                <div className="about-item wow fadeInUp" data-wow-delay=".5s">
                  <div className="about-item_img ab-img7">
                    <img src="assets/img/icon/th-shield.svg" alt="" />
                  </div>
                  <div className="about-item_centent">
                    <h5 className="box-title">AI-Powered Support</h5>
                    <p className="about-item_text">
                      Virtual assistants and chatbots for faster resolution of
                      common issues.
                    </p>
                  </div>
                </div>
                <div className="about-item wow fadeInUp" data-wow-delay=".6s">
                  <div className="about-item_img ab-img7">
                    <img src="assets/img/icon/th-shield.svg" alt="" />
                  </div>
                  <div className="about-item_centent">
                    <h5 className="box-title">Predictive Maintenance</h5>
                    <p className="about-item_text">
                      Leveraging data analytics to prevent issues before they
                      occur.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-35 wow fadeInUp" data-wow-delay=".7s">
                <a
                  href="about.html"
                  className="th-btn black-btn th-radius th-icon"
                >
                  Learn More <i className="fa-light fa-arrow-right-long" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection9;
