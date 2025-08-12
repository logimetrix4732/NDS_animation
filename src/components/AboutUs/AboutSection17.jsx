import React from "react";
import AnimatedText from "../AnimatedText";
import GroupPhoto from "../../Images/AnimalProductivityImg/DSC_0266.jpg";
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
                <img
                  src={GroupPhoto}
                  alt="About"
                  loading="lazy"
                  style={{
                    width: "576px",
                    height: "430px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="title-area mb-20 mt-30">
              <AnimatedText
                text="Animal Productivity Services"
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
                under the SAG (Superior Animal Genetics) brand to promote
                genetic improvement in milch animals. Collectively catering over
                35% of the country’s semen dose requirement these stations form
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
