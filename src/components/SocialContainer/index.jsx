import React, { useEffect, useRef, useState } from "react";
import SocialContainerImg from "../../Images/SocialContainerImg1.jpg";
import "./SocialContainer.css";
import { Link } from "react-router-dom";

const icons = [
  {
    class: "ri-youtube-fill",
    url: "https://www.youtube.com/@nddbdairyservices6754",
    color: "#FF0000",
  },
  {
    class: "ri-linkedin-fill",
    url: "https://www.linkedin.com/company/nddb-dairy-services/",
    color: "#0077B5",
  },
  { class: "ri-twitter-line", url: "https://twitter.com", color: "#1DA1F2" },
  { class: "ri-facebook-fill", url: "https://facebook.com", color: "#1877F2" },
  {
    class: "ri-instagram-line",
    url: "https://instagram.com",
    color: "#E1306C",
  },
];

const SocialContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const radius = 262;
  const startAngle = 180;
  const stepAngle = 25;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOpen(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const getPositionStyle = (index) => {
    const angleDeg = startAngle + index * stepAngle;
    const angleRad = (angleDeg * Math.PI) / 180;
    const x = radius * Math.cos(angleRad);
    const y = radius * Math.sin(angleRad);
    return {
      transform: isOpen
        ? `translate(${x}px, ${y}px) scale(1)`
        : "translate(0, 0) scale(0.5)",
      opacity: isOpen ? 1 : 0,
      pointerEvents: isOpen ? "auto" : "none",
    };
  };

  return (
    <div
      ref={ref}
      className="social-container mt-3 mb-1 contact6-overlay"
      style={{
        backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.25), rgba(0,0,0,0.15)), url(${SocialContainerImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        minHeight: "80vh",
        width: "100%",
        height: "auto",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "flex-end",
        justifyContent: "flex-end",
      }}
    >
      {/* ✅ Left Side Content */}

      <div className="container LeftSideContent">
        <div className="row gy-4 justify-content-between align-items-center">
          <div className="col-lg-6 col-xl-6">
            <div className="text-center text-lg-start">
              <div className="title-area contact6-title pe-xl-5 me-xl-5">
                <span
                  className="sub-title text-white text-anime-style-2 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  Connect With Us
                </span>
                <h2
                  className="sec-title text-white text-anime-style-2"
                  style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}
                >
                  <span
                    className="wow fadeInUp"
                    data-wow-delay="0s"
                    style={{ display: "inline-block", fontWeight: "bold" }}
                  >
                    Join
                  </span>
                  <span
                    className="wow fadeInUp"
                    data-wow-delay="0.2s"
                    style={{ display: "inline-block", fontWeight: "bold" }}
                  >
                    the
                  </span>
                  <span
                    className="wow fadeInUp"
                    data-wow-delay="0.4s"
                    style={{ display: "inline-block", fontWeight: "bold" }}
                  >
                    Journey
                  </span>
                  <span
                    className="wow fadeInUp"
                    data-wow-delay="0.6s"
                    style={{ display: "inline-block", fontWeight: "bold" }}
                  >
                    of
                  </span>
                  <span
                    className="wow fadeInUp"
                    data-wow-delay="0.8s"
                    style={{ display: "inline-block", fontWeight: "bold" }}
                  >
                    Dairy
                  </span>
                  <span
                    className="wow fadeInUp"
                    data-wow-delay="1s"
                    style={{ display: "inline-block", fontWeight: "bold" }}
                  >
                    Excellence
                  </span>
                  <span
                    className="wow fadeInUp"
                    data-wow-delay="1.2s"
                    style={{ display: "inline-block", fontWeight: "bold" }}
                  >
                    with
                  </span>
                  <span
                    className="wow fadeInUp"
                    data-wow-delay="1.4s"
                    style={{ display: "inline-block", fontWeight: "bold" }}
                  >
                    NDDB
                  </span>
                  <span
                    className="wow fadeInUp"
                    data-wow-delay="1.6s"
                    style={{ display: "inline-block", fontWeight: "bold" }}
                  >
                    Services
                  </span>
                </h2>
                <p
                  className="contact-text2 text-white wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  Stay connected through our social channels and be a part of
                  the innovations, stories, and progress shaping India's dairy
                  future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Circles */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: isOpen ? "380px" : "0px",
          height: isOpen ? "380px" : "0px",
          backgroundColor: "rgba(0, 78, 28, 0.5)",
          transition: "all 0.4s ease",
          borderRadius: "80% 0 0 0",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: isOpen ? "320px" : "0px",
          height: isOpen ? "320px" : "0px",
          backgroundColor: "rgba(0, 78, 28, 0.54)",
          transition: "all 0.4s ease",
          borderRadius: "80% 0 0 0",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: isOpen ? "400px" : "0px",
          height: isOpen ? "400px" : "0px",
          background: isOpen
            ? "radial-gradient(circle at bottom right, rgba(255, 255, 255, 0.06), transparent 70%)"
            : "transparent",
          transition: "all 0.4s ease 0.1s",
          borderRadius: "100% 0 0 0",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      {/* Social Icons */}
      <div
        className="social-wrapper"
        style={{
          position: "relative",
          width: "70px",
          height: "70px",
          margin: "30px",
          borderRadius: "50%",
          zIndex: 10,
        }}
      >
        {icons.map((icon, index) => (
          <a
            key={index}
            href={icon.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link visible"
            style={{
              background: "transparent",
              color: "white",
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "35px",
              textDecoration: "none",
              zIndex: 5,
              transitionDelay: `${index * 0.1}s`, // stagger effect
              ...getPositionStyle(index),
            }}
          >
            <i className={icon.class}></i>
          </a>
        ))}

        <div
          className={`share-toggle ${isOpen ? "bounce" : ""}`}
          style={{
            backgroundColor: "rgba(0, 78, 28, 0.54)",
            borderRadius: "50%",
            width: "85px",
            height: "85px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "11px",
            flexDirection: "column",
            cursor: "default",
            transition: "all 0.4s ease",
            transform: isOpen ? "scale(1.1)" : "scale(1)",
            animation: isOpen
              ? "bounce 0.6s ease"
              : "pulse 2s infinite ease-in-out",
            zIndex: 20,
          }}
        >
          <div
            style={{
              fontSize: "10px",
              lineHeight: "1.1",
              fontWeight: "bold",
              letterSpacing: "0.5px",
              textAlign: "center",
            }}
          >
            FOLLOW
            <br />
            US ON
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0, 78, 28, 0.4); }
          70% { transform: scale(1.1); box-shadow: 0 0 0 10px rgba(0, 78, 28, 0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0, 78, 28, 0); }
        }

        @keyframes bounce {
          0% { transform: scale(1); }
          30% { transform: scale(1.2); }
          60% { transform: scale(0.95); }
          100% { transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default SocialContainer;
