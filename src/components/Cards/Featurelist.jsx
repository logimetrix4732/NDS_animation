import React from "react";

const Featurelist = () => {
  return (
    <section className="">
      <div className="feature-list-wrap">
        <div className="feature-area overflow-hidden" id="feature-area">
          <div className="row gx-0 justify-content-center">
            <div className="col-xl-4 col-lg-6">
              <div className="feature-item d-flex align-items-start">
                <div className="feature-item_icon">
                  <img src="assets/img/icon/feature_1_1.svg" alt="icon" />
                </div>
                <div className="media-body">
                  <h3 className="box-title text-anime-style-2">
                    Highly Expert Team
                  </h3>
                  <p className="feature-item_text wow fadeInUp">
                    We provide the most responsive and functional IT design
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="feature-item d-flex align-items-start">
                <div className="feature-item_icon">
                  <img src="assets/img/icon/feature_1_2.svg" alt="icon" />
                </div>
                <div className="media-body">
                  <h3 className="box-title text-anime-style-2">
                    24/7 Customer Service
                  </h3>
                  <p className="feature-item_text wow fadeInUp">
                    We provide the most responsive and functional IT design
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="feature-item d-flex align-items-start">
                <div className="feature-item_icon">
                  <img src="assets/img/icon/feature_1_3.svg" alt="icon" />
                </div>
                <div className="media-body">
                  <h3 className="box-title text-anime-style-2">
                    Competitive Pricing
                  </h3>
                  <p className="feature-item_text wow fadeInUp">
                    We provide the most responsive and functional IT design
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featurelist;
