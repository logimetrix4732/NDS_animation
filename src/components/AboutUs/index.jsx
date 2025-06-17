import React, { useEffect } from "react";
import aboutimage1 from "../../assets/images/about-image-1.jpg";
import aboutimage2 from "../../assets/images/about-image-2.jpg";
import aboutimage3 from "../../assets/images/about-image-3.jpg";
import "./aboutUs.css"; // <-- Add this CSS file

const AboutUs = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const handleScroll = () => {
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add("visible");
        } else {
          reveals[i].classList.remove("visible");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="about-us">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-us-image">
              <div className="about-image-box about-img-1">
                <figure className="image-anime reveal">
                  <img src={aboutimage1} alt="" />
                </figure>
              </div>
              <div className="about-image-box">
                <div className="about-img-2">
                  <figure className="image-anime reveal">
                    <img src={aboutimage2} alt="" />
                  </figure>
                </div>
                <div className="about-img-3">
                  <figure className="image-anime reveal">
                    <img src={aboutimage3} alt="" />
                  </figure>
                </div>
              </div>
              <div className="get-free-security-circle reveal">
                <a href="contact.html">
                  <img src="images/get-free-security-circle.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-us-content">
              <div className="section-title">
                <h3 className="reveal">about us</h3>
                <h2 className="reveal">
                  Your trusted partner in our{" "}
                  <span>cyber security solutions</span>
                </h2>
                <p className="reveal">
                  We provide reliable, cutting-edge cybersecurity solutions to
                  protect your digital assets, ensuring safety and peace of
                  mind.
                </p>
              </div>
              <div className="about-us-body reveal">
                <div className="about-us-body-img">
                  <figure className="image-anime">
                    <img src="images/about-body-img.png" alt="" />
                  </figure>
                </div>
                <div className="about-us-body-content">
                  <h3>24/7 security assistance</h3>
                  <p>
                    Real-time support for all cybersecurity concerns, including
                    breach response, threat detection, guidance.
                  </p>
                </div>
              </div>
              <div className="about-us-footer reveal">
                <div className="about-footer-list">
                  <ul>
                    <li>Threat Detection and Monitoring</li>
                    <li>Access Control Management</li>
                    <li>Security Awareness Training</li>
                  </ul>
                </div>
                <div className="about-footer-content">
                  <div className="about-contact-btn">
                    <div className="icon-box">
                      <img src="images/icon-phone.svg" alt="" />
                    </div>
                    <div className="about-footer-btn-content">
                      <h3>
                        <a href="tel:+91123456789">+91 123 456 789</a>
                      </h3>
                    </div>
                  </div>
                  <div className="about-footer-btn">
                    <a href="about.html" className="btn-default">
                      more about
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
