import React from "react";
import { Link } from "react-router-dom";
import CommonBanner from "../components/BannersComponents/CommonBanner";
import CarrerGallery from "../components/CarrerComponents/CarrerGallery";

const CarrerPage = () => {
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

      <CommonBanner
        title="Carrer Page"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Carrer Page" }]}
      />
      <CarrerGallery />
      <div className="space">
        <div className="container">
          <div className="th-sort-bar">
            <div className="row gy-4 justify-content-between align-items-center">
              <div className="col-lg">
                <p className="woocommerce-result-count">
                  1089 jobs recommended for you
                </p>
              </div>
              <div className="col-lg-auto">
                <div className="woocommerce-wrapper d-sm-flex align-items-center">
                  <form
                    className="woocommerce-ordering me-sm-3 mb-10 mb-sm-0"
                    method="get"
                  >
                    <select
                      name="orderby"
                      className="orderby"
                      aria-label="Shop order"
                    >
                      <option value="menu_order" selected="selected">
                        12 per pages
                      </option>
                      <option value="popularity">1 per pages</option>
                      <option value="rating">2 per pages</option>
                      <option value="date">3 per pages</option>
                      <option value="price">4 per pages</option>
                      <option value="price">....</option>
                      <option value="price-desc">12 per pages</option>
                    </select>
                  </form>
                  <form className="woocommerce-ordering" method="get">
                    <select
                      name="orderby"
                      className="orderby"
                      aria-label="Shop order"
                    >
                      <option value="menu_order" selected="selected">
                        Sort by (Default)
                      </option>
                      <option value="popularity">Sort by popularity</option>
                      <option value="rating">Sort by average rating</option>
                      <option value="date">Sort by latest</option>
                      <option value="price">Sort by price: low to high</option>
                      <option value="price-desc">
                        Sort by price: high to low
                      </option>
                    </select>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row gy-30">
            <div className="col-lg-6 col-xxl-4">
              <div className="job-post white-bg">
                <div className="job-content smoke-bg">
                  <div className="job-post_date d-flex align-items-center justify-content-between">
                    <span className="date">3rd June, 2024</span>
                    <div className="icon">
                      <i className="fa-solid fa-heart" />
                    </div>
                  </div>
                  <div className="job-post_author d-sm-flex align-items-center text-center text-sm-start">
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
                  <div className="job-category">
                    <a href="#">Full-time</a> <a href="#">Remote</a>
                    <a href="#">Ui/Ux</a> <a href="#">Senior</a>
                  </div>
                </div>
                <div className="job-wrapper d-sm-flex align-items-center justify-content-between text-center text-sm-start">
                  <span className="price">
                    <i className="fa-sharp fa-regular fa-circle-dollar me-2" />
                    $25k - 150k/year
                  </span>
                  <Link to="/carrerDetail">
                    <span className="th-btn style3">Apply Now</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xxl-4">
              <div className="job-post white-bg">
                <div className="job-content smoke-bg">
                  <div className="job-post_date d-flex align-items-center justify-content-between">
                    <span className="date">5rd June, 2024</span>
                    <div className="icon">
                      <i className="fa-solid fa-heart" />
                    </div>
                  </div>
                  <div className="job-post_author d-sm-flex align-items-center text-center text-sm-start">
                    <div className="job-author">
                      <img
                        src="assets/img/career/career-logo.jpg"
                        alt="Image"
                      />
                    </div>
                    <div className="author-info">
                      <span className="company-name">MocaStroot.Inc</span>
                      <span className="job-title">Sr. Backend Developer</span>
                      <span className="location">
                        <i className="fa-light fa-location-dot" /> United States
                      </span>
                    </div>
                  </div>
                  <div className="job-category">
                    <a href="#">Full-time</a> <a href="#">Remote</a>
                    <a href="#">Ui/Ux</a> <a href="#">Senior</a>
                  </div>
                </div>
                <div className="job-wrapper d-sm-flex align-items-center justify-content-between text-center text-sm-start">
                  <span className="price">
                    <i className="fa-sharp fa-regular fa-circle-dollar me-2" />
                    $35k - 150k/year
                  </span>
                  <Link to="/carrerDetail">
                    <span className="th-btn style3">Apply Now</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xxl-4">
              <div className="job-post white-bg">
                <div className="job-content smoke-bg">
                  <div className="job-post_date d-flex align-items-center justify-content-between">
                    <span className="date">6rd June, 2024</span>
                    <div className="icon">
                      <i className="fa-solid fa-heart" />
                    </div>
                  </div>
                  <div className="job-post_author d-sm-flex align-items-center text-center text-sm-start">
                    <div className="job-author">
                      <img
                        src="assets/img/career/career-logo.jpg"
                        alt="Image"
                      />
                    </div>
                    <div className="author-info">
                      <span className="company-name">MocaStroot.Inc</span>
                      <span className="job-title">web Developer</span>
                      <span className="location">
                        <i className="fa-light fa-location-dot" /> United States
                      </span>
                    </div>
                  </div>
                  <div className="job-category">
                    <a href="#">Full-time</a> <a href="#">Remote</a>
                    <a href="#">Ui/Ux</a> <a href="#">Senior</a>
                  </div>
                </div>
                <div className="job-wrapper d-sm-flex align-items-center justify-content-between text-center text-sm-start">
                  <span className="price">
                    <i className="fa-sharp fa-regular fa-circle-dollar me-2" />
                    $45k - 150k/year
                  </span>
                  <Link to="/carrerDetail">
                    <span className="th-btn style3">Apply Now</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xxl-4">
              <div className="job-post white-bg">
                <div className="job-content smoke-bg">
                  <div className="job-post_date d-flex align-items-center justify-content-between">
                    <span className="date">7rd June, 2024</span>
                    <div className="icon">
                      <i className="fa-solid fa-heart" />
                    </div>
                  </div>
                  <div className="job-post_author d-sm-flex align-items-center text-center text-sm-start">
                    <div className="job-author">
                      <img
                        src="assets/img/career/career-logo.jpg"
                        alt="Image"
                      />
                    </div>
                    <div className="author-info">
                      <span className="company-name">MocaStroot.Inc</span>
                      <span className="job-title">web Designer</span>
                      <span className="location">
                        <i className="fa-light fa-location-dot" /> United States
                      </span>
                    </div>
                  </div>
                  <div className="job-category">
                    <a href="#">Full-time</a> <a href="#">Remote</a>
                    <a href="#">Ui/Ux</a> <a href="#">Senior</a>
                  </div>
                </div>
                <div className="job-wrapper d-sm-flex align-items-center justify-content-between text-center text-sm-start">
                  <span className="price">
                    <i className="fa-sharp fa-regular fa-circle-dollar me-2" />
                    $50k - 150k/year
                  </span>
                  <Link to="/carrerDetail">
                    <span className="th-btn style3">Apply Now</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xxl-4">
              <div className="job-post white-bg">
                <div className="job-content smoke-bg">
                  <div className="job-post_date d-flex align-items-center justify-content-between">
                    <span className="date">8rd June, 2024</span>
                    <div className="icon">
                      <i className="fa-solid fa-heart" />
                    </div>
                  </div>
                  <div className="job-post_author d-sm-flex align-items-center text-center text-sm-start">
                    <div className="job-author">
                      <img
                        src="assets/img/career/career-logo.jpg"
                        alt="Image"
                      />
                    </div>
                    <div className="author-info">
                      <span className="company-name">MocaStroot.Inc</span>
                      <span className="job-title">Ui/Ux Designer</span>
                      <span className="location">
                        <i className="fa-light fa-location-dot" /> United States
                      </span>
                    </div>
                  </div>
                  <div className="job-category">
                    <a href="#">Full-time</a> <a href="#">Remote</a>
                    <a href="#">Ui/Ux</a> <a href="#">Senior</a>
                  </div>
                </div>
                <div className="job-wrapper d-sm-flex align-items-center justify-content-between text-center text-sm-start">
                  <span className="price">
                    <i className="fa-sharp fa-regular fa-circle-dollar me-2" />
                    $55k - 150k/year
                  </span>
                  <Link to="/carrerDetail">
                    <span className="th-btn style3">Apply Now</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xxl-4">
              <div className="job-post white-bg">
                <div className="job-content smoke-bg">
                  <div className="job-post_date d-flex align-items-center justify-content-between">
                    <span className="date">9rd June, 2024</span>
                    <div className="icon">
                      <i className="fa-solid fa-heart" />
                    </div>
                  </div>
                  <div className="job-post_author d-sm-flex align-items-center text-center text-sm-start">
                    <div className="job-author">
                      <img
                        src="assets/img/career/career-logo.jpg"
                        alt="Image"
                      />
                    </div>
                    <div className="author-info">
                      <span className="company-name">MocaStroot.Inc</span>
                      <span className="job-title">Full-Stack Developer</span>
                      <span className="location">
                        <i className="fa-light fa-location-dot" /> United States
                      </span>
                    </div>
                  </div>
                  <div className="job-category">
                    <a href="#">Full-time</a> <a href="#">Remote</a>
                    <a href="#">Ui/Ux</a> <a href="#">Senior</a>
                  </div>
                </div>
                <div className="job-wrapper d-sm-flex align-items-center justify-content-between text-center text-sm-start">
                  <span className="price">
                    <i className="fa-sharp fa-regular fa-circle-dollar me-2" />
                    $45k - 350k/year
                  </span>
                  <Link to="/carrerDetail">
                    <span className="th-btn style3">Apply Now</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xxl-4">
              <div className="job-post white-bg">
                <div className="job-content smoke-bg">
                  <div className="job-post_date d-flex align-items-center justify-content-between">
                    <span className="date">10rd June, 2024</span>
                    <div className="icon">
                      <i className="fa-solid fa-heart" />
                    </div>
                  </div>
                  <div className="job-post_author d-sm-flex align-items-center text-center text-sm-start">
                    <div className="job-author">
                      <img
                        src="assets/img/career/career-logo.jpg"
                        alt="Image"
                      />
                    </div>
                    <div className="author-info">
                      <span className="company-name">MocaStroot.Inc</span>
                      <span className="job-title">react Developer</span>
                      <span className="location">
                        <i className="fa-light fa-location-dot" /> United States
                      </span>
                    </div>
                  </div>
                  <div className="job-category">
                    <a href="#">Full-time</a> <a href="#">Remote</a>
                    <a href="#">Ui/Ux</a> <a href="#">Senior</a>
                  </div>
                </div>
                <div className="job-wrapper d-sm-flex align-items-center justify-content-between text-center text-sm-start">
                  <span className="price">
                    <i className="fa-sharp fa-regular fa-circle-dollar me-2" />
                    $35k - 350k/year
                  </span>
                  <Link to="/carrerDetail">
                    <span className="th-btn style3">Apply Now</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xxl-4">
              <div className="job-post white-bg">
                <div className="job-content smoke-bg">
                  <div className="job-post_date d-flex align-items-center justify-content-between">
                    <span className="date">11rd June, 2024</span>
                    <div className="icon">
                      <i className="fa-solid fa-heart" />
                    </div>
                  </div>
                  <div className="job-post_author d-sm-flex align-items-center text-center text-sm-start">
                    <div className="job-author">
                      <img
                        src="assets/img/career/career-logo.jpg"
                        alt="Image"
                      />
                    </div>
                    <div className="author-info">
                      <span className="company-name">MocaStroot.Inc</span>
                      <span className="job-title">plugin Developer</span>
                      <span className="location">
                        <i className="fa-light fa-location-dot" /> United States
                      </span>
                    </div>
                  </div>
                  <div className="job-category">
                    <a href="#">Full-time</a> <a href="#">Remote</a>
                    <a href="#">Ui/Ux</a> <a href="#">Senior</a>
                  </div>
                </div>
                <div className="job-wrapper d-sm-flex align-items-center justify-content-between text-center text-sm-start">
                  <span className="price">
                    <i className="fa-sharp fa-regular fa-circle-dollar me-2" />
                    $45k - 250k/year
                  </span>
                  <Link to="/carrerDetail">
                    <span className="th-btn style3">Apply Now</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xxl-4">
              <div className="job-post white-bg">
                <div className="job-content smoke-bg">
                  <div className="job-post_date d-flex align-items-center justify-content-between">
                    <span className="date">12rd June, 2024</span>
                    <div className="icon">
                      <i className="fa-solid fa-heart" />
                    </div>
                  </div>
                  <div className="job-post_author d-sm-flex align-items-center text-center text-sm-start">
                    <div className="job-author">
                      <img
                        src="assets/img/career/career-logo.jpg"
                        alt="Image"
                      />
                    </div>
                    <div className="author-info">
                      <span className="company-name">MocaStroot.Inc</span>
                      <span className="job-title">Theme Developer</span>
                      <span className="location">
                        <i className="fa-light fa-location-dot" /> United States
                      </span>
                    </div>
                  </div>
                  <div className="job-category">
                    <a href="#">Full-time</a> <a href="#">Remote</a>
                    <a href="#">Ui/Ux</a> <a href="#">Senior</a>
                  </div>
                </div>
                <div className="job-wrapper d-sm-flex align-items-center justify-content-between text-center text-sm-start">
                  <span className="price">
                    <i className="fa-sharp fa-regular fa-circle-dollar me-2" />
                    $35k - 250k/year
                  </span>
                  <Link to="/carrerDetail">
                    <span className="th-btn style3">Apply Now</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="th-pagination mt-60 text-center mb-0">
            <ul>
              <li>
                <a className="active" href="blog.html">
                  1
                </a>
              </li>
              <li>
                <a href="blog.html">2</a>
              </li>
              <li>
                <a href="blog.html">3</a>
              </li>
              <li>
                <a href="blog.html">4</a>
              </li>
              <li>
                <a className="next-page" href="blog.html">
                  <i className="fa-sharp fa-light fa-arrow-right" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CarrerPage;
