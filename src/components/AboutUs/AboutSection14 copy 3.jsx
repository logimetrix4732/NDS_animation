import * as React from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import DrawerModal from "../DrawerModal";
import aboutImg1 from "../../Images/AboutUsImg/aboutImg1.png";
import aboutImg2 from "../../Images/AboutUsImg/aboutImg2.png";
import aboutImg3 from "../../Images/AboutUsImg/aboutImg3.png";

const AboutSection14 = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const chairmanMessage = {
    title: "Chairman’s Message",
    content: [
      "As the largest producer and consumer of dairy in the world, India’s pole position is well established. The efforts of last five - six decades, centered around making India successful and self-reliant focused on innovation, operational excellence, scale, capacity building and digitisation.",
      "Looking back at the work done in the sector is comforting but it does not entitle us to rest. Increasingly there are newer themes emerging that compel us to play a bigger role in the global dairy landscape...",
      "From its humble beginnings in 2009, in just fourteen years NDS has managed to transform itself to the changing needs...",
    ],
  };

  return (
    <>
      {/* Drawer Modal */}
      <DrawerModal
        isMobile={isMobile}
        open={open}
        toggleDrawer={toggleDrawer}
        title={chairmanMessage.title}
        content={chairmanMessage.content}
        width="37%"
      />

      {/* About Section */}
      <div
        className="about-area position-relative overflow-hidden space"
        id="about-sec"
      >
        <div className="container">
          <div className="row">
            {/* Left Images */}
            <div className="col-xl-7">
              <div className="about-imgbox12 img-box3">
                <div
                  className="img1 wow fadeInRight"
                  style={{ marginLeft: "280px" }}
                >
                  <img
                    src={aboutImg3}
                    alt="About"
                    style={{
                      width: "477px",
                      height: "297px",
                      objectFit: "cover",
                      borderRadius: "25px",
                    }}
                  />
                </div>
                <div className="img2 wow fadeInLeft">
                  <img
                    src={aboutImg1}
                    alt="About"
                    style={{
                      width: "425px",
                      height: "436px",
                      objectFit: "cover",
                      borderRadius: "25px",
                    }}
                  />
                </div>
                <div className="img3 text-center text-md-end wow fadeInUp">
                  <img
                    src={aboutImg2}
                    alt="About"
                    style={{
                      width: "381px",
                      height: "371px",
                      objectFit: "cover",
                      borderRadius: "25px",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Right Text Content */}
            <div className="col-xl-5">
              <div className="title-area about-12-titlebox mb-10 pe-xxl-1 me-xxl-1">
                <h2 className="sec-title mb-10 text-anime-style-3">
                  Chairman’s Message
                </h2>
                <p className="sec-text mb-10 wow fadeInUp" data-wow-delay=".2s">
                  As the largest producer and consumer of dairy in the world,
                  India’s pole position is well established. The efforts of last
                  five - six decades, centered around making India successful
                  and self-reliant focused on innovation, operational
                  excellence, scale, capacity building and digitisation.
                </p>
                <p className="sec-text wow fadeInUp" data-wow-delay=".2s">
                  Looking back at the work done in the sector is comforting but
                  it does not entitle us to rest...
                </p>
              </div>

              <div className="about-12-item-wrap">
                <p className="about-item_text wow fadeInUp about-ellipsis">
                  Benchmarks for the industry, whether it is productivity
                  enhancement through genetic improvement or converting the
                  challenge of greenhouse gas emissions into the next big
                  opportunity.
                </p>
                <div className="mt-20 wow fadeInUp">
                  <button
                    onClick={toggleDrawer(true)}
                    className="th-btn th-icon"
                  >
                    Learn more <i className="fa-light fa-arrow-right-long" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection14;
