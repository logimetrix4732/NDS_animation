import React from "react";
import AnimatedText from "../AnimatedText";
import aboutImg3 from "../../Images/AboutUsImg/IMG_40713.jpg";
import aboutImg4 from "../../Images/AboutUsImg/IMG_40712.jpg";
import DrawerModal from "../DrawerModal";
import { useMediaQuery, useTheme } from "@mui/material";
import "./AboutSection.css";
const AboutSection4 = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const AboutUsContent = {
    title: "NDDB Dairy Services",
    content: [
      "A Section 8 company registered under the Companies Act, 2013. It is a wholly-owned subsidiary of the National Dairy Development Board (NDDB), and plays a pivotal role in strengthening the dairy sector in India through innovative, sustainable, and inclusive development models.",
      "Established to operationalize NDDB’s vision of creating a vibrant rural dairying ecosystem, NDS, since its inception has been assisting dairy farmers with a range of initiatives throughout the dairy value chain. Our comprehensive approach, aimed at improving breed quality and boosting animal productivity, has resulted in the increase of the surplus and marketable milk available with farmers.  ",
      "By facilitating the establishment of Milk Producer Organisations (MPOs) and thereafter providing them technical support and an assured market for their surplus produce in the form of strong forward institutional linkages, dairy farmers benefit with improved livelihoods through fair and transparent pricing and direct payments into their bank accounts.",
      "For long-term sustainability, NDS prioritises training and capacity building for dairy farmers to ensure they can manage these (producer owned) organizations effectively. Gender inclusion remains a key focal area, hence our interventions provide a platform to women dairy farmers, empowering them to excel in the remotest regions of India and make significant contributions to the dairy sector of the country.",
    ],
  };
  return (
    <div
      id="about-sec"
      className="about-area position-relative overflow-hidden space"
    >
      <DrawerModal
        isMobile={isMobile}
        open={open}
        handleClose={handleClose}
        title={AboutUsContent.title}
        content={AboutUsContent.content}
        width="60%"
      />
      <div className="container" id="about-sec5">
        <div className="row custom-ml">
          <div className="col-xl-6 col-xxl-7">
            <div className="img-box2">
              <div className="img1 reveal wow fadeInLeft" data-wow-delay=".4s">
                <img
                  src={aboutImg3}
                  alt="About"
                  style={{ width: "650px", height: "600px" }}
                  loading="lazy"
                />
              </div>
              <div className="img2 wow fadeInUp" data-wow-delay=".4s">
                <img
                  src={aboutImg4}
                  alt="About"
                  style={{ width: "393px", height: "302px" }}
                  loading="lazy"
                />
                <a
                  href="https://www.youtube.com/watch?v=uyhR4nGIefA"
                  className="play-btn popup-video"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-sharp fa-solid fa-play" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-xxl-5">
            <div className="">
              <div className="title-area about4-titlebox mb-20">
                <AnimatedText
                  text="NDDB Dairy Services"
                  tag="h2"
                  className="sec-title mb-10 heading text-anime-style-3"
                  width="100%"
                />
              </div>
              <p className="about-item_text wow fadeInUp about-ellipsis mb-10">
                A Section 8 company registered under the Companies Act, 2013. It
                is a wholly-owned subsidiary of the National Dairy Development
                Board (NDDB), and plays a pivotal role in strengthening India’s
                dairy sector through innovative, sustainable, and inclusive
                development models.
                <br />
                Established to operationalize NDDB’s vision of creating a
                vibrant rural dairying ecosystem, NDS, since its inception has
                been assisting dairy farmers with a range of initiatives
                throughout the dairy value chain. Our comprehensive approach,
                aimed at improving breed quality and boosting animal
                productivity, has resulted in the increase of the surplus and
                marketable milk available with farmers.
                <br />
                By facilitating the establishment of Milk Producer Organisations
                (MPOs) and thereafter providing them technical support and an
                assured market for their surplus produce in the form of strong
                forward institutional linkages, dairy farmers benefit with
              </p>
              <div className="mt-20 wow fadeInUp">
                <button onClick={handleClickOpen} className="th-btn th-icon">
                  Learn more <i className="fa-light fa-arrow-right-long" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection4;
