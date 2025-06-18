import React from "react";
import AnimatedText from "../AnimatedText";
import video from "../../Images/Videos/video.mp4";
import empoweringWomen from "../../Images/empoweringWomen.jpg";
import empoweringWomen1 from "../../Images/empoweringWomen1.jpg";
const AboutSection2 = () => {
  return (
    <div class="about-area position-relative overflow-hidden " id="about-sec">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="title-area mb-20">
              <span className="sub-title style1 text-anime-style-2">
                Who We Are
              </span>
              <AnimatedText
                text="Success Stories"
                tag="h2"
                className="sec-title mb-20 heading text-anime-style-3"
                width="100%"
              />
              <p className="sec-text  wow fadeInUp" data-wow-delay=".2s">
                Real-life success stories showcasing how our programs and
                partnerships have empowered rural communities, enhanced milk
                productivity, created sustainable income sources, and uplifted
                thousands of farmer families. These stories reflect the
                dedication of our team, the resilience of our farmers, and the
                power of collaboration in building a self-reliant rural India.
              </p>
              <div class="about-feature-list">
                <ul>
                  <li class="wow fadeInUp" data-wow-delay=".4s">
                    <span class="about-feature-icon">
                      <img src="assets/img/icon/checkmark.svg" alt="" />
                    </span>
                    Over 50,000 farmers impacted through sustainable dairy
                    programs.
                  </li>
                  <li class="wow fadeInUp" data-wow-delay=".5s">
                    <span class="about-feature-icon">
                      <img src="assets/img/icon/checkmark.svg" alt="" />
                    </span>
                    3x increase in household income in supported regions.
                  </li>
                  <li class="wow fadeInUp" data-wow-delay=".5s">
                    <span class="about-feature-icon">
                      <img src="assets/img/icon/checkmark.svg" alt="" />
                    </span>
                    Women-led dairy cooperatives are driving socio-economic
                    change.
                  </li>
                </ul>
              </div>
            </div>
            <div className="img-box8">
              <div className="row">
                <div className="col-xl-6 col-md-6 col-sm-6">
                  <div className="img1 reveal">
                    <img
                      src={empoweringWomen}
                      alt="About"
                      style={{
                        width: "312px",
                        height: "361.05px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-md-6 col-sm-6">
                  <div className="img2 reveal">
                    <img
                      src={empoweringWomen1}
                      alt="About"
                      style={{
                        width: "312px",
                        height: "361.05px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="img-box8 ms-xl-5 mt-40">
              <div className="img3 reveal">
                <video
                  src={video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "12px",
                  }}
                ></video>
              </div>
              <div className="about-item-wrap">
                <div className="about-item wow fadeInUp" data-wow-delay=".3s">
                  <div className="about-item_img">
                    <img src="assets/img/icon/shield.svg" alt="" />
                  </div>
                  <div className="about-item_centent">
                    <h5 className="box-title">Empowering Women Farmers</h5>
                    <p className="about-item_text">
                      Women-led dairy initiatives brought financial growth and
                      social change in villages.
                    </p>
                  </div>
                </div>
                <div className="about-item wow fadeInUp" data-wow-delay=".4s">
                  <div className="about-item_img">
                    <img src="assets/img/icon/shield.svg" alt="" />
                  </div>
                  <div className="about-item_centent">
                    <h5 className="box-title">
                      Transforming Rural Livelihoods
                    </h5>
                    <p className="about-item_text">
                      A small village in Gujarat boosted incomes by 300% through
                      modern dairy practices.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-35 wow fadeInUp" data-wow-delay=".5s">
                <a
                  href="about.html"
                  className="th-btn black-btn th-radius th-icon"
                >
                  Learn More <i className="fa-light fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection2;
