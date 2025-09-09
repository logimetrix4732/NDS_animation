import React from "react";

const AboutSection15 = () => {
  return (
    <div
      className="about-area position-relative overflow-hidden space"
      id="about-sec"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="img-box15 d-flex justify-content-center">
              <div className="img1 d-none d-md-block ">
                <img
                  src="assets/img/normal/about_15_1.jpg"
                  alt="About"
                  className="wow fadeInUp"
                />
                <img
                  src="assets/img/normal/about_15_2.jpg"
                  alt="About"
                  className="wow fadeInLeft"
                />
              </div>
              <div className="img2 wow fadeInDown">
                <img src="assets/img/normal/about_15_3.jpg" alt="About" />
              </div>
            </div>
          </div>
          <div className="col-xl-6 mt-20">
            <div className="about-15-title-box ps-xl-3 ms-xl-5">
              <div className="title-area mb-20">
                <h2 className="sec-title mb-25 text-anime-style-3">
                  Vision, Mission & Core Values
                </h2>
              </div>
              <p
                className="sec-text mb-10 me-xl-3 wow fadeInUp"
                data-wow-delay=".3s"
              >
                Improving animal productivity and advancing breed quality is a
                key objective of NDS. We own/manage the four major semen
                stations in the country – Sabarmati Ashram Gaushala in Bidaj
                (Gujarat); Animal Breeding Centre, Salon (Uttar Pradesh);
                Alamadhi Semen Station (Tamil Nadu); and Rahuri Semen Station
                (Maharashtra), that produce and supply high-quality bovine semen
                under the SAG (Superior Animal Genetics) brand, to promote
                genetic improvement in milch animals. Collectively catering over
                35% of the country’s semen dose requirement, these station form
                the backbone of our genetic improvement programmes with a strong
                focus on enhancing productivity, fertility and overall
                profitability in the dairy sector.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection15;
