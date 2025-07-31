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
} from "@mui/material";
import { ArrowForward, Close } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import ChairmanSir from "../../Images/BoardofDirectorsImg/Chairman-Sir-01.png";
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
    title: "Chairman",
    image: ChairmanSir,
    fullImage: ChairmanSir,
    bio: "A visionary leader with over 30 years of experience in technology and business transformation. Known for driving innovation and sustainable growth across global markets.",
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
    title: "Director",
    image: DevanandSir,
    fullImage: DevanandSir,
    bio: "Distinguished business leader with extensive experience in automotive and manufacturing industries. Champion of quality excellence and operational efficiency.",
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
    title: "Director",
    image: RajeevSir,
    fullImage: RajeevSir,
    bio: "Seasoned executive with deep expertise in financial services and risk management. Recognized for building resilient organizations and driving sustainable growth.",
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
    title: "Chairman",
    image: RegupathiSir,
    fullImage: RegupathiSir,
    bio: "Accomplished business leader with a strong track record in retail and consumer goods. Known for strategic vision and commitment to ethical business practices.",
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
    title: "Independent Director",
    image: VijaySir,
    fullImage: VijaySir,
    bio: "Renowned entrepreneur and investor with expertise in pharmaceuticals and financial services. Recognized for building world-class organizations and driving innovation.",
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
    title: "Independent Director",
    image: ManishSir,
    fullImage: ManishSir,
    bio: "Global business executive with extensive experience in consumer goods and emerging markets. Champion of sustainable business practices and inclusive growth.",
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
    title: "Independent Director",
    image: AbhijitSir,
    fullImage: AbhijitSir,
    bio: "Renowned entrepreneur and investor with expertise in pharmaceuticals and financial services. Recognized for building world-class organizations and driving innovation.",
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
    title: "Independent Director",
    image: AlkaMaam,
    fullImage: AlkaMaam,
    bio: "Global business executive with extensive experience in consumer goods and emerging markets. Champion of sustainable business practices and inclusive growth.",
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
    title: "Independent Director",
    image: BDN2025,
    fullImage: BDN2025,
    bio: "Renowned entrepreneur and investor with expertise in pharmaceuticals and financial services. Recognized for building world-class organizations and driving innovation.",
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
    title: "Independent Director",
    image: TrivediSir,
    fullImage: TrivediSir,
    bio: "Global business executive with extensive experience in consumer goods and emerging markets. Champion of sustainable business practices and inclusive growth.",
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
            Leadership excellence driving innovation and sustainable growth
          </Typography>
        </Box>

        <Grid container spacing={3} justifyContent="center">
          {directors.map((director) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={4}
              key={director.id}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <StyledCard backgroundImage={director.fullImage}>
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
                      <Typography sx={{ color: "#fff", fontWeight: 500 }}>
                        {director.name}
                      </Typography>
                      <ArrowButton
                        onClick={() => handleDirectorClick(director)}
                      >
                        <ArrowForward fontSize="small" />
                      </ArrowButton>
                    </Box>
                    <Typography sx={{ color: "#ccc" }}>
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
                  <BioText>{selectedDirector.bio}</BioText>
                  <BioText>
                    Over his career spanning{" "}
                    {selectedDirector.experience.split(" ")[0]}, he has held key
                    positions in{" "}
                    {selectedDirector.expertise
                      .slice(0, 2)
                      .join(" and ")
                      .toLowerCase()}
                    . His educational background includes{" "}
                    {selectedDirector.education.toLowerCase()}.
                  </BioText>
                  <BioText>
                    As a board member since {selectedDirector.joinedYear}, he
                    continues to contribute his expertise in{" "}
                    {selectedDirector.expertise
                      .slice(-2)
                      .join(" and ")
                      .toLowerCase()}{" "}
                    to drive excellence.
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
