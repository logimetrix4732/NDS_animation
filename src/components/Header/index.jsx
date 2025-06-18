import React from "react";
import nds_logo from "../../assets/img/nds_logo.png";

const Header = () => {
  return (
    <>
      <header className="th-header header-layout1 header-layout2">
        <div className="sticky-wrapper">
          <div
            className="menu-area"
            data-bg-src="assets/img/bg/line-pattern.png"
          >
            <div className="container th-container">
              <div className="row align-items-center justify-content-between">
                <div className="col-xl-2 col-xxl-2 col-auto">
                  <div className="header-logo">
                    <a href="index.html">
                      <img
                        src={nds_logo}
                        alt="Atek"
                        style={{ width: "148px", height: "65px" }}
                      />
                    </a>
                  </div>
                </div>

                <div className="col-xl-8 col-xxl-7 col-auto text-center">
                  <nav className="main-menu d-none d-xl-inline-block">
                    <ul>
                      <li>
                        <a className="active" href="index.html">
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Our Experties</a>
                      </li>
                      <li>
                        <a href="#">Milk Producer Org.</a>
                      </li>
                      <li>
                        <a href="#">Semen Station</a>
                      </li>
                      <li>
                        <a href="#">New Initiative</a>
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

                  {/* Small screen menu toggle */}
                  <button
                    className="th-menu-toggle d-block d-xl-none"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#mobileMenu"
                    aria-controls="mobileMenu"
                  >
                    <i className="far fa-bars"></i>
                  </button>
                </div>

                {/* Large screen right buttons */}
                <div className="col-xl-2 col-xxl-3 col-auto d-none d-xl-block">
                  <div className="header-button d-flex align-items-center gap-2">
                    <a
                      href="contact.html"
                      className="th-btn th-icon d-none d-xxl-block"
                    >
                      Contact Us{" "}
                      <i className="fa-light fa-arrow-right-long"></i>
                    </a>
                    <button
                      type="button"
                      className="icon-btn th-menu-toggle"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#desktopMenu"
                      aria-controls="desktopMenu"
                      style={{
                        borderRadius: "8px",
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

      {/* === Offcanvas for desktop Screens === */}
      <div
        className="offcanvas offcanvas-end d-none d-xl-block"
        tabIndex="-1"
        id="desktopMenu"
        aria-labelledby="desktopMenuLabel"
        style={{ width: "350px" }}
      >
        <div className="offcanvas-body p-4">
          {/* Logo and close */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <img
              src={nds_logo}
              alt="NDDB"
              style={{ width: "160px", height: "70px" }}
            />
            <button
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              style={{
                border: "1px solid gray",
                padding: "15px",
                borderRadius: "50%",
              }}
            ></button>
          </div>

          <hr />
          {/* Image Gallery */}
          <div className="row g-2 mb-4">
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
              <div className="col-4" key={i}>
                <img
                  src={`https://placehold.co/100x100?text=Img${i + 1}`}
                  alt={`Gallery ${i + 1}`}
                  className="img-fluid rounded"
                />
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="mb-4">
            <h5 className="fw-bold mb-3">CONTACT INFO</h5>
            <div className="d-flex align-items-start mb-2">
              <i
                className="fas fa-location me-3 text-muted me-3 contactUsHover"
                style={{
                  padding: "10px",
                  border: "1px solid #e3e1e1",
                  borderRadius: "50%",
                }}
              ></i>
              <a href="https://www.google.com/maps/place/NDDB+Dairy+Services/@28.564844,77.199962,16z/data=!4m6!3m5!1s0x390ce279fa28f713:0xa6914db36a4ac6a6!8m2!3d28.5648439!4d77.1999621!16s%2Fg%2F1hf6ft670?hl=en&entry=ttu&g_ep=EgoyMDI1MDYxNS4wIKXMDSoASAFQAw%3D%3D"  target="blank" style={{textDecoration: 'none', color: '#000'}}>

              <span className="mb-0">
                NDDB House, Safdarjung Enclave,
                <br />
                New Delhi,
                <br />
                Southwest Delhi, Delhi 110029
              </span>
              </a>
            </div>
            <div className="d-flex align-items-center mb-2">
              <i
                className="fas fa-phone me-3 text-muted contactUsHover"
                style={{
                  padding: "10px",
                  border: "1px solid #e3e1e1",
                  borderRadius: "50%",
                  color: '#5b8c51'
                }}
              ></i>
              <span>+91 7092922421</span>
            </div>
            <div className="d-flex align-items-center">
              <i
                className="fas fa-envelope me-3 text-muted contactUsHover"
                style={{
                  padding: "10px",
                  border: "1px solid #e3e1e1",
                  borderRadius: "50%",
                }}
              ></i>
              <span>enquiry@nddbdairyservices.com</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="d-flex gap-3">
            <a
              href="#"
              className="contactUsHover"
              style={{
                // padding: '10px',
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "38px",
                width: "38px",
                border: "1px solid #e3e1e1",
                borderRadius: "50%",
              }}
            >
              <i className="fab fa-facebook-square "></i>
            </a>
            <a
              href="#"
              className="contactUsHover"
              style={{
                // padding: '10px',
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "38px",
                width: "38px",
                border: "1px solid #e3e1e1",
                borderRadius: "50%",
              }}
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="contactUsHover"
              style={{
                // padding: '10px',
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "38px",
                width: "38px",
                border: "1px solid #e3e1e1",
                borderRadius: "50%",
              }}
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a
              href="#"
              className="contactUsHover"
              style={{
                // padding: '10px',
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "35px",
                width: "35px",
                border: "1px solid #e3e1e1",
                borderRadius: "50%",
              }}
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      {/* === Offcanvas for Small Screens === */}
      <div
        className="offcanvas offcanvas-start d-xl-none"
        tabIndex="-1"
        id="mobileMenu"
        aria-labelledby="mobileMenuLabel"
        style={{ width: "350px" }}
      >
        <div className="th-menu-area text-center">
          <div className="mobile-logo mt-4">
            <a href="index.html">
              <img
                src={nds_logo}
                alt="Atek"
                style={{ width: "170px", height: "76px" }}
              />
            </a>
            <button
              className=""
              style={{
                position: "absolute",
                right: "-20px",
                top: "20px",
                borderRadius: "50%",
                height: "35px",
                width: "35px",
                background: "#000",
              }}
              data-bs-dismiss="offcanvas"
              data-bs-target="#offcanvasResponsive"
              aria-label="Close"
            >
              <i className="fal fa-times text-white"></i>
            </button>
          </div>
          <div className="th-mobile-menu">
            <ul>
              <li className=" mega-menu-wrap">
                <a className="active" href="index.html">
                  Home
                </a>
              </li>
              <li className="">
                <a href="#">About Us</a>
              </li>
              <li className="">
                <a href="#">Our Experties</a>
              </li>
              <li className="">
                <a href="#">Milk Producer Org.</a>
              </li>
              <li className="">
                <a href="#">Semen Station</a>
              </li>
              <li className="">
                <a href="#">New Initiative</a>
              </li>
              <li className="">
                <a href="contact.html">Publications</a>
              </li>
              <li className="">
                <a href="contact.html">Careers</a>
              </li>
              <li className="">
                <a href="contact.html">Tenders</a>
              </li>
              <li className="">
                <a href="contact.html">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
