import React from "react";

const AboutSection7 = () => {
  return (
    <div
      className="about-area position-relative overflow-hidden space overflow-hidden"
      id="about-sec"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-7">
            <div className="img-box3 style1">
              <div className="img1 reveal">
                <img src="assets/img/normal/about_3_1.jpg" alt="About" />
              </div>
              <div className="img2 wow fadeInRight" data-wow-delay=".3s">
                <img src="assets/img/normal/about_3_2.jpg" alt="About" />
              </div>
              <div className="img3 movingX">
                <img src="assets/img/normal/about_3_3.jpg" alt="About" />
              </div>
            </div>
          </div>
          <div className="col-xl-5">
            <div className="ps-xxl-2">
              <div className="title-area about-3-titlebox mb-20 pe-xxl-1 me-xxl-1">
                <span className="sub-title style1 text-anime-style-2">
                  About The AI Machine Learning
                </span>
                <h2 className="sec-title mb-20 text-anime-style-3">
                  The world's leading AI &amp; machine learning company
                </h2>
              </div>
              <p className="sec-text mb-30 wow fadeInUp" data-wow-delay=".1s">
                Artificial Intelligence (AI) and Machine Learning (ML) are
                transformative technologies that enable machines to mimic human
                intelligence, learn from data, and make decisions with minimal
                human intervention. These technologies power a wide range of
                applications.
              </p>
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
                <div className="about-item wow fadeInUp" data-wow-delay=".4s">
                  <div className="about-item_img">
                    <img src="assets/img/icon/headphone.svg" alt="" />
                  </div>
                  <div className="about-item_centent">
                    <h5 className="box-title">Artificial Intelligence (AI)</h5>
                    <p className="about-item_text">
                      There are many variations of passages of available but the
                      majority.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-35 wow fadeInUp" data-wow-delay=".5s">
                <a href="about.html" className="th-btn black-btn th-icon">
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

export default AboutSection7;
