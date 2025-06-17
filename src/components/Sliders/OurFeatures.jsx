import React from "react";
import category_bg_1 from "../../assets/img/bg/category_bg_1.png";
import category_1_1 from "../../assets/img/category/category_1_1.jpg";
import category_1_2 from "../../assets/img/category/category_1_2.jpg";
import category_1_3 from "../../assets/img/category/category_1_3.jpg";
import category_1_4 from "../../assets/img/category/category_1_4.jpg";
import category_1_5 from "../../assets/img/category/category_1_5.jpg";

const OurFeatures = () => {
  return (
    <section
      className="category-area bg-top-center space"
      data-bg-src="assets/img/bg/category_bg_1.png"
      style={{
        backgroundImage: `url(${category_bg_1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container th-container">
        <div className="title-area mb-60 text-center">
          <span className="sub-title text-anime-style-2">Our Features</span>
          <h2 className="sec-title text-anime-style-3">
            Reliable IT for Unstoppable Growth
          </h2>
        </div>
        <div
          className="swiper th-slider categorySlider"
          id="categorySlider1"
          data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"3"},"1400":{"spaceBetween":45,"slidesPerView":"5"}}}'
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="category-card single">
                <div className="box-img global-img">
                  <img src={category_1_1} alt="Image" />
                </div>
                <h3 className="box-title">
                  <a href="service.html">Enhanced Cybersecurity</a>
                </h3>
                <p className="sec-text">
                  Advanced security measures like firewalls, encryption,
                </p>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="category-card single">
                <div className="box-img global-img">
                  <img src={category_1_2} alt="Image" />
                </div>
                <h3 className="box-title">
                  <a href="service.html">Cloud Integration</a>
                </h3>
                <p className="sec-text">
                  Access to scalable cloud-based services for storage
                </p>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="category-card single">
                <div className="box-img global-img">
                  <img src={category_1_3} alt="Image" />
                </div>
                <h3 className="box-title">
                  <a href="service.html">Customized Services</a>
                </h3>
                <p className="sec-text">
                  Tailored IT solutions designed to meet specific business
                  needs.
                </p>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="category-card single">
                <div className="box-img global-img">
                  <img src={category_1_4} alt="Image" />
                </div>
                <h3 className="box-title">
                  <a href="service.html">24/7 IT Support</a>
                </h3>
                <p className="sec-text">
                  Around-the-clock monitoring and troubleshooting.
                </p>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="category-card single">
                <div className="box-img global-img">
                  <img src={category_1_5} alt="Image" />
                </div>
                <h3 className="box-title">
                  <a href="service.html">End-to-End Solution</a>
                </h3>
                <p className="sec-text">
                  Covers all aspects of IT, from consu-lting and planning
                </p>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="category-card single">
                <div className="box-img global-img">
                  <img src={category_1_1} alt="Image" />
                </div>
                <h3 className="box-title">
                  <a href="service.html">Airbirds</a>
                </h3>
                <p className="sec-text">
                  Advanced security measures like firewalls, encryption,
                </p>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="category-card single">
                <div className="box-img global-img">
                  <img src={category_1_2} alt="Image" />
                </div>
                <h3 className="box-title">
                  <a href="service.html">Enhanced Cybersecurity</a>
                </h3>
                <p className="sec-text">
                  Access to scalable cloud-based services for storage
                </p>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="category-card single">
                <div className="box-img global-img">
                  <img src={category_1_3} alt="Image" />
                </div>
                <h3 className="box-title">
                  <a href="service.html">Hiking</a>
                </h3>
                <p className="sec-text">
                  Tailored IT solutions designed to meet specific business
                  needs.
                </p>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="category-card single">
                <div className="box-img global-img">
                  <img src={category_1_4} alt="Image" />
                </div>
                <h3 className="box-title">
                  <a href="service.html">Cloud Integration</a>
                </h3>
                <p className="sec-text">
                  Around-the-clock monitoring and troubleshooting.
                </p>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="category-card single">
                <div className="box-img global-img">
                  <img src={category_1_5} alt="Image" />
                </div>
                <h3 className="box-title">
                  <a href="service.html">Cruises</a>
                </h3>
                <p className="sec-text">
                  Covers all aspects of IT, from consu-lting and planning
                </p>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="category-card single">
                <div className="box-img global-img">
                  <img src={category_1_1} alt="Image" />
                </div>
                <h3 className="box-title">
                  <a href="service.html">Customized Services</a>
                </h3>
                <p className="sec-text">
                  Advanced security measures like firewalls, encryption,
                </p>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="category-card single">
                <div className="box-img global-img">
                  <img src={category_1_2} alt="Image" />
                </div>
                <h3 className="box-title">
                  <a href="service.html">Walking</a>
                </h3>
                <p className="sec-text">
                  Access to scalable cloud-based services for storage
                </p>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="category-card single">
                <div className="box-img global-img">
                  <img src={category_1_3} alt="Image" />
                </div>
                <h3 className="box-title">
                  <a href="service.html">24/7 IT Support</a>
                </h3>
                <p className="sec-text">
                  Tailored IT solutions designed to meet specific business
                  needs.
                </p>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="category-card single">
                <div className="box-img global-img">
                  <img src={category_1_4} alt="Image" />
                </div>
                <h3 className="box-title">
                  <a href="service.html">Walking</a>
                </h3>
                <p className="sec-text">
                  Around-the-clock monitoring and troubleshooting.
                </p>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="category-card single">
                <div className="box-img global-img">
                  <img src={category_1_5} alt="Image" />
                </div>
                <h3 className="box-title">
                  <a href="service.html">Customized Services</a>
                </h3>
                <p className="sec-text">
                  Covers all aspects of IT, from consu-lting and planning
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFeatures;
