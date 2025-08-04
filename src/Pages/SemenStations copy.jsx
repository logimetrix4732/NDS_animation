import React, { useState } from "react";
import AboutSection7 from "../components/AboutUs/AboutSection7";
import AboutSection17 from "../components/AboutUs/AboutSection17";
import CommonBanner from "../components/BannersComponents/CommonBanner";
import MilkIndiaMap from "../components/MapComponent/MilkIndiaMap";
import { Box, Grid, Typography } from "@mui/material";
import AnimatedText from "../components/AnimatedText";

const SemenStations = () => {
  const [hoveredState, setHoveredState] = useState(null);
  const dummyCompanyData = {
    "Uttar Pradesh": [
      {
        "Balinee Milk Producer Company": "https://balinee.com",
        "Harit Pradesh Milk Producer Company": "https://haritpradesh.com",
        "Kashee Milk Producer Company": "https://kashee.com",
        "Saahaj Milk Producer Company": "https://saahaj.com",
        "Shwetdhara Milk Producer Company": "https://shwetdhara.com",
        "Srijanee Milk Producer Company": "https://srijanee.com",
        "Saamarthya Milk Producer Company": "https://saamarthya.com",
      },
    ],
    "Madhya Pradesh": [
      "Saamarthya Milk Producer Company",
      "Harit Pradesh Milk Producer Company",
    ],
    Gujarat: ["Shwetdhara Milk Producer Company"],
  };
  return (
    <div>
      <CommonBanner
        title="Animal Productivity Services"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Animal Productivity Services" },
        ]}
      />
      <AboutSection17 />
      <AboutSection7 />
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid size={8}>
          <MilkIndiaMap setHoveredState={setHoveredState} />
        </Grid>
        <Grid size={4}>
          <Box>
            {hoveredState && dummyCompanyData[hoveredState] ? (
              <Box>
                <Typography variant="h6" gutterBottom>
                  <AnimatedText
                    text={hoveredState}
                    tag="h3"
                    className="sec-title mb-20 heading text-anime-style-3"
                    width="100%"
                  />
                </Typography>
                {dummyCompanyData[hoveredState].map((company, idx) => (
                  <Box
                    key={idx}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={1}
                  >
                    <p className="sec-text mb-10 wow fadeInUp">{company}</p>
                    <Typography
                      variant="body2"
                      color="primary"
                      sx={{ cursor: "pointer" }}
                    >
                      Read More →
                    </Typography>
                  </Box>
                ))}
              </Box>
            ) : (
              <Typography variant="body2" sx={{ color: "#999" }}>
                Hover over a covered state to see companies
              </Typography>
            )}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default SemenStations;
