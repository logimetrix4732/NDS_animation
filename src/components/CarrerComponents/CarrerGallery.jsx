import React from "react";
import DSC_2158 from "../../Images/CarrerImg/DSC_2158.JPG";
import IMG_4070 from "../../Images/CarrerImg/IMG_4070.JPG";
import IMG_4071 from "../../Images/CarrerImg/IMG_4071.JPG";
import IMG_4072 from "../../Images/CarrerImg/IMG_4072.JPG";
import IMG_4073 from "../../Images/CarrerImg/IMG_4073.JPG";
import IMG_4074 from "../../Images/CarrerImg/IMG_4074.JPG";
import IMG_4075 from "../../Images/CarrerImg/IMG_4075.JPG";
const CarrerGallery = () => {
  return (
    <>
      <div className="overflow-hidden space">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8">
              <div className="title-area text-center text-lg-start">
                <span className="sub-title text-anime-style-2">
                  Projects Gallery
                </span>
                <h2 className="sec-title text-anime-style-3">
                  Recent Projects Gallery
                </h2>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4">
              <div
                className="gallery-action text-center text-lg-end wow fadeInUp"
                data-wow-delay=".3s"
              >
                <a href="#" className="th-btn black-btn th-icon">
                  Enter Gallery <i className="fa-light fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="row gy-24 gx-24 justify-content-center">
            <div className="col-lg-3">
              <div className="gallery-box style2">
                <div className="gallery-img global-img">
                  <a
                    href="assets/img/gallery/gallery_3_2.jpg"
                    className="popup-image"
                  >
                    <div className="icon-btn">
                      <i className="fal fa-magnifying-glass-plus"></i>
                    </div>
                    <img
                      src="assets/img/gallery/gallery_3_2.jpg"
                      alt="gallery image"
                    />
                  </a>
                </div>
              </div>
              <div className="gallery-box style2">
                <div className="gallery-img global-img">
                  <a
                    href="assets/img/gallery/gallery_3_4.jpg"
                    className="popup-image"
                  >
                    <div className="icon-btn">
                      <i className="fal fa-magnifying-glass-plus"></i>
                    </div>
                    <img
                      src="assets/img/gallery/gallery_3_4.jpg"
                      alt="gallery image"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="gallery-box style2">
                <div className="gallery-img global-img">
                  <a
                    href="assets/img/gallery/gallery_3_2.jpg"
                    className="popup-image"
                  >
                    <div className="icon-btn">
                      <i className="fal fa-magnifying-glass-plus"></i>
                    </div>
                    <img
                      src="assets/img/gallery/gallery_3_2.jpg"
                      alt="gallery image"
                    />
                  </a>
                </div>
              </div>
              <div className="gallery-box style2">
                <div className="gallery-img global-img">
                  <a
                    href="assets/img/gallery/gallery_3_4.jpg"
                    className="popup-image"
                  >
                    <div className="icon-btn">
                      <i className="fal fa-magnifying-glass-plus"></i>
                    </div>
                    <img
                      src="assets/img/gallery/gallery_3_4.jpg"
                      alt="gallery image"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="gallery-box style2">
                <div className="gallery-img global-img">
                  <a
                    href="assets/img/gallery/gallery_3_3.jpg"
                    className="popup-image"
                  >
                    <div className="icon-btn">
                      <i className="fal fa-magnifying-glass-plus"></i>
                    </div>
                    <img
                      src="assets/img/gallery/gallery_3_3.jpg"
                      alt="gallery image"
                    />
                  </a>
                </div>
              </div>
              <div className="gallery-box-wrapp">
                <div className="gallery-box style2">
                  <div className="gallery-img global-img">
                    <a
                      href="assets/img/gallery/gallery_3_5.jpg"
                      className="popup-image"
                    >
                      <div className="icon-btn">
                        <i className="fal fa-magnifying-glass-plus"></i>
                      </div>
                      <img
                        src="assets/img/gallery/gallery_3_5.jpg"
                        alt="gallery image"
                      />
                    </a>
                  </div>
                </div>
                <div className="gallery-box style2">
                  <div className="gallery-img global-img">
                    <a
                      href="assets/img/gallery/gallery_3_6.jpg"
                      className="popup-image"
                    >
                      <div className="icon-btn">
                        <i className="fal fa-magnifying-glass-plus"></i>
                      </div>
                      <img
                        src="assets/img/gallery/gallery_3_6.jpg"
                        alt="gallery image"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarrerGallery;
