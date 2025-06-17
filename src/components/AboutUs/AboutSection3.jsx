import React from "react";

const AboutSection3 = () => {
  return (
    <section className="choose-6-area space-bottom space-bottom">
      <div className="container">
        <div className="row gy-4 align-items-start">
          <div className="col-xl-5 order-1 order-xl-0">
            <div className="title-area mt-40 mb-20 pe-xl-5">
              <span className="sub-title text-anime-style-2">Why Choose Us</span>
              <h2 className="sec-title text-anime-style-3">
                The Art of Web & Mobile Development
              </h2>
            </div>
            <div className="about-item style-16">
              <div className="about-content">
                <p className="about-text wow fadeInUp">
                  Web and app development is the cornerstone of digital
                  transformation. By creating innovative and user-centric
                  platforms, businesses can improve their reach, enhance
                  engagement, and stay ahead in a competitive market.
                </p>
                <div className="about-featured-box d-sm-flex align-items-start">
                  <div className="about-feature pe-xl-4">
                    <ul>
                      <li className="wow fadeInUp" data-wow-delay=".2s">
                        Increased Visibility
                      </li>
                      <li className="wow fadeInUp" data-wow-delay=".3s">
                        Data Collection
                      </li>
                      <li className="wow fadeInUp" data-wow-delay=".4s">
                        Blockchain Technology
                      </li>
                    </ul>
                  </div>
                  <div className="about-feature">
                    <ul>
                      <li className="wow fadeInUp" data-wow-delay=".2s">
                        Business Growth
                      </li>
                      <li className="wow fadeInUp" data-wow-delay=".3s">
                        Improved Accessibility
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="about-btn mt-30 wow fadeInUp" data-wow-delay=".4s">
                  <a href="contact.html" className="th-btn th-icon">
                    Get Started Now <i className="fa-light fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-7 order-0 order-xl-1">
            <div className="choose-wrapper text-end position-relative mb-80">
              <div className="choose-item4">
                <div className="choose-img">
                  <img src="assets/img/choose/choose_4_1.jpg" alt="" />
                </div>
              </div>
              <div className="choose-item4">
                <div className="choose-img">
                  <img src="assets/img/choose/choose_4_2.jpg" alt="" />
                </div>
              </div>
              <div className="choose-item4">
                <div className="choose-img">
                  <img src="assets/img/choose/choose_4_3.jpg" alt="" />
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
