import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Modal,
  IconButton,
  Fade,
  Backdrop,
  DialogContent,
} from "@mui/material";
import { ArrowForward, Close } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import ChairmanSir from "../../Images/BoardofDirectorsImg/Chairman-Sir-01.png";
import ChairmanSir1 from "../../Images/BoardofDirectorsImg/Chairman-Sir-02.png";
import AbhijitSir from "../../Images/BoardofDirectorsImg/Abhijit-sir-1.png";
import DevanandSir from "../../Images/BoardofDirectorsImg/Devanand-sir.png";
import AlkaMaam from "../../Images/BoardofDirectorsImg/Dr-Alka-Mahajan-003.png";
import TrivediSir from "../../Images/BoardofDirectorsImg/K.R.Trivedi.png";
import ManishSir from "../../Images/BoardofDirectorsImg/Manish-Bandlish-sir.png";
import RegupathiSir from "../../Images/BoardofDirectorsImg/Photo-S-Regupathi-scaled.png";
import RajeevSir from "../../Images/BoardofDirectorsImg/Rajeev-Krishnan-sir.png";
import VijaySir from "../../Images/BoardofDirectorsImg/Shri-T.M.-Vijay-Bhaskar.png";
import BDN2025 from "../../Images/BoardofDirectorsImg/BDN-2025-01-24-at-4.11.24-PM.png";
const directors = [
  {
    id: 1,
    name: "Dr. Meenesh Shah",
    title: "Chairman, NDDB and NDDB Dairy Services",
    image: ChairmanSir,
    fullImage: ChairmanSir1,
    bio: [
      "Dr. Meenesh Shah is a dynamic leader with over 30 years of diverse experience in the Indian dairy sector. His expertise spans Research & Development, Dairy Plant & Processing, Project Appraisal and Financeresearch and development, dairy processing, finance, cooperative development, and project management.",
      "As a key enabler of the National Dairy Plan’s implementation, he has played a pivotal role in shaping inclusive, technology-driven growth in the sector. Dr. Shah has previously contributed in leadership roles at reputed institutions such as Sumul Dairy and Sugam Dairy, Surat.",
      "His deep understanding of grassroots dairy operations, combined with strategic vision, has guided numerous initiatives aimed at strengthening producer-owned organizations. As Chairman of NDDB Dairy Services, he continues to champion sustainable, farmer-centric development with a focus on innovation, empowerment, and long-term impact.",
    ],
    experience: "30+ years in Technology & Business Leadership",
    education: "Master of Computer Applications, Regional Engineering College",
    expertise: [
      "Digital Transformation",
      "Strategic Planning",
      "Global Operations",
      "Innovation Management",
    ],
    joinedYear: "2017",
  },
  {
    id: 2,
    name: "Dr. C. P. Devanand",
    title: "Managing Director",
    image: DevanandSir,
    fullImage: DevanandSir,
    bio: [
      "Dr. C. P. Devanand is a seasoned veterinary professional and strategic leader with over three decades of experience in livestock production, animal health, and reproductive technologies. An alumnus of the College of Veterinary and Animal Sciences, Kerala, he holds a Master’s degree in Livestock Production & Management and an MBA. , reflecting a unique blend of technical expertise and managerial acumen.",
      "Widely regarded as a thought leader in productivity enhancement services and reproductive interventions, Dr. Devanand has contributed significantly to advancing animal husbandry practices across India. He currently serves on the Boards of several Milk Producer CompaniesOrganisations, where he offers expert guidance to strengthen governance, operational efficiency, and farmer-centric development. His vision and insights continue to play a key role in shaping sustainable and inclusive growth in the dairy sector. ",
    ],
    experience: "35+ years in Automotive & Manufacturing",
    education: "Bachelor of Engineering, University of Madras",
    expertise: [
      "Manufacturing Excellence",
      "Quality Management",
      "Automotive Industry",
      "Operations Strategy",
    ],
    joinedYear: "2012",
  },
  {
    id: 3,
    name: "Dr. Rajeev Krishnan",
    title: "Executive Director",
    image: RajeevSir,
    fullImage: RajeevSir,
    bio: [
      "Dr. Rajeev Krishnan is a seasoned professional with over two decades of experience in the dairy sector and business management. He holds a Post Graduate Diploma in Agri-Business Management from IIM Ahmedabad, along with a degree in Veterinary Sciences & Animal Husbandry from Bombay Veterinary College and a Master's in Veterinary Pathology from the Veterinary College, Bangalore.",
      "Dr. Krishnan has demonstrated expertise across multiple domains, including Sales & Marketing, Strategy & Planning, IT & MIS, and Business Excellence. His career spans key roles with NDDB Dairy Services, PricewaterhouseCoopers, and the Kerala Livestock Development Board, where he contributed significantly to organizational growth and operational efficiency.",
    ],
    experience: "28+ years in Financial Services",
    education: "MBA Finance, Indian Institute of Management",
    expertise: [
      "Financial Strategy",
      "Risk Management",
      "Corporate Governance",
      "Mergers & Acquisitions",
    ],
    joinedYear: "2015",
  },
  {
    id: 4,
    name: "Shri S. Regupathi",
    title: "Executive Director, Operations, NDDB",
    image: RegupathiSir,
    fullImage: RegupathiSir,
    bio: [
      "Shri S. Regupathi brings over 30 years of expertise in finance and accounting, with a deep commitment to rural development. He currently serves as the Executive Director, Operations, at NDDB, where he plays a critical role in overseeing operations and driving strategic initiatives.",
      "Shri Regupathi holds an M. Com degree from ICWAI, and has a Master’s degree from IRMA, Anand. His leadership extends beyond NDDB, having held key positions such as Member and Trustee of ABRO (India), Member of the NDDB Foundation for Nutrition, and Management Committee Member of both the Jharkhand Milk Federation Ltd. and the West Assam Milk Union Ltd. (WAMUL).",
    ],
    experience: "25+ years in Retail & Consumer Goods",
    education: "Bachelor of Arts, University of Sussex",
    expertise: [
      "Retail Strategy",
      "Brand Management",
      "Consumer Insights",
      "Market Expansion",
    ],
    joinedYear: "2019",
  },
  {
    id: 5,
    name: "Shri T.M. Vijay Bhaskar",
    title: "Retired IAS",
    image: VijaySir,
    fullImage: VijaySir,
    bio: [
      "Shri T.M. Vijay Bhaskar is a distinguished Indian Administrative Service (IAS) officer of the 1983 batch with over 39 years of extensive experience across multiple domains, including district administration, rural development, education, and infrastructure.",
      "His leadership has been pivotal in driving initiatives related to sanitation, water sustainability, agricultural reforms, and governance. Shri Bhaskar holds a Master’s degree in Economics from the Birla Institute of Technology and Science, Pilani, and an MBA from the University of Birmingham, UK.",
      "He superannuated as the Chief Secretary of the Government of Karnataka and is currently serving as the Chairman of the Karnataka Administrative Reforms Committee 2. His expertise and strategic vision continue to play a key role in advancing public policy and rural development initiatives.",
    ],
    experience: "40+ years in Pharmaceuticals & Finance",
    education: "Bachelor of Science, Sydenham College",
    expertise: [
      "Healthcare Innovation",
      "Investment Strategy",
      "Pharmaceutical Research",
      "Corporate Development",
    ],
    joinedYear: "2014",
  },
  {
    id: 6,
    name: "Shri Manish Bandlish",
    title: "Managing Director, Mother Dairy Fruit and Vegetables Pvt Ltd",
    image: ManishSir,
    fullImage: ManishSir,
    bio: [
      "Shri Manish Bandlish is a seasoned professional with over 27 years of diverse experience in leading organizations across various industries, including Maruti Suzuki, Marico, Subhiksha, Metro Cash & Carry, and Umang Dairies.",
      "An Engineering Graduate from Jamia Millia Islamia University and an alumnus of IIM Lucknow, Shri Bandlish has demonstrated exceptional leadership in driving business growth, operational excellence, and strategic initiatives.",
      "His vast experience spans areas such as business development, operations, marketing and corporate strategy.",
    ],
    experience: "38+ years in Consumer Goods",
    education: "Bachelor of Commerce, University of Mumbai",
    expertise: [
      "Global Marketing",
      "Emerging Markets",
      "Sustainability",
      "Brand Building",
    ],
    joinedYear: "2016",
  },
  {
    id: 5,
    name: "Shri Abhijeet Bhattacharjee",
    title: "General Manager",
    image: AbhijitSir,
    fullImage: AbhijitSir,
    bio: [
      "Shri Abhijeet Bhattacharjee is a seasoned professional with a rich background in Rural Management, Law and Science. With over three decades of experience at NDDB, he has been instrumental in driving initiatives in advocacy, corporate communication, public relations and the promotion of cooperative institutions.",
      "Currently, he leads the Cooperative Services Group, focusing on strengthening dairy cooperatives and facilitating the growth of FPOs in sectors such as honey, manure and solar cooperatives.",
      "Shri Bhattacharjee also serves on the boards of several prominent dairy organizations, including the West Assam Milk Union, Jharkhand Milk Federation and Panchmahal Milk Union, contributing his expertise to their strategic development.",
    ],
    experience: "40+ years in Pharmaceuticals & Finance",
    education: "Bachelor of Science, Sydenham College",
    expertise: [
      "Healthcare Innovation",
      "Investment Strategy",
      "Pharmaceutical Research",
      "Corporate Development",
    ],
    joinedYear: "2014",
  },
  {
    id: 6,
    name: "Dr. Alka Mahajan",
    title: "",
    image: AlkaMaam,
    fullImage: AlkaMaam,
    bio: [
      "Dr. Alka Mahajan brings over 35 years of distinguished experience in technical education, academic leadership, and institutional governance. She currently serves as the Dean of NMIMS, Mumbai, overseeing the academic administration of seven engineering campuses across India.",
      "A Fulbright-Nehru Fellow (2023–24), Dr. Mahajan holds a PhD in Electronics & Communication and an M.Tech from CEDTI. She has served on the Board of Management of Nirma University and the General Council of the National Board of Accreditation (NBA).",
      "Her leadership contributed significantly to UGC’s 12th Five-Year Plan and capacity-building guidelines for women in higher education. Dr. Mahajan has also advised the UPSC as a subject expert. Her career reflects a commitment to academic excellence, gender equity, and systemic reform in technical education.",
    ],
    experience: "38+ years in Consumer Goods",
    education: "Bachelor of Commerce, University of Mumbai",
    expertise: [
      "Global Marketing",
      "Emerging Markets",
      "Sustainability",
      "Brand Building",
    ],
    joinedYear: "2016",
  },
  {
    id: 5,
    name: "Shri Durga Shanker Mishra",
    title: "",
    image: BDN2025,
    fullImage: BDN2025,
    bio: [
      "Shri Durga Shanker Mishra is a distinguished 1984 batch IAS officer who superannuated as the Chief Secretary of Uttar Pradesh. With decades of experience across Union and State Governments, he has held key leadership roles in Revenue, Urban Development, Health, Tourism, and Mining.",
      "As Secretary, Ministry of Housing and Urban Affairs, he led landmark initiatives such as the Swachh Bharat Mission (Urban), Smart Cities Mission, and Central Vista redevelopment.",
      "An alumnus of IIT Kanpur in Electrical Engineering, he also holds an MBA from the University of Western Sydney and a diploma in Public Policy from The Hague. He has widely published, hand has represented India at numerous global platforms. A strong advocate of good governance, he is also passionate about trekking, tourism, and teaching, he has also served as visiting faculty at the University of Guelph, Canada.",
    ],
    experience: "40+ years in Pharmaceuticals & Finance",
    education: "Bachelor of Science, Sydenham College",
    expertise: [
      "Healthcare Innovation",
      "Investment Strategy",
      "Pharmaceutical Research",
      "Corporate Development",
    ],
    joinedYear: "2014",
  },
  {
    id: 6,
    name: "Shri Kamlesh Trivedi",
    title: "",
    image: TrivediSir,
    fullImage: TrivediSir,
    bio: [
      "Shri Kamlesh Trivedi is a seasoned expert in animal breeding and dairy development, with a distinguished academic background including a Bachelor’s degree in Veterinary Sciences from Anand Veterinary College, a Postgraduate degree in Animal Breeding and Genetics from IVRI, Izatnagar, and a Doctorate in Business Management (Fellow) from IIM Bangalore.",
      "Over the years, he has played a pivotal role in shaping national strategies for genetic improvement in cattle and buffaloes. He is the visionary behind the Information Network for Animal Productivity and Health (INAPH), now widely adopted for livestock management.",
      "Shri Trivedi has worked with reputed organizations such as NDDB, ICAR, FAO, and the World Bank. His global exposure and extensive field experience enrich his contributions to the growth and governance of India’s dairy sector.",
    ],
    experience: "38+ years in Consumer Goods",
    education: "Bachelor of Commerce, University of Mumbai",
    expertise: [
      "Global Marketing",
      "Emerging Markets",
      "Sustainability",
      "Brand Building",
    ],
    joinedYear: "2016",
  },
];

