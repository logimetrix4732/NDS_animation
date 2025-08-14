import React, { useEffect, useState } from "react";
import Footage from "../../Images/Videos/dashboardFootage1.mp4";
import SideMenu from "../SideMenu";
import nds_logo from "../../assets/img/nds_logo.png";
import { Link, useLocation } from "react-router-dom";
import "./dashboard.css";

const Dashboard = () => {
  const [openRight, setOpenRight] = useState(false);
  const [openLeft, setOpenLeft] = useState(false);
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);
  const [showContact, setShowContact] = useState(window.innerWidth > 1533);
  const [showDesktopMenu, setShowDesktopMenu] = useState(
    window.innerWidth > 1417
  );

  useEffect(() => {
    const handleResize = () => {
      setShowContact(window.innerWidth > 1533);
      setShowDesktopMenu(window.innerWidth > 1417);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentPath = location.pathname;
  return (
    <div
      className="th-hero-wrapper hero-1"
      id="hero"
      style={{ position: "relative", height: "100vh", overflow: "hidden" }}
    >
      <video
        src={Footage}
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
      <header
        className="th-header header-layout1 header-layout2"
        style={{
          backgroundColor: "transparent",
          position: "relative",
          zIndex: 1,
        }}
      >
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
                        loading="lazy"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-xl-8 col-xxl-7 col-auto text-center">
                  <nav className="main-menu d-none d-xl-inline-block">
                    <ul>
                      <li>
                        <Link
                          className={`${currentPath === "/" ? "active" : ""} ${
                            isSticky ? "" : "white-link"
                          }`}
                          to="/"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${
                            currentPath === "/aboutUs" ? "active" : ""
                          } ${isSticky ? "" : "white-link"}`}
                          to="/aboutUs"
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${
                            currentPath === "/ourExperties" ? "active" : ""
                          } ${isSticky ? "" : "white-link"}`}
                          to="/ourExperties"
                        >
                          Our Expertise
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${
                            currentPath === "/milkproducer" ? "active" : ""
                          } ${isSticky ? "" : "white-link"}`}
                          to="/milkproducer"
                        >
                          Milk Producer Organisations
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${
                            currentPath === "/animalProductivity"
                              ? "active"
                              : ""
                          } ${isSticky ? "" : "white-link"}`}
                          to="/animalProductivity"
                        >
                          Animal Productivity Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${
                            currentPath === "/newInitiative" ? "active" : ""
                          } ${isSticky ? "" : "white-link"}`}
                          to="/newInitiative"
                        >
                          New Initiatives
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link
                          className={`${isSticky ? "" : "white-link"}`}
                          to="/contactUs"
                        >
                          More
                        </Link>
                        <ul className="sub-menu">
                          <li class="menu-item-has-children">
                            <a href="#">Publications</a>
                            <ul class="sub-menu">
                              <li>
                                <Link to="/HR">HR Compliances</Link>
                              </li>
                              <li>
                                <Link to="/annualReport">Annual Reports</Link>
                              </li>
                              <li>
                                <Link to="/policies">Policies</Link>
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
                      marginLeft: "100px",
                    }}
                  >
                    {showContact && (
                      <a
                        href="/contactUs"
                        className="th-btn th-icon d-none d-xxl-block"
                      >
                        Contact Us
                        <i className="fa-light fa-arrow-right-long"></i>
                      </a>
                    )}

                    {showDesktopMenu && (
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
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        style={{
          position: "absolute",
          bottom: "190px",
          left: "0",
          display: "flex",
          justifyContent: "flex-start",
          width: "100%",
          animation: "fadeInLeft 1s ease-out",
        }}
      >
        <h4
          style={{
            color: "#fff",
            fontSize: "1.8rem",
            background:
              "linear-gradient(to left, rgba(0,0,0,0.6), rgba(0,0,0,0.3))",
            padding: "16px 28px",
            borderRadius: "0px 10px 10px 0px",
            width: "fit-content",
            textAlign: "left",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
            backdropFilter: "blur(4px)",
          }}
        >
          Purposeful Growth, <br /> Meaningful Impact
        </h4>
      </div>
    </div>
  );
};

export default Dashboard;
