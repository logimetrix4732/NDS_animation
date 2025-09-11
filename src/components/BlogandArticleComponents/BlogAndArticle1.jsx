import React from "react";
import AnimatedText from "../AnimatedText";
import { useMediaQuery, useTheme } from "@mui/material";
import DrawerModal from "../DrawerModal";
import AnimalNutrition from "../../Images/OurExpertiesImg/animalNutrition.jpeg";
import checkMarkIcon from "../../Images/HomeImgs/checkMarkIcon.png";

const BlogAndArticle1 = () => {
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
    title: "Animal Nutrition",
    content: [
      "Ensuring proper animal nutrition is fundamental to improve milk productivity, animal health and farmer income. Recognizing this need, NDS strategically entered the cattle feed market under the ‘SAG’ brand to strengthen the availability of scientifically formulated feed for dairy farmers across the country. By leveraging the institutional and general trade channels, NDS ensures that quality inputs like cattle feed and mineral mixture reach efficiently to the farmers. These inputs play a vital role in addressing the widespread nutritional deficiencies commonly seen in dairy animals in rural India, ultimately supporting better milk yields and healthier livestock at the grassroots level. The feed is currently available in 10 major milk producing states in 5 variants i.e Silver, Gold, Diamond, Platinum and Buffalo Special.",
      "Key focus areas include :-",
      "♦ Heat stress mitigation techniques during summer ",
      "♦ Mastitis prevention and udder hygiene practices ",
      "♦ Calf and heifer management for future productivity ",
      "♦ Preventive healthcare including vaccination and deworming schedules ",
      "♦ Fodder planning and conservation including silage making and multi cut fodder cultivation ",
      "Through these integrated nutrition services, NDS empowers producer members to adopt best practices, reduce input costs and sustainably enhance animal productivity ultimately improving farmer livelihoods and milk quality. ",
    ],
  };
  return (
    <section className="space-bottom">
      <DrawerModal
        isMobile={isMobile}
        open={open}
        handleClose={handleClose}
        title={AboutUsContent.title}
        content={AboutUsContent.content}
        width="60%"
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="sec_title_static">
              <div className="sec_title_wrap">
                <div className="title-area text-center text-lg-start pe-xl-5 mt-20">
                  <AnimatedText
                    text="Animal Nutrition"
                    tag="h2"
                    className="sec-title mb-10 heading text-anime-style-3"
                    width="100%"
                  />
                </div>
                <div className="blog-shape text-lg-start text-center">
                  <img
                    src={AnimalNutrition}
                    alt="Animal Productivity Services 2"
                    loading="lazy"
                    style={{
                      width: "672px",
                      height: "367px",
                      objectFit: "cover",
                      borderRadius: "28px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6 mt-10">
            <div className="ps-xl-3 ms-xl-3 ps-xl-5 ms-xxl-5">
              <div className="title-area about-7-titlebox mb-20">
                <p
                  className="sec-text mb-15 mt-30  wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  Ensuring proper animal nutrition is fundamental to improve
                  milk productivity, animal health and farmer income.
                  Recognizing this need, NDS strategically entered the cattle
                  feed market under the ‘SAG’ brand to strengthen the
                  availability of scientifically formulated feed for dairy
                  farmers across the country. By leveraging the institutional
                  and general trade channels, NDS ensures that quality inputs
                  like cattle feed and mineral mixture reach efficiently to the
                  farmers. These inputs play a vital role in addressing the...
                </p>
                <div className="about-feature-wrap">
                  <div className="about-feature-list">
                    <ul>
                      <li className="wow fadeInUp" data-wow-delay=".4s">
                        <span className="about-feature-icon">
                          <img
                            src={checkMarkIcon}
                            alt=""
                            loading="lazy"
                            style={{ width: "26px", height: "22px" }}
                          />
                        </span>
                        <p
                          className="sec-text mb-15 mt-20  wow fadeInUp"
                          data-wow-delay=".4s"
                        >
                          Heat stress mitigation techniques during summer
                        </p>
                      </li>
                      <li className="wow fadeInUp" data-wow-delay=".5s">
                        <span className="about-feature-icon">
                          <img
                            src={checkMarkIcon}
                            alt=""
                            loading="lazy"
                            style={{ width: "26px", height: "22px" }}
                          />
                        </span>
                        <p
                          className="sec-text mb-15 mt-20  wow fadeInUp"
                          data-wow-delay=".4s"
                        >
                          Mastitis prevention and udder hygiene practices
                        </p>
                      </li>
                      <li className="wow fadeInUp" data-wow-delay=".5s">
                        <span className="about-feature-icon">
                          <img
                            src={checkMarkIcon}
                            alt=""
                            loading="lazy"
                            style={{ width: "26px", height: "22px" }}
                          />
                        </span>
                        <p
                          className="sec-text mb-15 mt-20  wow fadeInUp"
                          data-wow-delay=".4s"
                        >
                          Calf and heifer management for future productivity
                        </p>
                      </li>
                      <li className="wow fadeInUp" data-wow-delay=".5s">
                        <span className="about-feature-icon">
                          <img
                            src={checkMarkIcon}
                            alt=""
                            loading="lazy"
                            style={{ width: "26px", height: "22px" }}
                          />
                        </span>
                        <p
                          className="sec-text mb-15 mt-20  wow fadeInUp"
                          data-wow-delay=".4s"
                        >
                          Preventive healthcare including vaccination and
                          deworming schedules 
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="wow fadeInUp" data-wow-delay=".4s">
                  <button onClick={handleClickOpen} className="th-btn th-icon">
                    Learn more <i className="fa-light fa-arrow-right-long" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogAndArticle1;
