import React, { useState, useMemo, useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  CircularProgress,
  Alert,
} from "@mui/material";
import { motion } from "framer-motion";
import TenderFilters from "./TenderFilters";
import TenderCard from "./TenderCard";
import LoginModal from "./LoginModal";
import { getFetch } from "../../Api/Api";

const mockTenders = [
  {
    id: "1",
    title: "Digital Infrastructure Modernization Project",
    status: "Active",
    description:
      "Comprehensive upgrade of city digital infrastructure including network modernization, cloud migration, and cybersecurity implementation.",
    startDate: "2024-02-01",
    endDate: "2024-03-15",
    lastDate: "2024-03-10",
    participants: 24,
    category: "Technology",
    estimatedValue: "$2,500,000",
    location: "Reference ID",
    documentsCount: 8,
  },
  {
    id: "2",
    title: "City Hall Renovation and Modernization",
    status: "Active",
    description:
      "Complete renovation of the main city hall building including structural improvements and modern facilities.",
    startDate: "2024-04-22",
    endDate: "2024-05-16",
    lastDate: "2024-05-10",
    participants: 18,
    category: "Construction",
    estimatedValue: "$850,000",
    location: "Reference ID",
    documentsCount: 5,
  },
];

const AvailableTenders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [viewMode, setViewMode] = useState("list");
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tenders, setTenders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [openIndex, setOpenIndex] = useState(0);

  // Fetch tenders from API
  useEffect(() => {
    const fetchTenders = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await getFetch(
          `${import.meta.env.VITE_API_BASE_URL}/tenders`
        );

        console.log("AvailableTenders API Response:", response);

        if (response && response.status === 200) {
          console.log("Raw API Response Data:", response.data.data);

          // Map the API response to match the expected format
          const mappedTenders = response.data.data
            .map((tender) => {
              console.log("Processing tender:", tender);

              // Try different possible field names for tender file
              const tenderFile =
                tender.tenderFile ||
                tender.tender_file ||
                tender.file ||
                tender.document ||
                tender.pdfFile ||
                null;
              console.log("Found tenderFile:", tenderFile);

              // Map priority from API or set default
              const priority =
                tender.priority || tender.priorityLevel || "Medium";

              // Map category from API or set default
              const category =
                tender.category || tender.tenderCategory || "Infrastructure";

              // Map status from API or set default
              const status = tender.status || "Active";

              return {
                id: tender.id || tender.referenceNo || `TND-${Date.now()}`,
                title: tender.tenderTitle || "Untitled Tender",
                status: status,
                description: tender.description || "No description available",
                startDate:
                  tender.startDate || new Date().toISOString().split("T")[0],
                endDate:
                  tender.lastDateSubmission ||
                  new Date().toISOString().split("T")[0],
                lastDate:
                  tender.lastDateSubmission ||
                  new Date().toISOString().split("T")[0],
                participants: Math.floor(Math.random() * 50) + 1, // Random participants for now
                category: category,
                estimatedValue: tender.estimatedValues || "$0",
                location: tender.location || "Not specified",
                documentsCount: tenderFile ? 1 : 0, // Set documents count based on file availability
                priority: priority,
                tenderCard: tender.tenderCard || "Active",
                tenderFile: tenderFile,
                image:
                  tender.image ||
                  "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400",
              };
            })
            .filter((tender) => tender.tenderCard === "Active"); // Only show Active tenders

          console.log("Mapped Tenders:", mappedTenders);
          setTenders(mappedTenders);
        } else {
          console.error("Failed to fetch tenders:", response);
          setError("Failed to fetch tenders. Please try again.");
          setTenders([]);
        }
      } catch (error) {
        console.error("Error fetching tenders:", error);
        setError("Error fetching tenders. Please try again.");
        setTenders([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTenders();
  }, []);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const filteredTenders = useMemo(() => {
    return tenders.filter((tender) => {
      const matchesSearch =
        tender.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tender.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !category || tender.category === category;
      const matchesStatus = !status || tender.status === status;
      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [tenders, searchTerm, category, status]);

  const handleViewDetails = (tender) => {
    if (!isLoggedIn) {
      setLoginModalOpen(true);
    }
  };

  const handleDownloadDocuments = (tender) => {
    if (!isLoggedIn) {
      setLoginModalOpen(true);
    }
  };

  const handleLogin = (email, password) => {
    setIsLoggedIn(true);
  };

  return (
    <Box sx={{ py: 8, bgcolor: "#fafafa", minHeight: "100vh" }}>
      <Container maxWidth="xl">
        <TenderFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          category={category}
          setCategory={setCategory}
          status={status}
          setStatus={setStatus}
          viewMode={viewMode}
          setViewMode={setViewMode}
        />

        {loading && (
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
                Loading Tenders
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
                Please wait while we fetch the latest tenders...
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
        )}

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        {!loading && !error && (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {filteredTenders.map((tender, index) => (
              <Box key={tender.id}>
                <TenderCard
                  tender={tender}
                  onViewDetails={handleViewDetails}
                  onDownloadDocuments={handleDownloadDocuments}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              </Box>
            ))}
          </Box>
        )}

        {!loading && !error && filteredTenders.length === 0 && (
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
                No Tenders Available
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
        )}
      </Container>

      <LoginModal
        open={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onLogin={handleLogin}
      />
    </Box>
  );
};

export default AvailableTenders;
