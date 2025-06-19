import React from "react";
import "./CountNumber.css";
import bgstructure from "../../Images/bg-structure.png";
const CountNumber = () => {
  return (
    <div
      className="counter-area space space-extra3-bottom overflow-hidden"
      style={{
        backgroundImage: `url(${bgstructure})`,
        backgroundSize: "contain",
      }}
    >
      <div className="container">
        <div className="counter-wrap1">
          <div className="row">
            <div className="col-md-6 col-xl-3 counter-card-wrap">
              <div className="counter-card">
                <div className="counter-shape">
                  <span />
                </div>
                <div className="media-body">
                  <h3 className="box-number">
                    <span className="counter-number">20</span>+
                  </h3>
                  <h6 className="titleFontSize">
                    Producer Organization <br />
                    Development
                  </h6>
                  <span className="paraFontSize">
                    Established over 23 Milk Producer Organizations benefiting
                    more than 800,000 dairy farmers across India.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3 counter-card-wrap">
              <div className="counter-card">
                <div className="counter-shape">
                  <span />
                </div>
                <div className="media-body">
                  <h3 className="box-number">
                    <span className="counter-number">60</span>Lac +
                  </h3>
                  <h6 className="titleFontSize">
                    Quality Enhancement <br /> Programs
                  </h6>
                  <span className="paraFontSize">
                    Implemented quality testing and assurance systems that have
                    improved milk quality by 40% in partner regions.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3 counter-card-wrap">
              <div className="counter-card">
                <div className="counter-shape">
                  <span />
                </div>
                <div className="media-body">
                  <h3 className="box-number">
                    <span className="counter-number">4,900</span>Cr+
                  </h3>
                  <h6 className="titleFontSize">
                    Transformative Economic <br /> Impact
                  </h6>
                  <span className="paraFontSize">
                    Helped increase farmer incomes by an average of 35% through
                    improved productivity and market access.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3 counter-card-wrap">
              <div className="counter-card">
                <div className="counter-shape">
                  <span />
                </div>
                <div className="media-body">
                  <h3 className="box-number">
                    <span className="counter-number">300</span>K +
                  </h3>
                  <h6 className="titleFontSize">
                    Farmer Training <br /> Initiatives
                  </h6>
                  <span className="paraFontSize">
                    Conducted 5,000+ training programs reaching over 300,000
                    dairy farmers with modern practices and techniques.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="shape-mockup jump d-none d-xl-block"
            data-bottom="0%"
            data-left="-12%"
          >
            <img src="assets/img/shape/shape_5.png" alt="shape" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountNumber;
