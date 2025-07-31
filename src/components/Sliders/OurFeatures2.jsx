import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import service_4_1 from "../../assets/img/service/service_4_1.jpg";
import service_4_2 from "../../assets/img/service/service_4_2.jpg";
import service_4_3 from "../../assets/img/service/service_4_3.jpg";
import service_4_1Icon from "../../assets/img/icon/service_4_1.svg";
import service_4_2Icon from "../../assets/img/icon/service_4_2.svg";
import service_4_3Icon from "../../assets/img/icon/service_4_3.svg";
import AnimatedText from "../AnimatedText";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import ChairmanSir from "../../Images/AboutUsImg/Chairman-Sir-01.png";
import AbhijitSir from "../../Images/AboutUsImg/Abhijit-sir-1.png";
import DevanandSir from "../../Images/AboutUsImg/Devanand-sir.png";
import AlkaMaam from "../../Images/AboutUsImg/Dr-Alka-Mahajan-003.png";
import TrivediSir from "../../Images/AboutUsImg/K.R.Trivedi.png";
import ManishSir from "../../Images/AboutUsImg/Manish-Bandlish-sir.png";
import RegupathiSir from "../../Images/AboutUsImg/Photo-S-Regupathi-scaled.png";
import RajeevSir from "../../Images/AboutUsImg/Rajeev-Krishnan-sir.png";
import VijaySir from "../../Images/AboutUsImg/Shri-T.M.-Vijay-Bhaskar.png";
import dummyImg from "../../Images/AboutUsImg/dummyImg1.jpg";
const serviceItems = [
  {
    img: dummyImg,
    icon: service_4_1Icon,
    title: "Dr. Meenesh Shah",
    author: "Chairman, NDDB and NDDB Dairy Services ",
    desc: "Dr. Meenesh Shah is a dynamic leader with over 30 years of diverse experience in the Indian dairy sector. His expertise spans Research & Development, Dairy Plant & Processing, Project Appraisal and Financeresearch and development, dairy processing, finance, cooperative development, and project management.",
    mainDesc:
      "Dr. Meenesh Shah is a dynamic leader with over 30 years of diverse experience in the Indian dairy sector. His expertise spans Research & Development, Dairy Plant & Processing, Project Appraisal and Financeresearch and development, dairy processing, finance, cooperative development, and project management.",
    spacingDesc:
      "As a key enabler of the National Dairy Plan’s implementation, he has played a pivotal role in shaping inclusive, technology-driven growth in the sector. Dr. Shah has previously contributed in leadership roles at reputed institutions such as Sumul Dairy and Sugam Dairy, Surat.",
    spacingDesc1:
      "His deep understanding of grassroots dairy operations, combined with strategic vision, has guided numerous initiatives aimed at strengthening producer-owned organizations. As Chairman of NDDB Dairy Services, he continues to champion sustainable, farmer-centric development with a focus on innovation, empowerment, and long-term impact.",
  },
  {
    img: dummyImg,
    icon: service_4_2Icon,
    title: "Dr. C. P. Devanand",
    author: "Managing Director ",
    desc: "Dr. C. P. Devanand is a seasoned veterinary professional and strategic leader with over three decades of experience in livestock production, animal health, and reproductive technologies. An alumnus of the College of Veterinary and Animal Sciences, Kerala, he holds a Master’s degree in Livestock Production & Management and an MBA. , reflecting a unique blend of technical expertise and managerial acumen.",
    mainDesc:
      "Dr. C. P. Devanand is a seasoned veterinary professional and strategic leader with over three decades of experience in livestock production, animal health, and reproductive technologies. An alumnus of the College of Veterinary and Animal Sciences, Kerala, he holds a Master’s degree in Livestock Production & Management and an MBA. , reflecting a unique blend of technical expertise and managerial acumen.",
    spacingDesc:
      "Widely regarded as a thought leader in productivity enhancement services and reproductive interventions, Dr. Devanand has contributed significantly to advancing animal husbandry practices across India. He currently serves on the Boards of several Milk Producer CompaniesOrganisations, where he offers expert guidance to strengthen governance, operational efficiency, and farmer-centric development. His vision and insights continue to play a key role in shaping sustainable and inclusive growth in the dairy sector.",
  },
  {
    img: dummyImg,
    icon: service_4_3Icon,
    title: "Dr. Rajeev Krishnan",
    author: "Executive Director ",
    desc: "Dr. Rajeev Krishnan is a seasoned professional with over two decades of experience in the dairy sector and business management. He holds a Post Graduate Diploma in Agri-Business Management from IIM Ahmedabad, along with a degree in Veterinary Sciences & Animal Husbandry from Bombay Veterinary College and a Master's in Veterinary Pathology from the Veterinary College, Bangalore.",
    mainDesc:
      "Dr. Rajeev Krishnan is a seasoned professional with over two decades of experience in the dairy sector and business management. He holds a Post Graduate Diploma in Agri-Business Management from IIM Ahmedabad, along with a degree in Veterinary Sciences & Animal Husbandry from Bombay Veterinary College and a Master's in Veterinary Pathology from the Veterinary College, Bangalore.",
    spacingDesc:
      "Dr. Krishnan has demonstrated expertise across multiple domains, including Sales & Marketing, Strategy & Planning, IT & MIS, and Business Excellence. His career spans key roles with NDDB Dairy Services, PricewaterhouseCoopers, and the Kerala Livestock Development Board, where he contributed significantly to organizational growth and operational efficiency.",
  },
  {
    img: dummyImg,
    icon: service_4_2Icon,
    title: "Shri S. Regupathi",
    author: "Executive Director, Operations, NDDB ",
    desc: "Shri S. Regupathi brings over 30 years of expertise in finance and accounting, with a deep commitment to rural development. He currently serves as the Executive Director, Operations, at NDDB, where he plays a critical role in overseeing operations and driving strategic initiatives.",
    mainDesc:
      "Shri S. Regupathi brings over 30 years of expertise in finance and accounting, with a deep commitment to rural development. He currently serves as the Executive Director, Operations, at NDDB, where he plays a critical role in overseeing operations and driving strategic initiatives.",
    spacingDesc:
      "Shri Regupathi holds an M. Com degree from ICWAI, and has a Master’s degree from IRMA, Anand. His leadership extends beyond NDDB, having held key positions such as Member and Trustee of ABRO (India), Member of the NDDB Foundation for Nutrition, and Management Committee Member of both the Jharkhand Milk Federation Ltd. and the West Assam Milk Union Ltd. (WAMUL).",
  },
  {
    img: dummyImg,
    icon: service_4_3Icon,
    title: "Shri T.M. Vijay Bhaskar",
    author: "Retired IAS ",
    desc: "Shri T.M. Vijay Bhaskar is a distinguished Indian Administrative Service (IAS) officer of the 1983 batch with over 39 years of extensive experience across multiple domains, including district administration, rural development, education, and infrastructure.",
    mainDesc:
      "Shri T.M. Vijay Bhaskar is a distinguished Indian Administrative Service (IAS) officer of the 1983 batch with over 39 years of extensive experience across multiple domains, including district administration, rural development, education, and infrastructure.",
    spacingDesc:
      "His leadership has been pivotal in driving initiatives related to sanitation, water sustainability, agricultural reforms, and governance. Shri Bhaskar holds a Master’s degree in Economics from the Birla Institute of Technology and Science, Pilani, and an MBA from the University of Birmingham, UK.",
    spacingDesc1:
      "He superannuated as the Chief Secretary of the Government of Karnataka and is currently serving as the Chairman of the Karnataka Administrative Reforms Committee 2. His expertise and strategic vision continue to play a key role in advancing public policy and rural development initiatives.",
  },
  {
    img: dummyImg,
    icon: service_4_1Icon,
    title: "Shri Manish Bandlish",
    author: "Managing Director, Mother Dairy Fruit and Vegetables Pvt Ltd ",
    desc: "Shri Manish Bandlish is a seasoned professional with over 27 years of diverse experience in leading organizations across various industries, including Maruti Suzuki, Marico, Subhiksha, Metro Cash & Carry, and Umang Dairies.",
    mainDesc:
      "Shri Manish Bandlish is a seasoned professional with over 27 years of diverse experience in leading organizations across various industries, including Maruti Suzuki, Marico, Subhiksha, Metro Cash & Carry, and Umang Dairies.",
    spacingDesc:
      "An Engineering Graduate from Jamia Millia Islamia University and an alumnus of IIM Lucknow, Shri Bandlish has demonstrated exceptional leadership in driving business growth, operational excellence, and strategic initiatives.",
    spacingDesc1:
      "His vast experience spans areas such as business development, operations, marketing and corporate strategy.",
  },
  {
    img: dummyImg,
    icon: service_4_2Icon,
    author: "General Manager ",
    title: "Shri Abhijeet Bhattacharjee",
    desc: "Shri Abhijeet Bhattacharjee is a seasoned professional with a rich background in Rural Management, Law and Science. With over three decades of experience at NDDB, he has been instrumental in driving initiatives in advocacy, corporate communication, public relations and the promotion of cooperative institutions.",
    mainDesc:
      "Shri Abhijeet Bhattacharjee is a seasoned professional with a rich background in Rural Management, Law and Science. With over three decades of experience at NDDB, he has been instrumental in driving initiatives in advocacy, corporate communication, public relations and the promotion of cooperative institutions.",
    spacingDesc:
      "Currently, he leads the Cooperative Services Group, focusing on strengthening dairy cooperatives and facilitating the growth of FPOs in sectors such as honey, manure and solar cooperatives. ",
    spacingDesc1:
      "Shri Bhattacharjee also serves on the boards of several prominent dairy organizations, including the West Assam Milk Union, Jharkhand Milk Federation and Panchmahal Milk Union, contributing his expertise to their strategic development. ",
  },
  {
    img: dummyImg,
    icon: service_4_2Icon,
    title: "Dr. Alka Mahajan",
    author: "",
    desc: "Dr. Alka Mahajan brings over 35 years of distinguished experience in technical education, academic leadership, and institutional governance. She currently serves as the Dean of NMIMS, Mumbai, overseeing the academic administration of seven engineering campuses across India. ",
    mainDesc:
      "Dr. Alka Mahajan brings over 35 years of distinguished experience in technical education, academic leadership, and institutional governance. She currently serves as the Dean of NMIMS, Mumbai, overseeing the academic administration of seven engineering campuses across India. ",
    spacingDesc:
      "A Fulbright-Nehru Fellow (2023–24), Dr. Mahajan holds a PhD in Electronics & Communication and an M.Tech from CEDTI. She has served on the Board of Management of Nirma University and the General Council of the National Board of Accreditation (NBA). ",
    spacingDesc1:
      "Her leadership contributed significantly to UGC’s 12th Five-Year Plan and capacity-building guidelines for women in higher education. Dr. Mahajan has also advised the UPSC as a subject expert. Her career reflects a commitment to academic excellence, gender equity, and systemic reform in technical education. ",
  },
  {
    img: dummyImg,
    icon: service_4_2Icon,
    title: "Shri Durga Shanker Mishra",
    author: "",
    desc: "Shri Durga Shanker Mishra is a distinguished 1984 batch IAS officer who superannuated as the Chief Secretary of Uttar Pradesh. With decades of experience across Union and State Governments, he has held key leadership roles in Revenue, Urban Development, Health, Tourism, and Mining.",
    mainDesc:
      "Shri Durga Shanker Mishra is a distinguished 1984 batch IAS officer who superannuated as the Chief Secretary of Uttar Pradesh. With decades of experience across Union and State Governments, he has held key leadership roles in Revenue, Urban Development, Health, Tourism, and Mining.",
    spacingDesc:
      "As Secretary, Ministry of Housing and Urban Affairs, he led landmark initiatives such as the Swachh Bharat Mission (Urban), Smart Cities Mission, and Central Vista redevelopment.",
    spacingDesc1:
      "An alumnus of IIT Kanpur in Electrical Engineering, he also holds an MBA from the University of Western Sydney and a diploma in Public Policy from The Hague. He has widely published, hand has represented India at numerous global platforms. A strong advocate of good governance, he is also passionate about trekking, tourism, and teaching, he has also served as visiting faculty at the University of Guelph, Canada. ",
  },
  {
    img: dummyImg,
    icon: service_4_2Icon,
    title: "Shri Kamlesh Trivedi",
    author: "",
    desc: "Shri Kamlesh Trivedi is a seasoned expert in animal breeding and dairy development, with a distinguished academic background including a Bachelor’s degree in Veterinary Sciences from Anand Veterinary College, a Postgraduate degree in Animal Breeding and Genetics from IVRI, Izatnagar, and a Doctorate in Business Management (Fellow) from IIM Bangalore. ",
    mainDesc:
      "Shri Kamlesh Trivedi is a seasoned expert in animal breeding and dairy development, with a distinguished academic background including a Bachelor’s degree in Veterinary Sciences from Anand Veterinary College, a Postgraduate degree in Animal Breeding and Genetics from IVRI, Izatnagar, and a Doctorate in Business Management (Fellow) from IIM Bangalore. ",
    spacingDesc:
      "Over the years, he has played a pivotal role in shaping national strategies for genetic improvement in cattle and buffaloes. He is the visionary behind the Information Network for Animal Productivity and Health (INAPH), now widely adopted for livestock management. ",
    spacingDesc1:
      "Shri Trivedi has worked with reputed organizations such as NDDB, ICAR, FAO, and the World Bank. His global exposure and extensive field experience enrich his contributions to the growth and governance of India’s dairy sector.",
  },
];

