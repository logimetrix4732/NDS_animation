import React from "react";
import AnimatedText from "../AnimatedText";
import SAGLiveImg from "../../Images/OurExpertiesImg/SAGLiveImg.jpg";
import SAGLiveImg1 from "../../Images/OurExpertiesImg/21083.jpg";
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
                className="img1 bg-mask wow fadeInLeft"
                data-mask-src="assets/img/shape/about_9_1_shape.png"
              >
                <img
                  src={SAGLiveImg1}
                  alt="About"
                  loading="lazy"
                  style={{
                    width: "480px",
                    height: "480px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div
                className="img2 bg-mask wow fadeInDown"
                data-mask-src="assets/img/shape/about_9_2_shape.png"
              >
                <img
                  src={SAGLiveImg}
                  alt="About"
                  loading="lazy"
                  style={{
                    width: "354px",
                    height: "354px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="ps-xxl-5 ms-xxl-4">
              <div className="title-area about10-titlebox mb-20 mt-15">
                <AnimatedText
                  text="SAG Live"
                  tag="h2"
                  className="sec-title mb-10 heading text-anime-style-3"
                  width="100%"
                />
                <p className="sec-text mb-10 wow fadeInUp" data-wow-delay=".2s">
                  Through SAG Live, NDS is making high genetic merit,
                  disease-free live animals accessible to farmers across India.
                  These animals represent a selection of elite indigenous breeds
                  such as Gir, Sahiwal, Rathi, Tharparkar, and Red Sindhi as
                  well as crossbred and exotic varieties, including HF and
                  Jersey crosses, all verified for pedigree, productivity, and
                  health.
                </p>
                <p className="sec-text mb-10 wow fadeInUp" data-wow-delay=".2s">
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
                <p className="sec-text mb-10 wow fadeInUp" data-wow-delay=".2s">
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

export default AboutSection11;
