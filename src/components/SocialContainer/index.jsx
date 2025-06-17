import React from "react";
import contact_bg_6 from "../../assets/img/bg/contact_bg_6.jpg";
const SocialContainer = () => {
  return (
    <div
      class="cantact-area6 contact6-overlay position-relative overflow-hidden"
      data-bg-src="assets/img/bg/contact_bg_6.jpg"
      style={{
        backgroundImage: `url(${contact_bg_6})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div class="container">
        <div class="row gy-4 justify-content-between align-items-center">
          <div class="col-lg-6 col-xl-6">
            <div class="text-center text-lg-start">
              <div class="title-area contact6-title pe-xl-5 me-xl-5">
                <span class="sub-title text-white text-anime-style-2">
                  Get in touch
                </span>
                <h2 class="sec-title text-white text-anime-style-2">
                  Is there anything I can do for you today?
                </h2>
                <p
                  class="contact-text2 text-white wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  We’love to hear from you. Our friendly team is
                  <br />
                  always here to chat
                </p>
              </div>
              <div class="wow fadeInUp" data-wow-delay=".4s">
                <a href="contact.html" class="th-btn style7 th-radius th-icon">
                  Contact Us <i class="fa-light fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-xl-6">
            <div class="video-box4 video-box7">
              <a
                href="https://www.youtube.com/watch?v=pQpFebyALV0"
                class="play-btn popup-video"
              >
                <i class="fa-sharp fa-solid fa-play"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialContainer;
