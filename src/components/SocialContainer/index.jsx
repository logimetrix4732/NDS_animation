import React, { useEffect, useRef, useState } from "react";
import DSC_0344 from "../../Images/HomeImgs/DSC_0271.JPG";
import "./SocialContainer.css";
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
  {
    class: "ri-twitter-x-fill",
    url: "https://x.com/NDDBDairyServ",
    color: "#1DA1F2",
  },
  {
    class: "ri-facebook-fill",
    url: "https://www.facebook.com/people/NDDB-Dairy-Services/61557086137103/",
    color: "#1877F2",
  },
  {
    class: "ri-instagram-line",
    url: "https://www.instagram.com/dudh.nddb/",
    color: "#E1306C",
  },
];

const SocialContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const radius = 200;
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
        backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.25), rgba(0,0,0,0.15)), url(${DSC_0344})`,
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
        zIndex: 1,
      }}
    >
      <div className="container LeftSideContent">
        <div className="row gy-4 justify-content-start align-items-start">
          <div className="col-lg-6 col-xl-6">
            <div className="text-lg-start">
              <div
                className="title-area contact6-title pe-xl-5 me-xl-5"
                style={{
                  paddingBottom: "2rem",
                }}
              >
                <span
                  className="sub-title text-white"
                  style={{
                    fontSize: "1rem",
                    display: "block",
                    marginBottom: "0.5rem",
                  }}
                >
                  Connect with Us
                </span>

                <h2
                  className="sec-title text-white"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    fontSize: "2.2rem",
                    lineHeight: 1.2,
                  }}
                >
                  {[
                    "Join",
                    "the",
                    "Journey",
                    "of",
                    "Dairy",
                    "Excellence",
                    "with",
                  ].map((word, index) => (
                    <span
                      key={index}
                      style={{
                        display: "inline-block",
                        fontWeight: "bold",
                        textTransform: "none",
                      }}
                    >
                      {word}
                    </span>
                  ))}
                  <span
                    style={{
                      display: "inline-block",
                      fontWeight: "bold",
                      whiteSpace: "nowrap",
                    }}
                  >
                    NDDB Dairy Services
                  </span>
                </h2>

                <p
                  className="contact-text2 text-white"
                  style={{
                    fontSize: "1rem",
                    marginTop: "0.75rem",
                  }}
                >
                  Follow us on social media to stay updated on the innovations,
                  inspiring stories and milestones shaping the future of dairy
                  in India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: isOpen ? "280px" : "0px",
          height: isOpen ? "280px" : "0px",
          backgroundColor: "#bd8f59",
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
          width: isOpen ? "235px" : "0px",
          height: isOpen ? "235px" : "0px",
          backgroundColor: "#a46c35ff",
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
          width: isOpen ? "300px" : "0px",
          height: isOpen ? "300px" : "0px",
          background: isOpen
            ? "radial-gradient(circle at bottom right, rgba(255, 255, 255, 0.06), transparent 70%)"
            : "transparent",
          transition: "all 0.4s ease 0.1s",
          borderRadius: "100% 0 0 0",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      <div
        className="social-wrapper"
        style={{
          position: "relative",
          width: "40px",
          height: "40px",
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
              fontSize: "25px",
              textDecoration: "none",
              zIndex: 5,
              transitionDelay: `${index * 0.1}s`,
              ...getPositionStyle(index),
            }}
          >
            <i className={icon.class}></i>
          </a>
        ))}

        <div
          className={`share-toggle ${isOpen ? "bounce" : ""}`}
          style={{
            backgroundColor: "#bd8f59",
            borderRadius: "50%",
            width: "85px",
            height: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "9px",
            flexDirection: "column",
            cursor: "default",
            transition: "all 0.4s ease",
            transform: isOpen ? "scale(1.1)" : "scale(1)",
            animation: isOpen
              ? "bounce 0.6s ease"
              : "pulse 2s infinite ease-in-out",
            zIndex: 20,
            marginTop: "-70px",
            marginLeft: "-65px",
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
