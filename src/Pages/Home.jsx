import React from "react";
import Dashboard from "../components/Dashboard";
import Header from "../components/Header";
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
