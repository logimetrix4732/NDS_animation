import React from "react";
import Dashboard from "../components/Dashboard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutUs/AboutSection";
import AboutSection1 from "../components/AboutUs/AboutSection1";
import AboutSection2 from "../components/AboutUs/AboutSection2";
import AboutSection3 from "../components/AboutUs/AboutSection3";
import CountNumber from "../components/CountNumber";
import OurFeatures1 from "../components/Sliders/OurFeatures1";
import SocialContainer from "../components/SocialContainer";
const Home = () => {
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
      <div className="color-scheme-wrap active">
        <button className="switchIcon">
          <i className="fa-solid fa-palette" />
        </button>
        <h4 className="color-scheme-wrap-title">
          <i className="far fa-palette" />
          STYLE SWITCHER
        </h4>
        <div className="color-switch-btns">
          <button data-color="#684DF4">
            <i className="fa-solid fa-droplet" />
          </button>
          <button data-color="#086ad8">
            <i className="fa-solid fa-droplet" />
          </button>
          <button data-color="#FC3737">
            <i className="fa-solid fa-droplet" />
          </button>
          <button data-color="#8a2be2">
            <i className="fa-solid fa-droplet" />
          </button>
          <button data-color="#104CBA">
            <i className="fa-solid fa-droplet" />
          </button>
          <button data-color="#ffbf4f">
            <i className="fa-solid fa-droplet" />
          </button>
          <button data-color="#323F7C">
            <i className="fa-solid fa-droplet" />
          </button>
          <button data-color="#0e2bc5">
            <i className="fa-solid fa-droplet" />
          </button>
          <button data-color="#F79C53">
            <i className="fa-solid fa-droplet" />
          </button>
          <button data-color="#6957af">
            <i className="fa-solid fa-droplet" />
          </button>
        </div>
        <a
          href="https://themeforest.net/search/themehour"
          className="th-btn text-center"
        >
          <i className="fa fa-shopping-cart me-2" /> Purchase
        </a>
      </div>
      <div className="preloader">
        <button className="th-btn preloaderCls">Cancel Preloader</button>
        <div className="preloader-inner">
          <img src="assets/img/logo-icon3.svg" alt="img" />
          <span className="loader">
            NDDB <span className="loading-text">NDDB</span>
          </span>
        </div>
      </div>
      <Header />
      <Dashboard />
      <AboutSection />
      <AboutSection2 />
      <AboutSection3 />
      <CountNumber />
      <OurFeatures1 />
      <SocialContainer />
      <section class="bg-smoke overflow-hidden space">
        <div class="container">
          <div class="row justify-content-lg-between justify-content-center align-items-end">
            <div class="col-lg">
              <div class="title-area text-center text-lg-start">
                <span class="sub-title text-anime-style-2">
                  Blog and Article
                </span>
                <h2 class="sec-title text-anime-style-3">
                  News & Articles From Atek
                </h2>
              </div>
            </div>
            <div class="col-lg-auto d-none d-lg-block">
              <div class="sec-btn wow fadeInUp" data-wow-delay=".2s">
                <a href="blog.html" class="th-btn style4 th-icon">
                  See More Articles <i class="fa-light fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="row gx-24 gy-30">
            <div class="col-xl-4">
              <div class="blog-grid th-ani">
                <div class="blog-img global-img">
                  <img src="assets/img/blog/blog_3_1.jpg" alt="blog image" />
                </div>
                <div class="blog-grid_content">
                  <div class="blog-meta">
                    <a class="author" href="blog.html">
                      July 05, 2025
                    </a>
                    <a href="blog.html">6 min read</a>
                  </div>
                  <h3 class="box-title">
                    <a href="blog-details.html">
                      What is Data Analytics? Everything You Need to Know
                    </a>
                  </h3>
                  <a href="blog-details.html" class="th-btn style4 th-icon">
                    Read More <i class="fa-light fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xl-8">
              <div class="blog-grid style2 th-ani">
                <div class="blog-img global-img">
                  <img src="assets/img/blog/blog_3_2.jpg" alt="blog image" />
                </div>
                <div class="blog-grid_content">
                  <div class="blog-meta">
                    <a class="author" href="blog.html">
                      July 07, 2024
                    </a>
                    <a href="blog.html">7 min read</a>
                  </div>
                  <h3 class="box-title">
                    <a href="blog-details.html">
                      Top 10 Real-World Applications of Machine Learning
                    </a>
                  </h3>
                  <a href="blog-details.html" class="th-btn style4 th-icon">
                    Read More <i class="fa-light fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
              <div class="blog-grid th-ani style2 mt-24">
                <div class="blog-img global-img">
                  <img src="assets/img/blog/blog_3_3.jpg" alt="blog image" />
                </div>
                <div class="blog-grid_content">
                  <div class="blog-meta">
                    <a class="author" href="blog.html">
                      July 05, 2025
                    </a>
                    <a href="blog.html">8 min read</a>
                  </div>
                  <h3 class="box-title">
                    <a href="blog-details.html">
                      How Machine Learning Algorithms Learn: A Deep Dive
                    </a>
                  </h3>
                  <a href="blog-details.html" class="th-btn style4 th-icon">
                    Read More <i class="fa-light fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            class="shape-mockup shape2 d-none d-xl-block"
            data-top="5%"
            data-right="-12%"
          >
            <img src="assets/img/shape/ab-1-shape-1.png" alt="shape" />
          </div>
          <div
            class="shape-mockup shape3 d-none d-xxl-block"
            data-bottom="0%"
            data-left="-18%"
          >
            <img src="assets/img/shape/blog-1-shape.png" alt="shape" />
          </div>
        </div>
      </section>
      <Footer />
      <div className="scroll-top">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              transition: "stroke-dashoffset 10ms linear 0s",
              strokeDasharray: "307.919, 307.919",
              strokeDashoffset: "307.919",
            }}
          />
        </svg>
      </div>
    </React.Fragment>
  );
};

export default Home;
