import React from "react";
import AnimatedText from "../AnimatedText";
import aboutImg3 from "../../Images/aboutImg3.jpg";
import aboutImg4 from "../../Images/aboutImg4.jpg";
const AboutSection4 = () => {
  return (
    <div
      className="about-area position-relative overflow-hidden space"
      id="about-sec"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-xxl-7">
            <div className="img-box2">
              <div className="img1 reveal wow fadeInLeft" data-wow-delay=".4s">
                <img
                  src={aboutImg3}
                  alt="About"
                  style={{ width: "585px", height: "622px" }}
                />
              </div>
              <div className="img2 wow fadeInUp" data-wow-delay=".4s">
                <img
                  src={aboutImg4}
                  alt="About"
                  style={{ width: "393px", height: "352px" }}
                />
                <a
                  href="https://youtu.be/KvoAbuVT7SE?si=ZJWHA8cbOcAQqzcj"
                  className="play-btn popup-video"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-sharp fa-solid fa-play" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-xxl-5">
            <div className="">
              <div className="title-area about4-titlebox mb-20">
                <span
                  className="sub-title style1 text-anime-style-2 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  About Us
                </span>
                <AnimatedText
                  text="Innovate Faster, Scale Smarter with Us"
                  tag="h2"
                  className="sec-title mb-10 heading text-anime-style-3"
                  width="100%"
                />
              </div>
              <p className="sec-text mb-30 wow fadeInUp" data-wow-delay=".3s">
                A Startup Tech Agency specializes in providing innovative,
                scalable, and customized technology solutions to help startups
                build, grow, and succeed in a competitive market.
              </p>
              <div className="about-item-wrap">
                <div className="about-item wow fadeInUp" data-wow-delay=".2s">
                  <div className="about-item_img">
                    <img src="assets/img/icon/map3.svg" alt="" />
                  </div>
                  <div className="about-item_centent">
                    <h5 className="box-title">Manage Tech Services</h5>
                    <p className="about-item_text">
                      There are many variations of passages of available but the
                      majority.
                    </p>
                  </div>
                </div>
                <div className="about-item wow fadeInUp" data-wow-delay=".3s">
                  <div className="about-item_img">
                    <img src="assets/img/icon/guide.svg" alt="" />
                  </div>
                  <div className="about-item_centent">
                    <h5 className="box-title">Internal Networking</h5>
                    <p className="about-item_text">
                      There are many variations of passages of available but the
                      majority.
                    </p>
                  </div>
                </div>
                <div className="about-item wow fadeInUp" data-wow-delay=".4s">
                  <div className="about-item_img">
                    <img src="assets/img/icon/headphone.svg" alt="" />
                  </div>
                  <div className="about-item_centent">
                    <h5 className="box-title">24/7 Customer Support</h5>
                    <p className="about-item_text">
                      There are many variations of passages of available but the
                      majority.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-45 wow fadeInUp" data-wow-delay=".5s">
                <a
                  href="about.html"
                  className="th-btn black-btn btn-2 th-radius th-icon"
                >
                  Learn More <i className="fa-light fa-arrow-right-long" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection4;
