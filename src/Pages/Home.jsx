import React from "react";
import Dashboard from "../components/Dashboard";
import Header from "../components/Header";
import Featurelist from "../components/Cards/featurelist";
import OurFeatures from "../components/Sliders/OurFeatures";
const Home = () => {
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
      <div className="color-scheme-wrap active">
        <button className="switchIcon">
          <i className="fa-solid fa-palette" />
        </button>
        <h4 className="color-scheme-wrap-title">
          <i className="far fa-palette" />
          STYLE SWITCHER
        </h4>
        <div className="color-switch-btns">
          <button data-color="#684DF4">
            <i className="fa-solid fa-droplet" />
          </button>
          <button data-color="#086ad8">
            <i className="fa-solid fa-droplet" />
          </button>
          <button data-color="#FC3737">
            <i className="fa-solid fa-droplet" />
          </button>
          <button data-color="#8a2be2">
            <i className="fa-solid fa-droplet" />
          </button>
          <button data-color="#104CBA">
            <i className="fa-solid fa-droplet" />
          </button>
          <button data-color="#ffbf4f">
            <i className="fa-solid fa-droplet" />
          </button>
          <button data-color="#323F7C">
            <i className="fa-solid fa-droplet" />
          </button>
          <button data-color="#0e2bc5">
            <i className="fa-solid fa-droplet" />
          </button>
          <button data-color="#F79C53">
            <i className="fa-solid fa-droplet" />
          </button>
          <button data-color="#6957af">
            <i className="fa-solid fa-droplet" />
          </button>
        </div>
        <a
          href="https://themeforest.net/search/themehour"
          className="th-btn text-center"
        >
          <i className="fa fa-shopping-cart me-2" /> Purchase
        </a>
      </div>
      <div className="preloader">
        <button className="th-btn preloaderCls">Cancel Preloader</button>
        <div className="preloader-inner">
          <img src="assets/img/logo-icon3.svg" alt="img" />
          <span className="loader">
            Atek <span className="loading-text">Atek</span>
          </span>
        </div>
      </div>
      <div className="sidemenu-wrapper sidemenu-info">
        <div className="sidemenu-content">
          <button className="closeButton sideMenuCls">
            <i className="far fa-times" />
          </button>
          <div className="widget">
            <div className="th-widget-about">
              <div className="about-logo">
                <a href="index.html">
                  <img src="assets/img/logo2.svg" alt="Atek" />
                </a>
              </div>
              <p className="about-text">
                Quick access to essential system features, including the
                dashboard for an overview of operations, network settings for
                managing connectivity, system logs for tracking activities.
              </p>
              <div className="th-social">
                <a href="https://www.facebook.com/">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="https://www.twitter.com/">
                  <i className="fab fa-twitter" />
                </a>
                <a href="https://www.linkedin.com/">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="https://www.whatsapp.com/">
                  <i className="fab fa-whatsapp" />
                </a>
                <a href="https://instagram.com/">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
          <div className="widget">
            <h3 className="widget_title">Recent Posts</h3>
            <div className="recent-post-wrap">
              <div className="recent-post d-flex align-items-center">
                <div className="media-img">
                  <a href="blog-details.html">
                    <img
                      src="assets/img/blog/recent-post-1-1.jpg"
                      alt="Blog Image"
                    />
                  </a>
                </div>
                <div className="media-body">
                  <div className="recent-post-meta">
                    <a href="blog.html">
                      <i className="far fa-calendar" />
                      24 Jun , 2025
                    </a>
                  </div>
                  <h4 className="post-title">
                    <a className="text-inherit" href="blog-details.html">
                      Where Vision Meets Concrete Reality
                    </a>
                  </h4>
                </div>
              </div>
              <div className="recent-post d-flex align-items-center">
                <div className="media-img">
                  <a href="blog-details.html">
                    <img
                      src="assets/img/blog/recent-post-1-2.jpg"
                      alt="Blog Image"
                    />
                  </a>
                </div>
                <div className="media-body">
                  <div className="recent-post-meta">
                    <a href="blog.html">
                      <i className="far fa-calendar" />
                      22 Jun , 2025
                    </a>
                  </div>
                  <h4 className="post-title">
                    <a className="text-inherit" href="blog-details.html">
                      Raising the Bar in Construction.
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="widget">
            <h3 className="widget_title">Get In Touch</h3>
            <div className="th-widget-contact">
              <div className="info-box_text">
                <div className="icon">
                  <img src="assets/img/icon/phone.svg" alt="img" />
                </div>
                <div className="details">
                  <p>
                    <a href="tel:+01234567890" className="info-box_link">
                      +01 234 567 890
                    </a>
                  </p>
                  <p>
                    <a href="tel:+09876543210" className="info-box_link">
                      +09 876 543 210
                    </a>
                  </p>
                </div>
              </div>
              <div className="info-box_text">
                <div className="icon">
                  <img src="assets/img/icon/envelope.svg" alt="img" />
                </div>
                <div className="details">
                  <p>
                    <a
                      href="mailto:mailinfo00@atek.com"
                      className="info-box_link"
                    >
                      mailinfo00@atek.com
                    </a>
                  </p>
                  <p>
                    <a
                      href="mailto:support24@atek.com"
                      className="info-box_link"
                    >
                      support24@atek.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="info-box_text">
                <div className="icon">
                  <img src="assets/img/icon/location-dot.svg" alt="img" />
                </div>
                <div className="details">
                  <p>789 Inner Lane, Holy park, California, USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="popup-search-box">
        <button className="searchClose">
          <i className="fal fa-times" />
        </button>
        <form action="#">
          <input type="text" placeholder="What are you looking for?" />
          <button type="submit">
            <i className="fal fa-search" />
          </button>
        </form>
      </div>
      <div className="th-menu-wrapper onepage-nav">
        <div className="th-menu-area text-center">
          <button className="th-menu-toggle">
            <i className="fal fa-times" />
          </button>
          <div className="mobile-logo">
            <a href="index.html">
              <img src="assets/img/logo2.svg" alt="Atek" />
            </a>
          </div>
          <div className="th-mobile-menu">
            <ul>
              <li className="menu-item-has-children mega-menu-wrap">
                <a className="active" href="index.html">
                  Home
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="index.html">Home Consulting</a>
                  </li>
                  <li>
                    <a href="home-cloud.html">Home Cloud</a>
                  </li>
                  <li>
                    <a href="home-ai-machine.html">Home Ai-Machine</a>
                  </li>
                  <li>
                    <a href="home-startup.html">Home Startup</a>
                  </li>
                  <li>
                    <a href="home-cybersecurity.html">Home Cybersecurity</a>
                  </li>
                  <li>
                    <a href="home-sass.html">SaaS Business Product</a>
                  </li>
                  <li>
                    <a href="home-tech-support.html">Tech Support Services</a>
                  </li>
                  <li>
                    <a href="home-software-development.html">
                      Home Software-Development
                    </a>
                  </li>
                  <li>
                    <a href="home-app-development.html">
                      Web &amp; App Development
                    </a>
                  </li>
                  <li>
                    <a href="home-it-solutions.html">Home It Solutions</a>
                  </li>
                  <li>
                    <a href="home-digital-transformation.html">
                      Home Digital Transformation
                    </a>
                  </li>
                  <li>
                    <a href="home-data-analytics.html">
                      Home Data Analytics &amp; Big
                    </a>
                  </li>
                  <li>
                    <a href="home-blockchain-fintech.html">
                      Home Blockchain &amp; Fintech
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">About Us</a>
                <ul className="sub-menu">
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="about2.html">About Us 2</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Pages</a>
                <ul className="sub-menu">
                  <li className="menu-item-has-children">
                    <a href="#">Shop</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="shop.html">Shop</a>
                      </li>
                      <li>
                        <a href="shop-details.html">Shop Details</a>
                      </li>
                      <li>
                        <a href="cart.html">Cart Page</a>
                      </li>
                      <li>
                        <a href="checkout.html">Checkout</a>
                      </li>
                      <li>
                        <a href="wishlist.html">Wishlist</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="gallery.html">Gallery</a>
                  </li>
                  <li>
                    <a href="case-study.html">Case Study</a>
                  </li>
                  <li>
                    <a href="case-study-details.html">Case Study Details</a>
                  </li>
                  <li>
                    <a href="career.html">Career</a>
                  </li>
                  <li>
                    <a href="career-details.html">Career Details</a>
                  </li>
                  <li>
                    <a href="team-guide.html">Team</a>
                  </li>
                  <li>
                    <a href="team-guider-details.html">Team Details</a>
                  </li>
                  <li>
                    <a href="faq.html">Faq Page</a>
                  </li>
                  <li>
                    <a href="price.html">Price Package</a>
                  </li>
                  <li>
                    <a href="error.html">Error Page</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Our Services</a>
                <ul className="sub-menu">
                  <li>
                    <a href="service.html">Services</a>
                  </li>
                  <li>
                    <a href="service-details.html">Service Details</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Projects</a>
                <ul className="sub-menu">
                  <li>
                    <a href="project-grid.html">Project Grid</a>
                  </li>
                  <li>
                    <a href="project-details.html">Project Details</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Blog</a>
                <ul className="sub-menu">
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                  <li>
                    <a href="blog-grid.html">Blog Grid</a>
                  </li>
                  <li>
                    <a href="blog-details.html">Blog Details</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="contact.html">Contact us</a>
                <ul className="sub-menu">
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                  <li>
                    <a href="contact-2.html">Contact Us Two</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Header />
      <Dashboard />
      <Featurelist />
      <OurFeatures />
      <div
        className="about-area position-relative overflow-hidden"
        id="about-sec"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="img-box1">
                <div className="img1">
                  <img src="assets/img/normal/about_1_1.jpg" alt="About" />
                </div>
                <div className="img2">
                  <img src="assets/img/normal/about_1_2.jpg" alt="About" />
                </div>
                <div className="img3">
                  <img src="assets/img/normal/about_1_3.jpg" alt="About" />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="ps-xl-4 ms-xxl-4">
                <div className="title-area about1-title-box mb-20 pe-xxl-5 me-xxl-5">
                  <span className="sub-title style1 text-anime-style-2">
                    About Us Our Company
                  </span>
                  <h2 className="sec-title mb-20 heading text-anime-style-3">
                    Solutions That Evolve with Your Business
                  </h2>
                  <p
                    className="sec-text mb-30 wow fadeInUp"
                    data-wow-delay=".1s"
                  >
                    IT solutions refer to a broad range of services and
                    technologies designed to address specific business needs,
                    streamline operations, and drive growth. These solutions
                    encompass hardware.
                  </p>
                </div>
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
                </div>
                <div className="mt-35 wow fadeInUp">
                  <a href="about.html" className="th-btn th-icon">
                    Learn More <i className="fa-light fa-arrow-right-long" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="shape-mockup shape1 d-none d-xl-block"
            data-top="12%"
            data-right="-16%"
          >
            <img src="assets/img/shape/ab-1-shape-1.png" alt="shape" />
          </div>
          <div
            className="shape-mockup shape3 d-none d-xl-block"
            data-bottom="2%"
            data-left="-20%"
          >
            <img src="assets/img/shape/ab-1-shape-2.png" alt="shape" />
          </div>
          <div
            className="shape-mockup about-shape movingX d-none d-xxl-block"
            data-bottom="20%"
            data-right="-11%"
          >
            <img src="assets/img/normal/about-right-img.jpg" alt="shape" />
          </div>
        </div>
      </div>
      <div className="case-area position-relative overflow-hidden space">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5">
              <div className="title-area case-title-box text-center text-xl-start">
                <span className="sub-title mb-15 text-anime-style-2">
                  Case Studies
                </span>
                <h2 className="sec-title text-anime-style-3">
                  Transforming Ideas into Innovations
                </h2>
              </div>
            </div>
            <div className="col-xl-7">
              <div
                className="nav nav-tabs case-tabs"
                id="nav-tab"
                role="tablist"
              >
                <button
                  className="nav-link th-btn active"
                  id="nav-step1-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-step1"
                  type="button"
                >
                  Development
                </button>
                <button
                  className="nav-link th-btn"
                  id="nav-step2-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-step2"
                  type="button"
                >
                  Woo Commerce
                </button>
                <button
                  className="nav-link th-btn"
                  id="nav-step3-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-step3"
                  type="button"
                >
                  CRM Solutions
                </button>
                <button
                  className="nav-link th-btn"
                  id="nav-step4-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-step4"
                  type="button"
                >
                  Web Design
                </button>
                <button
                  className="nav-link th-btn"
                  id="nav-step5-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-step5"
                  type="button"
                >
                  IT Support
                </button>
              </div>
            </div>
          </div>
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade active show"
              id="nav-step1"
              role="tabpanel"
            >
              <div className="slider-area case-slider slider-drag-wrap">
                <div
                  className="swiper th-slider case-slider"
                  id="aboutSlider1"
                  data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"2"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"3"}},"effect":"coverflow","coverflowEffect":{"rotate":"0","stretch":"95","depth":"212","modifier":"1"},"centeredSlides":"true"}'
                >
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_1.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">
                                  Web &amp; Mobile Development
                                </a>
                              </h4>
                              <span className="case-subtitle">Development</span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_2.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">
                                  Ui/Ux Design
                                </a>
                              </h4>
                              <span className="case-subtitle">
                                Ui/Ux Design
                              </span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_3.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">
                                  Backend Development
                                </a>
                              </h4>
                              <span className="case-subtitle">Python</span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_4.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">
                                  Python Development
                                </a>
                              </h4>
                              <span className="case-subtitle">JavaScript</span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_5.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">
                                  Apps Development
                                </a>
                              </h4>
                              <span className="case-subtitle">Java</span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_1.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">
                                  Ui/Ux Design
                                </a>
                              </h4>
                              <span className="case-subtitle">Php</span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_2.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">JavaScript</a>
                              </h4>
                              <span className="case-subtitle">Html</span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_3.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">
                                  Php Development
                                </a>
                              </h4>
                              <span className="case-subtitle">Androied</span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_4.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">
                                  Java Development
                                </a>
                              </h4>
                              <span className="case-subtitle">IOS</span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_5.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">
                                  Software Development
                                </a>
                              </h4>
                              <span className="case-subtitle">
                                Software Development
                              </span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="nav-step2" role="tabpanel">
              <div className="slider-area case-slider slider-drag-wrap">
                <div
                  className="swiper th-slider case-slider"
                  id="aboutSlider2"
                  data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"2"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"3"}},"effect":"coverflow","coverflowEffect":{"rotate":"0","stretch":"95","depth":"212","modifier":"1"},"centeredSlides":"true"}'
                >
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_1.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">
                                  Web &amp; Mobile Development
                                </a>
                              </h4>
                              <span className="case-subtitle">Development</span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_2.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">
                                  Ui/Ux Design
                                </a>
                              </h4>
                              <span className="case-subtitle">
                                Ui/Ux Design
                              </span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_3.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">
                                  Backend Development
                                </a>
                              </h4>
                              <span className="case-subtitle">Python</span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_4.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">
                                  Python Development
                                </a>
                              </h4>
                              <span className="case-subtitle">JavaScript</span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_5.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">
                                  Apps Development
                                </a>
                              </h4>
                              <span className="case-subtitle">Java</span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_1.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">
                                  Ui/Ux Design
                                </a>
                              </h4>
                              <span className="case-subtitle">Php</span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_2.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">JavaScript</a>
                              </h4>
                              <span className="case-subtitle">Html</span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_3.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">
                                  Php Development
                                </a>
                              </h4>
                              <span className="case-subtitle">Androied</span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_4.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">
                                  Java Development
                                </a>
                              </h4>
                              <span className="case-subtitle">IOS</span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_5.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">
                                  Software Development
                                </a>
                              </h4>
                              <span className="case-subtitle">
                                Software Development
                              </span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="nav-step3" role="tabpanel">
              <div className="slider-area case-slider slider-drag-wrap">
                <div
                  className="swiper th-slider case-slider"
                  id="aboutSlider3"
                  data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"2"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"3"}},"effect":"coverflow","coverflowEffect":{"rotate":"0","stretch":"95","depth":"212","modifier":"1"},"centeredSlides":"true"}'
                >
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_1.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">
                                  Web &amp; Mobile Development
                                </a>
                              </h4>
                              <span className="case-subtitle">Development</span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_2.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">
                                  Ui/Ux Design
                                </a>
                              </h4>
                              <span className="case-subtitle">
                                Ui/Ux Design
                              </span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_3.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">
                                  Backend Development
                                </a>
                              </h4>
                              <span className="case-subtitle">Python</span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_4.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">
                                  Python Development
                                </a>
                              </h4>
                              <span className="case-subtitle">JavaScript</span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_5.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">
                                  Apps Development
                                </a>
                              </h4>
                              <span className="case-subtitle">Java</span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_1.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">
                                  Ui/Ux Design
                                </a>
                              </h4>
                              <span className="case-subtitle">Php</span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_2.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">JavaScript</a>
                              </h4>
                              <span className="case-subtitle">Html</span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_3.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">
                                  Php Development
                                </a>
                              </h4>
                              <span className="case-subtitle">Androied</span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_4.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">
                                  Java Development
                                </a>
                              </h4>
                              <span className="case-subtitle">IOS</span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_5.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">
                                  Software Development
                                </a>
                              </h4>
                              <span className="case-subtitle">
                                Software Development
                              </span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="nav-step4" role="tabpanel">
              <div className="slider-area case-slider slider-drag-wrap">
                <div
                  className="swiper th-slider case-slider"
                  id="aboutSlider4"
                  data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"2"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"3"}},"effect":"coverflow","coverflowEffect":{"rotate":"0","stretch":"95","depth":"212","modifier":"1"},"centeredSlides":"true"}'
                >
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_1.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">
                                  Web &amp; Mobile Development
                                </a>
                              </h4>
                              <span className="case-subtitle">Development</span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_2.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">
                                  Ui/Ux Design
                                </a>
                              </h4>
                              <span className="case-subtitle">
                                Ui/Ux Design
                              </span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_3.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">
                                  Backend Development
                                </a>
                              </h4>
                              <span className="case-subtitle">Python</span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_4.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">
                                  Python Development
                                </a>
                              </h4>
                              <span className="case-subtitle">JavaScript</span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_5.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">
                                  Apps Development
                                </a>
                              </h4>
                              <span className="case-subtitle">Java</span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_1.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">
                                  Ui/Ux Design
                                </a>
                              </h4>
                              <span className="case-subtitle">Php</span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_2.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">JavaScript</a>
                              </h4>
                              <span className="case-subtitle">Html</span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_3.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">
                                  Php Development
                                </a>
                              </h4>
                              <span className="case-subtitle">Androied</span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_4.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">
                                  Java Development
                                </a>
                              </h4>
                              <span className="case-subtitle">IOS</span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_5.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">
                                  Software Development
                                </a>
                              </h4>
                              <span className="case-subtitle">
                                Software Development
                              </span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="nav-step5" role="tabpanel">
              <div className="slider-area case-slider slider-drag-wrap">
                <div
                  className="swiper th-slider case-slider"
                  id="aboutSlider5"
                  data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"2"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"3"}},"effect":"coverflow","coverflowEffect":{"rotate":"0","stretch":"95","depth":"212","modifier":"1"},"centeredSlides":"true"}'
                >
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_1.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">
                                  Web &amp; Mobile Development
                                </a>
                              </h4>
                              <span className="case-subtitle">Development</span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_2.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">
                                  Ui/Ux Design
                                </a>
                              </h4>
                              <span className="case-subtitle">
                                Ui/Ux Design
                              </span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_3.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">
                                  Backend Development
                                </a>
                              </h4>
                              <span className="case-subtitle">Python</span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_4.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">
                                  Python Development
                                </a>
                              </h4>
                              <span className="case-subtitle">JavaScript</span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_5.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">
                                  Apps Development
                                </a>
                              </h4>
                              <span className="case-subtitle">Java</span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_1.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">
                                  Ui/Ux Design
                                </a>
                              </h4>
                              <span className="case-subtitle">Php</span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_2.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">JavaScript</a>
                              </h4>
                              <span className="case-subtitle">Html</span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_3.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">
                                  Php Development
                                </a>
                              </h4>
                              <span className="case-subtitle">Androied</span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_4.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">
                                  Java Development
                                </a>
                              </h4>
                              <span className="case-subtitle">IOS</span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-box">
                        <div className="case-img">
                          <img
                            src="assets/img/case/case_1_5.jpg"
                            alt="case image"
                          />
                          <div className="case-content">
                            <div className="media-left">
                              <h4 className="box-title">
                                <a href="case-study-details.html">
                                  Software Development
                                </a>
                              </h4>
                              <span className="case-subtitle">
                                Software Development
                              </span>
                            </div>
                          </div>
                          <div className="case-action">
                            <a
                              href="case-study-details.html"
                              className="case-btn"
                            >
                              <i className="fa-light fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section
        className="position-relative bg-top-center overflow-hidden space"
        id="service-sec"
        data-bg-src="assets/img/bg/service_bg_1.jpg"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="title-area service-title-box text-center">
                <span className="sub-title mb-15 text-anime-style-2">
                  What We’re Offering
                </span>
                <h2 className="sec-title text-anime-style-2">
                  Dealing in all professional IT services
                </h2>
                <p className="sec-text mb-50 wow fadeInUp" data-wow-delay=".4s">
                  IT solutions refer to a broad range of services and
                  technologies designed to address
                  <br />
                  specific business needs, streamline operations, and drive
                  growth.
                </p>
              </div>
            </div>
          </div>
          <div className="slider-area slider-drag-wrap">
            <div
              className="swiper th-slider has-shadow"
              data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"},"1300":{"slidesPerView":"4"}}}'
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="service-box service-style-1 gsap-cursor">
                    <div className="service-img">
                      <a href="service-details.html">
                        <img
                          src="assets/img/service/service_img_1.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="service-content">
                      <h3 className="box-title">
                        <a href="service-details.html">
                          IT Strategy &amp; Planning
                        </a>
                      </h3>
                      <p className="service-box_text">
                        Assessing current IT infrastructure and aligning it with
                        business goals. Developing a roadmap.
                      </p>
                      <a className="th-btn style4" href="service-details.html">
                        Read More <i className="fa-light fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="service-box service-style-1 gsap-cursor">
                    <div className="service-img">
                      <a href="service-details.html">
                        <img
                          src="assets/img/service/service_img_2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="service-content">
                      <h3 className="box-title">
                        <a href="service-details.html">Web Development</a>
                      </h3>
                      <p className="service-box_text">
                        Assessing current IT infrastructure and aligning it with
                        business goals. Developing a roadmap.
                      </p>
                      <a className="th-btn style4" href="service-details.html">
                        Read More <i className="fa-light fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="service-box service-style-1 gsap-cursor">
                    <div className="service-img">
                      <a href="service-details.html">
                        <img
                          src="assets/img/service/service_img_3.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="service-content">
                      <h3 className="box-title">
                        <a href="service-details.html">Cloud Consulting</a>
                      </h3>
                      <p className="service-box_text">
                        Assessing current IT infrastructure and aligning it with
                        business goals. Developing a roadmap.
                      </p>
                      <a className="th-btn style4" href="service-details.html">
                        Read More <i className="fa-light fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="service-box service-style-1 gsap-cursor">
                    <div className="service-img">
                      <a href="service-details.html">
                        <img
                          src="assets/img/service/service_img_4.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="service-content">
                      <h3 className="box-title">
                        <a href="service-details.html">Machine Learning</a>
                      </h3>
                      <p className="service-box_text">
                        Assessing current IT infrastructure and aligning it with
                        business goals. Developing a roadmap.
                      </p>
                      <a className="th-btn style4" href="service-details.html">
                        Read More <i className="fa-light fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="service-box service-style-1 gsap-cursor">
                    <div className="service-img">
                      <a href="service-details.html">
                        <img
                          src="assets/img/service/service_img_2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="service-content">
                      <h3 className="box-title">
                        <a href="service-details.html">House Renovation</a>
                      </h3>
                      <p className="service-box_text">
                        Assessing current IT infrastructure and aligning it with
                        business goals. Developing a roadmap.
                      </p>
                      <a className="th-btn style4" href="service-details.html">
                        Read More <i className="fa-light fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="service-box service-style-1 gsap-cursor">
                    <div className="service-img">
                      <a href="service-details.html">
                        <img
                          src="assets/img/service/service_img_1.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="service-content">
                      <h3 className="box-title">
                        <a href="service-details.html">Material Supply</a>
                      </h3>
                      <p className="service-box_text">
                        Assessing current IT infrastructure and aligning it with
                        business goals. Developing a roadmap.
                      </p>
                      <a className="th-btn style4" href="service-details.html">
                        Read More <i className="fa-light fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="service-box service-style-1 gsap-cursor">
                    <div className="service-img">
                      <a href="service-details.html">
                        <img
                          src="assets/img/service/service_img_4.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="service-content">
                      <h3 className="box-title">
                        <a href="service-details.html">General Contracting</a>
                      </h3>
                      <p className="service-box_text">
                        Assessing current IT infrastructure and aligning it with
                        business goals. Developing a roadmap.
                      </p>
                      <a className="th-btn style4" href="service-details.html">
                        Read More <i className="fa-light fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="service-box service-style-1 gsap-cursor">
                    <div className="service-img">
                      <a href="service-details.html">
                        <img
                          src="assets/img/service/service_img_2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="service-content">
                      <h3 className="box-title">
                        <a href="service-details.html">Architecture Design</a>
                      </h3>
                      <p className="service-box_text">
                        Assessing current IT infrastructure and aligning it with
                        business goals. Developing a roadmap.
                      </p>
                      <a className="th-btn style4" href="service-details.html">
                        Read More <i className="fa-light fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="service-box service-style-1 gsap-cursor">
                    <div className="service-img">
                      <a href="service-details.html">
                        <img
                          src="assets/img/service/service_img_1.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="service-content">
                      <h3 className="box-title">
                        <a href="service-details.html">House Renovation</a>
                      </h3>
                      <p className="service-box_text">
                        Assessing current IT infrastructure and aligning it with
                        business goals. Developing a roadmap.
                      </p>
                      <a className="th-btn style4" href="service-details.html">
                        Read More <i className="fa-light fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="gallery-area overflow-hidden">
        <div className="container th-container">
          <div className="title-area text-center">
            <span className="sub-title mb-15 text-anime-style-2">
              Our Gallery
            </span>
            <h2 className="sec-title text-anime-style-3">
              Our Recent Project Gallery
            </h2>
          </div>
          <div className="row gy-10 gx-10 justify-content-center align-items-center">
            <div className="col-md-6 col-lg-2">
              <div className="gallery-card">
                <div className="box-img global-img">
                  <a
                    href="assets/img/gallery/gallery_1_1.jpg"
                    className="popup-image"
                  >
                    <div className="icon-btn">
                      <i className="fal fa-magnifying-glass-plus" />
                    </div>
                    <img
                      src="assets/img/gallery/gallery_1_1.jpg"
                      alt="gallery image"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="gallery-card">
                <div className="box-img global-img">
                  <a
                    href="assets/img/gallery/gallery_1_2.jpg"
                    className="popup-image"
                  >
                    <div className="icon-btn">
                      <i className="fal fa-magnifying-glass-plus" />
                    </div>
                    <img
                      src="assets/img/gallery/gallery_1_2.jpg"
                      alt="gallery image"
                    />
                  </a>
                </div>
              </div>
              <div className="gallery-card">
                <div className="box-img global-img">
                  <a
                    href="assets/img/gallery/gallery_1_3.jpg"
                    className="popup-image"
                  >
                    <div className="icon-btn">
                      <i className="fal fa-magnifying-glass-plus" />
                    </div>
                    <img
                      src="assets/img/gallery/gallery_1_3.jpg"
                      alt="gallery image"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="gallery-card">
                <div className="box-img global-img">
                  <a
                    href="assets/img/gallery/gallery_1_4.jpg"
                    className="popup-image"
                  >
                    <div className="icon-btn">
                      <i className="fal fa-magnifying-glass-plus" />
                    </div>
                    <img
                      src="assets/img/gallery/gallery_1_4.jpg"
                      alt="gallery image"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="gallery-card">
                <div className="box-img global-img">
                  <a
                    href="assets/img/gallery/gallery_1_5.jpg"
                    className="popup-image"
                  >
                    <div className="icon-btn">
                      <i className="fal fa-magnifying-glass-plus" />
                    </div>
                    <img
                      src="assets/img/gallery/gallery_1_5.jpg"
                      alt="gallery image"
                    />
                  </a>
                </div>
              </div>
              <div className="gallery-card">
                <div className="box-img global-img">
                  <a
                    href="assets/img/gallery/gallery_1_6.jpg"
                    className="popup-image"
                  >
                    <div className="icon-btn">
                      <i className="fal fa-magnifying-glass-plus" />
                    </div>
                    <img
                      src="assets/img/gallery/gallery_1_6.jpg"
                      alt="gallery image"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="gallery-card">
                <div className="box-img global-img">
                  <a
                    href="assets/img/gallery/gallery_1_7.jpg"
                    className="popup-image"
                  >
                    <div className="icon-btn">
                      <i className="fal fa-magnifying-glass-plus" />
                    </div>
                    <img
                      src="assets/img/gallery/gallery_1_7.jpg"
                      alt="gallery image"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="shape-mockup th-line-shape d-none d-xl-block"
            data-top="-18%"
            data-left={0}
          >
            <span>
              <svg
                width={3200}
                height={860}
                viewBox="0 0 3200 860"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="line-1"
                  d="M2138 14.0506C2095.27 -17.4415 2002.06 10.9842 1886.26 120.726C1741.5 257.904 1351.09 392.927 1300.98 262.785C1236.52 95.3792 1538.14 78.636 1447.87 346.052C1357.6 613.468 810.026 408.273 376.356 511.519C46.7827 589.983 -27.4648 825.017 -14.6451 859"
                  stroke="currentColor"
                  strokeWidth={4}
                />
              </svg>
            </span>
          </div>
          <div
            className="shape-mockup movingX d-none d-xl-block"
            data-top="11%"
            data-left="-3%"
          >
            <img
              className="gmovingX"
              src="assets/img/shape/g-shape-1.png"
              alt="shape"
            />
          </div>
          <div
            className="shape-mockup jump d-none d-xl-block"
            data-bottom={0}
            data-right="-3%"
          >
            <img
              className="gmovingX"
              src="assets/img/shape/ab-1-shape-2.png"
              alt="shape"
            />
          </div>
        </div>
      </div>
      <div className="counter-area space space-extra3-bottom overflow-hidden">
        <div className="container">
          <div className="counter-wrap1">
            <div className="row">
              <div className="col-md-6 col-xl-3 counter-card-wrap">
                <div className="counter-card">
                  <div className="counter-shape">
                    <span />
                  </div>
                  <div className="media-body">
                    <h3 className="box-number">
                      <span className="counter-number">12</span>
                    </h3>
                    <h6 className="counter-title">Years Experience</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3 counter-card-wrap">
                <div className="counter-card">
                  <div className="counter-shape">
                    <span />
                  </div>
                  <div className="media-body">
                    <h3 className="box-number">
                      <span className="counter-number">97</span>%
                    </h3>
                    <h6 className="counter-title">Retention Rate</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3 counter-card-wrap">
                <div className="counter-card">
                  <div className="counter-shape">
                    <span />
                  </div>
                  <div className="media-body">
                    <h3 className="box-number">
                      <span className="counter-number">8</span>k
                    </h3>
                    <h6 className="counter-title">Project Completed</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3 counter-card-wrap">
                <div className="counter-card">
                  <div className="counter-shape">
                    <span />
                  </div>
                  <div className="media-body">
                    <h3 className="box-number">
                      <span className="counter-number">19</span>k
                    </h3>
                    <h6 className="counter-title">Happy Clients</h6>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="shape-mockup jump d-none d-xl-block"
              data-bottom="0%"
              data-left="-12%"
            >
              <img src="assets/img/shape/shape_5.png" alt="shape" />
            </div>
          </div>
        </div>
      </div>
      <section
        className="bg-smoke space overflow-hidden"
        data-bg-src="assets/img/bg/team_bg_1.png"
      >
        <div className="container z-index-common">
          <div className="title-area text-center">
            <span className="sub-title text-anime-style-2">
              Our Team Memners
            </span>
            <h2 className="sec-title text-anime-style-3">
              Meet Our Expert Members
            </h2>
          </div>
          <div className="slider-area">
            <div
              className="swiper th-slider teamSlider1 has-shadow"
              id="teamSlider1"
              data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"4"}}}'
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="th-team team-box">
                    <div className="team-img">
                      <img src="assets/img/team/team_1_1.jpg" alt="Team" />
                    </div>
                    <div className="team-content">
                      <div className="media-body">
                        <h3 className="box-title">
                          <a href="team-guider-details.html">Jacob Jones</a>
                        </h3>
                        <span className="team-desig">UI/UX Designer</span>
                        <div className="th-social">
                          <a target="_blank" href="https://facebook.com/">
                            <i className="fab fa-facebook-f" />
                          </a>
                          <a target="_blank" href="https://twitter.com/">
                            <i className="fab fa-twitter" />
                          </a>
                          <a target="_blank" href="https://linkedin.com/">
                            <i className="fab fa-linkedin-in" />
                          </a>
                          <a target="_blank" href="https://youtube.com/">
                            <i className="fa-brands fa-youtube" />
                          </a>
                          <a target="_blank" href="https://instagram.com/">
                            <i className="fab fa-instagram" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="th-team team-box">
                    <div className="team-img">
                      <img src="assets/img/team/team_1_2.jpg" alt="Team" />
                    </div>
                    <div className="team-content">
                      <div className="media-body">
                        <h3 className="box-title">
                          <a href="team-guider-details.html">Jane Cooper</a>
                        </h3>
                        <span className="team-desig">Front-End Developer</span>
                        <div className="th-social">
                          <a target="_blank" href="https://facebook.com/">
                            <i className="fab fa-facebook-f" />
                          </a>
                          <a target="_blank" href="https://twitter.com/">
                            <i className="fab fa-twitter" />
                          </a>
                          <a target="_blank" href="https://linkedin.com/">
                            <i className="fab fa-linkedin-in" />
                          </a>
                          <a target="_blank" href="https://youtube.com/">
                            <i className="fa-brands fa-youtube" />
                          </a>
                          <a target="_blank" href="https://instagram.com/">
                            <i className="fab fa-instagram" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="th-team team-box">
                    <div className="team-img">
                      <img src="assets/img/team/team_1_3.jpg" alt="Team" />
                    </div>
                    <div className="team-content">
                      <div className="media-body">
                        <h3 className="box-title">
                          <a href="team-guider-details.html">Guy Hawkins</a>
                        </h3>
                        <span className="team-desig">Backend Engineer</span>
                        <div className="th-social">
                          <a target="_blank" href="https://facebook.com/">
                            <i className="fab fa-facebook-f" />
                          </a>
                          <a target="_blank" href="https://twitter.com/">
                            <i className="fab fa-twitter" />
                          </a>
                          <a target="_blank" href="https://linkedin.com/">
                            <i className="fab fa-linkedin-in" />
                          </a>
                          <a target="_blank" href="https://youtube.com/">
                            <i className="fa-brands fa-youtube" />
                          </a>
                          <a target="_blank" href="https://instagram.com/">
                            <i className="fab fa-instagram" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="th-team team-box">
                    <div className="team-img">
                      <img src="assets/img/team/team_1_4.jpg" alt="Team" />
                    </div>
                    <div className="team-content">
                      <div className="media-body">
                        <h3 className="box-title">
                          <a href="team-guider-details.html">Jenny Wilson</a>
                        </h3>
                        <span className="team-desig">Python Developer</span>
                        <div className="th-social">
                          <a target="_blank" href="https://facebook.com/">
                            <i className="fab fa-facebook-f" />
                          </a>
                          <a target="_blank" href="https://twitter.com/">
                            <i className="fab fa-twitter" />
                          </a>
                          <a target="_blank" href="https://linkedin.com/">
                            <i className="fab fa-linkedin-in" />
                          </a>
                          <a target="_blank" href="https://youtube.com/">
                            <i className="fa-brands fa-youtube" />
                          </a>
                          <a target="_blank" href="https://instagram.com/">
                            <i className="fab fa-instagram" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="th-team team-box">
                    <div className="team-img">
                      <img src="assets/img/team/team_1_1.jpg" alt="Team" />
                    </div>
                    <div className="team-content">
                      <div className="media-body">
                        <h3 className="box-title">
                          <a href="team-guider-details.html">Jacob Jones</a>
                        </h3>
                        <span className="team-desig">PHP Developer</span>
                        <div className="th-social">
                          <a target="_blank" href="https://facebook.com/">
                            <i className="fab fa-facebook-f" />
                          </a>
                          <a target="_blank" href="https://twitter.com/">
                            <i className="fab fa-twitter" />
                          </a>
                          <a target="_blank" href="https://linkedin.com/">
                            <i className="fab fa-linkedin-in" />
                          </a>
                          <a target="_blank" href="https://youtube.com/">
                            <i className="fa-brands fa-youtube" />
                          </a>
                          <a target="_blank" href="https://instagram.com/">
                            <i className="fab fa-instagram" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="th-team team-box">
                    <div className="team-img">
                      <img src="assets/img/team/team_1_2.jpg" alt="Team" />
                    </div>
                    <div className="team-content">
                      <div className="media-body">
                        <h3 className="box-title">
                          <a href="team-guider-details.html">Jane Cooper</a>
                        </h3>
                        <span className="team-desig">Django Developer</span>
                        <div className="th-social">
                          <a target="_blank" href="https://facebook.com/">
                            <i className="fab fa-facebook-f" />
                          </a>
                          <a target="_blank" href="https://twitter.com/">
                            <i className="fab fa-twitter" />
                          </a>
                          <a target="_blank" href="https://linkedin.com/">
                            <i className="fab fa-linkedin-in" />
                          </a>
                          <a target="_blank" href="https://youtube.com/">
                            <i className="fa-brands fa-youtube" />
                          </a>
                          <a target="_blank" href="https://instagram.com/">
                            <i className="fab fa-instagram" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="th-team team-box">
                    <div className="team-img">
                      <img src="assets/img/team/team_1_3.jpg" alt="Team" />
                    </div>
                    <div className="team-content">
                      <div className="media-body">
                        <h3 className="box-title">
                          <a href="team-guider-details.html">Guy Hawkins</a>
                        </h3>
                        <span className="team-desig">JavaScrip Developer</span>
                        <div className="th-social">
                          <a target="_blank" href="https://facebook.com/">
                            <i className="fab fa-facebook-f" />
                          </a>
                          <a target="_blank" href="https://twitter.com/">
                            <i className="fab fa-twitter" />
                          </a>
                          <a target="_blank" href="https://linkedin.com/">
                            <i className="fab fa-linkedin-in" />
                          </a>
                          <a target="_blank" href="https://youtube.com/">
                            <i className="fa-brands fa-youtube" />
                          </a>
                          <a target="_blank" href="https://instagram.com/">
                            <i className="fab fa-instagram" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="th-team team-box">
                    <div className="team-img">
                      <img src="assets/img/team/team_1_4.jpg" alt="Team" />
                    </div>
                    <div className="team-content">
                      <div className="media-body">
                        <h3 className="box-title">
                          <a href="team-guider-details.html">Jenny Wilson</a>
                        </h3>
                        <span className="team-desig">App Developer</span>
                        <div className="th-social">
                          <a target="_blank" href="https://facebook.com/">
                            <i className="fab fa-facebook-f" />
                          </a>
                          <a target="_blank" href="https://twitter.com/">
                            <i className="fab fa-twitter" />
                          </a>
                          <a target="_blank" href="https://linkedin.com/">
                            <i className="fab fa-linkedin-in" />
                          </a>
                          <a target="_blank" href="https://youtube.com/">
                            <i className="fa-brands fa-youtube" />
                          </a>
                          <a target="_blank" href="https://instagram.com/">
                            <i className="fab fa-instagram" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slider-pagination" />
            </div>
          </div>
        </div>
      </section>
      <section className="testi-area overflow-hidden space" id="testi-sec">
        <div className="container-fluid p-0">
          <div className="title-area mb-20 text-center">
            <span className="sub-title text-anime-style-2">Testimonial</span>
            <h2 className="sec-title text-anime-style-3">
              What Client Say About us
            </h2>
          </div>
          <div className="slider-area">
            <div
              className="swiper th-slider testiSlider1 has-shadow"
              id="testiSlider1"
              data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"767":{"slidesPerView":"1","centeredSlides":"true"},"992":{"slidesPerView":"2","centeredSlides":"true"},"1200":{"slidesPerView":"2.5","centeredSlides":"true"},"1400":{"spaceBetween":5,"slidesPerView":"2.5","centeredSlides":"true"}}}'
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testi-card">
                    <div className="testi-card_wrapper">
                      <div className="testi-card_profile">
                        <div className="testi-card_avater">
                          <img
                            src="assets/img/testimonial/testi_1_1.jpg"
                            alt="testimonial"
                          />
                        </div>
                        <div className="media-body">
                          <h3 className="box-title">Maria Doe</h3>
                          <span className="testi-card_desig">
                            UI/UX Designer
                          </span>
                        </div>
                      </div>
                      <div className="testi-card_review">
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                      </div>
                    </div>
                    <p className="testi-card_text">
                      “IT consulting services are designed to help businesses
                      optimize their technology strategies, streamline
                      operations, and align IT solutions with their goal. Here
                      are some key service offered under IT consulting Assisting
                      with cloud migration.”
                    </p>
                    <div className="testi-card-quote">
                      <img src="assets/img/icon/testi-quote.svg" alt="img" />
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-card">
                    <div className="testi-card_wrapper">
                      <div className="testi-card_profile">
                        <div className="testi-card_avater">
                          <img
                            src="assets/img/testimonial/testi_1_2.jpg"
                            alt="testimonial"
                          />
                        </div>
                        <div className="media-body">
                          <h3 className="box-title">Andrew Simon</h3>
                          <span className="testi-card_desig">
                            Front-End Developer
                          </span>
                        </div>
                      </div>
                      <div className="testi-card_review">
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                      </div>
                    </div>
                    <p className="testi-card_text">
                      “IT consulting services are designed to help businesses
                      optimize their technology strategies, streamline
                      operations, and align IT solutions with their goal. Here
                      are some key service offered under IT consulting Assisting
                      with cloud migration.”
                    </p>
                    <div className="testi-card-quote">
                      <img src="assets/img/icon/testi-quote.svg" alt="img" />
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-card">
                    <div className="testi-card_wrapper">
                      <div className="testi-card_profile">
                        <div className="testi-card_avater">
                          <img
                            src="assets/img/testimonial/testi_1_3.jpg"
                            alt="testimonial"
                          />
                        </div>
                        <div className="media-body">
                          <h3 className="box-title">Alex Jordan</h3>
                          <span className="testi-card_desig">
                            Backend Engineer
                          </span>
                        </div>
                      </div>
                      <div className="testi-card_review">
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                      </div>
                    </div>
                    <p className="testi-card_text">
                      “IT consulting services are designed to help businesses
                      optimize their technology strategies, streamline
                      operations, and align IT solutions with their goal. Here
                      are some key service offered under IT consulting Assisting
                      with cloud migration.”
                    </p>
                    <div className="testi-card-quote">
                      <img src="assets/img/icon/testi-quote.svg" alt="img" />
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-card">
                    <div className="testi-card_wrapper">
                      <div className="testi-card_profile">
                        <div className="testi-card_avater">
                          <img
                            src="assets/img/testimonial/testi_1_2.jpg"
                            alt="testimonial"
                          />
                        </div>
                        <div className="media-body">
                          <h3 className="box-title">Maria Doe</h3>
                          <span className="testi-card_desig">
                            Python Developer
                          </span>
                        </div>
                      </div>
                      <div className="testi-card_review">
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                      </div>
                    </div>
                    <p className="testi-card_text">
                      “IT consulting services are designed to help businesses
                      optimize their technology strategies, streamline
                      operations, and align IT solutions with their goal. Here
                      are some key service offered under IT consulting Assisting
                      with cloud migration.”
                    </p>
                    <div className="testi-card-quote">
                      <img src="assets/img/icon/testi-quote.svg" alt="img" />
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-card">
                    <div className="testi-card_wrapper">
                      <div className="testi-card_profile">
                        <div className="testi-card_avater">
                          <img
                            src="assets/img/testimonial/testi_1_1.jpg"
                            alt="testimonial"
                          />
                        </div>
                        <div className="media-body">
                          <h3 className="box-title">Angelina Rose</h3>
                          <span className="testi-card_desig">
                            PHP Developer
                          </span>
                        </div>
                      </div>
                      <div className="testi-card_review">
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                      </div>
                    </div>
                    <p className="testi-card_text">
                      “IT consulting services are designed to help businesses
                      optimize their technology strategies, streamline
                      operations, and align IT solutions with their goal. Here
                      are some key service offered under IT consulting Assisting
                      with cloud migration.”
                    </p>
                    <div className="testi-card-quote">
                      <img src="assets/img/icon/testi-quote.svg" alt="img" />
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-card">
                    <div className="testi-card_wrapper">
                      <div className="testi-card_profile">
                        <div className="testi-card_avater">
                          <img
                            src="assets/img/testimonial/testi_1_3.jpg"
                            alt="testimonial"
                          />
                        </div>
                        <div className="media-body">
                          <h3 className="box-title">Maria Doe</h3>
                          <span className="testi-card_desig">
                            Django Developer
                          </span>
                        </div>
                      </div>
                      <div className="testi-card_review">
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                      </div>
                    </div>
                    <p className="testi-card_text">
                      “IT consulting services are designed to help businesses
                      optimize their technology strategies, streamline
                      operations, and align IT solutions with their goal. Here
                      are some key service offered under IT consulting Assisting
                      with cloud migration.”
                    </p>
                    <div className="testi-card-quote">
                      <img src="assets/img/icon/testi-quote.svg" alt="img" />
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-card">
                    <div className="testi-card_wrapper">
                      <div className="testi-card_profile">
                        <div className="testi-card_avater">
                          <img
                            src="assets/img/testimonial/testi_1_2.jpg"
                            alt="testimonial"
                          />
                        </div>
                        <div className="media-body">
                          <h3 className="box-title">Andrew Simon</h3>
                          <span className="testi-card_desig">
                            JavaScrip Developer
                          </span>
                        </div>
                      </div>
                      <div className="testi-card_review">
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                      </div>
                    </div>
                    <p className="testi-card_text">
                      “IT consulting services are designed to help businesses
                      optimize their technology strategies, streamline
                      operations, and align IT solutions with their goal. Here
                      are some key service offered under IT consulting Assisting
                      with cloud migration.”
                    </p>
                    <div className="testi-card-quote">
                      <img src="assets/img/icon/testi-quote.svg" alt="img" />
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-card">
                    <div className="testi-card_wrapper">
                      <div className="testi-card_profile">
                        <div className="testi-card_avater">
                          <img
                            src="assets/img/testimonial/testi_1_1.jpg"
                            alt="testimonial"
                          />
                        </div>
                        <div className="media-body">
                          <h3 className="box-title">Alex Jordan</h3>
                          <span className="testi-card_desig">
                            App Developer
                          </span>
                        </div>
                      </div>
                      <div className="testi-card_review">
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                      </div>
                    </div>
                    <p className="testi-card_text">
                      “IT consulting services are designed to help businesses
                      optimize their technology strategies, streamline
                      operations, and align IT solutions with their goal. Here
                      are some key service offered under IT consulting Assisting
                      with cloud migration.”
                    </p>
                    <div className="testi-card-quote">
                      <img src="assets/img/icon/testi-quote.svg" alt="img" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="slider-pagination" />
            </div>
          </div>
        </div>
        <div
          className="shape-mockup th-line-shape d-none d-xl-block"
          data-bottom="-2%"
          data-right="0%"
        >
          <span>
            <svg
              width={1920}
              height={775}
              viewBox="0 0 1920 775"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="line-1"
                d="M1922 761.516C1883.55 789.861 1799.69 764.276 1695.5 665.5C1565.26 542.03 1214 420.5 1168.91 537.637C1110.92 688.314 1382.3 703.384 1301.08 462.69C1219.86 221.996 727.193 406.687 337.011 313.758C40.4869 243.135 -26.3152 31.5872 -14.781 1"
                stroke="#F2F5FA"
                strokeWidth={4}
              />
            </svg>
          </span>
        </div>
        <div
          className="shape-mockup movingX d-none d-xl-block"
          data-top="15%"
          data-left="5%"
        >
          <img src="assets/img/shape/shape_7.png" alt="shape" />
        </div>
      </section>
      <div className="brand-area overflow-hidden space-bottom">
        <div className="container th-container">
          <div
            className="swiper th-slider brandSlider1"
            id="brandSlider1"
            data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"2"},"768":{"slidesPerView":"3"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"5"},"1400":{"slidesPerView":"6"}}}'
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="brand-box">
                  <a href="#">
                    <img
                      className="original"
                      src="assets/img/brand/brand_1_1.svg"
                      alt="Brand Logo"
                    />
                    <img
                      className="gray"
                      src="assets/img/brand/brand_1_1.svg"
                      alt="Brand Logo"
                    />
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-box">
                  <a href="#">
                    <img
                      className="original"
                      src="assets/img/brand/brand_1_2.svg"
                      alt="Brand Logo"
                    />
                    <img
                      className="gray"
                      src="assets/img/brand/brand_1_2.svg"
                      alt="Brand Logo"
                    />
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-box">
                  <a href="#">
                    <img
                      className="original"
                      src="assets/img/brand/brand_1_3.svg"
                      alt="Brand Logo"
                    />
                    <img
                      className="gray"
                      src="assets/img/brand/brand_1_3.svg"
                      alt="Brand Logo"
                    />
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-box">
                  <a href="#">
                    <img
                      className="original"
                      src="assets/img/brand/brand_1_4.svg"
                      alt="Brand Logo"
                    />
                    <img
                      className="gray"
                      src="assets/img/brand/brand_1_4.svg"
                      alt="Brand Logo"
                    />
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-box">
                  <a href="#">
                    <img
                      className="original"
                      src="assets/img/brand/brand_1_5.svg"
                      alt="Brand Logo"
                    />
                    <img
                      className="gray"
                      src="assets/img/brand/brand_1_5.svg"
                      alt="Brand Logo"
                    />
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-box">
                  <a href="#">
                    <img
                      className="original"
                      src="assets/img/brand/brand_1_6.svg"
                      alt="Brand Logo"
                    />
                    <img
                      className="gray"
                      src="assets/img/brand/brand_1_6.svg"
                      alt="Brand Logo"
                    />
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-box">
                  <a href="#">
                    <img
                      className="original"
                      src="assets/img/brand/brand_1_7.svg"
                      alt="Brand Logo"
                    />
                    <img
                      className="gray"
                      src="assets/img/brand/brand_1_7.svg"
                      alt="Brand Logo"
                    />
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-box">
                  <a href="#">
                    <img
                      className="original"
                      src="assets/img/brand/brand_1_1.svg"
                      alt="Brand Logo"
                    />
                    <img
                      className="gray"
                      src="assets/img/brand/brand_1_1.svg"
                      alt="Brand Logo"
                    />
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-box">
                  <a href="#">
                    <img
                      className="original"
                      src="assets/img/brand/brand_1_4.svg"
                      alt="Brand Logo"
                    />
                    <img
                      className="gray"
                      src="assets/img/brand/brand_1_4.svg"
                      alt="Brand Logo"
                    />
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-box">
                  <a href="#">
                    <img
                      className="original"
                      src="assets/img/brand/brand_1_3.svg"
                      alt="Brand Logo"
                    />
                    <img
                      className="gray"
                      src="assets/img/brand/brand_1_3.svg"
                      alt="Brand Logo"
                    />
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-box">
                  <a href="#">
                    <img
                      className="original"
                      src="assets/img/brand/brand_1_2.svg"
                      alt="Brand Logo"
                    />
                    <img
                      className="gray"
                      src="assets/img/brand/brand_1_2.svg"
                      alt="Brand Logo"
                    />
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-box">
                  <a href="#">
                    <img
                      className="original"
                      src="assets/img/brand/brand_1_1.svg"
                      alt="Brand Logo"
                    />
                    <img
                      className="gray"
                      src="assets/img/brand/brand_1_1.svg"
                      alt="Brand Logo"
                    />
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-box">
                  <a href="#">
                    <img
                      className="original"
                      src="assets/img/brand/brand_1_1.svg"
                      alt="Brand Logo"
                    />
                    <img
                      className="gray"
                      src="assets/img/brand/brand_1_1.svg"
                      alt="Brand Logo"
                    />
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-box">
                  <a href="#">
                    <img
                      className="original"
                      src="assets/img/brand/brand_1_1.svg"
                      alt="Brand Logo"
                    />
                    <img
                      className="gray"
                      src="assets/img/brand/brand_1_1.svg"
                      alt="Brand Logo"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section
        className="overflow-hidden space bg-smoke overflow-hidden"
        id="blog-sec"
      >
        <div className="container">
          <div className="mb-30 text-center text-md-start">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-7">
                <div className="title-area mb-md-0">
                  <span className="sub-title text-anime-style-2">
                    Blog and Article
                  </span>
                  <h2 className="sec-title text-anime-style-3">
                    News &amp; Articles From Atek
                  </h2>
                </div>
              </div>
              <div className="col-md-auto wow fadeInUp">
                <a href="blog.html" className="th-btn style4 th-icon">
                  See More Articles{" "}
                  <i className="fa-light fa-arrow-right-long" />
                </a>
              </div>
            </div>
          </div>
          <div className="slider-area">
            <div
              className="swiper th-slider has-shadow"
              id="blogSlider1"
              data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"}}}'
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="blog-box th-ani">
                    <div className="blog-img global-img">
                      <img
                        src="assets/img/blog/blog_1_1.jpg"
                        alt="blog image"
                      />
                    </div>
                    <div className="blog-box_content">
                      <div className="blog-meta">
                        <a className="author" href="blog.html">
                          July 05, 2025
                        </a>
                        <a href="blog.html">6 min read</a>
                      </div>
                      <h3 className="box-title">
                        <a href="blog-details.html">
                          Top 10 IT Solutions Every Business Needs in 2025
                        </a>
                      </h3>
                      <a
                        href="blog-details.html"
                        className="th-btn style4 th-icon"
                      >
                        Read More <i className="fa-light fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="blog-box th-ani">
                    <div className="blog-img global-img">
                      <img
                        src="assets/img/blog/blog_1_2.jpg"
                        alt="blog image"
                      />
                    </div>
                    <div className="blog-box_content">
                      <div className="blog-meta">
                        <a className="author" href="blog.html">
                          August 15, 2025
                        </a>
                        <a href="blog.html">7 min read</a>
                      </div>
                      <h3 className="box-title">
                        <a href="blog-details.html">
                          Exploring the Benefits of End-to-End IT Solution
                          Services
                        </a>
                      </h3>
                      <a
                        href="blog-details.html"
                        className="th-btn style4 th-icon"
                      >
                        Read More <i className="fa-light fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="blog-box th-ani">
                    <div className="blog-img global-img">
                      <img
                        src="assets/img/blog/blog_1_3.jpg"
                        alt="blog image"
                      />
                    </div>
                    <div className="blog-box_content">
                      <div className="blog-meta">
                        <a className="author" href="blog.html">
                          Sep 15, 2025
                        </a>
                        <a href="blog.html">8 min read</a>
                      </div>
                      <h3 className="box-title">
                        <a href="blog-details.html">
                          The Impact of AI and Machine Learning on IT Solutions
                        </a>
                      </h3>
                      <a
                        href="blog-details.html"
                        className="th-btn style4 th-icon"
                      >
                        Read More <i className="fa-light fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="blog-box th-ani">
                    <div className="blog-img global-img">
                      <img
                        src="assets/img/blog/blog_1_1.jpg"
                        alt="blog image"
                      />
                    </div>
                    <div className="blog-box_content">
                      <div className="blog-meta">
                        <a className="author" href="blog.html">
                          July 09 2025
                        </a>
                        <a href="blog.html">9 min read</a>
                      </div>
                      <h3 className="box-title">
                        <a href="blog-details.html">
                          Top 10 IT Solutions Every Business Needs in 2025
                        </a>
                      </h3>
                      <a
                        href="blog-details.html"
                        className="th-btn style4 th-icon"
                      >
                        Read More <i className="fa-light fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="blog-box th-ani">
                    <div className="blog-img global-img">
                      <img
                        src="assets/img/blog/blog_1_2.jpg"
                        alt="blog image"
                      />
                    </div>
                    <div className="blog-box_content">
                      <div className="blog-meta">
                        <a className="author" href="blog.html">
                          Janu 10 2025
                        </a>
                        <a href="blog.html">10 min read</a>
                      </div>
                      <h3 className="box-title">
                        <a href="blog-details.html">
                          Exploring the Benefits of End-to-End IT Solution
                          Services
                        </a>
                      </h3>
                      <a
                        href="blog-details.html"
                        className="th-btn style4 th-icon"
                      >
                        Read More <i className="fa-light fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="blog-box th-ani">
                    <div className="blog-img global-img">
                      <img
                        src="assets/img/blog/blog_1_3.jpg"
                        alt="blog image"
                      />
                    </div>
                    <div className="blog-box_content">
                      <div className="blog-meta">
                        <a className="author" href="blog.html">
                          Nov 12 2025
                        </a>
                        <a href="blog.html">11 min read</a>
                      </div>
                      <h3 className="box-title">
                        <a href="blog-details.html">
                          The Impact of AI and Machine Learning on IT Solutions
                        </a>
                      </h3>
                      <a
                        href="blog-details.html"
                        className="th-btn style4 th-icon"
                      >
                        Read More <i className="fa-light fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="shape-mockup shape1 d-none d-xxl-block"
          data-bottom="5%"
          data-left="3%"
        >
          <img src="assets/img/shape/blog-1-shape.png" alt="shape" />
        </div>
        <div
          className="shape-mockup shape2 d-none d-xl-block"
          data-top="28%"
          data-right="5%"
        >
          <img src="assets/img/shape/ab-1-shape-1.png" alt="shape" />
        </div>
      </section>
      <footer className="footer-wrapper footer-layout1 black-bg space-top">
        <div className="widget-area">
          <div className="container">
            <div className="newsletter-area">
              <div className="newsletter-top">
                <div className="row gy-4 align-items-center">
                  <div className="col-lg-5">
                    <h2 className="newsletter-title text-white text-capitalize mb-0">
                      get updated the latest newsletter
                    </h2>
                  </div>
                  <div className="col-lg-7">
                    <form className="newsletter-form">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Enter Email"
                        required=""
                      />
                      <button type="submit" className="th-btn style3">
                        Subscribe Now
                        <img src="assets/img/icon/plane.svg" alt="" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-md-6 col-xl-3">
                <div className="widget footer-widget">
                  <div className="th-widget-about">
                    <div className="about-logo">
                      <a href="index.html">
                        <img src="assets/img/logo3.svg" alt="Atek" />
                      </a>
                    </div>
                    <p className="about-text">
                      Rapidiously myocardinate cross-platform intellectual
                      capital model. Appropriately create interactive
                      infrastructures
                    </p>
                    <div className="th-social">
                      <a href="https://www.facebook.com/">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="https://www.twitter.com/">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="https://www.linkedin.com/">
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a href="https://www.whatsapp.com/">
                        <i className="fab fa-whatsapp" />
                      </a>
                      <a href="https://instagram.com/">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Useful Link</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <a href="about.html">About us</a>
                      </li>
                      <li>
                        <a href="service.html">Our Service</a>
                      </li>
                      <li>
                        <a href="contact.html">Terms of Service</a>
                      </li>
                      <li>
                        <a href="service.html">News &amp; Media</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget footer-widget">
                  <h3 className="widget_title">Get In Touch</h3>
                  <div className="th-widget-contact">
                    <div className="info-box_text">
                      <div className="icon">
                        <img src="assets/img/icon/phone.svg" alt="img" />
                      </div>
                      <div className="details">
                        <p>
                          <a href="tel:+01234567890" className="info-box_link">
                            +01 234 567 890
                          </a>
                        </p>
                        <p>
                          <a href="tel:+09876543210" className="info-box_link">
                            +09 876 543 210
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="info-box_text">
                      <div className="icon">
                        <img src="assets/img/icon/envelope.svg" alt="img" />
                      </div>
                      <div className="details">
                        <p>
                          <a
                            href="mailto:mailinfo00@atek.com"
                            className="info-box_link"
                          >
                            mailinfo00@atek.com
                          </a>
                        </p>
                        <p>
                          <a
                            href="mailto:support24@atek.com"
                            className="info-box_link"
                          >
                            support24@atek.com
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="info-box_text">
                      <div className="icon">
                        <img src="assets/img/icon/location-dot.svg" alt="img" />
                      </div>
                      <div className="details">
                        <p>
                          <a
                            href="https://maps.app.goo.gl/QyH2fFoJ9fii93mt7"
                            target="_blank"
                          >
                            789 Inner Lane, Holy park, California, USA
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget footer-widget">
                  <h3 className="widget_title">Instagram Post</h3>
                  <div className="sidebar-gallery">
                    <div className="gallery-thumb">
                      <img
                        src="assets/img/widget/gallery_1_1.jpg"
                        alt="Gallery Image"
                      />
                      <a
                        target="_blank"
                        href="https://www.instagram.com/"
                        className="gallery-btn"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                    <div className="gallery-thumb">
                      <img
                        src="assets/img/widget/gallery_1_2.jpg"
                        alt="Gallery Image"
                      />
                      <a
                        target="_blank"
                        href="https://www.instagram.com/"
                        className="gallery-btn"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                    <div className="gallery-thumb">
                      <img
                        src="assets/img/widget/gallery_1_3.jpg"
                        alt="Gallery Image"
                      />
                      <a
                        target="_blank"
                        href="https://www.instagram.com/"
                        className="gallery-btn"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                    <div className="gallery-thumb">
                      <img
                        src="assets/img/widget/gallery_1_4.jpg"
                        alt="Gallery Image"
                      />
                      <a
                        target="_blank"
                        href="https://www.instagram.com/"
                        className="gallery-btn"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                    <div className="gallery-thumb">
                      <img
                        src="assets/img/widget/gallery_1_5.jpg"
                        alt="Gallery Image"
                      />
                      <a
                        target="_blank"
                        href="https://www.instagram.com/"
                        className="gallery-btn"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                    <div className="gallery-thumb">
                      <img
                        src="assets/img/widget/gallery_1_6.jpg"
                        alt="Gallery Image"
                      />
                      <a
                        target="_blank"
                        href="https://www.instagram.com/"
                        className="gallery-btn"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-wrap">
          <div className="container">
            <div className="row justify-content-lg-between align-items-center">
              <div className="col-lg-6">
                <p className="copyright-text">
                  Copyright © 2025 <a href="index.html">Atek</a>. All Rights
                  Reserved.
                </p>
              </div>
              <div className="col-lg-6 text-center text-lg-end">
                <div className="footer-links">
                  <ul>
                    <li>
                      <a href="about.html">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="about.html">Careers</a>
                    </li>
                    <li>
                      <a href="about.html">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="scroll-top">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              transition: "stroke-dashoffset 10ms linear 0s",
              strokeDasharray: "307.919, 307.919",
              strokeDashoffset: "307.919",
            }}
          />
        </svg>
      </div>
    </React.Fragment>
  );
};

export default Home;
