import React from "react";
import Footage from "../../Images/Videos/dashboardFootage1.mp4";
import { Box, Typography } from "@mui/material";
import backgroundImage from "../../Images/careerintrobanner.png";
const CarrerVideoSection = () => {
  return (
    <>
      <div
        className="hero-1"
        id="hero"
        style={{ position: "relative", height: "100vh", overflow: "hidden" }}
      >
        <video
          src={Footage}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "190px",
            right: "0",
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
            animation: "fadeInRight 1s ease-out",
          }}
        >
          <h4
            style={{
              color: "#fff",
              fontSize: "1.8rem",
              background:
                "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.3))",
              padding: "16px 28px",
              borderRadius: "10px 0px 0px 10px",
              width: "fit-content",
              textAlign: "right",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
              backdropFilter: "blur(4px)",
            }}
          >
            Build a Career That <br /> Creates Real Impact
          </h4>
        </div>
      </div>
      <Box
        sx={{
          height: "472.5px",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          overflow: "hidden",
          width: "100%",
          height: "472.5px",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
        }}
      >
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
        <Box sx={{ zIndex: 2, maxWidth: "800px", px: 2 }}>
          <Typography variant="h5" color="white" fontWeight={600}>
            <strong> People at the Core of Our Purpose</strong> <br /> At NDDB
            Dairy Services (NDS), people are not just part of the organization —
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
