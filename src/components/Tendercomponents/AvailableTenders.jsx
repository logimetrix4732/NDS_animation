import React, { useState, useMemo, useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  CircularProgress,
  Alert,
  Dialog,
  DialogContent,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  useMediaQuery,
  useTheme,
  DialogTitle,
  DialogActions,
  Tooltip,
} from "@mui/material";
import {
  Close,
  Business,
  Email,
  Badge,
  CreditCard,
  ArrowForward,
  Lock,
  Visibility,
  VisibilityOff,
  CheckCircle,
} from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import LockIcon from "@mui/icons-material/Lock";
import TenderFilters from "./TenderFilters";
import TenderCard from "./TenderCard";
import DocumentViewerModal from "./DocumentViewerModal";
// No need to import getFetch for public pages
import { postFetchContent } from "../../Api/Api";

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
  const [selectedTenderId, setSelectedTenderId] = useState(null);

  // Document Viewer Modal States
  const [documentDialogOpen, setDocumentDialogOpen] = useState(false);
  const [selectedTender, setSelectedTender] = useState(null);
  const [documentType, setDocumentType] = useState("tender");
  const [showDownloadButton, setShowDownloadButton] = useState(false);

  // Login Modal States
  const [step, setStep] = useState(1);
  const [modalLoading, setModalLoading] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [gstNumber, setGstNumber] = useState("");
  const [panNumber, setPanNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // const [otp, setOtp] = useState(""); // Commented out OTP
  const [modalError, setModalError] = useState("");
  const [confetti, setConfetti] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Fetch tenders from API
  useEffect(() => {
    const fetchTenders = async () => {
      try {
        setLoading(true);
        setError("");

        // Use direct fetch for public pages - no authentication required
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/tenders`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();

          // Map the API response to match the expected format
          const mappedTenders = data.data
            .map((tender) => {
              // Try different possible field names for tender file
              const tenderFile =
                tender.tenderFile ||
                tender.tender_file ||
                tender.file ||
                tender.document ||
                tender.pdfFile ||
                null;

              // Map priority from API or set default
              const priority =
                tender.priority || tender.priorityLevel || "Medium";

              // Map category from API or set default
              const category =
                tender.category || tender.tenderCategory || "Infrastructure";

              // Map status from API or set default
              const status = tender.status || "Active";
              console.log(tender);
              return {
                id: tender.id || tender.referenceNo || `TND-${Date.now()}`,
                title: tender.tenderTitle || "Untitled Tender",
                referenceNo: tender.referenceNo,
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
                // Add proper date fields for admin portal compatibility
                preBidMeeting:
                  tender.preBidMeeting ||
                  tender.startDate ||
                  new Date().toISOString(),
                submissionDeadline:
                  tender.lastDateSubmission || new Date().toISOString(),
                bidOpening: tender.bidOpenning || new Date().toISOString(),
                participants: tender.participants, // Random participants for now
                category: category,
                estimatedValue: tender.estimatedValues || "$0",
                location: tender.location || "Not specified",
                documentsCount: tenderFile ? 1 : 0, // Set documents count based on file availability
                priority: priority,
                tenderCard: tender.tenderCard || "Active",
                tenderFile: tenderFile,
                corrigendum: tender.corrigendum || "Inactive",
                CorrigendumFilePath: tender.CorrigendumFilePath,
                CorrigendumFileName: tender.CorrigendumFileName,
                tenderFilePath: tender.tenderFilePath,
                tenderFileName: tender.tenderFileName,
                image:
                  tender.image ||
                  "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400",
              };
            })
            .filter((tender) => tender.tenderCard === "Active"); // Only show Active tenders

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

  // Login Modal Validation
  const validateForm = () => {
    if (!companyName || !gstNumber || !panNumber || !email) {
      return "Please fill in all fields";
    }
    if (!/^[a-zA-Z\s]+$/.test(companyName)) {
      return "Company name should only contain letters and spaces";
    }
    if (!/^[0-9]{2}[A-Z0-9]{13}$/.test(gstNumber.toUpperCase())) {
      return "Please enter a valid GST number (15 characters)";
    }
    if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(panNumber.toUpperCase())) {
      return "Please enter a valid PAN number";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  // Document Viewer Functions - Now handled by DocumentViewerModal component
  const handleCloseDocument = () => {
    setDocumentDialogOpen(false);
    setShowDownloadButton(false);
  };

  const handleDownloadDocument = (tender) => {
    let filePath, fileName;

    if (documentType === "corrigendum") {
      filePath = tender.CorrigendumFilePath;
      fileName = tender.CorrigendumFileName;
    } else {
      filePath = tender.tenderFilePath || tender.tenderFile;
      fileName = tender.tenderFileName;
    }

    if (filePath) {
      let downloadUrl;
      if (filePath.startsWith("http://") || filePath.startsWith("https://")) {
        downloadUrl = filePath;
      } else {
        downloadUrl = `${import.meta.env.VITE_API_BASE_URL}/files${filePath}`;
      }

      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = fileName || "document";
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // Save user data to localStorage
  const saveUserData = () => {
    const userData = {
      companyName,
      gstNumber,
      panNumber,
      email,
      // Don't save password for security reasons
    };
    localStorage.setItem("tenderUserData", JSON.stringify(userData));
  };

  // Clear all saved user data
  const clearUserData = () => {
    localStorage.removeItem("tenderUserData");
    setCompanyName("");
    setGstNumber("");
    setPanNumber("");
    setEmail("");
    // Password fields are hidden, so no need to clear them
    setModalError("");
  };

  // Register API Integration
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setModalError("");
    const validationError = validateForm();
    if (validationError) {
      setModalError(validationError);
      return;
    }

    // Save user data before submitting
    saveUserData();

    setModalLoading(true);

    try {
      const registerData = {
        companyName: companyName,
        GSTnumber: gstNumber.toUpperCase(),
        PanNumber: panNumber.toUpperCase(),
        emailId: email,
        password: "123456", // Hardcoded password as requested (6+ characters)
        confirmPassword: "123456", // Hardcoded confirm password as requested (6+ characters)
        tenderId: selectedTenderId, // Dynamic tender ID from selected tender
      };

      const response = await postFetchContent(
        `${import.meta.env.VITE_API_BASE_URL}/tender-participant/register`,
        registerData
      );

      if (response && (response.status === 200 || response.status === 201)) {
        setModalLoading(false);

        // Check if company is already registered and get document data
        if (response.data && response.data.tenderFilePath) {
          // Company already registered, show document directly
          const tenderData = {
            tenderFilePath: response.data.tenderFilePath,
            tenderFileName: response.data.tenderFileName,
            CorrigendumFilePath: response.data.CorrigendumFilePath,
            CorrigendumFileName: response.data.CorrigendumFileName,
          };

          setSelectedTender(tenderData);
          setDocumentType("tender");
          setDocumentDialogOpen(true);
          // fetchDocument(tenderData); // This function is now handled by DocumentViewerModal

          // Close registration modal
          setTimeout(() => {
            setLoginModalOpen(false);
            setStep(1);
            handleCloseModal();
          }, 1000);
        } else {
          // New registration successful
          setStep(2);
          setIsLoggedIn(true);

          // If there was a selected tender for corrigendum, show it after login
          if (selectedTenderId) {
            const selectedTender = tenders.find(
              (t) => t.id === selectedTenderId
            );
            if (selectedTender) {
              setSelectedTender(selectedTender);
              setDocumentType("corrigendum");
              setDocumentDialogOpen(true);
            }
            setSelectedTenderId(null);
          }

          // Close modal after success
          setTimeout(() => {
            setLoginModalOpen(false);
          }, 2000);
        }
      } else {
        setModalError(
          response?.message || "Registration failed. Please try again."
        );
        setModalLoading(false);
      }
    } catch (error) {
      console.error("Registration error:", error);
      setModalError(
        error?.response?.data?.message ||
          "Registration failed. Please try again."
      );
      setModalLoading(false);
    }
  };

  // OTP step commented out - direct document view after registration
  /*
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    if (!otp) {
      setModalError("Please enter OTP");
      return;
    }
    setModalError("");
    setModalLoading(true);

    try {
      // Here you would typically verify OTP with your API
      // For now, we'll simulate OTP verification

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // If OTP is correct (you can add actual verification logic here)
      setModalLoading(false);
      setStep(3);
      setIsLoggedIn(true);

      // If there was a selected tender for corrigendum, show it after login
      if (selectedTenderId) {
        const selectedTender = tenders.find(t => t.id === selectedTenderId);
        if (selectedTender) {
          setSelectedTender(selectedTender);
          setDocumentType("corrigendum");
          setDocumentDialogOpen(true);
        }
        setSelectedTenderId(null);
      }

      // Close modal after success
      setTimeout(() => {
        setLoginModalOpen(false);
      }, 2000);
    } catch (error) {
      console.error("OTP verification error:", error);
      setModalError("OTP verification failed. Please try again.");
      setModalLoading(false);
    }
  };
  */

  const handleCloseModal = () => {
    setLoginModalOpen(false);
    setStep(1);
    setModalError("");
    setCompanyName("");
    setGstNumber("");
    setPanNumber("");
    setEmail("");
    // Password fields are hidden, so no need to clear them
    // setOtp(""); // Commented out OTP
    setConfetti(false);
    setSelectedTenderId(null); // Reset selected tender ID
  };

  // Load saved user data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem("tenderUserData");
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setCompanyName(parsedData.companyName || "");
        setGstNumber(parsedData.gstNumber || "");
        setPanNumber(parsedData.panNumber || "");
        setEmail(parsedData.email || "");
        // Don't load password for security reasons
      } catch (error) {
        console.error("Error loading saved data:", error);
      }
    }
  }, []);

  useEffect(() => {
    if (step === 2) {
      setConfetti(true);
      setTimeout(() => setConfetti(false), 4000);
    }
  }, [step]);

  const handleViewDetails = (tender, event) => {
    // Prevent accordion from closing
    if (event) {
      event.stopPropagation();
    }

    if (!isLoggedIn) {
      setSelectedTenderId(tender.id); // Store selected tender ID
      setLoginModalOpen(true);
    } else {
      // User is logged in, show document without download button
      setShowDownloadButton(false);
      setSelectedTender(tender);
      setDocumentType("tender");
      setDocumentDialogOpen(true);
    }
  };

  const handleDownloadDocuments = (tender, event) => {
    setShowDownloadButton(true);
    // Prevent accordion from closing
    if (event) {
      event.stopPropagation();
    }

    if (!isLoggedIn) {
      setSelectedTenderId(tender.id); // Store selected tender ID
      setLoginModalOpen(true);
    } else {
      // User is logged in, show document with download button
      setSelectedTender(tender);
      setDocumentType("tender");
      setDocumentDialogOpen(true);
    }
  };

  // Handle Corrigendum Document View
  const handleViewCorrigendum = (tender, event) => {
    // Prevent accordion from closing
    if (event) {
      event.stopPropagation();
    }

    if (!isLoggedIn) {
      setSelectedTenderId(tender.id); // Store selected tender ID
      setLoginModalOpen(true);
    } else {
      // User is logged in, show corrigendum document without download button
      setShowDownloadButton(false);
      setSelectedTender(tender);
      setDocumentType("corrigendum");
      setDocumentDialogOpen(true);
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", damping: 20, stiffness: 300 },
    },
    exit: { opacity: 0, scale: 0.9, y: 30, transition: { duration: 0.3 } },
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
                  onViewCorrigendum={handleViewCorrigendum}
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

      {/* Login Modal */}
      <AnimatePresence>
        {loginModalOpen && (
          <Dialog
            open={loginModalOpen}
            onClose={handleCloseModal}
            fullWidth
            maxWidth="sm"
            fullScreen={isMobile}
            PaperProps={{
              sx: {
                borderRadius: isMobile ? 0 : 2,
                background: "white",
                boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
                overflow: "hidden",
                mx: isMobile ? 0 : "auto",
                my: isMobile ? 0 : 4,
                height: isMobile ? "100vh" : "auto",
                maxHeight: isMobile ? "100vh" : "90vh",
              },
            }}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Box sx={{ background: "#bd8f59", color: "white", py: 2, px: 3 }}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box>
                    <Typography
                      variant={isMobile ? "h5" : "h4"}
                      fontWeight={700}
                      sx={{ color: "#ffffff" }}
                    >
                      {step === 1 && "View Tender"}
                      {step === 2 && "Success"}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ opacity: 0.9, color: "#ffffff" }}
                    >
                      {step === 1 &&
                        "Please fill the details to access tenders"}
                      {step === 2 && "Successfully registered"}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    {/* Clear Data Button - Only show on step 1 */}
                    {step === 1 && (
                      <Tooltip title="Clear All Saved Data">
                        <IconButton
                          onClick={clearUserData}
                          sx={{
                            color: "white",
                            background: "rgba(255,255,255,0.1)",
                            "&:hover": {
                              background: "rgba(255,255,255,0.2)",
                              color: "#ff6b6b",
                            },
                            transition: "all 0.2s ease",
                          }}
                          size="small"
                        >
                          <Box
                            component="span"
                            sx={{
                              fontSize: "1.2rem",
                              fontWeight: "bold",
                              color: "inherit",
                            }}
                          >
                            🗑️
                          </Box>
                        </IconButton>
                      </Tooltip>
                    )}
                    <IconButton
                      onClick={handleCloseModal}
                      sx={{ color: "white" }}
                    >
                      <Close />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
              <DialogContent
                sx={{
                  p: isMobile ? 2 : 3,
                  minHeight: "260px",
                  maxHeight: "70vh",
                  overflow: "auto",
                  "&::-webkit-scrollbar": {
                    width: "6px",
                  },
                  "&::-webkit-scrollbar-track": {
                    background: "#f1f1f1",
                    borderRadius: "3px",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    background: "#bd8f59",
                    borderRadius: "3px",
                  },
                  "&::-webkit-scrollbar-thumb:hover": {
                    background: "#a46c35",
                  },
                }}
              >
                {step === 1 && (
                  <Box component="form" onSubmit={handleSubmitForm}>
                    {modalError && (
                      <Alert severity="error" sx={{ mb: 2 }}>
                        {modalError}
                      </Alert>
                    )}
                    <TextField
                      fullWidth
                      size="small"
                      label="Company Name"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      margin="normal"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Business sx={{ color: "#bd8f59" }} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <TextField
                      fullWidth
                      size="small"
                      label="GST Number"
                      value={gstNumber}
                      onChange={(e) =>
                        setGstNumber(e.target.value.toUpperCase())
                      }
                      margin="normal"
                      inputProps={{ maxLength: 15 }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Badge sx={{ color: "#bd8f59" }} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <TextField
                      fullWidth
                      size="small"
                      label="PAN Number"
                      value={panNumber}
                      onChange={(e) =>
                        setPanNumber(e.target.value.toUpperCase())
                      }
                      margin="normal"
                      inputProps={{ maxLength: 10 }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <CreditCard sx={{ color: "#bd8f59" }} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <TextField
                      fullWidth
                      size="small"
                      label="Email Address"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      margin="normal"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Email sx={{ color: "#bd8f59" }} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    {/* Hidden password fields - will send 123456 to backend */}
                    <input type="hidden" value="123456" onChange={() => {}} />
                    <input type="hidden" value="123456" onChange={() => {}} />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      disabled={modalLoading}
                      endIcon={!modalLoading && <ArrowForward />}
                      sx={{
                        mt: 3,
                        mb: 2,
                        py: 1.5,
                        bgcolor: "#bd8f59",
                        "&:hover": { bgcolor: "#a46c35" },
                        position: "sticky",
                        bottom: 0,
                        zIndex: 1,
                      }}
                    >
                      {modalLoading ? (
                        <CircularProgress size={24} sx={{ color: "white" }} />
                      ) : (
                        "Register & View Tender"
                      )}
                    </Button>
                  </Box>
                )}

                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {confetti && (
                      <Confetti
                        width={window.innerWidth}
                        height={window.innerHeight}
                        recycle={false}
                        numberOfPieces={200}
                      />
                    )}
                    <Box textAlign="center" py={5}>
                      <CheckCircle sx={{ fontSize: 80, color: "#bd8f59" }} />
                      <Typography variant="h6" sx={{ mt: 2, fontWeight: 600 }}>
                        Successfully Registered!
                      </Typography>
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        Please wait for approval. Thank you.
                      </Typography>
                    </Box>
                  </motion.div>
                )}
              </DialogContent>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>

      {/* Document Viewer Modal */}
      <DocumentViewerModal
        open={documentDialogOpen}
        onClose={handleCloseDocument}
        tender={selectedTender}
        documentType={documentType}
        showDownloadButton={showDownloadButton}
      />
    </Box>
  );
};

export default AvailableTenders;
