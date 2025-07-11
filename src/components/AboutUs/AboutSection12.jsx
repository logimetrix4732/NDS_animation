import React from "react";

const AboutSection12 = () => {
  return (
    <div className="choose-area space">
      <div className="container">
        <div className="row gy-4 align-items-center flex-row-reverse">
          <div className="col-lg-6 order-1 order-lg-0">
            <div className="ps-xl-5">
              <div className="title-area">
                <span className="sub-title style1 text-anime-style-2">
                  Why Choose Us
                </span>
                <h2 className="sec-title text-anime-style-3">
                  IT Solutions Designed to Drive Results
                </h2>
                <p className="wow fadeInUp">
                  IT solutions are the backbone of modern businesses, enabling
                  them to adapt to changing technologies and market demands.
                  Whether you're a small business or a large enterprise,
                  investing in the right IT solutions can drive growth,
                  innovation, and long-term success.
                </p>
              </div>
              <div className="skill-feature">
                <h3 className="skill-feature_title">
                  IT Solution &amp; Management
                </h3>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "90%" }} />
                  <div className="progress-value">90%</div>
                </div>
              </div>
              <div className="skill-feature">
                <h3 className="skill-feature_title">
                  Website &amp; App Development
                </h3>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "75%" }} />
                  <div className="progress-value">75%</div>
                </div>
              </div>
              <div className="skill-feature">
                <h3 className="skill-feature_title">
                  SEO &amp; Digital Marketing
                </h3>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "82%" }} />
                  <div className="progress-value">82%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-0 order-lg-1">
            <div className="choose-imgbox text-center text-md-start">
              <div className="row align-items-center">
                <div className="col-sm-7 col-md-7 col-xl-7">
                  <div className="img1">
                    <img
                      className="w-100"
                      src="assets/img/normal/about_10_1.jpg"
                      alt="About"
                    />
                  </div>
                </div>
                <div className="col-sm-5 col-md-5 col-xl-5 d-lg-none d-xl-block">
                  <div className="img-box-sm">
                    <div className="img2 mb-25">
                      <img
                        className="th-radius"
                        src="assets/img/normal/about_10_2.jpg"
                        alt="About"
                      />
                    </div>
                    <div className="img3">
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
