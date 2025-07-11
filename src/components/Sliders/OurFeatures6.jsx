import React from "react";

const OurFeatures6 = () => {
  return (
    <section
      className="benefit-area position-relative overflow-hidden bg-smoke overflow-hidden"
      id="benefit-sec"
      data-bg-src="assets/img/bg/benefit-bg.png"
    >
      <div
        className="swiper th-slider benefitSlide"
        id="benefitSlide"
        data-slider-options='{"effect":"fade","loog":true,"speed": 2000,"thumbs":{"swiper":".benefit-grid-thumb"}}'
      >
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="benefit-img">
              <img src="assets/img/benefit/benefit_bg_1_1.jpg" alt="" />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="benefit-img">
              <img src="assets/img/benefit/benefit_bg_1_2.jpg" alt="" />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="benefit-img">
              <img src="assets/img/benefit/benefit_bg_1_3.jpg" alt="" />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="benefit-img">
              <img src="assets/img/benefit/benefit_bg_1_4.jpg" alt="" />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="benefit-img">
              <img src="assets/img/benefit/benefit_bg_1_1.jpg" alt="" />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="benefit-img">
              <img src="assets/img/benefit/benefit_bg_1_2.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="icon-box">
          <button
            data-slider-prev="#benefitSlide, #benefitSlide2"
            className="slider-arrow default"
          >
            <img src="assets/img/icon/right-arrow2.svg" alt="" />
          </button>
          <button
            data-slider-next="#benefitSlide, #benefitSlide2"
            className="slider-arrow default"
          >
            <img src="assets/img/icon/left-arrow2.svg" alt="" />
          </button>
        </div>
      </div>
      <div className="benefit-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-4">
              <div className="title-area benefit-titlebox pe-xl-5">
                <h2 className="sec-title text-white text-anime-style-2">
                  Enhanced Customer Experience
                </h2>
                <p className="text-white wow fadeInUp">
                  Enables businesses to make data-driven decisions with
                  confidence. Data Analytics is the process of examining,
                  interpreting,
                </p>
                <div className="wow fadeInUp">
                  <a
                    href="benefit-details.html"
                    className="th-btn style2 th-radius th-icon"
                  >
                    Learn More <i className="fa-light fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="title-area">
                <span className="sub-title text-white text-anime-style-2">
                  Our Benefits
                </span>
                <h2 className="sec-title text-white text-anime-style-3">
                  Key Benefits of Data Analytics
                </h2>
              </div>
              <div className="slider-area benefit-slider-thumb-wrap">
                <div
                  className="swiper th-slider benefit-grid-thumb"
                  id="benefitSlide"
                  data-slider-options='{"effect":"slide","loog":true,"breakpoints":{"0":{"slidesPerView":1},"575":{"slidesPerView":"2"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"3"},"1300":{"slidesPerView":"4"}}}'
                >
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="box-img">
                        <img
                          src="assets/img/benefit/benefit_bg_1_1.jpg"
                          alt="Image"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="box-img">
                        <img
                          src="assets/img/benefit/benefit_bg_1_2.jpg"
                          alt="Image"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="box-img">
                        <img
                          src="assets/img/benefit/benefit_bg_1_3.jpg"
                          alt="Image"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="box-img">
                        <img
                          src="assets/img/benefit/benefit_bg_1_4.jpg"
                          alt="Image"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="box-img">
                        <img
                          src="assets/img/benefit/benefit_bg_1_5.jpg"
                          alt="Image"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="box-img">
                        <img
                          src="assets/img/benefit/benefit_bg_1_1.jpg"
                          alt="Image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFeatures6;
