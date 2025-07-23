import React from "react";
import AnimatedText from "../AnimatedText";

const AboutSection17 = () => {
  return (
    <div
      className="about-area position-relative overflow-hidden space overflow-hidden"
      id="about-sec"
    >
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div className="col-xl-6">
            <div className="img-box17">
              <div className="img1 global-img">
                <img src="assets/img/normal/about_12_1.jpg" alt="About" />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="title-area mb-20">
              <span className="sub-title style1 wow fadeInLeft">
                Animal Productivity Services
              </span>
              <AnimatedText
                text="Powering Dairy Through Genetics"
                tag="h2"
                className="sec-title mb-10 heading text-anime-style-3"
                width="100%"
              />
              <p className="sec-text mb-30 wow fadeInUp">
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

export default AboutSection17;
