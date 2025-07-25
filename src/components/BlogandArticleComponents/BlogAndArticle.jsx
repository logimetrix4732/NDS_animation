import React from "react";

const BlogAndArticle = () => {
  return (
    <section class="bg-smoke overflow-hidden space">
      <div class="container">
        <div class="row justify-content-lg-between justify-content-center align-items-end">
          <div class="col-lg">
            <div class="title-area text-center text-lg-start">
              <span class="sub-title text-anime-style-2">Blog and Article</span>
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
              <div class="blog-img global">
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
                  Learn More <i class="fa-light fa-arrow-right-long"></i>
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
                  Learn More <i class="fa-light fa-arrow-right-long"></i>
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
                  Learn More <i class="fa-light fa-arrow-right-long"></i>
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
  );
};

export default BlogAndArticle;
