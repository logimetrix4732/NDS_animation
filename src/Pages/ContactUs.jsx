import React from "react";
import CommonBanner from "../components/BannersComponents/CommonBanner";
import ContactGif from "../Images/ContactUs.gif";
import EmailGif from "../Images/Email.gif";
const ContactUs = () => {
  return (
    <React.Fragment>
      <style>
        {`
          .contact-infobox-bottom {
            display: flex !important;
            align-items: center;
            justify-content: space-between;
            gap: 0;
          }
          .contact-infobox-bottom .about-contact-grid {
            flex: 1;
            text-align: center;
            padding: 40px 20px;
          }
          .contact-infobox-bottom .about-contact-grid:not(:last-child) {
            border-right: 3px solid var(--white-color);
            padding-right: 40px;
          }
          .contact-infobox-bottom .about-contact-grid:last-child {
            padding-left: 40px;
          }
          @media (max-width: 1199px) {
            .contact-infobox-bottom .about-contact-grid:not(:last-child) {
              border-right: 0;
              border-bottom: 3px solid var(--white-color);
              padding-right: 0;
              padding-bottom: 20px;
            }
            .contact-infobox-bottom .about-contact-grid:last-child {
              padding-left: 0;
              padding-top: 20px;
            }
          }
        `}
      </style>
      <CommonBanner
        title="Contact Us"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Contact Us" }]}
      />
      <div className="contact-area space space-extra-bottom overflow-hidden">
        <div className="container">
          <div className="contact-wrapp2 mb-60 smoke-bg">
            <div className="contact-infobox-top">
              <div className="row align-items-center justify-content-between text-center">
                <div className="col-xl-3 col-lg-3">
                  <div className="contact-shape-left text-sm-start">
                    <img
                      src={ContactGif}
                      alt=""
                      style={{
                        width: "157px",
                        height: "143px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="title-area contact-titlebox2 text-center">
                    <h3 className="sec-title">Contact Information</h3>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3">
                  <div className="contact-shape-right text-sm-end">
                    <img
                      src={EmailGif}
                      alt=""
                      style={{
                        width: "157px",
                        height: "143px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-infobox-bottom d-xl-flex align-items-center justify-content-between">
              <div className="about-contact-grid inner-style">
                <span className="about-contact-icon">
                  <i className="fa-solid fa-headphones-simple" />
                </span>
                <div className="about-contact-details">
                  <span className="sec-text">Call Us For Query</span>
                  <p className="about-contact-details-text">
                    <a href="tel:+256698253158">(+91) 70929-22421</a>
                  </p>
                </div>
              </div>
              <div className="about-contact-grid inner-style">
                <span className="about-contact-icon">
                  <i className="fa-light fa-envelope-open-text" />
                </span>
                <div className="about-contact-details">
                  <span className="sec-text">Email Us Anytime</span>
                  <p className="about-contact-details-text">
                    <a href="mailto:enquiry@nddbdairyservices.com">
                      enquiry@nddbdairyservices.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form-wrapp2">
            <div className="row">
              <div className="col-xl-7 order-1 order-xl-0">
                <div className="contact-formbox">
                  <form className="contact-form ajax-contact">
                    <div className="row">
                      <div className="col-sm-6 form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name3"
                          placeholder="Your Name"
                        />
                        <img src="assets/img/icon/user.svg" alt="" />
                      </div>
                      <div className="col-sm-6 form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="lastName"
                          id="name3"
                          placeholder="Last Name"
                        />
                        <img src="assets/img/icon/user.svg" alt="" />
                      </div>
                      <div className="col-sm-6 form-group">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Email Address"
                        />
                        <img src="assets/img/icon/mail.svg" alt="" />
                      </div>
                      <div className="col-sm-6 form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="number"
                          id="number"
                          placeholder="Phone Number"
                        />
                        <img src="assets/img/icon/call.svg" alt="" />
                      </div>
                      <div className="form-group col-12">
                        <textarea
                          name="message"
                          id="message"
                          cols={30}
                          rows={3}
                          className="form-control"
                          placeholder="Your Message"
                          defaultValue={""}
                        />
                        <img src="assets/img/icon/chat.svg" alt="" />
                      </div>
                      <div className="form-btn col-12">
                        <button type="submit" className="th-btn">
                          Send
                          <img src="assets/img/icon/plane4.svg" alt="" />
                        </button>
                      </div>
                    </div>
                    <p className="form-messages mb-0 mt-3" />
                  </form>
                </div>
              </div>
              <div className="col-xl-5 order-0 order-xl-1">
                <div className="contact-thumb">
                  <img src="assets/img/normal/contact-2-img.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <div className="contact-map style2">
          <iframe
            src="https://www.google.com/maps?q=NDDB+House,+Safdarjung+Enclave,+New+Delhi,+Delhi+110029&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Clickable layer that opens exact location in new tab */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=NDDB+House,+Safdarjung+Enclave,+New+Delhi,+Delhi+110029"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 2,
              cursor: "pointer",
            }}
            title="Open in Google Maps"
          ></a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactUs;
