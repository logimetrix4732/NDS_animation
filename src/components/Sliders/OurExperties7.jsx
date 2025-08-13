import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Close as CloseIcon } from "@mui/icons-material";
import service_bg_1 from "../../assets/img/bg/service_bg_1.jpg";
import { Typography, Box, IconButton, Paper } from "@mui/material";
import StrategySuccess from "../../Images/MilkProducerImg/StrategySuccess.jpg";
import BeyondCollection from "../../Images/MilkProducerImg/BeyondCollection.jpg";
import Governancethat from "../../Images/MilkProducerImg/Governancethat.jpg";
import PeopleFirst from "../../Images/MilkProducerImg/PeopleFirst.jpg";
import StrongRoots from "../../Images/MilkProducerImg/StrongRoots.JPG";
import DrivingEfficiency from "../../Images/MilkProducerImg/DrivingEfficiency1.jpg";
import "swiper/css";
import "swiper/css/navigation";
import AnimatedText from "../AnimatedText";
const strategies = [
  {
    title: "Strategy to Success",
    title1: "Strategy to Success",
    subtitle: "Strategic Planning for Sustainable Foundations",
    desc: "We begin by assessing the existing dairy its milk production potential, infrastructure and socio-economic...",
    mainDesc:
      "We begin by assessing the existing dairy its milk production potential, infrastructure and socio-economic context of farmers. Based on this, a detailed project plan is developed covering financial modelling, infrastructure requirements, human resource needs, and institutional goals. Our planning approach ensures alignment with local aspirations and national economic goals while maintaining financial and operational sustainability. We ensure cohesive implementation by integrating the efforts of field teams, local institutions, partner organisations and producer members. Our monitoring framework uses digital tools and periodic field reviews to track progress, resolve bottlenecks and adapt strategies swiftly. ",
    img: StrategySuccess,
  },
  {
    title: "Strong Roots, Shared Vision",
    title1: "Strong Roots, Shared Vision",
    subtitle: "Institution Building with Member Centricity at its Core",
    desc: "We support the formation and registration of MPOs as producer companies under the Companies Act ensuring legal...",
    mainDesc:
      "We support the formation and registration of MPOs as producer companies under the Companies Act ensuring legal compliance and inclusivity. A key focus of our work is the active mobilisation of women milk producers and marginal farmers, fostering equitable participation across all segments of the community. NDS has developed a multi-modular intervention model to promote a shared vision of ownership, core values, participation and accountability. It engages all key stakeholders of the MPO ecosystem, including board members, professionals, field functionaries, members, Village Contact Groups (VCGs), and Member Relation Groups (MRGs), etc.",
    img: StrongRoots,
  },
  {
    title: "Beyond Collection",
    title1: "Beyond Collection: Strengthening the Dairy Ecosystem",
    subtitle: "Enabling End-to-End Dairy Value Chain integration",
    desc: "Setting up of a robust value chain network from milk procurement (backward linkage) to market access (forward linkage)...",
    mainDesc:
      "Setting up of a robust value chain network from milk procurement (backward linkage) to market access (forward linkage) is integral to the success of MPO. We support MPOs in establishing infrastructure for milk collection, chilling and quality testing while providing them with assured markets. Through fair and transparent procurement systems, quality incentives and assured timely payments, we help farmers to realise the full value of their produce. Robust Standard Operating Procedures (SOPs) are implemented across all critical functions of the MPO including milk collection, quality control, weighing, member enrollment, payment processing and record maintenance etc. These SOPs ensure consistency, reduce errors and build trust among producer members.",
    img: BeyondCollection,
  },
  {
    title: "Governance that fosters Trust",
    title1: "Governance that fosters Trust",
    subtitle: "Transparent and Participative Decision-Making ",
    desc: "Governance defines how decisions are made and implemented and ultimately, how trust is built within an organisation At NDS, we...",
    mainDesc:
      "Governance defines how decisions are made and implemented and ultimately, how trust is built within an organisation. At NDS, we support Producer Organisations in establishing strong and effective governance structures, such as well-functioning Boards that act in the best interests of their members.",
    spacingDesc:
      "We promote good governance through participation, transparency, accountability, predictability and rule of law. Our approach helps Producer Organisations use resources efficiently, reduce conflicts and monitor their activities effectively. By encouraging practices like member representation, apolitical boards, expert directors and policy-based decision-making, NDS supports Producer Organisations in building credibility and long-term success.",
    img: Governancethat,
  },
  {
    title: "People First",
    title1: "People First: Training & Leadership Development",
    subtitle: "Capacity Building across the Organisational Spectrum",
    desc: "Customised training modules are provided to all stakeholders like milk producers, board members, extension officers, and milk...",
    mainDesc:
      "Customised training modules are provided to all stakeholders like milk producers, board members, extension officers, and milk quality testing and administrative staff. These sessions cover a wide range of training modules aimed at enhancing knowledge, skills, and mindset across key areas such as cooperative principles, financial literacy, gender inclusion, leadership, and operational management. The training process ensures that the board of each MPO evolves a shared set of organisational values and clearly defines the Mission and Vision of the organisation.",
    img: PeopleFirst,
  },
  {
    title: "Digital Efficiency",
    title1: "Driving Efficiency through Automation and Digital Tools",
    subtitle: "Automation and Digitalisation",
    desc: "Information and Communication Technology ensures transparent, real-time milk data tracking, automated member payments and centralized...",
    mainDesc:
      "Information and Communication Technology ensures transparent, real-time milk data tracking, automated member payments and centralized updates. MPOs use SAP-based ERP systems for efficient management of finance, HR, production and quality, enabling timely decisions, cost optimization and better returns for farmer members. We embed digital systems from the beginning of operations such as automated milk testing, cloud-based MIS, mobile application to facilitate VCG meetings and direct bank payment solutions. These tools bring efficiency, transparency and traceability, while also building data-driven decision-making capability within the MPO.",
    img: DrivingEfficiency,
  },
];

