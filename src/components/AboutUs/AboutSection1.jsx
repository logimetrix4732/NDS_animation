import React from "react";

const AboutSection1 = () => {
  return (
    <div
      class="bg-smoke position-relative overflow-hidden space"
      id="about-sec"
      data-bg-src="assets/img/bg/shape_bg_1.png"
    >
      <div class="container">
        <div class="row gy-4 align-items-center">
          <div class="col-xl-4 order-1 order-xl-0">
            <div class="about-area6 text-center text-md-start">
              <div class="title-area mb-20">
                <span class="sub-title style1 text-anime-style-2">
                  It Support For Business
                </span>
                <h2 class="sec-title mb-20 text-anime-style-3">
                  Revolutionizing Businesses with SaaS: The Future of Software
                  Solutions
                </h2>
              </div>
              <p class="sec-text mb-30 wow fadeInUp" data-wow-delay=".2s">
                Software as a Service (SaaS) is a cloud-based business model
                where software applications are delivered over the internet on a
                subscription basis. SaaS products are accessible via web
                browsers, eliminating the need for users to install or maintain
                software locally.
              </p>
              <div class="about-item-wrap">
                <div
                  class="about-item style6 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <span class="icon">
                    <i class="fa-sharp fa-solid fa-circle-check"></i>
                  </span>
                  <div class="about-item_centent">
                    <h5 class="box-title">Trusted and Accurate</h5>
                    <p class="about-item_text">
                      Use SASS to define typography styles including font
                      families, sizes, colors, and spacing to create.
                    </p>
                  </div>
                </div>
                <div
                  class="about-item style6 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <span class="icon">
                    <i class="fa-solid fa-building"></i>
                  </span>
                  <div class="about-item_centent">
                    <h5 class="box-title">Hired By Top Company</h5>
                    <p class="about-item_text">
                      Define a cohesive color scheme using SASS variables to
                      maintain consistency across the landing page.
                    </p>
                  </div>
                </div>
              </div>
              <div class="mt-35 wow fadeInUp" data-wow-delay=".5s">
                <a href="about.html" class="th-btn th-icon">
                  Learn More <i class="fa-light fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-xl-8 order-0 order-xl-2">
            <div class="img-box5 text-xl-end">
              <div class="img1 reveal">
                <img src="assets/img/normal/about_5_1.jpg" alt="About" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection1;
