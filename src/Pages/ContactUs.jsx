import React from "react";
import CommonBanner from "../components/BannersComponents/CommonBanner";

const ContactUs = () => {
  return (
    <React.Fragment>
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
                    <img src="assets/img/shape/contact-shape_2_1.png" alt="" />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="title-area contact-titlebox2 text-center">
                    <span className="sub-title">Work With Us</span>
                    <h3 className="sec-title">Contact Information</h3>
                    <p className="sec-text">
                      Thank you for your interest in Attach Web Agency. We're
                      excited to hear from you and discuss...
                    </p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3">
                  <div className="contact-shape-right text-sm-end">
                    <img src="assets/img/shape/contact-shape_2_2.png" alt="" />
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
                      enquiry@nddbdairy..
                    </a>
                  </p>
                </div>
              </div>
              <div className="about-contact-grid inner-style">
                <span className="about-contact-icon">
                  <i className="fa-thin fa-map-location-dot" />
                </span>
                <div className="about-contact-details">
                  <span className="sec-text">Visit Our Office</span>
                  <p className="about-contact-details-text">
                    <a href="#">NDDB House, New Delhi</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form-wrapp2">
            <div className="row">
              <div className="col-xl-7 order-1 order-xl-0">
                <div className="contact-formbox">
                  <form
                    action="https://html.themeholy.com/atek/demo/mail.php"
                    method="POST"
                    className="contact-form ajax-contact"
                  >
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
                      <div className="col-sm-6 form-group">
                        <select
                          name="subject"
                          id="subject"
                          className="form-select nice-select"
                        >
                          <option
                            value="Select Subject"
                            selected="selected"
                            disabled="disabled"
                          >
                            Select Subject
                          </option>
                          <option value="Django Development">
                            Django Development
                          </option>
                          <option value="JavaScript Development">
                            JavaScript Development
                          </option>
                          <option value="Uixi Design">Uixi Design</option>
                          <option value="App Development">
                            App Development
                          </option>
                          <option value="Software Management">
                            Software Management
                          </option>
                        </select>
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
                          Subscribe Now
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
      <div className="">
        <div className="contact-map style2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14016.5391435256!2d77.18471097824284!3d28.562741329218497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dbdb8b80cb5%3A0x8e28fc89e0106b70!2sNDDB%20House%2C%20Safdarjung%20Enclave%2C%20New%20Delhi%2C%20Delhi%20110029!5e0!3m2!1sen!2sin!4v1721731078653!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactUs;
