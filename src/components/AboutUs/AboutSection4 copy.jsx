import React, { useState } from "react";
import AnimatedText from "../AnimatedText";
import aboutImg3 from "../../Images/aboutImg3.jpg";
import aboutImg4 from "../../Images/aboutImg4.jpg";

const AboutSection4 = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

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
                  text="NDDB Dairy Services (NDS)"
                  tag="h2"
                  className="sec-title mb-10 heading text-anime-style-3"
                  width="100%"
                />
              </div>

              {/* Always visible content */}
              <p className="sec-text mb-20 wow fadeInUp" data-wow-delay=".3s">
                NDDB Dairy Services (NDS) is a Section 8 company registered
                under the Companies Act, 2013. It is a wholly-owned subsidiary
                of the National Dairy Development Board (NDDB), and plays a
                pivotal role in strengthening the dairy sector in India through
                innovative, sustainable, and inclusive development models.
              </p>
              <p className="sec-text mb-20 wow fadeInUp" data-wow-delay=".4s">
                Established to operationalize NDDB’s vision of creating a
                vibrant rural milk production system, NDS, since its inception
                has been assisting dairy farmers with the range of initiatives
                taken throughout the dairy value chain. Our comprehensive
                approach, aimed at improving breed quality and boosting animal
                productivity, has resulted in the increase of the surplus and
                marketable milk available with farmers.
              </p>
              <p className="sec-text mb-20 wow fadeInUp" data-wow-delay=".5s">
                By facilitating the establishment of Milk Producer Organisations
                (MPOs) and thereafter providing them technical support and an
                assured market for their surplus produce in the form of strong
                forward institutional linkages, dairy farmers benefit with
                improved livelihoods through fair and transparent pricing and
                direct payments into their bank accounts.
              </p>

              {/* Hidden content toggle */}
              {showFullContent && (
                <>
                  <p
                    className="sec-text mb-20 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    To ensure long-term sustainability, NDS prioritises training
                    and capacity building for dairy farmers to ensure they can
                    manage these organizations effectively. Gender inclusion
                    remains a key focal area, hence our interventions provide a
                    platform to women dairy farmers, empowering them to excel in
                    the remotest regions of India and make significant
                    contributions to the dairy sector of the country.
                  </p>
                  <p
                    className="sec-text mb-20 wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    NDS’ commitment to improve milch animal productivity is
                    evident in its innovative breeding initiatives. With four
                    world-class semen stations located at Bidaj (Gujarat),
                    Rahuri (Maharashtra), Alamadhi (Tamil Nadu) and Salon (Uttar
                    Pradesh) producing over 50 million semen doses annually
                    serving more than 35% of India’s requirement. Technologies
                    such as Embryo Transfer and AI have improved the birth rate
                    of female calves, enhancing gene quality and milk output.
                  </p>
                  <p
                    className="sec-text mb-30 wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    By combining grassroots involvement with professional
                    expertise, NDS contributes to building a self-reliant dairy
                    ecosystem that enhances rural livelihoods and nutritional
                    security.
                  </p>
                </>
              )}

              <div className="mt-30 wow fadeInUp" data-wow-delay=".9s">
                <button
                  onClick={toggleContent}
                  className="th-btn black-btn btn-2 th-radius th-icon"
                >
                  {showFullContent ? "Show Less" : "Learn More"}{" "}
                  <i className="fa-light fa-arrow-right-long" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection4;
