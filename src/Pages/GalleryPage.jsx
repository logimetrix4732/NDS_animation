import React, { useEffect } from "react";
import CommonBanner from "../components/BannersComponents/CommonBanner";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
const GalleryPage = () => {
  useEffect(() => {
    const lightbox = GLightbox({
      selector: ".popup-image",
    });

    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <React.Fragment>
      <CommonBanner
        title="Gallery"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Gallery" }]}
      />

      <div className="overflow-hidden space-top">
        <div className="container">
          <div className="row gy-24 gx-24 justify-content-center">
            <div className="col-lg-3">
              <div className="gallery-box style2">
                <div className="gallery-img global-img">
                  <a
                    href="assets/img/gallery/gallery_3_1.jpg"
                    className="popup-image"
                  >
                    <div className="icon-btn">
                      <i className="fal fa-magnifying-glass-plus" />
                    </div>
                    <img
                      src="assets/img/gallery/gallery_3_1.jpg"
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
                      <i className="fal fa-magnifying-glass-plus" />
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
                      <i className="fal fa-magnifying-glass-plus" />
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
                      <i className="fal fa-magnifying-glass-plus" />
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
                        <i className="fal fa-magnifying-glass-plus" />
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
                        <i className="fal fa-magnifying-glass-plus" />
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
      <div className="container th-container2 space-bottom">
        <div className="row gy-24 gx-24 justify-content-center">
          <div className="col-lg-3 gallery-box_wrapp">
            <div className="gallery-box">
              <div className="gallery-img global-img">
                <a
                  href="assets/img/gallery/gallery_2_1.jpg"
                  className="popup-image"
                >
                  <div className="icon-btn">
                    <i className="fal fa-magnifying-glass-plus" />
                  </div>
                  <img
                    src="assets/img/gallery/gallery_2_1.jpg"
                    alt="gallery image"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 gallery-box_wrapp">
            <div className="gallery-box">
              <div className="gallery-img global-img">
                <a
                  href="assets/img/gallery/gallery_2_2.jpg"
                  className="popup-image"
                >
                  <div className="icon-btn">
                    <i className="fal fa-magnifying-glass-plus" />
                  </div>
                  <img
                    src="assets/img/gallery/gallery_2_2.jpg"
                    alt="gallery image"
                  />
                </a>
              </div>
            </div>
            <div className="gallery-box">
              <div className="gallery-img global-img">
                <a
                  href="assets/img/gallery/gallery_2_3.jpg"
                  className="popup-image"
                >
                  <div className="icon-btn">
                    <i className="fal fa-magnifying-glass-plus" />
                  </div>
                  <img
                    src="assets/img/gallery/gallery_2_3.jpg"
                    alt="gallery image"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 gallery-box_wrapp">
            <div className="gallery-box">
              <div className="gallery-img global-img">
                <a
                  href="assets/img/gallery/gallery_2_4.jpg"
                  className="popup-image"
                >
                  <div className="icon-btn">
                    <i className="fal fa-magnifying-glass-plus" />
                  </div>
                  <img
                    src="assets/img/gallery/gallery_2_4.jpg"
                    alt="gallery image"
                  />
                </a>
              </div>
            </div>
            <div className="gallery-box">
              <div className="gallery-img global-img">
                <a
                  href="assets/img/gallery/gallery_2_5.jpg"
                  className="popup-image"
                >
                  <div className="icon-btn">
                    <i className="fal fa-magnifying-glass-plus" />
                  </div>
                  <img
                    src="assets/img/gallery/gallery_2_5.jpg"
                    alt="gallery image"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 gallery-box_wrapp">
            <div className="gallery-box">
              <div className="gallery-img global-img">
                <a
                  href="assets/img/gallery/gallery_2_6.jpg"
                  className="popup-image"
                >
                  <div className="icon-btn">
                    <i className="fal fa-magnifying-glass-plus" />
                  </div>
                  <img
                    src="assets/img/gallery/gallery_2_6.jpg"
                    alt="gallery image"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default GalleryPage;
