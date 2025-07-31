import React, { useEffect, useState } from "react";
import Footage from "../../Images/Videos/Footage.mp4";
import SideMenu from "../SideMenu";
import nds_logo from "../../assets/img/nds_logo.png";
import { Link, useLocation } from "react-router-dom";
import "./dashboard.css";

const Dashboard = () => {
  const [openRight, setOpenRight] = useState(false);
  const [openLeft, setOpenLeft] = useState(false);
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);

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
                          Milk Producer Org.
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
                          Animal Productivity
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${
                            currentPath === "/newInitiative" ? "active" : ""
                          } ${isSticky ? "" : "white-link"}`}
                          to="/newInitiative"
                        >
                          New Initiative
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
                          <li>
                            <a href="contact.html">Publications</a>
                          </li>
                          <li>
                            <Link to="/carrer">Careers</Link>
                          </li>
                          <li>
                            <a href="contact-2.html">Tenders</a>
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
                      className={`icon-btn ${isSticky ? "" : "white-link"}`}
                      data-bs-toggle="offcanvas"
                      data-bs-target="#desktopMenu"
                      aria-controls="desktopMenu"
                      style={{
                        borderRadius: "8px",
                        textDecoration: "none",
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
      <div
        style={{
          position: "absolute",
          bottom: "190px",
          left: "0",
        }}
      >
        <h4
          style={{
            color: "#fff",
            fontSize: "1.6rem",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "12px 20px",
            borderRadius: "0px 10px 10px 0px",
            width: "fit-content",
            textAlign: "left",
          }}
        >
          Purposeful Growth, <br /> Meaningful Impact
        </h4>
      </div>
    </div>
  );
};

export default Dashboard;
