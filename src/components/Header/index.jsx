import React from "react";

const Header = () => {
  return (
    <header class="th-header header-layout1 header-layout2">
      <div class="header-top">
        <div class="container th-container">
          <div class="row justify-content-center justify-content-xl-between align-items-center">
            <div class="col-auto d-none d-md-block">
              <div class="header-links">
                <ul>
                  <li class="d-none d-xl-inline-block">
                    <i class="fa-sharp fa-regular fa-location-dot"></i>
                    <span>45 New Eskaton Road, Austria</span>
                  </li>
                  <li class="d-none d-xl-inline-block">
                    <i class="fa-regular fa-clock"></i>
                    <span>Sun to Friday: 8.00 am - 7.00 pm</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-auto">
              <div class="header-right">
                <div class="currency-menu">
                  <i class="fa-light fa-circle-dollar"></i>
                  <select class="form-select nice-select">
                    <option selected="">USD</option>
                    <option>CNY</option>
                    <option>EUR</option>
                    <option>AUD</option>
                  </select>
                </div>
                <div class="header-links">
                  <ul>
                    <li class="d-none d-md-inline-block">
                      <a href="faq.html">FAQ</a>
                    </li>
                    <li class="d-none d-md-inline-block">
                      <a href="contact.html">Support</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sticky-wrapper">
        <div class="menu-area" data-bg-src="assets/img/bg/line-pattern.png">
          <div class="container th-container">
            <div class="row align-items-center justify-content-between">
              <div class="col-xl-2 col-xxl-2 col-auto">
                <div class="header-logo">
                  <a href="index.html">
                    <img src="assets/img/logo2.svg" alt="Atek" />
                  </a>
                </div>
              </div>
              <div class="col-xl-8 col-xxl-7 col-auto text-start">
                <nav class="main-menu d-none d-xl-inline-block">
                  <ul>
                    <li class="menu-item-has-children mega-menu-wrap">
                      <a class="active" href="index.html">
                        Home
                      </a>
                      <ul class="mega-menu mega-menu-content allow-natural-scroll">
                        <li>
                          <div class="container">
                            <div class="row gy-4">
                              <div class="col-lg-3">
                                <div class="mega-menu-box">
                                  <div class="mega-menu-img">
                                    <img
                                      src="assets/img/pages/home-consulting.jpg"
                                      alt="Home One"
                                    />
                                    <div class="btn-wrap">
                                      <a href="index.html" class="th-btn">
                                        View Demo
                                      </a>
                                    </div>
                                  </div>
                                  <h3 class="mega-menu-title">
                                    <a href="home-consulting.html">
                                      <span>01.</span>Home Consulting
                                    </a>
                                  </h3>
                                </div>
                              </div>
                              <div class="col-lg-3">
                                <div class="mega-menu-box">
                                  <div class="mega-menu-img">
                                    <img
                                      src="assets/img/pages/home-cloud.jpg"
                                      alt="Home Two"
                                    />
                                    <div class="btn-wrap">
                                      <a href="home-cloud.html" class="th-btn">
                                        View Demo
                                      </a>
                                    </div>
                                  </div>
                                  <h3 class="mega-menu-title">
                                    <a href="home-cloud.html">
                                      <span>02.</span>Home Cloud
                                    </a>
                                  </h3>
                                </div>
                              </div>
                              <div class="col-lg-3">
                                <div class="mega-menu-box">
                                  <div class="mega-menu-img">
                                    <img
                                      src="assets/img/pages/home-ai.jpg"
                                      alt="Home Three"
                                    />
                                    <div class="btn-wrap">
                                      <a
                                        href="home-ai-machine.html"
                                        class="th-btn"
                                      >
                                        View Demo
                                      </a>
                                    </div>
                                  </div>
                                  <h3 class="mega-menu-title">
                                    <a href="home-ai-machine.html">
                                      <span>03.</span>Home Ai-Machine
                                    </a>
                                  </h3>
                                </div>
                              </div>
                              <div class="col-lg-3">
                                <div class="mega-menu-box">
                                  <div class="mega-menu-img">
                                    <img
                                      src="assets/img/pages/startup.jpg"
                                      alt="Home Four"
                                    />
                                    <div class="btn-wrap">
                                      <a
                                        href="home-startup.html"
                                        class="th-btn"
                                      >
                                        View Demo
                                      </a>
                                    </div>
                                  </div>
                                  <h3 class="mega-menu-title">
                                    <a href="home-startup.html">
                                      <span>04.</span>Home Startup
                                    </a>
                                  </h3>
                                </div>
                              </div>
                              <div class="col-lg-3">
                                <div class="mega-menu-box">
                                  <div class="mega-menu-img">
                                    <img
                                      src="assets/img/pages/home-cybersecurity.jpg"
                                      alt="Home Five"
                                    />
                                    <div class="btn-wrap">
                                      <a
                                        href="home-cybersecurity.html"
                                        class="th-btn"
                                      >
                                        View Demo
                                      </a>
                                    </div>
                                  </div>
                                  <h3 class="mega-menu-title">
                                    <a href="home-cybersecurity.html">
                                      <span>05.</span>Home Cybersecurity
                                    </a>
                                  </h3>
                                </div>
                              </div>
                              <div class="col-lg-3">
                                <div class="mega-menu-box">
                                  <div class="mega-menu-img">
                                    <img
                                      src="assets/img/pages/home-sass.jpg"
                                      alt="Home Six"
                                    />
                                    <div class="btn-wrap">
                                      <a href="home-sass.html" class="th-btn">
                                        View Demo
                                      </a>
                                    </div>
                                  </div>
                                  <h3 class="mega-menu-title">
                                    <a href="home-sass.html">
                                      <span>06.</span>SaaS Business Product
                                    </a>
                                  </h3>
                                </div>
                              </div>
                              <div class="col-lg-3">
                                <div class="mega-menu-box">
                                  <div class="mega-menu-img">
                                    <img
                                      src="assets/img/pages/home-tech-support.jpg"
                                      alt="Home Seven"
                                    />
                                    <div class="btn-wrap">
                                      <a
                                        href="home-tech-support.html"
                                        class="th-btn"
                                      >
                                        View Demo
                                      </a>
                                    </div>
                                  </div>
                                  <h3 class="mega-menu-title">
                                    <a href="home-tech-support.html">
                                      <span>07.</span>Tech Support Services
                                    </a>
                                  </h3>
                                </div>
                              </div>
                              <div class="col-lg-3">
                                <div class="mega-menu-box">
                                  <div class="mega-menu-img">
                                    <img
                                      src="assets/img/pages/software-deve.jpg"
                                      alt="Home Eight"
                                    />
                                    <div class="btn-wrap">
                                      <a
                                        href="home-software-development.html"
                                        class="th-btn"
                                      >
                                        View Demo
                                      </a>
                                    </div>
                                  </div>
                                  <h3 class="mega-menu-title">
                                    <a href="home-software-development.html">
                                      <span>08.</span>Home Software-Development
                                    </a>
                                  </h3>
                                </div>
                              </div>
                              <div class="col-lg-3">
                                <div class="mega-menu-box">
                                  <div class="mega-menu-img">
                                    <img
                                      src="assets/img/pages/app-development.jpg"
                                      alt="Home Nine"
                                    />
                                    <div class="btn-wrap">
                                      <a
                                        href="home-app-development.html"
                                        class="th-btn"
                                      >
                                        View Demo
                                      </a>
                                    </div>
                                  </div>
                                  <h3 class="mega-menu-title">
                                    <a href="home-app-development.html">
                                      <span>09.</span>Web & App Development
                                    </a>
                                  </h3>
                                </div>
                              </div>
                              <div class="col-lg-3">
                                <div class="mega-menu-box">
                                  <div class="mega-menu-img">
                                    <img
                                      src="assets/img/pages/it-solutions.jpg"
                                      alt="Home Ten"
                                    />
                                    <div class="btn-wrap">
                                      <a
                                        href="home-it-solutions.html"
                                        class="th-btn"
                                      >
                                        View Demo
                                      </a>
                                    </div>
                                  </div>
                                  <h3 class="mega-menu-title">
                                    <a href="home-it-solutions.html">
                                      <span>10.</span>Home It Solutions
                                    </a>
                                  </h3>
                                </div>
                              </div>
                              <div class="col-lg-3">
                                <div class="mega-menu-box">
                                  <div class="mega-menu-img">
                                    <img
                                      src="assets/img/pages/digital-transformation.jpg"
                                      alt="Home Eleven"
                                    />
                                    <div class="btn-wrap">
                                      <a
                                        href="home-digital-transformation.html"
                                        class="th-btn"
                                      >
                                        View Demo
                                      </a>
                                    </div>
                                  </div>
                                  <h3 class="mega-menu-title">
                                    <a href="home-digital-transformation.html">
                                      <span>11.</span>Home Digital
                                      Transformation
                                    </a>
                                  </h3>
                                </div>
                              </div>
                              <div class="col-lg-3">
                                <div class="mega-menu-box">
                                  <div class="mega-menu-img">
                                    <img
                                      src="assets/img/pages/data-analytics.jpg"
                                      alt="Home Twelf"
                                    />
                                    <div class="btn-wrap">
                                      <a
                                        href="home-data-analytics.html"
                                        class="th-btn"
                                      >
                                        View Demo
                                      </a>
                                    </div>
                                  </div>
                                  <h3 class="mega-menu-title">
                                    <a href="home-data-analytics.html">
                                      <span>12.</span>Home Data Analytics & Big
                                    </a>
                                  </h3>
                                </div>
                              </div>
                              <div class="col-lg-3">
                                <div class="mega-menu-box">
                                  <div class="mega-menu-img">
                                    <img
                                      src="assets/img/pages/blockchain-fintech.jpg"
                                      alt="Home ten"
                                    />
                                    <div class="btn-wrap">
                                      <a
                                        href="home-blockchain-fintech.html"
                                        class="th-btn"
                                      >
                                        View Demo
                                      </a>
                                    </div>
                                  </div>
                                  <h3 class="mega-menu-title">
                                    <a href="home-blockchain-fintech.html">
                                      <span>13.</span>Home Blockchain & Fintech
                                    </a>
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="#">About Us</a>
                      <ul class="sub-menu">
                        <li>
                          <a href="about.html">About Us 1</a>
                        </li>
                        <li>
                          <a href="about2.html">About Us 2</a>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="#">Our Experties</a>
                      <ul class="sub-menu">
                        <li class="menu-item-has-children">
                          <a href="#">Shop</a>
                          <ul class="sub-menu">
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
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="#">Milk Producer Org.</a>
                      <ul class="sub-menu">
                        <li>
                          <a href="service.html">Services</a>
                        </li>
                        <li>
                          <a href="service-details.html">Service Details</a>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="#">Semen Station</a>
                      <ul class="sub-menu">
                        <li>
                          <a href="project-grid.html">Project Grid</a>
                        </li>
                        <li>
                          <a href="project-details.html">Project Details</a>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="#">New Initiative</a>
                      <ul class="sub-menu">
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
                    <li class="menu-item-has-children">
                      <a href="contact.html">More</a>
                      <ul class="sub-menu">
                        <li>
                          <a href="contact.html">Contact Us</a>
                        </li>
                        <li>
                          <a href="contact-2.html">Contact Us Two</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
                <button type="button" class="th-menu-toggle d-block d-xl-none">
                  <i class="far fa-bars"></i>
                </button>
              </div>
              <div class="col-xl-2 col-xxl-3 col-auto d-none d-xl-block">
                <div class="header-button">
                  <button type="button" class="icon-btn searchBoxToggler">
                    <img src="assets/img/icon/search.svg" alt="icon" />
                  </button>
                  <a
                    href="contact.html"
                    class="th-btn th-icon d-none d-xxl-block"
                  >
                    Get In Touch <i class="fa-light fa-arrow-right-long"></i>
                  </a>
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