const StyledCard = styled(Card)(({ backgroundImage }) => ({
  backgroundColor: "#1e1e1e",
  border: "1px solid #333333",
  borderRadius: "12px",
  height: "100%",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  cursor: "pointer",
  overflow: "hidden",
  position: "relative",

  "&:before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0,
    transition: "opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    zIndex: 1,
  },
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
    borderColor: "#444444",
    "&:before": {
      opacity: 0.2,
    },
  },
  "& .MuiCardContent-root": {
    position: "relative",
    zIndex: 2,
  },
}));

const DirectorImage = styled("img")({
  width: "300px",
  height: "280px",
  objectFit: "cover",
  borderRadius: "8px",
  marginBottom: "20px",
  filter: "grayscale(10%)",
  transition: "all 0.3s ease",
});

const ArrowButton = styled(IconButton)({
  color: "#ffa726",
  padding: "8px",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "rgba(255, 167, 38, 0.1)",
    transform: "translateX(4px)",
  },
});

const ModalContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: "1000px",
  height: "90vh",
  maxHeight: "600px",
  backgroundColor: "#1e1e1e",
  borderRadius: "16px",
  boxShadow: "0 24px 48px rgba(0, 0, 0, 0.6)",
  border: "1px solid #333333",
  outline: "none",
  overflow: "hidden",
  display: "flex",
  flexDirection: "row",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    height: "auto",
    maxHeight: "90vh",
  },
}));

