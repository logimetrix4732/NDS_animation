import React from "react";

const AboutSection8 = () => {
  return (
    <div
      className="bg-smoke position-relative overflow-hidden space"
      id="about-sec"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="img-box4 ab5-imgbox space-bottom text-end">
              <div className="img1 reveal">
                <img src="assets/img/normal/about_4_1.jpg" alt="About" />
              </div>
              <div className="img2">
                <img src="assets/img/normal/about_4_2.jpg" alt="About" />
                <a
                  href="https://www.youtube.com/watch?v=pQpFebyALV0"
                  className="play-btn popup-video"
                >
                  <i className="fa-sharp fa-solid fa-play" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="ab5-wrapp mt-40">
              <div className="title-area">
                <span className="sub-title style1 text-anime-style-2">
                  About Us
                </span>
                <h2 className="sec-title text-anime-style-2">
                  The Perfect Solution For All The Protection.
                </h2>
                <p className="sec-text mb-30 wow fadeInUp" data-wow-delay=".2s">
                  Cybersecurity refers to the practice of protecting computer
                  systems, networks, devices, and data from unauthorized access,
                  cyberattacks, theft, or damage. It encompasses a range of
                  technologies, processes. and practices designed to safeguard
                  digital assets and ensure.
                </p>
              </div>
              <div className="about-item-wrap">
                <div
                  className="about-item ab5-item wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="about-item_img">
                    <img src="assets/img/icon/shield.svg" alt="" />
                  </div>
                  <div className="about-item_centent">
                    <h5 className="box-title">High Quality Service</h5>
                    <p className="about-item_text">
                      Practices designed to safeguard digital assets and ensure
                    </p>
                  </div>
                </div>
                <div
                  className="about-item ab5-item wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div className="about-item_img">
                    <img src="assets/img/icon/shield.svg" alt="" />
                  </div>
                  <div className="about-item_centent">
                    <h5 className="box-title">Database Security</h5>
                    <p className="about-item_text">
                      Practices designed to safeguard digital assets and ensure
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-35 wow fadeInUp" data-wow-delay=".5s">
                <a href="about.html" className="th-btn th-radius th-icon">
                  Learn More <i className="fa-light fa-arrow-right-long" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="shape-mockup d-none d-xxl-block"
        data-bottom="0%"
        data-right="0%"
      >
        <img src="assets/img/shape/about-5-shape.png" alt="" />
      </div>
    </div>
  );
};

export default AboutSection8;
