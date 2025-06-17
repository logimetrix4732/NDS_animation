import React from "react";
import service_6_1 from "../../assets/img/service/service_6_1.jpg";
import service_2_2 from "../../assets/img/service/service_2_2.jpg";
import service_2_3 from "../../assets/img/service/service_2_3.jpg";
import sv61 from "../../assets/img/icon/sv-6-1.svg";
import sv62 from "../../assets/img/icon/sv-6-2.svg";
import sv63 from "../../assets/img/icon/sv-6-3.svg";
const OurFeatures1 = () => {
  return (
    <div class="service-area space-bottom" id="service-sec">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-8">
            <div class="title-area text-center">
              <span class="sub-title text-anime-style-2">Our Services</span>
              <h2 class="sec-title text-anime-style-3">
                Our Solution for your business
              </h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="service-list-area">
            <div class="service-list-wrap sv-list2 service7-list active">
              <div
                class="service-list"
                style={{
                  backgroundImage: `url(${service_6_1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <span class="service-icon">
                  <img src={sv61} alt="" />
                </span>
                <div class="service-content">
                  <h4 class="box-title">
                    <a href="service-details.html">Finance Security</a>
                  </h4>
                  <span class="service-subtitle">
                    Party we years to order allow asked of. We so opinion
                    friends me message as delight.
                  </span>
                </div>
                <a href="service-details.html" class="th-btn style2">
                  View Details <i class="fa-light fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
            <div class="service-list-wrap sv-list2 service7-list">
              <div
                class="service-list"
                data-bg-src="assets/img/service/service_2_2.jpg"
                style={{
                  backgroundImage: `url(${service_2_2})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <span class="service-icon">
                  <img src={sv62} alt="" />
                </span>
                <div class="service-content">
                  <h4 class="box-title">
                    <a href="service-details.html">Synchronization</a>
                  </h4>
                  <span class="service-subtitle">
                    His defective nor convinced residence own. Connection has
                    put
                  </span>
                </div>
                <a href="service-details.html" class="th-btn style2">
                  View Details <i class="fa-light fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
            <div class="service-list-wrap sv-list2 service7-list">
              <div
                class="service-list"
                data-bg-src="assets/img/service/service_2_3.jpg"
                style={{
                  backgroundImage: `url(${service_2_3})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <span class="service-icon">
                  <img src={sv63} alt="" />
                </span>
                <div class="service-content">
                  <h4 class="box-title">
                    <a href="service-details.html">Cloud Drive</a>
                  </h4>
                  <span class="service-subtitle">
                    From they fine john he give of rich he. They age and draw
                    mrs like.
                  </span>
                </div>
                <a href="service-details.html" class="th-btn style2">
                  View Details <i class="fa-light fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFeatures1;
