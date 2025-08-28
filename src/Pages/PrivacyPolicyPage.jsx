import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import CommonBanner from "../components/BannersComponents/CommonBanner";

const PrivacyPolicyPage = () => {
  return (
    <div className="privacy-policy-page py-5">
      {/* Hero Section */}

      <CommonBanner
        title="Privacy Policy"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Privacy Policy" },
        ]}
      />
      {/* Main Content */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 d-none d-lg-block">
              <div className="sticky-top" style={{ top: "100px" }}>
                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-header bg-white">
                    <h5 className="mb-0">Table of Contents</h5>
                  </div>
                  <div className="card-body p-3">
                    <ul className="nav flex-column">
                      <li className="nav-item mb-2">
                        <a className="nav-link text-dark" href="#introduction">
                          <i className="bi bi-chevron-right me-2"></i>
                          Privacy Policy
                        </a>
                      </li>
                      <li className="nav-item mb-2">
                        <a
                          className="nav-link text-dark"
                          href="#data-collection"
                        >
                          <i className="bi bi-chevron-right me-2"></i>Return
                          Policy
                        </a>
                      </li>
                      <li className="nav-item mb-2">
                        <a className="nav-link text-dark" href="#data-use">
                          <i className="bi bi-chevron-right me-2"></i>Terms &
                          Conditions
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="card border-0 shadow-sm">
                  <div className="card-body text-center">
                    <h6 className="mb-3">Last Updated</h6>
                    <div className="bg-primary text-white p-3 rounded">
                      <div className="fs-1 fw-bold">18</div>
                      <div>August 2025</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-9">
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body p-4 p-md-5">
                  {/* Terms and Conditions */}
                  <div className="mb-4" id="introduction">
                    <h3 className="mb-4 pb-2 border-bottom">
                      Terms and Conditions
                    </h3>
                    <p>
                      Efforts have been made to ensure the accuracy and currency
                      of the content on this website; however, the same should
                      not be interpreted as a statement of law or used for any
                      legal purposes. In case of any ambiguity or doubts, users
                      are advised to verify/ check with NDDB Dairy Services and
                      obtain appropriate professional advice.
                    </p>
                    <p>
                      Under no circumstances NDDB Dairy Services will be liable
                      for any expense, loss or damage including, without
                      limitation, indirect or consequential loss or damage or
                      any expense, loss or damage whatsoever arising from use,
                      or loss of use, of data, arising out of or in connection
                      with the use of this website.
                    </p>
                    <p>
                      These terms and conditions shall be governed by and
                      construed in accordance with the Indian Laws. Any dispute
                      arising under these terms and conditions shall be subject
                      to the jurisdiction of the courts of India.
                    </p>
                  </div>
                  <div className="mb-4" id="data-collection">
                    <h3 className="mb-4 pb-2 border-bottom">Privacy Policy</h3>
                    <p>
                      As a general rule, this website does not automatically
                      capture any specific personal information from you, (like
                      name, phone number or e-mail address), that allows us to
                      identify you individually. This website records your
                      visits and logs the following information for statistical
                      purposes, such as Internet Protocol (IP) addresses, domain
                      name, browser type, operating system, the date and time of
                      the visits and the pages visited. We make no attempt to
                      link these addresses with the identity of individuals
                      visiting our site unless an attempt to damage the site has
                      been detected. We will not identify users or their
                      browsing activities, except when a law enforcement agency
                      may exercise a warrant to inspect the service provider’s
                      logs. If NDDB Dairy Services websites requests you to
                      provide personal information, you will be informed how it
                      will be useful if you choose to give it and adequate
                      security measures will be taken to protect your personal
                      information.
                    </p>
                  </div>
                  <div className="mb-4" id="data-use">
                    <h3 className="mb-4 pb-2 border-bottom">
                      Copyright Policy
                    </h3>
                    <p>
                      Material featured on this website may be reproduced free
                      of charge in any format or media without requiring
                      specific permission. This is subject to the material being
                      reproduced accurately and not being used in a derogatory
                      manner or in a misleading context. Where the material is
                      being published or issued to others, the source must be
                      prominently acknowledged. However, the permission to
                      reproduce this material does not extend to any material on
                      this site which is identified as being the copyright of
                      the third party. Authorisation to reproduce such material
                      is to be obtained from the copyright holders concerned.
                    </p>
                  </div>
                  <div className="mb-4" id="data-sharing">
                    <h3 className="mb-4 pb-2 border-bottom">
                      Hyperlinking Policy
                    </h3>
                    <p>
                      At many places in this website, you shall find links to
                      other websites created and maintained by other
                      organisations. These links have been placed for your
                      convenience. When you select a link you are navigated to
                      that website. Once on that website, you are subject to the
                      privacy and security policies of the owners/ sponsors of
                      the website. NDDB Dairy Services is not responsible for
                      the contents and reliability of the linked websites and
                      does not necessarily endorse the views expressed in them.
                      Mere presence of the links or its listing on this website
                      should not be assumed as endorsement of any kind.
                    </p>
                  </div>
                  {/* Terms and Conditions */}
                  {/* Return Policy */}
                  <div className="mb-4" id="security">
                    <h3 className="mb-4 pb-2 border-bottom">
                      General Returns Policy
                    </h3>
                    <p>
                      Items that meet the eligibility criteria and adhere to the
                      prescribed replacement procedure outlined below will be
                      replaced. The company will not provide refunds to
                      customers for returned items.
                    </p>
                  </div>
                  <div className="mb-4" id="data-use">
                    <h3 className="mb-4 pb-2 border-bottom">
                      Items eligible for replacement
                    </h3>

                    <ul className="list-group list-group-flush mb-4">
                      <li className="list-group-item d-flex border-0 px-0">
                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                        <span>
                          ♦ Items that are physically damaged or have
                          manufacturing defects or is different from the
                          description on the invoice.
                        </span>
                      </li>
                      <li className="list-group-item d-flex border-0 px-0">
                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                        <span>
                          ♦ Customer should have the proof of purchase for the
                          items requested to be replaced.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="mb-4" id="data-use">
                    <h3 className="mb-4 pb-2 border-bottom">
                      Non-eligibility for replacement
                    </h3>

                    <ul className="list-group list-group-flush mb-4">
                      <li className="list-group-item d-flex border-0 px-0">
                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                        <span>
                          ♦ Items which have been opened or used fully or
                          partially are not eligible for replacement.
                        </span>
                      </li>
                      <li className="list-group-item d-flex border-0 px-0">
                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                        <span>
                          ♦ Items damaged due to improper storage or mishandling
                          by the customer are not eligible for replacement.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="mb-4" id="data-use">
                    <h3 className="mb-4 pb-2 border-bottom">
                      Replacement Process
                    </h3>

                    <ul className="list-group list-group-flush mb-4">
                      <li className="list-group-item d-flex border-0 px-0">
                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                        <span>
                          ♦ Customers must notify the company of any eligible
                          replacement within 7 days from the date of delivery.
                        </span>
                      </li>
                      <li className="list-group-item d-flex border-0 px-0">
                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                        <span>
                          ♦ Customers must provide proof of purchase, such as an
                          invoice when requesting a replacement.
                        </span>
                      </li>
                      <li className="list-group-item d-flex border-0 px-0">
                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                        <span>
                          ♦ Customers must provide the items requested to be
                          replaced.
                        </span>
                      </li>
                      <li className="list-group-item d-flex border-0 px-0">
                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                        <span>
                          ♦ Upon receipt of a replacement request, the
                          eligibility of the replacement would be assessed. If
                          approved, customers will be eligible for a replacement
                          of the purchase.
                        </span>
                      </li>
                      <li className="list-group-item d-flex border-0 px-0">
                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                        <span>
                          ♦ Replacements will be processed along with the next
                          delivery. In the case of a one-time purchaser,
                          replacements will be processed within a month of
                          receiving the request for replacement.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="mb-4" id="data-use">
                    <h3 className="mb-4 pb-2 border-bottom">
                      Contact Information
                    </h3>

                    <ul className="list-group list-group-flush mb-4">
                      <li className="list-group-item d-flex border-0 px-0">
                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                        <span>
                          ♦ For return inquiries or to initiate a return, please
                          contact our team at{" "}
                          <strong>
                            (no: -7092922421)provided in the invoice.
                          </strong>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="mb-4" id="data-use">
                    <h3 className="mb-4 pb-2 border-bottom">Policy Updates</h3>

                    <ul className="list-group list-group-flush mb-4">
                      <li className="list-group-item d-flex border-0 px-0">
                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                        <span>
                          ♦ Items which have been opened or used fully or
                          partially are not eligible for replacement.
                        </span>
                      </li>
                      <li className="list-group-item d-flex border-0 px-0">
                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                        <span>
                          ♦ This return policy is subject to change without
                          prior notice. Any updates or revisions will be
                          communicated to customers through our website.
                        </span>
                      </li>
                      <li className="list-group-item d-flex border-0 px-0">
                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                        <span>
                          ♦ By purchasing items from us, customers acknowledge
                          and agree to abide the terms & conditions outlined in
                          this return policy.
                        </span>
                      </li>
                    </ul>
                  </div>
                  {/* Return Policy */}
                  {/* Terms and Condition */}
                  <div className="mb-4" id="rights">
                    <h3 className="mb-4 pb-2 border-bottom">
                      General Returns Policy
                    </h3>

                    <div className="alert alert-warning mt-4">
                      <p className="mb-0">
                        Items that meet the eligibility criteria and adhere to
                        the prescribed replacement procedure outlined below will
                        be replaced. The company will not provide refunds to
                        customers for returned items.
                      </p>
                    </div>
                  </div>
                  <div className="mb-4" id="data-use">
                    <h3 className="mb-4 pb-2 border-bottom">Policy Updates</h3>

                    <ul className="list-group list-group-flush mb-4">
                      <li className="list-group-item d-flex border-0 px-0">
                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                        <span>
                          ♦ Items which have been opened or used fully or
                          partially are not eligible for replacement.
                        </span>
                      </li>
                      <li className="list-group-item d-flex border-0 px-0">
                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                        <span>
                          ♦ This return policy is subject to change without
                          prior notice. Any updates or revisions will be
                          communicated to customers through our website.
                        </span>
                      </li>
                      <li className="list-group-item d-flex border-0 px-0">
                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                        <span>
                          ♦ By purchasing items from us, customers acknowledge
                          and agree to abide the terms & conditions outlined in
                          this return policy.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="mb-4" id="data-use">
                    <h3 className="mb-4 pb-2 border-bottom">
                      Items eligible for replacement
                    </h3>

                    <ul className="list-group list-group-flush mb-4">
                      <li className="list-group-item d-flex border-0 px-0">
                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                        <span>
                          ♦ Items that are physically damaged or have
                          manufacturing defects or is different from the
                          description on the invoice.
                        </span>
                      </li>
                      <li className="list-group-item d-flex border-0 px-0">
                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                        <span>
                          ♦ Customer should have the proof of purchase for the
                          items requested to be replaced.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="mb-4" id="data-use">
                    <h3 className="mb-4 pb-2 border-bottom">
                      Non-eligibility for replacement
                    </h3>

                    <ul className="list-group list-group-flush mb-4">
                      <li className="list-group-item d-flex border-0 px-0">
                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                        <span>
                          ♦ Items which have been opened or used fully or
                          partially are not eligible for replacement.
                        </span>
                      </li>
                      <li className="list-group-item d-flex border-0 px-0">
                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                        <span>
                          ♦ Items damaged due to improper storage or mishandling
                          by the customer are not eligible for replacement.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="mb-4" id="data-use">
                    <h3 className="mb-4 pb-2 border-bottom">
                      Replacement Process
                    </h3>

                    <ul className="list-group list-group-flush mb-4">
                      <li className="list-group-item d-flex border-0 px-0">
                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                        <span>
                          ♦ Customers must notify the company of any eligible
                          replacement within 7 days from the date of delivery.
                        </span>
                      </li>
                      <li className="list-group-item d-flex border-0 px-0">
                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                        <span>
                          ♦ Customers must provide proof of purchase, such as an
                          invoice when requesting a replacement.
                        </span>
                      </li>
                      <li className="list-group-item d-flex border-0 px-0">
                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                        <span>
                          ♦ Customers must provide the items requested to be
                          replaced.
                        </span>
                      </li>
                      <li className="list-group-item d-flex border-0 px-0">
                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                        <span>
                          ♦ Upon receipt of a replacement request, the
                          eligibility of the replacement would be assessed. If
                          approved, customers will be eligible for a replacement
                          of the purchase.
                        </span>
                      </li>
                      <li className="list-group-item d-flex border-0 px-0">
                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                        <span>
                          ♦ Replacements will be processed along with the next
                          delivery. In the case of a one-time purchaser,
                          replacements will be processed within a month of
                          receiving the request for replacement.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="mb-4" id="data-use">
                    <h3 className="mb-4 pb-2 border-bottom">
                      Contact Information:
                    </h3>

                    <ul className="list-group list-group-flush mb-4">
                      <li className="list-group-item d-flex border-0 px-0">
                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                        <span>
                          ♦ For return inquiries or to initiate a return, please
                          contact our team at{" "}
                          <strong>
                            (no: -7092922421)provided in the invoice.
                          </strong>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="mb-4" id="data-use">
                    <h3 className="mb-4 pb-2 border-bottom">Policy Updates</h3>

                    <ul className="list-group list-group-flush mb-4">
                      <li className="list-group-item d-flex border-0 px-0">
                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                        <span>
                          ♦ Items which have been opened or used fully or
                          partially are not eligible for replacement.
                        </span>
                      </li>
                      <li className="list-group-item d-flex border-0 px-0">
                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                        <span>
                          ♦ This return policy is subject to change without
                          prior notice. Any updates or revisions will be
                          communicated to customers through our website.
                        </span>
                      </li>
                      <li className="list-group-item d-flex border-0 px-0">
                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                        <span>
                          ♦ By purchasing items from us, customers acknowledge
                          and agree to abide the terms & conditions outlined in
                          this return policy.
                        </span>
                      </li>
                    </ul>
                  </div>
                  {/* Terms and Condition */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
