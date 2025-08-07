import React from "react";
import { Link } from "react-router-dom";
import CommonBanner from "../components/BannersComponents/CommonBanner";
import CarrerGallery from "../components/CarrerComponents/CarrerGallery";
import CarrerVideoSection from "../components/CarrerComponents/CarrerVideoSection";
import OurExperties8 from "../components/Sliders/OurExperties8";
import OurExperties from "../components/Sliders/OurFeatures9";
import CarrerCardSection from "../components/CarrerComponents/CarrerCardSection";
import EmployeeBenefitsGrid from "../components/CarrerComponents/EmployeeBenefitsGrid";

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

      <CarrerVideoSection />
      <CarrerCardSection />
      <EmployeeBenefitsGrid />
      <OurExperties8 />
      <OurExperties />
      <div className="space">
        <div className="container">
          <div className="row gy-30">
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
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CarrerPage;
