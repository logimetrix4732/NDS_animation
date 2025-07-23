import React from "react";
import AnimatedText from "../AnimatedText";

const AboutSection10 = () => {
  return (
    <div className="bg-smoke overflow-hidden space">
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div className="col-lg-6 order-1 order-lg-0">
            <div className="title-area mt-40">
              <span className="sub-title style1 text-anime-style-2 wow fadeInLeft">
                Artificial Insemination & Embryo Transfer
              </span>
              <AnimatedText
                text="AI & ET Services"
                tag="h2"
                className="sec-title mb-10 heading text-anime-style-3"
                width="100%"
              />
              <p className="sec-text me-xl-5 wow fadeInUp" data-wow-delay=".2s">
                NDS has established a robust doorstep delivery system for
                Artificial Insemination (AI) through a network of well-trained
                and certified AI technicians. These services are delivered using
                top-quality genetics and adhere to strict SOPs to ensure
                consistency and success in breeding outcomes. To further support
                reproductive efficiency, infertility management camps and calf
                shows are organised to regularly promote awareness and farmer
                engagement. All AI-related data including the registration of
                female calves born through AI, is systematically captured in the
                Bharat Pashudhan Application enabling traceability,
                recordkeeping and genetic tracking.
              </p>
              <p className="sec-text me-xl-5 wow fadeInUp" data-wow-delay=".3s">
                Recognising the potential of Embryo Transfer (ET) in
                accelerating genetic progress, NDS has taken a proactive role in
                promoting ET Technology which although in its early stages of
                adoption in India offers significantly faster genetic gains
                compared to conventional AI. At the state-of-the-art IVF
                laboratory established at Sabarmati Ashram Gaushala, embryos of
                various indigenous cattle breeds are produced through in-vivo
                and in-vitro techniques. These embryos are used both for
                producing high genetic merit breeding bulls for semen stations
                and for on-field transfer to farmer’s animals, enabling the
                birth of superior calves right at the doorstep. The successful
                field implementation of ET has not only demonstrated its
                feasibility but has also increased awareness and demand for
                embryos among progressive dairy farmers paving the way for wider
                adoption of advanced reproductive technologies in India’s dairy
                sector.
              </p>
            </div>
          </div>
          <div className="col-lg-6 order-0 order-lg-1">
            <div className="choose-wrapp">
              <div className="img1 global-img wow fadeInLeft">
                <img src="assets/img/choose/choose_3_1.jpg" alt="Choose" />
              </div>
              <div className="img1 global-img wow fadeInDown">
                <img src="assets/img/choose/choose_3_2.jpg" alt="Choose" />
              </div>
              <div className="img1 global-img wow fadeInUp">
                <img src="assets/img/choose/choose_3_3.jpg" alt="Choose" />
              </div>
              <div className="img1 global-img wow fadeInRight">
                <img src="assets/img/choose/choose_3_4.jpg" alt="Choose" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection10;
