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
              <div className="img1 reveal wow fadeInLeft" data-wow-delay=".2s">
                <img src="assets/img/normal/about_6_1.jpg" alt="About" />
              </div>
              <div className="img2 reveal wow fadeInUp" data-wow-delay=".3s">
                <img src="assets/img/normal/about_6_2.jpg" alt="About" />
              </div>
              <div className="img3 reveal wow fadeInRight" data-wow-delay=".4s">
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
                <h2 className="sec-title text-anime-style-3">
                  Animal Productivity Services
                </h2>
                <p className="sec-text mb-10 wow fadeInUp" data-wow-delay=".4s">
                  Improving animal productivity and advancing breed quality is a
                  key objective of NDS. We own/manage the four major semen
                  stations in the country – Sabarmati Ashram Gaushala in Bidaj
                  (Gujarat); Animal Breeding Centre, Salon (Uttar Pradesh);
                  Alamadhi Semen Station (Tamil Nadu); and Rahuri Semen Station
                  (Maharashtra), that produce and supply high-quality bovine
                  semen under the SAG (Superior Animal Genetics) brand, to
                  promote genetic improvement in milch animals. Collectively
                  catering over 35% of the country’s semen dose requirement,
                  these station form the backbone of our genetic improvement
                  programmes with a strong focus on enhancing productivity,
                  fertility and overall profitability in the dairy sector.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection9;
