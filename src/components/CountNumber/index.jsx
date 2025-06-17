import React from "react";

const CountNumber = () => {
  return (
    <div className="counter-area space space-extra3-bottom overflow-hidden">
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
                    <span className="counter-number">12</span>
                  </h3>
                  <h6 className="counter-title">Years Experience</h6>
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
                    <span className="counter-number">97</span>%
                  </h3>
                  <h6 className="counter-title">Retention Rate</h6>
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
                    <span className="counter-number">8</span>k
                  </h3>
                  <h6 className="counter-title">Project Completed</h6>
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
                    <span className="counter-number">19</span>k
                  </h3>
                  <h6 className="counter-title">Happy Clients</h6>
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
