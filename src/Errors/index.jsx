import React from "react";
import { Link } from "react-router-dom";

const Errors = () => {
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
            <h1 className="breadcumb-title">Error Page</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Error Page</li>
            </ul>
          </div>
        </div>
      </div>
      <section className="space bg-smoke">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="error-img mb-40">
                <img src="assets/img/theme-img/error.svg" alt="404 image" />
                <span className="error-shape-2 spin d-none d-md-block">
                  <img src="assets/img/icon/setting-2.svg" alt="" />
                </span>
                <span className="error-shape-1 spin2 d-none d-md-block">
                  <img src="assets/img/icon/setting-1.svg" alt="" />
                </span>
              </div>
              <div className="error-content">
                <h2 className="error-title">Opp’s that page can’t be found</h2>
                <p className="error-text">
                  It looks like nothing was found at this location. Maybe try
                  one of the links below or a search?
                </p>
                <a href="index.html" className="th-btn">
                  <i className="fa-regular fa-house" /> Back to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Errors;
