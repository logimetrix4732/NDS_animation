import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import CommonBanner from "../components/BannersComponents/CommonBanner";
import { motion, AnimatePresence } from "framer-motion";

const PrivacyPolicyPage = () => {
  const [activeSection, setActiveSection] = useState("privacy-policy");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.3 },
    },
  };
  console.log("nddb");
  return (
    <div className="privacy-policy-page py-5">
      <CommonBanner
        title="Policies"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Policies" }]}
      />

      <section className="py-5">
        <div className="container">
          <motion.div
            className="row"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {/* Sidebar */}
            <motion.div
              className="col-lg-3 d-none d-lg-block"
              variants={itemVariants}
            >
              <div className="sticky-top" style={{ top: "100px" }}>
                {/* Table of Contents Card */}
                <motion.div
                  className="card border-0 shadow-lg mb-4"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background:
                      "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                    borderRadius: "20px",
                    border: "1px solid rgba(255,255,255,0.3)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div className="card-body p-4">
                    <ul className="nav flex-column">
                      <motion.li
                        className="nav-item mb-3"
                        whileHover={{ x: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <a
                          className={`nav-link d-flex align-items-center p-3 rounded-3 ${
                            activeSection === "privacy-policy"
                              ? "text-white fw-bold shadow"
                              : "text-dark"
                          }`}
                          style={{
                            background:
                              activeSection === "privacy-policy"
                                ? "linear-gradient(135deg, #bd8f59 0%, #a67c4a 100%)"
                                : "transparent",
                            transition: "all 0.3s ease",
                          }}
                          href="#privacy-policy"
                          onClick={(e) => {
                            e.preventDefault();
                            handleSectionClick("privacy-policy");
                          }}
                        >
                          <i className="bi bi-shield-check me-3 fs-5"></i>
                          <span>Privacy Policy</span>
                        </a>
                      </motion.li>
                      <motion.li
                        className="nav-item mb-3"
                        whileHover={{ x: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <a
                          className={`nav-link d-flex align-items-center p-3 rounded-3 ${
                            activeSection === "return-policy"
                              ? "text-white fw-bold shadow"
                              : "text-dark"
                          }`}
                          style={{
                            background:
                              activeSection === "return-policy"
                                ? "linear-gradient(135deg, #bd8f59 0%, #a67c4a 100%)"
                                : "transparent",
                            transition: "all 0.3s ease",
                          }}
                          href="#return-policy"
                          onClick={(e) => {
                            e.preventDefault();
                            handleSectionClick("return-policy");
                          }}
                        >
                          <i className="bi bi-arrow-return-left me-3 fs-5"></i>
                          <span>Return Policy</span>
                        </a>
                      </motion.li>
                      <motion.li
                        className="nav-item mb-3"
                        whileHover={{ x: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <a
                          className={`nav-link d-flex align-items-center p-3 rounded-3 ${
                            activeSection === "terms-conditions"
                              ? "text-white fw-bold shadow"
                              : "text-dark"
                          }`}
                          style={{
                            background:
                              activeSection === "terms-conditions"
                                ? "linear-gradient(135deg, #bd8f59 0%, #a67c4a 100%)"
                                : "transparent",
                            transition: "all 0.3s ease",
                          }}
                          href="#terms-conditions"
                          onClick={(e) => {
                            e.preventDefault();
                            handleSectionClick("terms-conditions");
                          }}
                        >
                          <i className="bi bi-file-text me-3 fs-5"></i>
                          <span>Terms & Conditions</span>
                        </a>
                      </motion.li>
                    </ul>
                  </div>
                </motion.div>

                {/* Last Updated Card */}
                <motion.div
                  className="card border-0 shadow-lg"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background:
                      "linear-gradient(135deg, #bd8f59 0%, #a67c4a 100%)",
                    borderRadius: "20px",
                    border: "1px solid rgba(255,255,255,0.3)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div className="card-body text-center py-4">
                    <motion.h6
                      className="mb-3 text-white fw-bold"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      📅 Last Updated
                    </motion.h6>
                    <motion.div
                      className="bg-white p-4 rounded-4 shadow"
                      style={{ color: "#bd8f59" }}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      <div className="fs-1 fw-bold text-gradient pt-2">18</div>
                      <div className="fw-semibold">August 2025</div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Main Content */}
            <motion.div className="col-lg-9" variants={itemVariants}>
              <motion.div
                className="card border-0 shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                  borderRadius: "25px",
                  border: "1px solid rgba(255,255,255,0.3)",
                  backdropFilter: "blur(10px)",
                  overflow: "hidden",
                }}
              >
                <div className="card-body p-5">
                  <AnimatePresence mode="wait">
                    {/* Privacy Policy */}
                    {activeSection === "privacy-policy" && (
                      <motion.div
                        key="privacy-policy"
                        className="mb-5"
                        id="privacy-policy"
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      >
                        <motion.div
                          className="text-center mb-5"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                        >
                          <div className="icon-container mb-4">
                            <i className="bi bi-shield-check display-1 text-primary"></i>
                          </div>
                          <h2 className="fw-bold text-gradient mb-3">
                            Privacy Policy
                          </h2>
                          <div className="divider mx-auto"></div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                        >
                          <div className="content-card p-4 rounded-4">
                            <p className="lead mb-0">
                              As a general rule, this website does not
                              automatically capture any specific personal
                              information from you, (like name, phone number or
                              e-mail address), that allows us to identify you
                              individually. This website records your visits and
                              logs the following information for statistical
                              purposes, such as Internet Protocol (IP)
                              addresses, domain name, browser type, operating
                              system, the date and time of the visits and the
                              pages visited. We make no attempt to link these
                              addresses with the identity of individuals
                              visiting our site unless an attempt to damage the
                              site has been detected. We will not identify users
                              or their browsing activities, except when a law
                              enforcement agency may exercise a warrant to
                              inspect the service provider's logs. If NDDB Dairy
                              Services websites requests you to provide personal
                              information, you will be informed how it will be
                              useful if you choose to give it and adequate
                              security measures will be taken to protect your
                              personal information.
                            </p>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}

                    {/* Terms and Conditions */}
                    {activeSection === "terms-conditions" && (
                      <motion.div
                        key="terms-conditions"
                        className="mb-5"
                        id="terms-conditions"
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      >
                        <motion.div
                          className="text-center mb-5"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                        >
                          <div className="icon-container mb-4">
                            <i className="bi bi-file-text display-1 text-primary"></i>
                          </div>
                          <h2 className="fw-bold text-gradient mb-3">
                            Terms and Conditions
                          </h2>
                          <div className="divider mx-auto"></div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                        >
                          <div className="content-card p-4 rounded-4">
                            <p className="lead mb-4">
                              Efforts have been made to ensure the accuracy and
                              currency of the content on this website; however,
                              the same should not be interpreted as a statement
                              of law or used for any legal purposes. In case of
                              any ambiguity or doubts, users are advised to
                              verify/ check with NDDB Dairy Services and obtain
                              appropriate professional advice.
                            </p>
                            <p className="lead mb-4">
                              Under no circumstances NDDB Dairy Services will be
                              liable for any expense, loss or damage including,
                              without limitation, indirect or consequential loss
                              or damage or any expense, loss or damage
                              whatsoever arising from use, or loss of use, of
                              data, arising out of or in connection with the use
                              of this website.
                            </p>
                            <p className="lead mb-0">
                              These terms and conditions shall be governed by
                              and construed in accordance with the Indian Laws.
                              Any dispute arising under these terms and
                              conditions shall be subject to the jurisdiction of
                              the courts of India.
                            </p>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}

                    {/* Return Policy */}
                    {activeSection === "return-policy" && (
                      <motion.div
                        key="return-policy"
                        className="mb-5"
                        id="return-policy"
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      >
                        <motion.div
                          className="text-center mb-5"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                        >
                          <div className="icon-container mb-4">
                            <i className="bi bi-arrow-return-left display-1 text-primary"></i>
                          </div>
                          <h2 className="fw-bold text-gradient mb-3">
                            Return Policy
                          </h2>
                          <div className="divider mx-auto"></div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                        >
                          <div className="content-card p-4 rounded-4 mb-4">
                            <h5 className="fw-bold text-gradient mb-3">
                              General Returns Policy
                            </h5>
                            <p className="lead mb-0">
                              Items that meet the eligibility criteria and
                              adhere to the prescribed replacement procedure
                              outlined below will be replaced. The company will
                              not provide refunds to customers for returned
                              items.
                            </p>
                          </div>

                          <div className="content-card p-4 rounded-4 mb-4">
                            <h5 className="fw-bold text-gradient mb-3">
                              Items eligible for replacement:
                            </h5>
                            <ul className="list-unstyled">
                              <motion.li
                                className="d-flex align-items-center mb-3"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.6 }}
                              >
                                <i className="bi bi-check-circle-fill text-success me-3 fs-4"></i>
                                <span className="lead">
                                  Items that are physically damaged or have
                                  manufacturing defects or is different from the
                                  description on the invoice.
                                </span>
                              </motion.li>
                              <motion.li
                                className="d-flex align-items-center mb-3"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.8 }}
                              >
                                <i className="bi bi-check-circle-fill text-success me-3 fs-4"></i>
                                <span className="lead">
                                  Customer should have the proof of purchase for
                                  the items requested to be replaced.
                                </span>
                              </motion.li>
                            </ul>
                          </div>

                          <div className="content-card p-4 rounded-4 mb-4">
                            <h5 className="fw-bold text-gradient mb-3">
                              Non-eligibility for replacement:
                            </h5>
                            <ul className="list-unstyled">
                              <motion.li
                                className="d-flex align-items-center mb-3"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 1.0 }}
                              >
                                <i className="bi bi-x-circle-fill text-warning me-3 fs-4"></i>
                                <span className="lead">
                                  Items which have been opened or used fully or
                                  partially are not eligible for replacement.
                                </span>
                              </motion.li>
                              <motion.li
                                className="d-flex align-items-center mb-3"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 1.2 }}
                              >
                                <i className="bi bi-x-circle-fill text-warning me-3 fs-4"></i>
                                <span className="lead">
                                  Items damaged due to improper storage or
                                  mishandling by the customer are not eligible
                                  for replacement.
                                </span>
                              </motion.li>
                            </ul>
                          </div>

                          <div className="content-card p-4 rounded-4 mb-4">
                            <h5 className="fw-bold text-gradient mb-3">
                              Replacement Process:
                            </h5>
                            <ul className="list-unstyled">
                              {[
                                "Customers must notify the company of any eligible replacement within 7 days from the date of delivery.",
                                "Customers must provide proof of purchase, such as an invoice when requesting a replacement.",
                                "Customers must provide the items requested to be replaced.",
                                "Upon receipt of a replacement request, the eligibility of the replacement would be assessed. If approved, customers will be eligible for a replacement of the purchase.",
                                "Replacements will be processed along with the next delivery. In the case of a one-time purchaser, replacements will be processed within a month of receiving the request for replacement.",
                              ].map((item, index) => (
                                <motion.li
                                  key={index}
                                  className="d-flex align-items-center mb-3"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    duration: 0.4,
                                    delay: 1.4 + index * 0.1,
                                  }}
                                >
                                  <i className="bi bi-arrow-right-circle-fill text-info me-3 fs-4"></i>
                                  <span className="lead">{item}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          <div className="content-card p-4 rounded-4 mb-4">
                            <h5 className="fw-bold text-gradient mb-3">
                              Contact Information:
                            </h5>
                            <div className="d-flex align-items-center">
                              <i className="bi bi-telephone-fill text-primary me-3 fs-4"></i>
                              <span className="lead">
                                For return inquiries or to initiate a return,
                                please contact our team at{" "}
                                <strong className="text-primary">
                                  (contact no.: 7092922421) provided in the
                                  invoice.
                                </strong>
                              </span>
                            </div>
                          </div>

                          <div className="content-card p-4 rounded-4">
                            <h5 className="fw-bold text-gradient mb-3">
                              Policy Updates:
                            </h5>
                            <ul className="list-unstyled">
                              <motion.li
                                className="d-flex align-items-center mb-3"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 2.0 }}
                              >
                                <i className="bi bi-info-circle-fill text-secondary me-3 fs-4"></i>
                                <span className="lead">
                                  This return policy is subject to change
                                  without prior notice. Any updates or revisions
                                  will be communicated to customers through our
                                  website.
                                </span>
                              </motion.li>
                              <motion.li
                                className="d-flex align-items-center mb-3"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 2.2 }}
                              >
                                <i className="bi bi-info-circle-fill text-secondary me-3 fs-4"></i>
                                <span className="lead">
                                  By purchasing items from us, customers
                                  acknowledge and agree to abide the terms &
                                  conditions outlined in this return policy.
                                </span>
                              </motion.li>
                            </ul>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        .text-gradient {
          background: linear-gradient(135deg, #bd8f59 0%, #a67c4a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .icon-container {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: linear-gradient(135deg, #bd8f59 0%, #a67c4a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          box-shadow: 0 10px 30px rgba(189, 143, 89, 0.3);
          animation: float 6s ease-in-out infinite;
        }

        .icon-container i {
          color: white;
          font-size: 3rem;
        }

        .divider {
          width: 80px;
          height: 4px;
          background: linear-gradient(135deg, #bd8f59 0%, #a67c4a 100%);
          border-radius: 2px;
        }

        .content-card {
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .content-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .nav-link {
          transition: all 0.3s ease;
          border-radius: 12px;
        }

        .nav-link:hover {
          transform: translateX(5px);
        }

        .card {
          transition: all 0.3s ease;
        }

        .lead {
          font-size: 1.1rem;
          line-height: 1.8;
        }
      `}</style>
    </div>
  );
};

export default PrivacyPolicyPage;
