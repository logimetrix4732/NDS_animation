import React from "react";
import nds_logo from "../../assets/img/nds_logo.png"

const Header = () => {
  return (
    <header className="th-header header-layout1 header-layout2">
      {/* <div className="header-top">
        <div className="container th-container">
          <div className="row justify-content-center justify-content-xl-between align-items-center">
            <div className="col-auto d-none d-md-block">
              <div className="header-links">
                <ul>
                  <li className="d-none d-xl-inline-block">
                    <i className="fa-sharp fa-regular fa-location-dot"></i>
                    <span>45 New Eskaton Road, Austria</span>
                  </li>
                  <li className="d-none d-xl-inline-block">
                    <i className="fa-regular fa-clock"></i>
                    <span>Sun to Friday: 8.00 am - 7.00 pm</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-auto">
              <div className="header-right">
                <div className="currency-menu">
                  <i className="fa-light fa-circle-dollar"></i>
                  <select className="form-select nice-select">
                    <option selected="">USD</option>
                    <option>CNY</option>
                    <option>EUR</option>
                    <option>AUD</option>
                  </select>
                </div>
                <div className="header-links">
                  <ul>
                    <li className="d-none d-md-inline-block">
                      <a href="faq.html">FAQ</a>
                    </li>
                    <li className="d-none d-md-inline-block">
                      <a href="contact.html">Support</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="sticky-wrapper">
        <div className="menu-area" data-bg-src="assets/img/bg/line-pattern.png">
          <div className="container th-container">
            <div className="row align-items-center justify-content-between">
              <div className="col-xl-2 col-xxl-2 col-auto">
                <div className="header-logo">
                  <a href="index.html">
                    <img src={nds_logo} alt="Atek" style={{ width: "148px", height: "65px" }}  />
                    {/* <img src={nds_logo} alt="Atek" style={{ width: "148px", height: "46px" }}  /> */}
                  </a>
                </div>
              </div>
              <div className="col-xl-8 col-xxl-7 col-auto text-center">
                <nav className="main-menu d-none d-xl-inline-block">
                  <ul>
                    <li className="">
                      <a className="active" href="index.html">
                        Home
                      </a>
                      {/* <ul className="mega-menu mega-menu-content allow-natural-scroll">
                        <li>
                          <div className="container">
                            <div className="row gy-4">
                              <div className="col-lg-3">
                                <div className="mega-menu-box">
                                  <div className="mega-menu-img">
                                    <img
                                      src="assets/img/pages/home-consulting.jpg"
                                      alt="Home One"
                                    />
                                    <div className="btn-wrap">
                                      <a href="index.html" className="th-btn">
                                        View Demo
                                      </a>
                                    </div>
                                  </div>
                                  <h3 className="mega-menu-title">
                                    <a href="home-consulting.html">
                                      <span>01.</span>Home Consulting
                                    </a>
                                  </h3>
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className="mega-menu-box">
                                  <div className="mega-menu-img">
                                    <img
                                      src="assets/img/pages/home-cloud.jpg"
                                      alt="Home Two"
                                    />
                                    <div className="btn-wrap">
                                      <a href="home-cloud.html" className="th-btn">
                                        View Demo
                                      </a>
                                    </div>
                                  </div>
                                  <h3 className="mega-menu-title">
                                    <a href="home-cloud.html">
                                      <span>02.</span>Home Cloud
                                    </a>
                                  </h3>
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className="mega-menu-box">
                                  <div className="mega-menu-img">
                                    <img
                                      src="assets/img/pages/home-ai.jpg"
                                      alt="Home Three"
                                    />
                                    <div className="btn-wrap">
                                      <a
                                        href="home-ai-machine.html"
                                        className="th-btn"
                                      >
                                        View Demo
                                      </a>
                                    </div>
                                  </div>
                                  <h3 className="mega-menu-title">
                                    <a href="home-ai-machine.html">
                                      <span>03.</span>Home Ai-Machine
                                    </a>
                                  </h3>
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className="mega-menu-box">
                                  <div className="mega-menu-img">
                                    <img
                                      src="assets/img/pages/startup.jpg"
                                      alt="Home Four"
                                    />
                                    <div className="btn-wrap">
                                      <a
                                        href="home-startup.html"
                                        className="th-btn"
                                      >
                                        View Demo
                                      </a>
                                    </div>
                                  </div>
                                  <h3 className="mega-menu-title">
                                    <a href="home-startup.html">
                                      <span>04.</span>Home Startup
                                    </a>
                                  </h3>
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className="mega-menu-box">
                                  <div className="mega-menu-img">
                                    <img
                                      src="assets/img/pages/home-cybersecurity.jpg"
                                      alt="Home Five"
                                    />
                                    <div className="btn-wrap">
                                      <a
                                        href="home-cybersecurity.html"
                                        className="th-btn"
                                      >
                                        View Demo
                                      </a>
                                    </div>
                                  </div>
                                  <h3 className="mega-menu-title">
                                    <a href="home-cybersecurity.html">
                                      <span>05.</span>Home Cybersecurity
                                    </a>
                                  </h3>
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className="mega-menu-box">
                                  <div className="mega-menu-img">
                                    <img
                                      src="assets/img/pages/home-sass.jpg"
                                      alt="Home Six"
                                    />
                                    <div className="btn-wrap">
                                      <a href="home-sass.html" className="th-btn">
                                        View Demo
                                      </a>
                                    </div>
                                  </div>
                                  <h3 className="mega-menu-title">
                                    <a href="home-sass.html">
                                      <span>06.</span>SaaS Business Product
                                    </a>
                                  </h3>
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className="mega-menu-box">
                                  <div className="mega-menu-img">
                                    <img
                                      src="assets/img/pages/home-tech-support.jpg"
                                      alt="Home Seven"
                                    />
                                    <div className="btn-wrap">
                                      <a
                                        href="home-tech-support.html"
                                        className="th-btn"
                                      >
                                        View Demo
                                      </a>
                                    </div>
                                  </div>
                                  <h3 className="mega-menu-title">
                                    <a href="home-tech-support.html">
                                      <span>07.</span>Tech Support Services
                                    </a>
                                  </h3>
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className="mega-menu-box">
                                  <div className="mega-menu-img">
                                    <img
                                      src="assets/img/pages/software-deve.jpg"
                                      alt="Home Eight"
                                    />
                                    <div className="btn-wrap">
                                      <a
                                        href="home-software-development.html"
                                        className="th-btn"
                                      >
                                        View Demo
                                      </a>
                                    </div>
                                  </div>
                                  <h3 className="mega-menu-title">
                                    <a href="home-software-development.html">
                                      <span>08.</span>Home Software-Development
                                    </a>
                                  </h3>
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className="mega-menu-box">
                                  <div className="mega-menu-img">
                                    <img
                                      src="assets/img/pages/app-development.jpg"
                                      alt="Home Nine"
                                    />
                                    <div className="btn-wrap">
                                      <a
                                        href="home-app-development.html"
                                        className="th-btn"
                                      >
                                        View Demo
                                      </a>
                                    </div>
                                  </div>
                                  <h3 className="mega-menu-title">
                                    <a href="home-app-development.html">
                                      <span>09.</span>Web & App Development
                                    </a>
                                  </h3>
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className="mega-menu-box">
                                  <div className="mega-menu-img">
                                    <img
                                      src="assets/img/pages/it-solutions.jpg"
                                      alt="Home Ten"
                                    />
                                    <div className="btn-wrap">
                                      <a
                                        href="home-it-solutions.html"
                                        className="th-btn"
                                      >
                                        View Demo
                                      </a>
                                    </div>
                                  </div>
                                  <h3 className="mega-menu-title">
                                    <a href="home-it-solutions.html">
                                      <span>10.</span>Home It Solutions
                                    </a>
                                  </h3>
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className="mega-menu-box">
                                  <div className="mega-menu-img">
                                    <img
                                      src="assets/img/pages/digital-transformation.jpg"
                                      alt="Home Eleven"
                                    />
                                    <div className="btn-wrap">
                                      <a
                                        href="home-digital-transformation.html"
                                        className="th-btn"
                                      >
                                        View Demo
                                      </a>
                                    </div>
                                  </div>
                                  <h3 className="mega-menu-title">
                                    <a href="home-digital-transformation.html">
                                      <span>11.</span>Home Digital
                                      Transformation
                                    </a>
                                  </h3>
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className="mega-menu-box">
                                  <div className="mega-menu-img">
                                    <img
                                      src="assets/img/pages/data-analytics.jpg"
                                      alt="Home Twelf"
                                    />
                                    <div className="btn-wrap">
                                      <a
                                        href="home-data-analytics.html"
                                        className="th-btn"
                                      >
                                        View Demo
                                      </a>
                                    </div>
                                  </div>
                                  <h3 className="mega-menu-title">
                                    <a href="home-data-analytics.html">
                                      <span>12.</span>Home Data Analytics & Big
                                    </a>
                                  </h3>
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className="mega-menu-box">
                                  <div className="mega-menu-img">
                                    <img
                                      src="assets/img/pages/blockchain-fintech.jpg"
                                      alt="Home ten"
                                    />
                                    <div className="btn-wrap">
                                      <a
                                        href="home-blockchain-fintech.html"
                                        className="th-btn"
                                      >
                                        View Demo
                                      </a>
                                    </div>
                                  </div>
                                  <h3 className="mega-menu-title">
                                    <a href="home-blockchain-fintech.html">
                                      <span>13.</span>Home Blockchain & Fintech
                                    </a>
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul> */}
                    </li>
                    <li className="">
                      <a href="#">About Us</a>
                      {/* <ul className="sub-menu">
                        <li>
                          <a href="about.html">About Us 1</a>
                        </li>
                        <li>
                          <a href="about2.html">About Us 2</a>
                        </li>
                      </ul> */}
                    </li>
                    <li className="">
                      <a href="#">Our Experties</a>
                      {/* <ul className="sub-menu">
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
                          <a href="case-study-details.html">
                            Case Study Details
                          </a>
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
                      </ul> */}
                    </li>
                    <li className="">
                      <a href="#">Milk Producer Org.</a>
                      {/* <ul className="sub-menu">
                        <li>
                          <a href="service.html">Services</a>
                        </li>
                        <li>
                          <a href="service-details.html">Service Details</a>
                        </li>
                      </ul> */}
                    </li>
                    <li className="">
                      <a href="#">Semen Station</a>
                      {/* <ul className="sub-menu">
                        <li>
                          <a href="project-grid.html">Project Grid</a>
                        </li>
                        <li>
                          <a href="project-details.html">Project Details</a>
                        </li>
                      </ul> */}
                    </li>
                    <li className="">
                      <a href="#">New Initiative</a>
                      {/* <ul className="sub-menu">
                        <li>
                          <a href="blog.html">Blog</a>
                        </li>
                        <li>
                          <a href="blog-grid.html">Blog Grid</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Blog Details</a>
                        </li>
                      </ul> */}
                    </li>
                    <li className="menu-item-has-children">
                      <a href="contact.html">More</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="contact.html">Publications</a>
                        </li>
                        <li>
                          <a href="contact-2.html">Careers</a>
                        </li>
                        <li>
                          <a href="contact-2.html">Tenders</a>
                        </li>
                        <li>
                          <a href="contact-2.html">Contact Us</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
                <button
                  type="button"
                  className="th-menu-toggle d-block d-xl-none"
                >
                  <i className="far fa-bars"></i>
                </button>
              </div>
              <div className="col-xl-2 col-xxl-3 col-auto d-none d-xl-block">
              {/* <div className="col-xl-2 col-xxl-3 col-auto d-none d-xl-block"> */}
                <div className="header-button">
                  <a
                    href="contact.html"
                    className="th-btn th-icon d-none d-xxl-block"
                    >Contact Us <i class="fa-light fa-arrow-right-long"></i></a>
                  <button
                    type="button"
                    className="icon-btn"
                    style={{
                      borderRadius: '8px',
                    }}
                  >
                    <i className="fa-solid fa-bars"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
