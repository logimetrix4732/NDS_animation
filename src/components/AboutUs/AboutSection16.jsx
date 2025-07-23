import React from "react";

const AboutSection16 = () => {
  return (
    <div className="about-area space-bottom space">
      <div className="container">
        <div className="row gy-30 mb-60 align-items-center">
          <div className="col-lg-6 order-1 order-lg-0">
            <div className="about-item style-16 pe-xxl-4 me-xxl-4">
              <div className="about-content">
                <h3 className="box-title text-anime-style-2">
                  <a href="about-details.html">Smart Dairy Solutions</a>
                </h3>
                <p
                  className="about-text wow fadeInUp"
                  style={{ marginBottom: "10px" }}
                >
                  In our pursuit of enhancing efficiency and quality across the
                  dairy value chain, NDS in collaboration with National
                  Cooperative Dairy Federation of India (NCDFI) has launched
                  Smart Dairy Solutions, an initiative aimed at providing top
                  quality dairy and farm equipment directly to MPOs across the
                  country. This initiative is tailored to meet the diverse and
                  evolving needs of MPOs and dairy farmers. By aggregating
                  demand and collaborating with reputed manufacturers, Smart
                  Dairy Solutions ensures that stakeholders gain access to
                  reliable, cost-effective and high-performing dairy equipments.
                  The product range includes essentials such as milking
                  machines, cryocans, veterinary equipment, AI tools, cow mats,
                  milk cans, cow collar device, applicators, AI Sheaths, AI
                  applicator device and ear tags etc.
                </p>
                <p className="about-text  wow fadeInUp">
                  Smart Dairy Solutions is more than just a procurement channel,
                  it is a strategic step towards modernising rural dairying,
                  reducing input costs and empowering producers with tools that
                  enhance productivity, animal welfare and operational
                  efficiency. As a trusted partner in dairy excellence, NDS
                  remains committed to support producer owned organisations
                  through innovative, transparent and value driven solutions. 
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-0 order-lg-1">
            <div className="about-image ab-img16 global-img">
              <img src="assets/img/normal/about_16_2.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection16;
