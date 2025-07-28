import React from "react";
import AnimatedText from "../AnimatedText";
import aboutImg3 from "../../Images/aboutImg3.jpg";
import aboutImg4 from "../../Images/aboutImg4.jpg";
import DrawerModal from "../DrawerModal";
import { useMediaQuery, useTheme } from "@mui/material";
import "./AboutSection.css";
const AboutSection4 = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const AboutUsContent = {
    title: "Empowering India's Dairy Farmers",
    content: [
      "NDDB Dairy Services (NDS) is a Section 8 company registered under the Companies Act, 2013. It is a wholly-owned subsidiary of the National Dairy Development Board (NDDB), and plays a pivotal role in strengthening the dairy sector in India through innovative, sustainable, and inclusive development models.",
      "Established to operationalize NDDB’s vision of creating a vibrant rural dairying ecosystem, NDS, since its inception has been assisting dairy farmers with a range of initiatives throughout the dairy value chain. Our comprehensive approach, aimed at improving breed quality and boosting animal productivity, has resulted in the increase of the surplus and marketable milk available with farmers.  ",
      "By facilitating the establishment of Milk Producer Organisations (MPOs) and thereafter providing them technical support and an assured market for their surplus produce in the form of strong forward institutional linkages, dairy farmers benefit with improved livelihoods through fair and transparent pricing and direct payments into their bank accounts.",
      "To ensure long-term sustainability, NDS prioritises training and capacity building for dairy farmers to ensure they can manage these (producer owned) organizations effectively. Gender inclusion remains a key focal area, hence our interventions provide a platform to women dairy farmers, empowering them to excel in the remotest regions of India and make significant contributions to the dairy sector of the country.",
      "NDS’ commitment to improve milch animal productivity is evident in its innovative breeding initiatives. With four world-class semen stations located at Bidaj (Gujarat), Rahuri (Maharashtra), Alamadhi (Tamil Nadu) and Salon (Uttar Pradesh) producing over 50 million semen doses annually serving more than 35% of India’s requirement. Technologies such as Embryo Transfer and AI have improved the birth rate of female calves, enhancing gene quality and milk output. By combining grassroots involvement with professional expertise, NDS contributes to building a self-reliant dairy ecosystem that enhances rural livelihoods and nutritional security.",
      "Our Vision :-",
      "♦ Building pathways to prosperity in rural India through scientific methods, fairness, empowerment and sustainability",
      "Our Mission :-",
      "♦ Ensuring consistent and sustainable livelihoods for farmers especially women even in the remotest parts of the country by developing fair and transparent value chains based on scientific methods while striving towards net zero emissions.",
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
        toggleDrawer={toggleDrawer}
        title={AboutUsContent.title}
        content={AboutUsContent.content}
        width="48%"
      />
      <div className="container" id="about-sec5">
        <div className="row custom-ml">
          <div className="col-xl-6 col-xxl-7">
            <div className="img-box2">
              <div className="img1 reveal wow fadeInLeft" data-wow-delay=".4s">
                <img
                  src={aboutImg3}
                  alt="About"
                  style={{ width: "585px", height: "600px" }}
                />
              </div>
              <div className="img2 wow fadeInUp" data-wow-delay=".4s">
                <img
                  src={aboutImg4}
                  alt="About"
                  style={{ width: "393px", height: "352px" }}
                />
                <a
                  href="https://youtu.be/KvoAbuVT7SE?si=ZJWHA8cbOcAQqzcj"
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
                  text="Empowering India's Dairy Farmers"
                  tag="h2"
                  className="sec-title mb-10 heading text-anime-style-3"
                  width="100%"
                />
              </div>
              <p className="about-item_text wow fadeInUp about-ellipsis mb-10">
                NDDB Dairy Services (NDS) is a Section 8 company registered
                under the Companies Act, 2013. It is a wholly-owned subsidiary
                of the National Dairy Development Board (NDDB), and plays a
                pivotal role in strengthening the dairy sector in India through
                innovative, sustainable, and inclusive development models.
                <br />
                Established to operationalize NDDB’s vision of creating a
                vibrant rural dairying ecosystem, NDS, since its inception has
                been assisting dairy farmers with a range of initiatives
                throughout the dairy value chain.
                <br />
              </p>
              <div className="about-item-wrap">
                <div className="about-item wow fadeInUp" data-wow-delay=".2s">
                  <div className="about-item_img">
                    <img src="assets/img/icon/map3.svg" alt="Mission" />
                  </div>
                  <div className="about-item_centent">
                    <h5 className="box-title">Our Vision</h5>
                    <p className="about-item_text">
                      Building pathways to prosperity in rural India through
                      scientific methods...
                    </p>
                  </div>
                </div>
                <div className="about-item wow fadeInUp" data-wow-delay=".3s">
                  <div className="about-item_img">
                    <img src="assets/img/icon/guide.svg" alt="Vision" />
                  </div>
                  <div className="about-item_centent">
                    <h5 className="box-title">Our Mission</h5>
                    <p className="about-item_text">
                      Ensuring consistent and sustainable livelihoods for
                      farmers especially...
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-20 wow fadeInUp">
                <button onClick={toggleDrawer(true)} className="th-btn th-icon">
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
