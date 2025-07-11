import { useState } from "react";
import SideMenu from "../SideMenu";
import nds_logo from "../../assets/img/nds_logo.png";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [openRight, setOpenRight] = useState(false);
  const [openLeft, setOpenLeft] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <>
      <header className="th-header header-layout1 header-layout2">
        <SideMenu
          openRight={openRight}
          openLeft={openLeft}
          setOpenLeft={setOpenLeft}
          setOpenRight={setOpenRight}
        />
        <div className="sticky-wrapper">
          <div
            className="menu-area"
            data-bg-src="assets/img/bg/line-pattern.png"
          >
            <div className="th-container">
              <div className="row no-horizontal-gutter align-items-center justify-content-between small-screen-padding">
                <div className="col-xl-2 col-xxl-2 col-auto text-center">
                  <div className="header-logo">
                    <a href="/">
                      <img
                        src={nds_logo}
                        alt="NDDB"
                        style={{ width: "148px", height: "65px" }}
                      />
                    </a>
                  </div>
                </div>
                <div className="col-xl-8 col-xxl-7 col-auto text-center">
                  <nav className="main-menu d-none d-xl-inline-block">
                    <ul>
                      <li className="">
                        <Link
                          className={currentPath === "/" ? "active" : ""}
                          to="/"
                        >
                          Home
                        </Link>
                      </li>
                      <li
                        className={currentPath === "/aboutUs" ? "active" : ""}
                      >
                        <Link to="/aboutUs">About Us</Link>
                      </li>
                      <li className="">
                        <Link to="/ourExperties">Our Experties</Link>
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
                    data-bs-toggle="offcanvas"
                    data-bs-target="#mobileMenu"
                    aria-controls="mobileMenu"
                    onClick={() => setOpenLeft(true)}
                  >
                    <i className="fa-solid fa-bars"></i>
                  </button>
                </div>
                <div className="col-xl-2 col-xxl-3 col-auto d-none d-xl-block text-center">
                  <div
                    className="header-button"
                    style={{
                      marginLeft: "65px",
                    }}
                  >
                    <a href="/" className="th-btn th-icon d-none d-xxl-block">
                      Contact Us{" "}
                      <i className="fa-light fa-arrow-right-long"></i>
                    </a>
                    <button
                      type="button"
                      className="icon-btn"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#desktopMenu"
                      aria-controls="desktopMenu"
                      style={{
                        borderRadius: "8px",
                      }}
                      onClick={() => setOpenRight(true)}
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
    </>
  );
};

export default Header;
