import React, { useEffect, useState } from "react";
import Footage from "../../Images/Videos/Footage.mp4";
import nds_logo from "../../assets/img/nds_logo.png";
import { Link, useLocation } from "react-router-dom";
import SideMenu from "../SideMenu";

const Dashboard = () => {
  const [openRight, setOpenRight] = useState(false);
  const [openLeft, setOpenLeft] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const linkStyle = (path) => ({
    color: isScrolled ? "#000" : "#fff",
    textDecoration: currentPath === path ? "underline" : "none",
    fontWeight: currentPath === path ? "bold" : "normal",
    transition: "all 0.3s ease",
  });
  return (
    <React.Fragment>
      {/* Header */}
      <header
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 10,
          backgroundColor: isScrolled ? "#fff" : "transparent",
          boxShadow: isScrolled ? "0 2px 10px rgba(0,0,0,0.1)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <SideMenu
          openRight={openRight}
          openLeft={openLeft}
          setOpenLeft={setOpenLeft}
          setOpenRight={setOpenRight}
        />
        <div>
          <div>
            <div style={{ padding: "10px 40px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                {/* Logo */}
                <div>
                  <a href="/">
                    <img
                      src={nds_logo}
                      alt="NDDB"
                      style={{ width: "148px", height: "65px" }}
                    />
                  </a>
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
                        <Link to="/ourExperties">Our Expertise</Link>
                      </li>
                      <li className="">
                        <Link to="/milkproducer">Milk Producer Org.</Link>
                      </li>
                      <li className="">
                        <Link to="/animalProductivity">
                          Animal Productivity
                        </Link>
                      </li>
                      <li className="">
                        <Link to="/newInitiative">New Initiative</Link>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="contact.html">More</a>
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

                {/* Buttons */}
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <Link
                    to="/contactUs"
                    style={{
                      color: "#fff",
                      backgroundColor: "rgba(255,255,255,0.2)",
                      padding: "8px 16px",
                      borderRadius: "6px",
                      textDecoration: "none",
                    }}
                  >
                    Contact Us
                  </Link>
                  <button
                    style={{
                      background: "transparent",
                      border: "1px solid white",
                      borderRadius: "8px",
                      color: "#fff",
                      padding: "6px 12px",
                      cursor: "pointer",
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
      </header>

      {/* Video Hero Section */}
      <div
        style={{
          position: "relative",
          height: "92vh",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <source src={Footage} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Text */}
        <div
          style={{
            position: "absolute",
            bottom: "190px",
            left: "0px",
          }}
        >
          <h4
            style={{
              color: "#fff",
              fontSize: "1.6rem",
              fontWeight: "bold",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              padding: "12px 20px",
              borderRadius: "0px 10px 10px 0px",
              width: "fit-content",
              textAlign: "left",
              margin: 0,
            }}
          >
            Purposeful Growth,
            <br />
            Meaningful Impact
          </h4>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
