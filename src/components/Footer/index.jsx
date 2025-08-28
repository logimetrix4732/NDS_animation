import React from "react";
import nds_logo from "../../assets/img/nds_logo.png";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import footerIcon from "../../Images/footerIcon1.svg";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer-wrapper footer-layout1 black-bg pt-50">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-6 col-xl-3">
            <div className="widget footer-widget">
              <div className="th-widget-about">
                <div className="about-logo">
                  <Link to="/">
                    <img src={nds_logo} alt="NDDB" width="168" height="46" />
                  </Link>
                </div>
                <p className="about-text" style={{ color: "#ffffff" }}>
                  Empowering India’s dairy sector with sustainable solutions and
                  farmer-focused services to enhance rural livelihoods.
                </p>
                <div className="th-social">
                  <a
                    href="https://www.youtube.com/@nddbdairyservices6754"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-youtube" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/nddb-dairy-services/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a
                    href="https://mobile.twitter.com/NDDBDairyServ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="ri-twitter-x-fill" />
                  </a>
                  <a
                    href="https://www.facebook.com/SuperiorAnimalGenetics"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>

                  <a
                    href="https://www.instagram.com/sag_superioranimalgenetics/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="ri-instagram-line" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-xl-auto">
            <div className="widget footer-widget">
              <h3 className="widget_title">Get In Touch</h3>
              <div className="th-widget-contact">
                <div className="info-box_text">
                  <div className="icon">
                    <CallIcon className="Footer-icon" />
                  </div>
                  <div className="details">
                    <p>
                      <a href="tel:01149883000" className="info-box_link">
                        011-49883000 / 49883088
                      </a>
                    </p>
                  </div>
                </div>
                <div className="info-box_text">
                  <div className="icon">
                    <MailIcon className="Footer-icon" />
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
                    <LocationPinIcon className="Footer-icon" />
                  </div>
                  <div className="details">
                    <p>
                      <a
                        href="https://www.google.com/maps/place/NDDB+Dairy+Services/@28.5648486,77.1973818,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce279fa28f713:0xa6914db36a4ac6a6!8m2!3d28.5648439!4d77.1999621!16s%2Fg%2F1hf6ft670?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D"
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
            <div className="widget widget_nav_menu footer-widget">
              <h3 className="widget_title" style={{ color: "white" }}>
                Useful Link
              </h3>
              <div className="menu-all-pages-container">
                <ul
                  className="menu"
                  style={{ listStyle: "none", padding: 0, margin: 0 }}
                >
                  <li>
                    <Link
                      to="/privacyPage"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/privacyPage"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Return Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/privacyPage"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Terms &amp; Conditions
                    </Link>
                  </li>
                </ul>
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
                © 2025 – <Link to="/">NDDB Dairy Services</Link>. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
