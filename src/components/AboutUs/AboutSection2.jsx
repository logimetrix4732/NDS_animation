import React from "react";

const AboutSection2 = () => {
  return (
    <div
      class="about-area position-relative overflow-hidden space-bottom"
      id="about-sec"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="title-area mb-20">
              <span className="sub-title style1 text-anime-style-2">
                Who We Are
              </span>
              <h2 className="sec-title mb-20 text-anime-style-3">
                We Build Software That Builds Businesses.
              </h2>
              <p className="sec-text mb-60 wow fadeInUp" data-wow-delay=".2s">
                A software development company specializes in designing,
                developing, and deploying software applications tailored to meet
                specific client needs. These companies combine technical
                expertise with innovative strategies to deliver cutting-edge
                solutions for businesses across various industries. From mobile
                apps to enterprise software, their services ensure that clients
                can achieve operational efficiency, scalability.
              </p>
            </div>
            <div className="img-box8">
              <div className="row">
                <div className="col-xl-6 col-md-6 col-sm-6">
                  <div className="img1 reveal">
                    <img src="assets/img/normal/about_7_1.jpg" alt="About" />
                  </div>
                </div>
                <div className="col-xl-6 col-md-6 col-sm-6">
                  <div className="img2 reveal">
                    <img src="assets/img/normal/about_7_2.jpg" alt="About" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="img-box8 ms-xl-5">
              <div className="img3 reveal">
                <img src="assets/img/normal/about_7_3.jpg" alt="About" />
              </div>
              <div className="about-item-wrap">
                <div className="about-item wow fadeInUp" data-wow-delay=".3s">
                  <div className="about-item_img">
                    <img src="assets/img/icon/shield.svg" alt="" />
                  </div>
                  <div className="about-item_centent">
                    <h5 className="box-title">Technical Expertise</h5>
                    <p className="about-item_text">
                      Access to a team of skilled developers, designers, and
                      project managers.
                    </p>
                  </div>
                </div>
                <div className="about-item wow fadeInUp" data-wow-delay=".4s">
                  <div className="about-item_img">
                    <img src="assets/img/icon/shield.svg" alt="" />
                  </div>
                  <div className="about-item_centent">
                    <h5 className="box-title">Custom Solutions</h5>
                    <p className="about-item_text">
                      Development tailored to specific business needs, ensuring
                      better alignment with goals.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-35 wow fadeInUp" data-wow-delay=".5s">
                <a href="about.html" className="th-btn black-btn th-radius th-icon">
                  Learn More <i className="fa-light fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection2;
