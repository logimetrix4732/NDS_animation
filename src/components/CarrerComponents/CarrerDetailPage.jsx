import React from "react";
import { Link } from "react-router-dom";

const CarrerDetailPage = () => {
  return (
    <React.Fragment>
      <div className="slider-drag-cursor d-flex align-items-center justify-content-between">
        <span className="drag-icon-left">
          <img src="assets/img/icon/drag-arrow-left.svg" alt="" />
        </span>
        DRAG
        <span className="drag-icon-right">
          <img src="assets/img/icon/drag-arrow-right.svg" alt="" />
        </span>
      </div>
      <div
        className="breadcumb-wrapper"
        data-bg-src="assets/img/bg/breadcumb-bg.jpg"
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Career Details</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Career</li>
            </ul>
          </div>
        </div>
      </div>
      <section className="space">
        <div className="container">
          <div className="job-post style2 mb-60 smoke-bg">
            <div className="job-content_wrapper">
              <div className="job-content d-sm-flex align-items-start justify-content-between text-center text-sm-start">
                <div className="job-post_author">
                  <span className="date">
                    <span className="deadline">Deadline: </span>3rd June, 2025
                  </span>
                  <div className="job-post_author-content d-sm-flex align-items-center">
                    <div className="job-author">
                      <img
                        src="assets/img/career/career-logo.jpg"
                        alt="Image"
                      />
                    </div>
                    <div className="author-info">
                      <span className="company-name">MocaStroot.Inc</span>
                      <span className="job-title">Sr. UI/UX Designer</span>
                      <span className="location">
                        <i className="fa-light fa-location-dot" /> United States
                      </span>
                    </div>
                  </div>
                </div>
                <div className="job-post_date text-center text-sm-end">
                  <div className="job-post-action d-sm-flex align-items-center mb-20">
                    <span className="icon">
                      <i className="fa-solid fa-heart" />{" "}
                    </span>
                    <a
                      href="career-details.html"
                      className="th-btn style2 th-radius ms-sm-4"
                    >
                      Apply Now
                    </a>
                  </div>
                  <span className="price d-block">
                    <i className="fa-sharp fa-regular fa-circle-dollar me-2" />
                    $25k - 150k/year
                  </span>
                </div>
              </div>
              <div className="job-category_wrapper d-sm-flex align-items-center justify-content-between">
                <div className="job-category">
                  <a href="#">Full-time</a> <a href="#">Remote</a>
                  <a href="#">Ui/Ux</a> <a href="#">Senior</a>
                </div>
                <div className="star">
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-8 col-lg-8">
              <div className="job-single mb-0">
                <div className="job-description mb-45">
                  <h5 className="sec-title page-title mb-30">
                    Job Description
                  </h5>
                  <p className="mb-30">
                    I am looking Urgent based a Senior UI/UX Designer with 5+
                    years of experience. Candidate must have strong knowledge of
                    a UI/UX designer to turn our platform into a user-friendly
                    product for our users. The responsibilities will be
                    collaborating with the team, gathering user requirements,
                    creating design elements and building prototypes. And,
                    Applicants should have good knowledge of Figma, XD,
                    Illustrator, Photoshop tools for the job
                  </p>
                </div>
                <div className="job-responsibilities mb-45">
                  <h5 className="sec-title page-title mb-30">
                    Responsibilities
                  </h5>
                  <div className="checklist">
                    <ul>
                      <li>
                        Ability to approve design on Themeforest (at least 6
                        designs would be preferred).
                      </li>
                      <li>
                        Curiosity and desire to learn and grow skills (This is a
                        must).
                      </li>
                      <li>
                        Specifically in Figma you have to know the design system
                      </li>
                      <li>Proficiency in pixel-perfect design production.</li>
                      <li>
                        Strong knowledge of typography, color, and other design
                        principles.
                      </li>
                      <li>
                        Ability to effectively communicate and persuade around
                        design concepts.
                      </li>
                      <li>
                        Good understanding of user experience, and
                        customer/industrial psychology.
                      </li>
                      <li>
                        Knowledge of industry standards and best practices for
                        designing desktop and mobile applications.
                      </li>
                      <li>
                        Experience in designing mock-ups and detail-oriented
                        prototypes.
                      </li>
                      <li>Portfolio of design projects.</li>
                      <li>
                        Must have knowledge and experience in UI/UX design for
                        themeforest based.
                      </li>
                      <li>
                        Quick learner and smart enough to learn new things
                        independently.
                      </li>
                      <li>Working under strict deadlines.</li>
                    </ul>
                  </div>
                </div>
                <div className="job-education mb-45">
                  <h5 className="sec-title page-title mb-30">
                    Educational Requirements
                  </h5>
                  <div className="checklist">
                    <ul>
                      <li>This position is open for only UI/UX Designers.</li>
                      <li>
                        Bachelor of Fine Arts (B.F.A) in Graphics or any
                        Bachelor's degree completed.
                      </li>
                      <li>
                        For people who have at least 2 years, Educational
                        qualifications may be compromised.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="job-skill mb-45">
                  <h5 className="sec-title page-title mb-30">
                    Skill &amp; Experience
                  </h5>
                  <div className="checklist">
                    <ul>
                      <li>
                        You have at least 3 years’ experience working as a
                        Product Designer.
                      </li>
                      <li>
                        You’ve been designing digital products for 5+ years.
                      </li>
                      <li>
                        Up-to-date knowledge of design software like Adobe
                        (Figma, XD, Illustrator, Photoshop) tools and, Design
                        Typography, Visual Hierarchy and Color Plate.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="job-benefits mb-60">
                  <h5 className="sec-title page-title mb-30">
                    Benefits this job
                  </h5>
                  <div className="checklist">
                    <ul>
                      <li>We are a remote-first company.</li>
                      <li>
                        100% company-paid health insurance premiums for you
                        &amp; your dependents
                      </li>
                      <li>Vacation stipend</li>
                      <li>Unlimited paid vacation and paid company holidays</li>
                      <li>Monthly performance bonus.</li>
                      <li>Weekly 5 days working (2 days holydays)</li>
                      <li>Yearly 2 salary review</li>
                    </ul>
                  </div>
                </div>
                <div className="career-btn">
                  <a href="contact.html" className="th-btn">
                    Apply This Position
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-lg-4">
              <aside className="sidebar-area m-auto">
                <div className="widget widget_info">
                  <div className="job-sidebar">
                    <ul>
                      <li>
                        <strong>Experience: </strong>
                        <span>2 to 3 Years</span>
                      </li>
                      <li>
                        <strong>Working Hours: </strong>
                        <span>9.30 AM to 6.30PM (1h Break)</span>
                      </li>
                      <li>
                        <strong>Working Days: </strong>
                        <span>Weekly 5 days</span>
                      </li>
                      <li>
                        <strong>Vacancy: </strong>
                        <span>02</span>
                      </li>
                      <li>
                        <strong>Deadline: </strong>
                        <span>3rd June, 2025</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget">
                  <h3 className="widget_title">Similar jobs</h3>
                  <div className="recent-post-wrap">
                    <div className="recent-post style3">
                      <div className="media-img">
                        <a href="blog-details.html">
                          <img
                            src="assets/img/blog/recent-post-3-1.jpg"
                            alt="Blog Image"
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <h4 className="post-title">
                          <a className="text-inherit" href="blog-details.html">
                            Java Software Engineer
                          </a>
                        </h4>
                        <div className="recent-post-meta d-flex align-items-center">
                          <a href="#">
                            <i className="fa-light fa-briefcase" />
                            Full time
                          </a>
                          <a href="#">
                            <i className="fa-light fa-clock" />2 Days Ago
                          </a>
                        </div>
                        <div className="recent-post-meta d-flex align-items-center justify-content-between">
                          <a href="#">
                            <span className="time">$500/</span>Full time
                          </a>
                          <a href="#">
                            <i className="fa-light fa-location-dot" /> United
                            States
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="recent-post style3">
                      <div className="media-img">
                        <a href="blog-details.html">
                          <img
                            src="assets/img/blog/recent-post-3-2.jpg"
                            alt="Blog Image"
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <h4 className="post-title">
                          <a className="text-inherit" href="blog-details.html">
                            Frontend Developer
                          </a>
                        </h4>
                        <div className="recent-post-meta d-flex align-items-center">
                          <a href="#">
                            <i className="fa-light fa-briefcase" />
                            Full time
                          </a>
                          <a href="#">
                            <i className="fa-light fa-clock" />3 Days Ago
                          </a>
                        </div>
                        <div className="recent-post-meta d-flex align-items-center justify-content-between">
                          <a href="#">
                            <span className="time">$700/</span>Full time
                          </a>
                          <a href="#">
                            <i className="fa-light fa-location-dot" /> United
                            States
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="recent-post style3">
                      <div className="media-img">
                        <a href="blog-details.html">
                          <img
                            src="assets/img/blog/recent-post-3-3.jpg"
                            alt="Blog Image"
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <h4 className="post-title">
                          <a className="text-inherit" href="blog-details.html">
                            Product Manage
                          </a>
                        </h4>
                        <div className="recent-post-meta d-flex align-items-center">
                          <a href="#">
                            <i className="fa-light fa-briefcase" />
                            Full time
                          </a>
                          <a href="#">
                            <i className="fa-light fa-clock" />3 Days Ago
                          </a>
                        </div>
                        <div className="recent-post-meta d-flex align-items-center justify-content-between">
                          <a href="#">
                            <span className="time">$900/</span>Full time
                          </a>
                          <a href="#">
                            <i className="fa-light fa-location-dot" /> United
                            States
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="recent-post style3">
                      <div className="media-img">
                        <a href="blog-details.html">
                          <img
                            src="assets/img/blog/recent-post-3-4.jpg"
                            alt="Blog Image"
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <h4 className="post-title">
                          <a className="text-inherit" href="blog-details.html">
                            DevOps Engineer
                          </a>
                        </h4>
                        <div className="recent-post-meta d-flex align-items-center">
                          <a href="#">
                            <i className="fa-light fa-briefcase" />
                            Full time
                          </a>
                          <a href="#">
                            <i className="fa-light fa-clock" />1 Days Ago
                          </a>
                        </div>
                        <div className="recent-post-meta d-flex align-items-center justify-content-between">
                          <a href="#">
                            <span className="time">$400/</span>Full time
                          </a>
                          <a href="#">
                            <i className="fa-light fa-location-dot" /> United
                            States
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default CarrerDetailPage;