const OurFeatures2 = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [animateClose, setAnimateClose] = useState(false);

  const handleReadMore = (index) => {
    setExpandedIndex(index);
    setAnimateClose(false);
  };

  const handleClose = () => {
    setAnimateClose(true);
    setTimeout(() => {
      setExpandedIndex(null);
      setAnimateClose(false);
    }, 500);
  };

  return (
    <section
      className="service-area4 space"
      id="service-sec"
      style={{
        backgroundColor: "#f2f5fa",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="title-area text-center">
              <span className="sub-title text-anime-style-2 wow fadeInUp">
                Meet the Visionaries Behind Our Mission
              </span>
              <AnimatedText
                text="Board of Directors"
                tag="h2"
                className="sec-title mb-10 heading"
                width="100%"
                style={{ justifyContent: "center" }}
              />
            </div>
          </div>
        </div>

        <div className="slider-area position-relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            navigation={{
              nextEl: ".slider-next",
              prevEl: ".slider-prev",
            }}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 1.2 },
              992: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            className="th-slider has-shadow"
          >
            {serviceItems.map((item, index) => (
              <SwiperSlide key={index}>
                <Box className="position-relative">
                  <div className="service-item style4 th-ani">
                    <div className="service-img position-relative wow fadeInUp">
                      <a href="#!">
                        <img
                          src={item.img}
                          alt="service"
                          style={{
                            width: "100%", // Use full width of container
                            height: "auto",
                            aspectRatio: "16/11", // maintain proportion
                            objectFit: "cover",
                            borderRadius: "8px",
                          }}
                        />
                      </a>
                    </div>
                    <div className="service-content text-start wow fadeInUp">
                      <h3 className="box-title ellipsis-1">{item.title}</h3>
                      <p className="service-text ellipsis-3">{item.desc}</p>
                      <div className="bd-news__border">
                        <div className="bd-news__meta">
                          <div className="bd-news__meta-item ellipsis-1">
                            <span>
                              <i
                                className="fa-solid fa-user "
                                style={{ color: "#5b8c51", marginRight: "5px" }}
                              />
                              {item.author}
                            </span>
                          </div>
                        </div>
                      </div>
                      <button
                        className="th-btn style4 th-icon"
                        onClick={() => handleReadMore(index)}
                      >
                        Learn More{" "}
                        <i className="fa-light fa-arrow-right-long" />
                      </button>
                    </div>
                  </div>

                  {expandedIndex === index && (
                    <Box
                      onMouseLeave={handleClose}
                      sx={{
                        position: "absolute",
                        bottom: "2%",
                        left: 0,
                        right: 0,
                        bottom: 1,
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
                          <h3 className="box-title">{item.title}</h3>

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
                                  "linear-gradient(45deg, #404a3d, #5b8c51)",

                                borderRadius: "3px",
                              },
                              "&::-webkit-scrollbar-thumb:hover": {
                                background:
                                  "linear-gradient(45deg, #5b8c51, #404a3d)",
                              },
                            }}
                          >
                            <Typography
                              variant="body1"
                              color="text.secondary"
                              sx={{
                                lineHeight: 1.7,
                                fontSize: "0.95rem",
                                marginBottom: "10px",
                              }}
                            >
                              {item.mainDesc}
                            </Typography>
                            {item.spacingDesc && (
                              <Typography
                                variant="body1"
                                color="text.secondary"
                                sx={{
                                  lineHeight: 1.7,
                                  fontSize: "0.95rem",
                                  marginBottom: "10px",
                                }}
                              >
                                {item.spacingDesc}
                              </Typography>
                            )}
                            {item.spacingDesc1 && (
                              <Typography
                                variant="body1"
                                color="text.secondary"
                                sx={{
                                  lineHeight: 1.7,
                                  fontSize: "0.95rem",
                                  marginBottom: "10px",
                                }}
                              >
                                {item.spacingDesc1}
                              </Typography>
                            )}
                            <div className="bd-news__border">
                              <div className="bd-news__meta">
                                <di v className="bd-news__meta-item">
                                  <span>
                                    <i
                                      className="fa-solid fa-user"
                                      style={{
                                        color: "#5b8c51",
                                        marginRight: "5px",
                                      }}
                                    />
                                    {item.author}
                                  </span>
                                </di>
                              </div>
                            </div>
                          </Box>
                        </Box>
                      </Paper>
                    </Box>
                  )}
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="slider-arrow slider-prev">
            <img src="assets/img/icon/service-left.svg" alt="" />
          </button>
          <button className="slider-arrow slider-next">
            <img src="assets/img/icon/service-right.svg" alt="" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurFeatures2;
