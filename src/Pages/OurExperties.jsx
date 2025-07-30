import React from "react";
import AboutSection3 from "../components/AboutUs/AboutSection3";
import AboutSection10 from "../components/AboutUs/AboutSection10";
import AboutSection11 from "../components/AboutUs/AboutSection11";
import AboutSection12 from "../components/AboutUs/AboutSection12";
import AboutSection16 from "../components/AboutUs/AboutSection16";
import CommonBanner from "../components/BannersComponents/CommonBanner";
import AboutSection9 from "../components/AboutUs/AboutSection9";
import { useMediaQuery, useTheme } from "@mui/material";
import DrawerModal from "../components/DrawerModal";
import AnimatedText from "../components/AnimatedText";
import video from "../Images/Videos/video1.mp4";
import OurEx from "../Images/OurExpertiesImg/OurEx1.jpg";
import BlogAndArticle1 from "../components/BlogandArticleComponents/BlogAndArticle1";
import finalcover from "../Images/OurExpertiesImg/finalcover.jpg";
import ProjectImplementation from "../Images/OurExpertiesImg/ProjectImplementation.JPG";
const OurExperties = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const ProjectImplementationCon = {
    title: "Project Implementation",
    content: [
      "NDS is an implementing agency for various projects under the Rashtriya Gokul Mission (RGM). It is currently implementing 24 projects under RGM in multiple states to conserve and develop indigenous bovine breeds, improve livestock productivity and make dairying a sustainable and profitable livelihood especially in regions with low animal productivity.",
      "These efforts are focused in regions like the Vidarbha–Marathwada belt in Maharashtra, Varanasi in the Purvanchal region of Uttar Pradesh, Mayurbhanj in Odissa and Champaran in Bihar areas that hold significant potential for dairy development but have historically lacked access to quality services and infrastructure. ",
      "To enhance productivity and improve the genetic potential of animals in these regions, NDS is undertaking key interventions such as the introduction of high-yielding indigenous cattle, use of sex-sorted frozen semen and conventional semen for artificial insemination and use of embryo transfer technology. ",
      "These services are delivered in a structured and scientific manner ensuring accessibility and impact at the grassroots level. Through these projects, NDS aims to build a strong foundation for inclusive growth in the dairy sector enabling farmers in the most challenging and underserved regions to participate meaningfully in the dairy economy.",
      "Recognising the strategic importance of Central Cattle Breeding Farms (CCBFs), the Government of India has entrusted the management of two CCBFs located at Andeshnagar (Uttar Pradesh) and Dhamrod (Gujarat), to NDDB to transform them into Centres of Excellence in Dairy Innovation. Supported by NDS as the technical arm of NDDB, these farms are undergoing comprehensive modernisation with infrastructure upgradation, technology integration and capacity building as core pillars. The upgraded facilities include advanced laboratories for embryo production, disease-free housing for producing high genetic merit bulls and heifers and training centres to build skills in livestock and dairy management. These Centres of Excellence are envisioned to serve as catalytic hubs for research and innovation in the dairy sector.",
    ],
  };
  return (
    <React.Fragment>
      <DrawerModal
        isMobile={isMobile}
        open={open}
        handleClose={handleClose}
        title={ProjectImplementationCon.title}
        content={ProjectImplementationCon.content}
        width="60%"
      />
      <CommonBanner
        title="Our Areas of Expertise"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Our Areas of Expertise" },
        ]}
      />
      <AboutSection12 />
      <AboutSection3 />
      <BlogAndArticle1 />
      <section className="choose-6-area space-bottom">
        <div className="container">
          <div className="row gy-4 align-items-start">
            <div className="col-xl-5 order-1 order-xl-0 mt-50">
              <div className="title-area mb-20 mt-10 pe-xl-5">
                <AnimatedText
                  text="Project Implementation"
                  tag="h2"
                  className="sec-title mb-20 heading text-anime-style-3"
                  width="100%"
                />
              </div>
              <p className="sec-text mb-10 wow fadeInUp">
                NDS is an implementing agency for various projects under the
                Rashtriya Gokul Mission (RGM). It is currently implementing 24
                projects under RGM in multiple states to conserve and develop
                indigenous bovine breeds, improve livestock productivity and
                make dairying a sustainable and profitable livelihood especially
                in regions with low animal productivity.
                <br />
                These efforts are focused in regions like the
                Vidarbha–Marathwada belt.
              </p>
              <div className="mt-35 wow fadeInUp" data-wow-delay=".4s">
                <button onClick={handleClickOpen} className="th-btn th-icon">
                  Learn more <i className="fa-light fa-arrow-right-long" />
                </button>
              </div>
            </div>

            <div className="col-xl-7 mt-80 order-0 order-xl-1">
              <div className="choose-wrapper text-end position-relative mb-80">
                <div className="choose-item4">
                  <div className="choose-img wow fadeInUp">
                    <img
                      src={finalcover}
                      alt="Animal Productivity Services 2"
                      style={{
                        width: "302px",
                        height: "268px",
                        objectFit: "cover",
                        borderRadius: "30px",
                      }}
                    />
                  </div>
                </div>
                <div className="choose-item4">
                  <div className="choose-img wow fadeInRight">
                    <img
                      src={ProjectImplementation}
                      alt="Animal Productivity Services 2"
                      style={{
                        width: "672px",
                        height: "450px",
                        objectFit: "cover",
                        borderRadius: "30px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AboutSection9 />
      <AboutSection10 />
      <AboutSection11 />
      <AboutSection16 />
    </React.Fragment>
  );
};

export default OurExperties;
