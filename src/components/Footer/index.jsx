import React from "react";
import nds_logo from "../../assets/img/nds_logo.png";
const Footer = () => {
  return (
    <footer className="footer-wrapper footer-layout1 black-bg space-top">
      <div className="widget-area">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-3">
              <div className="widget footer-widget">
                <div className="th-widget-about">
                  <div className="about-logo">
                    <a href="index.html">
                      <img src={nds_logo} alt="Atek" width="168" height="46" />
                    </a>
                  </div>
                  <p className="about-text">
                    Rapidiously myocardinate cross-platform intellectual capital
                    model. Appropriately create interactive infrastructures
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
                <h3 className="widget_title">About Us</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <a href="index.html">Annual Reports</a>
                    </li>
                    <li>
                      <a href="about.html">Gallery (Photos and Videos)</a>
                    </li>
                  </ul>
                </div>
                <h3 className="widget_title" style={{ marginTop: "30px" }}>
                  Producer Companies
                </h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <a href="index.html">MPCs Operationalized</a>
                    </li>
                    <li>
                      <a href="about.html">Setting up MPCs</a>
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
                        <a href="tel:+9170929224210" className="info-box_link">
                          +91 7092922421
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
                          href="mailto:enquiry@nddbdairyservices.com"
                          className="info-box_link"
                        >
                          enquiry@nddbdairyservices.com
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
                          NDDB House, Safdarjung Enclave, New Delhi, Southwest
                          Delhi, Delhi 110029
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Productivity Services</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <a href="index.html">Animal Nutrition Services</a>
                      </li>
                      <li>
                        <a href="about.html">AI Delivery Services</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="widget footer-widget">
                <h3 className="widget_title">Email Address</h3>
                <div className="row gy-4 align-items-center">
                  <div className="col-lg-12">
                    <form className="newsletter-form">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Enter Email"
                        required=""
                      />
                      <button
                        type="submit"
                        className="th-btn style3"
                        style={{
                          padding: "8px 16px",
                          fontSize: "14px",
                          minWidth: "auto",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img src="assets/img/icon/plane.svg" alt="" />
                      </button>
                    </form>
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
  );
};

export default Footer;
