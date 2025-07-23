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
                <h2 className="sec-title text-anime-style-3">SAG Live</h2>
                <p className="sec-text mb-10 wow fadeInUp" data-wow-delay=".4s">
                  Through SAG Live, NDS is making high genetic merit,
                  disease-free live animals accessible to farmers across India.
                  These animals represent a selection of elite indigenous breeds
                  such as Gir, Sahiwal, Rathi, Tharparkar, and Red Sindhi as
                  well as crossbred and exotic varieties, including HF and
                  Jersey crosses, all verified for pedigree, productivity, and
                  health.
                </p>
                <p className="sec-text mb-10 wow fadeInUp" data-wow-delay=".4s">
                  Launched as part of NDS's Superior Animal Genetics (SAG)
                  initiative, SAG Live was created to bring transparency and
                  fairness into the traditional unregulated live animal trade.
                  It eliminates the influence of exploitative intermediaries,
                  ensuring that buyers receive genuine value through verified
                  animal records and assured quality. Farmers are empowered to
                  select animals best suited to their specific milk production
                  goals and management capacities, enabling them to build more
                  resilient and profitable dairy enterprises.
                </p>
                <p className="sec-text mb-30 wow fadeInUp" data-wow-delay=".4s">
                  By promoting responsible breeding, trust-based networks, and
                  data-backed transactions, SAG Live contributes to long-term
                  genetic improvement and sustainability in India’s dairy
                  sector.
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
