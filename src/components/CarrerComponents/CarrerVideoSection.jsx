import React from "react";
import { Box, Typography } from "@mui/material";
import backgroundImage from "../../Images/careerintrobanner.png";
import DSC_2347 from "../../Images/CarrerImg/DSC_2347.jpg";

const CarrerVideoSection = () => {
  return (
    <>
      {/* Hero Section with Image */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "60vh", md: "92vh" },
          width: "100%",
          overflow: "hidden",
          backgroundImage: `url(${DSC_2347})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
        }}
      >
        {/* Overlay Text */}
        <Box
          sx={{
            mb: { xs: 4, md: 12 },
            mr: { xs: 0, md: 0 },
            background:
              "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.3))",
            p: { xs: 2, md: "16px 28px" },
            borderRadius: "10px 0px 0px 10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            backdropFilter: "blur(4px)",
            textAlign: "right",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "#fff",
              fontSize: { xs: "1.2rem", md: "1.8rem" },
              fontWeight: 600,
              lineHeight: 1.4,
            }}
          >
            Build a Career That <br /> Creates Real Impact
          </Typography>
        </Box>
      </Box>

      {/* Second Section */}
      <Box
        sx={{
          height: { xs: "auto", md: "472.5px" },
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          overflow: "hidden",
          width: "100%",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          py: { xs: 6, md: 0 },
        }}
      >
        {/* Dark Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 1,
          }}
        />
        {/* Content */}
        <Box sx={{ zIndex: 2, maxWidth: "800px", px: 2 }}>
          <Typography variant="h5" color="white" fontWeight={600}>
            <strong> People at the Core of Our Purpose</strong> <br /> At NDDB
            Dairy Services (NDS), people are not just part of the organisation —
            they are the driving force behind everything we do. They embody our
            mission, fuel innovation, and enable us to make a lasting impact on
            India’s dairy sector.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default CarrerVideoSection;
