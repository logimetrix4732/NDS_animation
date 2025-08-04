import React, { useState } from "react";
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
    <React.Fragment>
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
                      <li className="">
                        <Link
                          className={currentPath === "/aboutUs" ? "active" : ""}
                          to="/aboutUs"
                        >
                          About Us
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          className={
                            currentPath === "/ourExperties" ? "active" : ""
                          }
                          to="/ourExperties"
                        >
                          Our Expertise
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          className={
                            currentPath === "/milkproducer" ? "active" : ""
                          }
                          to="/milkproducer"
                        >
                          Milk Producer Organisations
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          className={
                            currentPath === "/animalProductivity"
                              ? "active"
                              : ""
                          }
                          to="/animalProductivity"
                        >
                          Animal Productivity Services
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          className={
                            currentPath === "/newInitiative" ? "active" : ""
                          }
                          to="/newInitiative"
                        >
                          New Initiatives
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="/contactUs">More</Link>
                        <ul className="sub-menu">
                          <li class="menu-item-has-children">
                            <a href="#">Publications</a>
                            <ul class="sub-menu">
                              <li>
                                <a href="checkout.html">HR Compliances</a>
                              </li>
                              <li>
                                <a href="shop-details.html">Annual Reports</a>
                              </li>
                              <li>
                                <a href="cart.html">Policies</a>
                              </li>
                              <li>
                                <a href="checkout.html">Others</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to="/carrer">Careers</Link>
                          </li>
                          <li>
                            <Link to="/tender">Tenders</Link>
                          </li>
                          <li>
                            <Link to="/contactUs">Contact Us</Link>
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
                    <a
                      href="/contactUs"
                      className="th-btn th-icon d-none d-xxl-block"
                    >
                      Contact Us
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
    </React.Fragment>
  );
};

export default Header;
