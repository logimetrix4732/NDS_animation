import React from "react";

const OurFeatures3 = () => {
  return (
    <div className="overflow-hidden space">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="title-area feature-4-titlebox text-center">
              <span className="sub-title text-anime-style-2">Our Features</span>
              <h2 className="sec-title text-anime-style-3">
                Key Features of SaaS Business Products
              </h2>
              <p className="sec-text wow fadeInUp" data-wow-delay=".3s">
                This model provides businesses with flexibility, scalability,
                and cost savings, making it a<br />
                preferred solution across industries.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="feature-area4">
        <div className="container">
          <div className="row gy-4 justify-content-center justify-content-lg-between">
            <div className="col-xl-3 col-lg-6 col-md-6 feature_wrapp">
              <div
                className="feature-item style-4 text-center wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="feature_icon">
                  <img src="assets/img/icon/fea-4-1.svg" alt="Icon" />
                </div>
                <div className="feature_content">
                  <h3 className="box-title">Cloud-Based Delivery</h3>
                  <p className="sec-text">
                    Software is hosted on the provider’s servers and accessed
                    online. Eliminates the need.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 feature_wrapp">
              <div
                className="feature-item style-4 text-center wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="feature_icon">
                  <img src="assets/img/icon/fea-4-2.svg" alt="Icon" />
                </div>
                <div className="feature_content">
                  <h3 className="box-title">Subscription Model</h3>
                  <p className="sec-text">
                    Users pay a recurring fee, often monthly or annually, based
                    on usage or features.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 feature_wrapp">
              <div
                className="feature-item style-4 text-center wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="feature_icon">
                  <img src="assets/img/icon/fea-4-3.svg" alt="Icon" />
                </div>
                <div className="feature_content">
                  <h3 className="box-title">Automatic Updates</h3>
                  <p className="sec-text">
                    Ensures users always have access to the latest features and
                    security patches.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 feature_wrapp">
              <div
                className="feature-item style-4 text-center wow fadeInUp"
                data-wow-delay=".8s"
              >
                <div className="feature_icon">
                  <img src="assets/img/icon/fea-4-4.svg" alt="Icon" />
                </div>
                <div className="feature_content">
                  <h3 className="box-title">Multi-Tenancy</h3>
                  <p className="sec-text">
                    Multiple user (tenant) share a single instance of the
                    application while keeping their data isolated.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFeatures3;
