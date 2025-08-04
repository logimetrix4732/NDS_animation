import React, { useState } from "react";
import AboutSection7 from "../components/AboutUs/AboutSection7";
import AboutSection17 from "../components/AboutUs/AboutSection17";
import CommonBanner from "../components/BannersComponents/CommonBanner";
import MilkIndiaMap from "../components/MapComponent/MilkIndiaMap";
import { Box, Grid, Typography, Link, Fade, Slide } from "@mui/material";

const SemenStations = () => {
  const [hoveredState, setHoveredState] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  const dummyCompanyData = {
    "Uttar Pradesh": [
      {
        "Balinee Milk Producer Organisation": "https://www.balineemilk.com",
        "Harit Pradesh Milk Producer Organisation":
          "https://www.haritpmilk.com",
        "Kashee Milk Producer Organisation": "https://www.kasheemilk.com",
        "Saahaj Milk Producer Organisation": "https://saahajmilk.com",
        "Shwetdhara Milk Producer Organisation":
          "https://www.shwetdharamilk.com",
        "Srijanee Milk Producer Organisation": "https://www.srijaneemilk.com",
        "Saamarthya Milk Producer Organisation":
          "https://www.saamarthyamilk.com",
      },
    ],
    "Madhya Pradesh": [
      {
        "Maalav Mahila Milk Producer Organisation":
          "https://www.maalavmilk.com",
        "Muktaa Mahila Milk Producer Organisation": "https://muktaamilk.com",
      },
    ],
    Gujarat: [
      {
        "Maahi Milk Producer Organisation": "https://www.maahimilk.com",
      },
    ],
    Bihar: [
      {
        "Bapudham Milk Producer Organisation": "https://www.bapudhammilk.com",
        "Kaushikee Mahila Milk Producer Organisation":
          "https://www.kaushikeemilk.com",
      },
    ],
    Rajasthan: [
      {
        "Asha Mahila Milk Producer Company": "https://www.ashamilk.com",
        "Paayas Milk Producer Company": "https://www.paayasmilk.com",
        "Sakhi Mahila Milk Producer Company": "https://www.sakhimilk.com",
        "Ujalaa Milk Producer Company": "https://www.ujalaamilk.com",
      },
    ],
    "Andhra Pradesh": [
      {
        "Shreeja Mahila Milk Producer Organisation": "https://shreejamilk.com",
      },
    ],
    Punjab: [
      {
        "Baani Milk Producer Organisation": "https://baanimilk.com",
      },
    ],
    Maharashtra: [
      {
        "Marathvarhad Milk Producer Organisation":
          "https://www.nddbdairyservices.com/mpcs-operationalized",
        "Indujaa Mahila Milk Producer Organisation":
          "https://www.indujaamilk.com",
      },
    ],
    Haryana: [
      {
        "Ruhaanii Milk Producer Organisation": "https://www.ruhaaniimilk.com",
      },
    ],
  };

  const handleStateClick = (stateName) => {
    if (selectedState === stateName) {
      setSelectedState(null);
    } else {
      setSelectedState(stateName);
    }
  };

  const handleStateHover = (stateName) => {
    setHoveredState(stateName);
  };

  const handleMapMouseLeave = () => {
    if (!selectedState) {
      setHoveredState(null);
    }
  };

  const currentState = hoveredState || selectedState;

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

      <Box
        sx={{
          padding: "10px 0",
          background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
          minHeight: "100vh",
        }}
      >
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
          <Grid item size={8}>
            <Fade in timeout={1000}>
              <Box
                sx={{
                  background: "white",
                  borderTopRightRadius: "20px",
                  borderBottomRightRadius: "20px",
                  padding: "30px",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s ease",
                }}
              >
                <MilkIndiaMap
                  setHoveredState={setHoveredState}
                  onStateClick={handleStateClick}
                  onStateHover={handleStateHover}
                  onMapMouseLeave={handleMapMouseLeave}
                  selectedState={selectedState}
                  hoveredState={hoveredState}
                />
              </Box>
            </Fade>
          </Grid>

          <Grid item size={4}>
            <Slide direction="left" in timeout={800}>
              <Box
                sx={{
                  background:
                    "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
                  borderTopLeftRadius: "20px",
                  borderBottomLeftRadius: "20px",
                  padding: "30px",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                  height: "fit-content",
                  position: "sticky",
                  top: "20px",
                  border: "1px solid rgba(255,255,255,0.3)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                  },
                }}
              >
                {currentState ? (
                  <Fade in timeout={600}>
                    <Box>
                      <Box
                        sx={{
                          background:
                            "linear-gradient(135deg, var(--primary-color) 0%, var(--title-color) 100%)",
                          borderRadius: "15px",
                          padding: "20px",
                          marginBottom: "25px",
                          textAlign: "center",
                          boxShadow: "0 10px 20px rgba(164, 108, 53, 0.3)",
                          position: "relative",
                        }}
                      >
                        <Typography
                          variant="h3"
                          sx={{
                            color: "white",
                            fontWeight: 700,
                            fontSize: "35px",
                            textShadow: "0 2px 4px rgba(0,0,0,0.2)",
                            margin: 0,
                            lineHeight: 1.2,
                            wordBreak: "break-word",
                            display: "inline-block",
                            whiteSpace: "pre",
                            marginRight: "8px",
                            opacity: 1,
                            transform: "none",
                          }}
                        >
                          {currentState}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "rgba(255,255,255,0.9)",
                            fontSize: "14px",
                            marginTop: "8px",
                          }}
                        >
                          Milk Producer Organisations
                        </Typography>
                      </Box>

                      {dummyCompanyData[currentState] &&
                        Object.entries(dummyCompanyData[currentState][0]).map(
                          ([name, link], idx) => (
                            <Fade in timeout={800 + idx * 100} key={idx}>
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  padding: "18px 15px",
                                  margin: "8px 0",
                                  borderRadius: "12px",
                                  border: "1px solid #e8e8e8",
                                  background:
                                    "linear-gradient(145deg, #ffffff 0%, #fafafa 100%)",
                                  transition: "all 0.3s ease",
                                  cursor: "pointer",
                                  "&:hover": {
                                    background:
                                      "linear-gradient(145deg, #f8f9fa 0%, #e9ecef 100%)",
                                    transform: "translateX(5px)",
                                    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                                    borderColor: "var(--title-color)",
                                  },
                                }}
                              >
                                {/* Animated Orange circle icon */}
                                <Box
                                  sx={{
                                    width: "14px",
                                    height: "14px",
                                    borderRadius: "50%",
                                    background:
                                      "linear-gradient(145deg, var(--title-color) 0%, var(--primary-color) 100%)",
                                    marginRight: "18px",
                                    flexShrink: 0,
                                    boxShadow:
                                      "0 4px 8px rgba(164, 108, 53, 0.3)",
                                    animation: "pulse 2s infinite",
                                    "@keyframes pulse": {
                                      "0%": {
                                        transform: "scale(1)",
                                        opacity: 1,
                                      },
                                      "50%": {
                                        transform: "scale(1.1)",
                                        opacity: 0.8,
                                      },
                                      "100%": {
                                        transform: "scale(1)",
                                        opacity: 1,
                                      },
                                    },
                                  }}
                                />

                                {/* Company name */}
                                <Typography
                                  variant="body1"
                                  sx={{
                                    flex: 1,
                                    color: "#2c3e50",
                                    fontWeight: 600,
                                    fontSize: "15px",
                                    lineHeight: 1.4,
                                    transition: "color 0.3s ease",
                                  }}
                                >
                                  {name}
                                </Typography>

                                {/* Read More link */}
                                <Link
                                  href={link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  sx={{
                                    color: "white",
                                    textDecoration: "none",
                                    fontSize: "13px",
                                    fontWeight: 600,
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "8px 12px",
                                    borderRadius: "8px",
                                    background:
                                      "linear-gradient(145deg, var(--primary-color) 0%, var(--title-color) 100%)",
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                      background:
                                        "linear-gradient(145deg, var(--title-color) 0%, var(--primary-color) 100%)",
                                      color: "white",
                                      transform: "scale(1.05)",
                                      boxShadow:
                                        "0 4px 12px rgba(164, 108, 53, 0.4)",
                                    },
                                  }}
                                >
                                  Read More
                                  <Box
                                    component="span"
                                    sx={{
                                      marginLeft: "6px",
                                      fontSize: "14px",
                                      fontWeight: "bold",
                                      transition: "transform 0.3s ease",
                                    }}
                                  >
                                    →
                                  </Box>
                                </Link>
                              </Box>
                            </Fade>
                          )
                        )}
                    </Box>
                  </Fade>
                ) : (
                  <Fade in timeout={600}>
                    <Box
                      sx={{
                        textAlign: "center",
                        padding: "60px 20px",
                        color: "#7f8c8d",
                      }}
                    >
                      <Box
                        sx={{
                          width: "80px",
                          height: "80px",
                          borderRadius: "50%",
                          background:
                            "linear-gradient(145deg, #ecf0f1 0%, #bdc3c7 100%)",
                          margin: "0 auto 20px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          animation: "float 3s ease-in-out infinite",
                          "@keyframes float": {
                            "0%, 100%": {
                              transform: "translateY(0px)",
                            },
                            "50%": {
                              transform: "translateY(-10px)",
                            },
                          },
                        }}
                      >
                        <Typography variant="h4" sx={{ color: "#95a5a6" }}>
                          🗺️
                        </Typography>
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#34495e",
                          fontWeight: 600,
                          marginBottom: "10px",
                        }}
                      >
                        Explore the Map
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#7f8c8d",
                          lineHeight: 1.6,
                        }}
                      >
                        Hover over any state to discover milk producer
                        Organisations
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#95a5a6",
                          fontSize: "12px",
                          marginTop: "10px",
                          fontStyle: "italic",
                        }}
                      >
                        Click on a state to keep it selected
                      </Typography>
                    </Box>
                  </Fade>
                )}
              </Box>
            </Slide>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default SemenStations;
