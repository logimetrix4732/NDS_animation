import React from "react";
import OurExperties from "../components/Sliders/OurFeatures9";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import OurExperties8 from "../components/Sliders/OurExperties8";
import { Box, Typography, Divider, Button } from "@mui/material";
import CarrerCardSection from "../components/CarrerComponents/CarrerCardSection";
import CarrerVideoSection from "../components/CarrerComponents/CarrerVideoSection";
import EmployeeBenefitsGrid from "../components/CarrerComponents/EmployeeBenefitsGrid";
import { Link } from "react-router-dom";

const CarrerPage = () => {
  return (
    <React.Fragment>
      <CarrerVideoSection />
      <CarrerCardSection />
      <EmployeeBenefitsGrid />
      <OurExperties8 />
      <OurExperties />
      <Box
        sx={{
          px: { xs: 2, sm: 4, md: 6 },
          py: { xs: 4, sm: 6 },
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            Current Openings
          </Typography>

          <div className="mt-35 wow fadeInUp" data-wow-delay=".5s">
            <Link to="/carrer" className="th-btn th-icon">
              Apply Now <i className="fa-light fa-arrow-right-long"></i>
            </Link>
          </div>
        </Box>

        <Divider />
      </Box>
    </React.Fragment>
  );
};

export default CarrerPage;
