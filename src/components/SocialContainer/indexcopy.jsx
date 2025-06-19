import React from "react";
import contact_bg_6 from "../../assets/img/bg/contact_bg_6.jpg";

const SocialContainer = () => {
  return (
    <div
      className="cantact-area6 contact6-overlay position-relative overflow-hidden"
      style={{
        backgroundImage: `url(${contact_bg_6})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row gy-4 justify-content-between align-items-center">
          <div className="col-lg-6 col-xl-6">
            <div className="text-center text-lg-start">
              <div className="title-area contact6-title pe-xl-5 me-xl-5">
                <span className="sub-title text-white text-anime-style-2">
                  Connect With Us
                </span>
                <h2 className="sec-title text-white text-anime-style-2">
                  Stay Updated With NDDB Dairy Services
                </h2>
                <p
                  className="contact-text2 text-white wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  Follow us on social media platforms to know more about our
                  initiatives, updates, and how we are transforming the dairy
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

export default SocialContainer;
