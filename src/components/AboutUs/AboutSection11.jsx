import React from "react";

const AboutSection11 = () => {
  return (
    <div
      className="about-area space-extra-bottom position-relative overflow-hidden space"
      id="about-sec"
    >
      <div className="container">
        <div className="row gy-4">
          <div className="col-xl-6">
            <div className="about10 img-box10 position-relative">
              <div
                className="img1 bg-mask"
                data-mask-src="assets/img/shape/about_9_1_shape.png"
              >
                <img src="assets/img/normal/about_9_1.jpg" alt="About" />
              </div>
              <div
                className="img2 bg-mask"
                data-mask-src="assets/img/shape/about_9_2_shape.png"
              >
                <img src="assets/img/normal/about_9_2.jpg" alt="About" />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="ps-xxl-5 ms-xxl-4">
              <div className="title-area about10-titlebox mb-20">
                <span className="sub-title style1 text-anime-style-2">
                  About Us
                </span>
                <h2 className="sec-title mb-20 heading text-anime-style-3">
                  Unlocking Potential with Tailored IT Solutions
                </h2>
                <p className="sec-text mb-30 wow fadeInUp" data-wow-delay=".2s">
                  IT Solutions&nbsp;encompass a wide range of services,
                  technologies, and strategies designed to address the
                  technological needs of businesses and organizations. These
                  solutions are tailored to improve efficiency, enhance
                  productivity, ensure security, and drive innovation.
                </p>
              </div>
              <div className="about10-item-wrap">
                <div className="about-item wow fadeInUp" data-wow-delay=".3s">
                  <div className="about-item_img">
                    <img src="assets/img/icon/shield.svg" alt="" />
                  </div>
                  <div className="about-item_centent">
                    <h5 className="box-title">Increased Efficiency</h5>
                    <p className="about-item_text">
                      Automating repetitive tasks and streamlining workflows to
                      save time and resources.
                    </p>
                  </div>
                </div>
                <div className="about-item wow fadeInUp" data-wow-delay=".4s">
                  <div className="about-item_img">
                    <img src="assets/img/icon/shield.svg" alt="" />
                  </div>
                  <div className="about-item_centent">
                    <h5 className="box-title">Competitive Advantage</h5>
                    <p className="about-item_text">
                      Leveraging cutting-edge technology to stay ahead in the
                      market.
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
        <div
          className="shape-mockup about-shape movingX d-none d-xxl-block"
          data-bottom="0%"
          data-right="-11%"
        >
          <img src="assets/img/normal/about-slide-img.png" alt="shape" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection11;