const OurExperties7 = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [animateClose, setAnimateClose] = useState(false);

  const swiperRef = useRef(null);
  const handleReadMore = (index) => {
    setExpandedIndex(index);
    setAnimateClose(false);
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handleClose = () => {
    setAnimateClose(true);
    setTimeout(() => {
      setExpandedIndex(null);
      setAnimateClose(false);
      if (swiperRef.current && swiperRef.current.autoplay) {
        swiperRef.current.autoplay.start();
      }
    }, 500);
  };

  return (
    <section
      className="position-relative bg-top-center overflow-hidden space"
      id="service-sec"
      style={{
        background: `url(${service_bg_1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 60%",
        backgroundPosition: "top center",
        backgroundColor: "#fff",
      }}
    >
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-6">
            <div className="title-area service-3-titlebox text-center text-md-start mt-40">
              <AnimatedText
                text="Setting Up MPOs"
                tag="h2"
                className="sec-title mb-10 heading text-anime-style-3"
                width="100%"
              />
            </div>
          </div>
          <div className="col-xl-6">
            <p
              className="service-3-text text-center text-md-start wow fadeInUp"
              data-wow-delay=".2s"
            >
              At NDDB Dairy Services, we specialise in setting up sustainable
              and professionally managed Milk Producer Organisations (MPOs).
              These farmer-owned institutions promote sustainable income,
              self-reliance, and rural resilience. Through structured processes,
              scalable systems, and assured market access, we empower dairy
              farmers and help transition them from informal milk suppliers to
              organised stakeholders strengthening the cooperative movement
              across India.
            </p>
          </div>
        </div>

        <div className="slider-area slider-drag-wrap position-relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            navigation={false}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
              1300: { slidesPerView: 3 },
            }}
          >
            {strategies.map((item, index) => (
              <SwiperSlide key={index}>
                <Box
                  className="position-relative"
                  sx={{ maxWidth: 400, mx: "auto" }}
                >
                  <div
                    sx={{
                      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                      transform:
                        expandedIndex === index
                          ? "translateY(-10px)"
                          : "translateY(0)",
                      boxShadow:
                        expandedIndex === index
                          ? "0 20px 40px rgba(0,0,0,0.15)"
                          : "0 4px 8px rgba(0,0,0,0.1)",
                      overflow: "visible",
                    }}
                  >
                    <div className="service-box service-style-1 gsap-cursor">
                      <div className="service-img">
                        <a href="#">
                          <img
                            src={item.img}
                            alt={item.title}
                            loading="lazy"
                            style={{
                              width: "400px",
                              height: "307.69px",
                              objectFit: "cover",
                            }}
                          />
                        </a>
                      </div>
                      <div className="service-content">
                        <h3 class="box-title ellipsis-1">{item.title}</h3>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            color: "grey", // a green tone that matches the theme
                            fontWeight: 600,
                            fontSize: "1rem",
                            mb: 1,
                            mt: 1,
                          }}
                        >
                          {item.subtitle}
                        </Typography>

                        <p className="service-box_text wow fadeInUp ellipsis-3">
                          {item.desc}
                        </p>

                        <button
                          className="th-btn style4"
                          onClick={() => handleReadMore(index)}
                          disabled={expandedIndex !== null}
                        >
                          Learn More{" "}
                          <i class="fa-light fa-arrow-right-long"></i>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Card - Bottom to Top */}
                  {expandedIndex === index && (
                    <Box
                      onMouseLeave={handleClose}
                      sx={{
                        position: "absolute",
                        bottom: "0.1%",
                        left: 0,
                        right: 0,
                        zIndex: 10,
                        animation: animateClose
                          ? "slideDown 0.5s ease forwards"
                          : "slideUp 0.5s ease forwards",
                        "@keyframes slideUp": {
                          "0%": {
                            opacity: 0,
                            transform: "scaleY(0)",
                            transformOrigin: "bottom",
                          },
                          "100%": {
                            opacity: 1,
                            transform: "scaleY(1)",
                            transformOrigin: "bottom",
                          },
                        },
                        "@keyframes slideDown": {
                          "0%": {
                            opacity: 1,
                            transform: "scaleY(1)",
                            transformOrigin: "bottom",
                          },
                          "100%": {
                            opacity: 0,
                            transform: "scaleY(0)",
                            transformOrigin: "bottom",
                          },
                        },
                      }}
                    >
                      <Paper
                        elevation={2}
                        sx={{
                          borderRadius: "8px 8px 16px 16px",
                          overflow: "hidden",
                          background:
                            "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                          border: "1px solid rgba(0,0,0,0.08)",
                          height: "413px",
                          transformOrigin: "bottom",
                        }}
                      >
                        <Box
                          sx={{ position: "relative", height: "100%", p: 3 }}
                        >
                          {/* Close Button */}
                          <IconButton
                            onClick={handleClose}
                            sx={{
                              position: "absolute",
                              top: 16,
                              right: 16,
                              backgroundColor: "rgba(0,0,0,0.04)",
                              "&:hover": {
                                backgroundColor: "rgba(0,0,0,0.08)",
                                transform: "scale(1.1)",
                              },
                              transition: "all 0.2s ease",
                              zIndex: 1,
                            }}
                            size="small"
                          >
                            <CloseIcon fontSize="small" />
                          </IconButton>

                          {/* Full Content */}
                          <h3 className="box-title">{item.title1}</h3>

                          <Box
                            sx={{
                              height: "calc(100% - 80px)",
                              overflowY: "auto",
                              pr: 1,
                              "&::-webkit-scrollbar": {
                                width: "6px",
                              },
                              "&::-webkit-scrollbar-track": {
                                background: "#f1f1f1",
                                borderRadius: "3px",
                              },
                              "&::-webkit-scrollbar-thumb": {
                                background:
                                  "linear-gradient(45deg, #a46c35, #bd8f59)",

                                borderRadius: "3px",
                              },
                              "&::-webkit-scrollbar-thumb:hover": {
                                background:
                                  "linear-gradient(45deg, #bd8f59, #a46c35)",
                              },
                            }}
                          >
                            <Typography
                              variant="subtitle1"
                              sx={{
                                color: "grey", // a green tone that matches the theme
                                fontWeight: 600,
                                fontSize: "1rem",
                                mb: 1,
                                mt: 1,
                              }}
                            >
                              {item.subtitle}
                            </Typography>
                            <Typography
                              variant="body1"
                              color="text.secondary"
                              sx={{
                                lineHeight: 1.7,
                                fontSize: "0.95rem",
                              }}
                            >
                              {item.mainDesc}
                            </Typography>
                            <br />
                            {item.spacingDesc && (
                              <Typography
                                variant="body1"
                                color="text.secondary"
                                sx={{
                                  lineHeight: 1.7,
                                  fontSize: "0.95rem",
                                }}
                              >
                                {item.spacingDesc}
                              </Typography>
                            )}
                          </Box>
                        </Box>
                      </Paper>
                    </Box>
                  )}
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OurExperties7;