const ModalContent = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: "40px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  position: "relative",
  [theme.breakpoints.down("md")]: {
    padding: "24px",
  },
}));

const ModalImageSection = styled(Box)(({ theme }) => ({
  width: "400px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "300px",
  },
}));

const CloseButton = styled(IconButton)({
  position: "absolute",
  top: "20px",
  right: "20px",
  color: "#ffffff",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  zIndex: 10,
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
});

const DirectorName = styled(Typography)({
  color: "#bd8f59",
  fontWeight: 600,
  fontSize: "2.5rem",
  marginBottom: "8px",
  lineHeight: 1.2,
});

const DirectorTitle = styled(Typography)({
  color: "#888888",
  fontSize: "1.1rem",
  marginBottom: "32px",
  fontWeight: 400,
});

const BioText = styled(Typography)({
  color: "#ffffff",
  fontSize: "1rem",
  lineHeight: 1.7,
  marginBottom: "24px",
});

const AccentLine = styled(Box)({
  width: "60px",
  height: "3px",
  backgroundColor: "#ffa726",
  marginTop: "32px",
});

const BoardOfDirectors = () => {
  const [selectedDirector, setSelectedDirector] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Split directors array
  const [featured, ...rest] = directors;

  const handleDirectorClick = (director) => {
    setSelectedDirector(director);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedDirector(null), 300);
  };

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#0f0f0f", py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 8, textAlign: "center" }}>
          <Typography
            variant="h2"
            sx={{ color: "#ffffff", fontWeight: 300, mb: 2 }}
          >
            Board of Directors
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#888888",
              fontWeight: 300,
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            Meet the Visionaries Behind Our Mission
          </Typography>
        </Box>

        {/* Featured Director Row */}
        <Grid container spacing={3} justifyContent="center" sx={{ mb: 2 }}>
          <Grid
            item
            xs={12}
            sm={10}
            md={8}
            lg={8}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <StyledCard
              backgroundImage={featured.fullImage}
              onClick={() => handleDirectorClick(featured)}
            >
              <CardContent
                sx={{
                  p: { xs: 2, sm: 4 },
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "center",
                  gap: 4,
                  height: { xs: "auto", sm: 360 }, // same as other cards
                }}
              >
                {/* Left: Image */}
                <Box
                  sx={{
                    flex: "0 0 300px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <DirectorImage src={featured.image} alt={featured.name} />
                </Box>
                {/* Right: Content */}
                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    minWidth: 0,
                    height: { xs: "auto", sm: "280px" }, // image ki height ke barabar
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      mb: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#fff",
                        fontWeight: 600,
                        fontSize: "1.5rem",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {featured.name}
                    </Typography>
                    <ArrowButton onClick={() => handleDirectorClick(featured)}>
                      <ArrowForward fontSize="small" />
                    </ArrowButton>
                  </Box>
                  <Typography
                    sx={{
                      color: "#ffa726",
                      fontWeight: 500,
                      mb: 1,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {featured.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#ccc",
                      fontSize: "1rem",
                      lineHeight: 1.5,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 6,
                      WebkitBoxOrient: "vertical",
                      maxHeight: "9em", // 1.5em * 6 lines
                    }}
                  >
                    {featured.bio[0]}
                  </Typography>
                </Box>
              </CardContent>
            </StyledCard>
          </Grid>
        </Grid>

        {/* Rest of Directors in 3 per row */}
        <Grid container spacing={3} justifyContent="center">
          {rest.map((director) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
              key={director.id}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <StyledCard
                backgroundImage={director.fullImage}
                onClick={() => handleDirectorClick(director)}
              >
                <CardContent
                  sx={{
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <DirectorImage src={director.image} alt={director.name} />
                  <Box sx={{ mt: "auto", width: "100%" }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 1,
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#fff",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          maxWidth: "300px",
                        }}
                      >
                        {director.name}
                      </Typography>
                      <ArrowButton
                        onClick={() => handleDirectorClick(director)}
                      >
                        <ArrowForward fontSize="small" />
                      </ArrowButton>
                    </Box>
                    <Typography
                      sx={{
                        color: "#ccc",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "300px",
                      }}
                    >
                      {director.title}
                    </Typography>
                  </Box>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          sx: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
        }}
      >
        <Fade in={modalOpen}>
          <ModalContainer>
            {selectedDirector && (
              <>
                <CloseButton onClick={handleCloseModal}>
                  <Close />
                </CloseButton>

                <ModalContent>
                  <DirectorName>{selectedDirector.name}</DirectorName>
                  <DirectorTitle>{selectedDirector.title}</DirectorTitle>
                  <BioText
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
                        background: "linear-gradient(45deg, #a46c35, #bd8f59)",

                        borderRadius: "3px",
                      },
                      "&::-webkit-scrollbar-thumb:hover": {
                        background: "linear-gradient(45deg, #bd8f59, #a46c35)",
                      },
                    }}
                  >
                    {Array.isArray(selectedDirector.bio) ? (
                      selectedDirector.bio.map((para, idx) => (
                        <BioText key={idx}>{para}</BioText>
                      ))
                    ) : (
                      <BioText>{selectedDirector.bio}</BioText>
                    )}
                  </BioText>
                  <AccentLine />
                </ModalContent>
                <ModalImageSection
                  sx={{
                    backgroundImage: `url(${selectedDirector.image})`,
                  }}
                />
              </>
            )}
          </ModalContainer>
        </Fade>
      </Modal>
    </Box>
  );
};

export default BoardOfDirectors;
