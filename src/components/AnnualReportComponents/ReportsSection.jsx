import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import { Download } from "@mui/icons-material";
import { getFetch } from "../../Api/Api";
import "./ReportsSection.css";

export default function ReportsSection() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnnualReports = async () => {
      try {
        setLoading(true);
        const response = await getFetch(
          `${
            import.meta.env.VITE_API_BASE_URL
          }/getPublication?publicationType=Annual Reports`
        );

        if (response?.data?.data) {
          const mappedData = response.data.data.map((item) => ({
            id: item.id,
            title: item.name,
            year: item.year || "N/A",
            image:
              item.thumbnail &&
              item.thumbnail !== "null" &&
              item.thumbnail !== "" &&
              item.thumbnail !== null
                ? `${import.meta.env.VITE_API_BASE_URL}/files/${item.thumbnail}`
                : "https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg",
            pdfHindi: item.pdfHindi,
            pdfEnglish: item.pdfEnglish,
            isActive: item.isActive,
          }));
          setReports(mappedData);
        } else {
          setReports([]);
        }
      } catch (error) {
        console.error("Error fetching Annual Reports:", error);
        setReports([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAnnualReports();
  }, []);

  const handleDownload = (pdfFile, language) => {
    if (pdfFile) {
      window.open(`${import.meta.env.VITE_API_BASE_URL}/${pdfFile}`, "_blank");
    }
  };

  return (
    <div
      id="about-sec"
      className="about-area position-relative overflow-hidden space"
    >
      <div className="container" id="about-sec5">
        <Box className="card-container">
          {loading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "60vh",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  maxWidth: 400,
                  animation: "fadeInUp 0.8s ease-out",
                  "@keyframes fadeInUp": {
                    "0%": {
                      opacity: 0,
                      transform: "translateY(30px)",
                    },
                    "100%": {
                      opacity: 1,
                      transform: "translateY(0)",
                    },
                  },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: 120,
                    height: 120,
                    marginBottom: 3,
                  }}
                >
                  {/* Outer rotating ring */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      border: "3px solid transparent",
                      borderTop: "3px solid #bd8f59",
                      borderRight: "3px solid rgba(189, 143, 89, 0.3)",
                      animation: "spin 1.5s linear infinite",
                      "@keyframes spin": {
                        "0%": { transform: "rotate(0deg)" },
                        "100%": { transform: "rotate(360deg)" },
                      },
                    }}
                  />

                  {/* Inner pulsing circle */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, #bd8f59 0%, #a97b4b 100%)",
                      animation: "pulse 2s ease-in-out infinite",
                      "@keyframes pulse": {
                        "0%, 100%": {
                          transform: "translate(-50%, -50%) scale(1)",
                          opacity: 0.8,
                        },
                        "50%": {
                          transform: "translate(-50%, -50%) scale(1.1)",
                          opacity: 1,
                        },
                      },
                    }}
                  />

                  {/* Center icon */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      zIndex: 2,
                    }}
                  >
                    <Box
                      component="svg"
                      sx={{
                        width: 30,
                        height: 30,
                        color: "#fff",
                        animation: "bounce 1.5s ease-in-out infinite",
                        "@keyframes bounce": {
                          "0%, 100%": { transform: "translateY(0)" },
                          "50%": { transform: "translateY(-5px)" },
                        },
                      }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </Box>
                  </Box>
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    color: "#8B5E34",
                    fontWeight: 600,
                    marginBottom: 1,
                    animation: "slideInUp 0.6s ease-out 0.2s both",
                    "@keyframes slideInUp": {
                      "0%": {
                        opacity: 0,
                        transform: "translateY(20px)",
                      },
                      "100%": {
                        opacity: 1,
                        transform: "translateY(0)",
                      },
                    },
                  }}
                >
                  Loading Annual Reports
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: "#666",
                    animation: "slideInUp 0.6s ease-out 0.4s both",
                    "@keyframes slideInUp": {
                      "0%": {
                        opacity: 0,
                        transform: "translateY(20px)",
                      },
                      "100%": {
                        opacity: 1,
                        transform: "translateY(0)",
                      },
                    },
                  }}
                >
                  Please wait while we fetch the latest reports...
                </Typography>

                {/* Loading dots */}
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    marginTop: 2,
                    animation: "slideInUp 0.6s ease-out 0.6s both",
                    "@keyframes slideInUp": {
                      "0%": {
                        opacity: 0,
                        transform: "translateY(20px)",
                      },
                      "100%": {
                        opacity: 1,
                        transform: "translateY(0)",
                      },
                    },
                  }}
                >
                  {[0, 1, 2].map((index) => (
                    <Box
                      key={index}
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: "#bd8f59",
                        animation: `bounceDot 1.4s ease-in-out infinite ${
                          index * 0.2
                        }s`,
                        "@keyframes bounceDot": {
                          "0%, 80%, 100%": {
                            transform: "scale(0.8)",
                            opacity: 0.5,
                          },
                          "40%": {
                            transform: "scale(1)",
                            opacity: 1,
                          },
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          ) : reports.length === 0 ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  maxWidth: 400,
                  animation: "fadeInUp 0.8s ease-out",
                  "@keyframes fadeInUp": {
                    "0%": {
                      opacity: 0,
                      transform: "translateY(30px)",
                    },
                    "100%": {
                      opacity: 1,
                      transform: "translateY(0)",
                    },
                  },
                }}
              >
                <Box
                  sx={{
                    width: 120,
                    height: 120,
                    marginBottom: 3,
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    animation: "pulse 2s infinite",
                    "@keyframes pulse": {
                      "0%": {
                        transform: "scale(1)",
                        boxShadow: "0 0 0 0 rgba(189, 143, 89, 0.4)",
                      },
                      "70%": {
                        transform: "scale(1.05)",
                        boxShadow: "0 0 0 10px rgba(189, 143, 89, 0)",
                      },
                      "100%": {
                        transform: "scale(1)",
                        boxShadow: "0 0 0 0 rgba(189, 143, 89, 0)",
                      },
                    },
                  }}
                >
                  <Box
                    component="svg"
                    sx={{
                      width: 60,
                      height: 60,
                      color: "#bd8f59",
                    }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </Box>
                </Box>

                <Typography
                  variant="h5"
                  sx={{
                    color: "#8B5E34",
                    fontWeight: 600,
                    marginBottom: 2,
                    animation: "slideInUp 0.6s ease-out 0.2s both",
                    "@keyframes slideInUp": {
                      "0%": {
                        opacity: 0,
                        transform: "translateY(20px)",
                      },
                      "100%": {
                        opacity: 1,
                        transform: "translateY(0)",
                      },
                    },
                  }}
                >
                  No Annual Reports Available
                </Typography>

                <Box
                  sx={{
                    animation: "slideInUp 0.6s ease-out 0.4s both",
                    "@keyframes slideInUp": {
                      "0%": {
                        opacity: 0,
                        transform: "translateY(20px)",
                      },
                      "100%": {
                        opacity: 1,
                        transform: "translateY(0)",
                      },
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 1,
                      px: 3,
                      py: 1.5,
                      borderRadius: "20px",
                      background:
                        "linear-gradient(135deg, rgba(189, 143, 89, 0.1) 0%, rgba(139, 94, 52, 0.1) 100%)",
                      border: "1px solid rgba(189, 143, 89, 0.2)",
                      color: "#bd8f59",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        background:
                          "linear-gradient(135deg, rgba(189, 143, 89, 0.15) 0%, rgba(139, 94, 52, 0.15) 100%)",
                        transform: "translateY(-2px)",
                        boxShadow: "0 4px 12px rgba(189, 143, 89, 0.2)",
                      },
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: "#bd8f59",
                        animation: "pulse 2s infinite",
                      }}
                    />
                    Status: Empty
                  </Box>
                </Box>
              </Box>
            </Box>
          ) : (
            reports.map((report, index) => (
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0px 8px 30px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={report.image}
                  alt={report.title}
                  sx={{
                    height: 220,
                    width: "100%",
                    objectFit: "cover",
                  }}
                />

                <CardContent
                  sx={{
                    p: 2.5,
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{
                        backgroundColor: "#a97b4b",
                        display: "inline-block",
                        px: 1.5,
                        py: 0.5,
                        borderRadius: "6px",
                        fontWeight: 500,
                        fontSize: "0.8rem",
                        color: "#fff",
                      }}
                    >
                      Annual Report {report.year}
                    </Typography>

                    <Typography
                      variant="h6"
                      sx={{ mt: 1.5, fontWeight: "bold", color: "#8B5E34" }}
                    >
                      {report.title}
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", gap: 1.5, mt: 2 }}>
                    <Button
                      variant="contained"
                      startIcon={<Download />}
                      onClick={() => handleDownload(report.pdfHindi, "Hindi")}
                      disabled={!report.pdfHindi}
                      sx={{
                        backgroundColor: "#bd8f59",
                        color: "#fff",
                        textTransform: "none",
                        borderRadius: "8px",
                        "&:hover": { backgroundColor: "#a97b4b" },
                      }}
                    >
                      हिंदी
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<Download />}
                      onClick={() =>
                        handleDownload(report.pdfEnglish, "English")
                      }
                      disabled={!report.pdfEnglish}
                      sx={{
                        color: "#bd8f59",
                        borderColor: "#bd8f59",
                        textTransform: "none",
                        borderRadius: "8px",
                        "&:hover": { borderColor: "#a97b4b", color: "#a97b4b" },
                      }}
                    >
                      English
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            ))
          )}
        </Box>
      </div>
    </div>
  );
}
