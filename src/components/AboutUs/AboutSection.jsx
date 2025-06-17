import React from "react";

const AboutSection = () => {
  return (
    <div
      className="about-area position-relative overflow-hidden space-bottom"
      id="about-sec"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="img-box1">
              <div className="img1">
                <img src="assets/img/normal/about_1_1.jpg" alt="About" />
              </div>
              <div className="img2">
                <img src="assets/img/normal/about_1_2.jpg" alt="About" />
              </div>
              <div className="img3">
                <img src="assets/img/normal/about_1_3.jpg" alt="About" />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="ps-xl-4 ms-xxl-4">
              <div className="title-area about1-title-box mb-20 pe-xxl-5 me-xxl-5">
                <span className="sub-title style1 text-anime-style-2">
                  About Us Our Company
                </span>
                <h2 className="sec-title mb-20 heading text-anime-style-3">
                  Solutions That Evolve with Your Business
                </h2>
                <p className="sec-text mb-30 wow fadeInUp" data-wow-delay=".1s">
                  IT solutions refer to a broad range of services and
                  technologies designed to address specific business needs,
                  streamline operations, and drive growth. These solutions
                  encompass hardware.
                </p>
              </div>
              <div className="about-item-wrap">
                <div className="about-item wow fadeInUp" data-wow-delay=".2s">
                  <div className="about-item_img">
                    <img src="assets/img/icon/map3.svg" alt="" />
                  </div>
                  <div className="about-item_centent">
                    <h5 className="box-title">Manage Tech Services</h5>
                    <p className="about-item_text">
                      There are many variations of passages of available but the
                      majority.
                    </p>
                  </div>
                </div>
                <div className="about-item wow fadeInUp" data-wow-delay=".3s">
                  <div className="about-item_img">
                    <img src="assets/img/icon/guide.svg" alt="" />
                  </div>
                  <div className="about-item_centent">
                    <h5 className="box-title">Internal Networking</h5>
                    <p className="about-item_text">
                      There are many variations of passages of available but the
                      majority.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-35 wow fadeInUp">
                <a href="about.html" className="th-btn th-icon">
                  Learn More <i className="fa-light fa-arrow-right-long" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="shape-mockup shape1 d-none d-xl-block"
          style={{
            position: "absolute",
            bottom: "80%",
            right: "10%",
            zIndex: 1,
          }}
        >
          <img src="assets/img/shape/ab-1-shape-1.png" alt="shape" />
        </div>
        <div
          className="shape-mockup shape3 d-none d-xl-block"
          style={{
            position: "absolute",
            bottom: "18%",
            left: "0%",
            zIndex: 1,
          }}
        >
          <img src="assets/img/shape/ab-1-shape-2.png" alt="shape" />
        </div>
        <div
          className="shape-mockup about-shape movingX"
          style={{
            position: "absolute",
            bottom: "30%",
            right: "10%",
            zIndex: 1,
            display: window.innerWidth < 768 ? "none" : "block",
          }}
        >
          <img
            src="assets/img/normal/about-right-img.jpg"
            alt="shape"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
