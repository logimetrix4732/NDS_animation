import React from "react";
import gai from "../../Images/gai.gif";
import OurFeatures2 from "../Sliders/OurFeatures2";
import breadcumbbg from "../../assets/img/bg/breadcumb-bg.jpg";
import map2 from "../../assets/img/bg/map2.png";
const AboutUsComponents = () => {
  return (
    <React.Fragment>
      <div className="slider-drag-cursor d-flex align-items-center justify-content-between">
        <span className="drag-icon-left">
          <img src="assets/img/icon/drag-arrow-left.svg" alt="" />
        </span>
        DRAG
        <span className="drag-icon-right">
          <img src="assets/img/icon/drag-arrow-right.svg" alt="" />
        </span>
      </div>
      <div className="preloader">
        <button className="th-btn preloaderCls">Cancel Preloader</button>
        <div className="preloader-inner">
          <img src={gai} alt="img" style={{ width: "auto", height: "180px" }} />

          <span className="loader">
            NDDB <span className="loading-text">NDDB</span>
          </span>
        </div>
      </div>

      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: `url(${breadcumbbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">About Us Two</h1>
            <ul className="breadcumb-menu">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>About Us Two</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="about-area position-relative overflow-hidden space"
        id="about-sec"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-xxl-7">
              <div className="img-box2">
                <div className="img1 reveal wow fadeInLeft">
                  <img src="assets/img/normal/about_2_1.jpg" alt="About" />
                </div>
                <div className="img2 wow fadeInUp">
                  <img src="assets/img/normal/about_2_2.jpg" alt="About" />
                  <a
                    href="https://www.youtube.com/watch?v=pQpFebyALV0"
                    className="play-btn popup-video"
                  >
                    <i className="fa-sharp fa-solid fa-play" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-xxl-5">
              <div className="">
                <div className="title-area about4-titlebox mb-20">
                  <span className="sub-title style1 text-anime-style-2">
                    About Us
                  </span>
                  <h2 className="sec-title mb-20 text-anime-style-2">
                    Innovate Faster, Scale Smarter with Us
                  </h2>
                </div>
                <p className="sec-text mb-30 wow fadeInUp" data-wow-delay=".2s">
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
                        There are many variations of passages of available but
                        the majority.
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
                        There are many variations of passages of available but
                        the majority.
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
                        There are many variations of passages of available but
                        the majority.
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
      <div
        className="about-4-area overflow-hidden space bg-smoke"
        id="about-sec"
      >
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <div className="title-area">
                <span className="sub-title text-anime-style-2">
                  About Us Company
                </span>
                <h2 className="sec-title text-anime-style-3">
                  A Complete Guide to Modern Web & Mobile App Development
                </h2>
              </div>
            </div>
            <div className="col-lg-5">
              <p className="ps-xl-5 wow fadeInUp">
                Web and app development focuses on designing, creating, and
                maintaining websites and mobile applications to enhance digital
                experiences. These services cater to businesses, individuals,
                and organizations looking to establish a strong online presence,
                streamline operations, or connect with their audiences
                effectively.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row gy-4">
            <div className="col-xl-4">
              <div className="img-box9">
                <div className="row gx-30">
                  <div className="col-sm-6">
                    <div className="about-item2">
                      <div className="img1">
                        <img
                          src="assets/img/normal/about_8_1.jpg"
                          alt="About"
                        />
                        <a
                          href="assets/img/normal/about_8_1.jpg"
                          className="icon-btn popup-image"
                        >
                          <i className="fa-solid fa-arrow-down-left-and-arrow-up-right-to-center"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="about-item2 mt-60">
                      <div className="img1">
                        <img
                          src="assets/img/normal/about_8_2.jpg"
                          alt="About"
                        />
                        <a
                          href="assets/img/normal/about_8_2.jpg"
                          className="icon-btn popup-image"
                        >
                          <i className="fa-solid fa-arrow-down-left-and-arrow-up-right-to-center"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="about-content-wrapper">
                <div className="about-item-wrap">
                  <div className="about-client-box">
                    <div className="client-thumb-group">
                      <div className="thumb">
                        <img
                          src="assets/img/shape/client-img-2-1.png"
                          alt="avater"
                        />
                      </div>
                      <div className="thumb">
                        <img
                          src="assets/img/shape/client-img-2-2.png"
                          alt="avater"
                        />
                      </div>
                      <div className="thumb">
                        <img
                          src="assets/img/shape/client-img-2-3.png"
                          alt="avater"
                        />
                      </div>
                      <div className="thumb">
                        <img
                          src="assets/img/shape/client-img-2-4.png"
                          alt="avater"
                        />
                      </div>
                      <div className="thumb icon">
                        <i className="fa-light fa-plus"></i>
                      </div>
                    </div>
                  </div>
                  <div className="about-item style2">
                    <div className="about-item_img">
                      <img src="assets/img/icon/th-shield.svg" alt="" />
                    </div>
                    <div className="about-item_centent">
                      <h5 className="box-title">Responsive Design</h5>
                      <p className="about-item_text">
                        Practices designed to safeguard digital assets and
                        ensure
                      </p>
                    </div>
                  </div>
                  <div className="about-item style2">
                    <div className="about-item_img">
                      <img src="assets/img/icon/th-shield.svg" alt="" />
                    </div>
                    <div className="about-item_centent">
                      <h5 className="box-title">Custom Functionality</h5>
                      <p className="about-item_text">
                        Practices designed to safeguard digital assets and
                        ensure
                      </p>
                    </div>
                  </div>
                  <div className="about-item style2">
                    <div className="about-item_img">
                      <img src="assets/img/icon/th-shield.svg" alt="" />
                    </div>
                    <div className="about-item_centent">
                      <h5 className="box-title">Integration Capabilities</h5>
                      <p className="about-item_text">
                        Practices designed to safeguard digital assets and
                        ensure
                      </p>
                    </div>
                  </div>
                </div>
                <div className="about-image9">
                  <img src="assets/img/normal/about_8_3.jpg" alt="" />
                  <div className="cilent-box">
                    <span className="review">
                      <i className="fa-sharp fa-solid fa-star"></i>16 k+
                    </span>
                    <p className="cilent-box_counter">
                      Business Needs Custom Web & App Development in 2025
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section
        className="testi-area7 bg-smoke overflow-hidden space"
        id="testi-sec"
        data-bg-src="assets/img/bg/map2.png"
        style={{
          backgroundImage: `url(${map2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="title-area mb-40">
                <span className="sub-title text-anime-style-2">
                  Testimonial
                </span>
                <h2 className="sec-title text-anime-style-3">
                  What Client Say About us
                </h2>
              </div>
              <div
                className="swiper th-slider testiSlide5"
                id="testiSlide7"
                data-slider-options='{"effect":"slide","loop":false,"thumbs":{"swiper":".testi-grid2-thumb"}}'
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="testi-grid2">
                      <div className="box-content">
                        <p className="box-text">
                          “Cybersecurity is more critical than ever in a world
                          increasingly reliant on digital technologies. By
                          investing in robust cybersecurity measures,
                          individuals and organizations can protect themselves
                          from threats and secure their digital assets for the
                          future.”
                        </p>
                        <h6 className="box-title">Sarah Rahman</h6>
                        <span className="box-desig">UI/UX Designer</span>
                        <div className="box-review">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testi-grid2">
                      <div className="box-content">
                        <p className="box-text">
                          “Cybersecurity is more critical than ever in a world
                          increasingly reliant on digital technologies. By
                          investing in robust cybersecurity measures,
                          individuals and organizations can protect themselves
                          from threats and secure their digital assets for the
                          future.”
                        </p>
                        <h6 className="box-title">Angelina Rose</h6>
                        <span className="box-desig">App Developer</span>
                        <div className="box-review">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testi-grid2">
                      <div className="box-content">
                        <p className="box-text">
                          “Cybersecurity is more critical than ever in a world
                          increasingly reliant on digital technologies. By
                          investing in robust cybersecurity measures,
                          individuals and organizations can protect themselves
                          from threats and secure their digital assets for the
                          future.”
                        </p>
                        <h6 className="box-title">Michel Smith</h6>
                        <span className="box-desig">Software Engineer</span>
                        <div className="box-review">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testi-grid2">
                      <div className="box-content">
                        <p className="box-text">
                          “Cybersecurity is more critical than ever in a world
                          increasingly reliant on digital technologies. By
                          investing in robust cybersecurity measures,
                          individuals and organizations can protect themselves
                          from threats and secure their digital assets for the
                          future.”
                        </p>
                        <h6 className="box-title">Jesmen</h6>
                        <span className="box-desig">Graphics Designer</span>
                        <div className="box-review">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testi-grid2">
                      <div className="box-content">
                        <p className="box-text">
                          “Cybersecurity is more critical than ever in a world
                          increasingly reliant on digital technologies. By
                          investing in robust cybersecurity measures,
                          individuals and organizations can protect themselves
                          from threats and secure their digital assets for the
                          future.”
                        </p>
                        <h6 className="box-title">Sarah Rahman</h6>
                        <span className="box-desig">It Officer</span>
                        <div className="box-review">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testi-grid2">
                      <div className="box-content">
                        <p className="box-text">
                          “Cybersecurity is more critical than ever in a world
                          increasingly reliant on digital technologies. By
                          investing in robust cybersecurity measures,
                          individuals and organizations can protect themselves
                          from threats and secure their digital assets for the
                          future.”
                        </p>
                        <h6 className="box-title">Angelina Rose</h6>
                        <span className="box-desig">Back-End Developer</span>
                        <div className="box-review">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper th-slider testi-grid2-thumb style2"
                data-slider-options='{"effect":"slide","slidesPerView":"6","spaceBetween":7,"loop":false}'
              >
                <div className="icon-box">
                  <button
                    data-slider-prev="#testiSlide7"
                    className="slider-arrow default"
                  >
                    <img src="assets/img/icon/right-arrow2.svg" alt="" />
                  </button>
                  <button
                    data-slider-next="#testiSlide7"
                    className="slider-arrow default"
                  >
                    <img src="assets/img/icon/left-arrow2.svg" alt="" />
                  </button>
                </div>
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="box-img">
                      <img
                        src="assets/img/testimonial/testi_4_1.png"
                        alt="Image"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="box-img">
                      <img
                        src="assets/img/testimonial/testi_4_2.png"
                        alt="Image"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="box-img">
                      <img
                        src="assets/img/testimonial/testi_4_3.png"
                        alt="Image"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="box-img">
                      <img
                        src="assets/img/testimonial/testi_4_4.png"
                        alt="Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="testi-image-wrapp2">
                <div className="testi-img">
                  <img src="assets/img/testimonial/testi-img1.jpg" alt="" />
                </div>
                <div className="testi-img2">
                  <img src="assets/img/testimonial/testi-img2.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <OurFeatures2 />
    </React.Fragment>
  );
};

export default AboutUsComponents;
