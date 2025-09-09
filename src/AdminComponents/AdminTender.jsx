import * as React from "react";
import { useMemo, useState, useEffect } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Grid,
  Card,
  CardContent,
  TextField,
  Stack,
  Chip,
  Avatar,
  useMediaQuery,
  Tooltip,
  LinearProgress,
  Paper,
  Button,
  CardMedia,
  Badge,
  Grow,
  Fade,
  Divider,
  Alert,
  Snackbar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  LightMode,
  DarkMode,
  Notifications,
  CheckCircle,
  Add as AddIcon,
  Download as DownloadIcon,
  FilterList as FilterListIcon,
  Clear as ClearIcon,
} from "@mui/icons-material";
import nds_logo from "../assets/img/nds_logo.png";
import AdminSidebar from "../AdminComponents/AdminSidebar";
import AdminTenderForm from "./AdminTenderForm";
import TenderCardsList from "./TenderCardsList";
import DocumentViewerDialog from "./DocumentViewerDialog";
import { postFetch, getFetch } from "../Api/Api";

// --------- LAYOUT ---------
const drawerWidth = 260;

export default function AdminTender() {
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState(prefersDark ? "dark" : "light");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedPriority, setSelectedPriority] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const [loading, setLoading] = useState(false);
  const [tenders, setTenders] = useState([]);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [fetchError, setFetchError] = useState("");
  const [documentDialogOpen, setDocumentDialogOpen] = useState(false);
  const [selectedTender, setSelectedTender] = useState(null);
  const [documentType, setDocumentType] = useState("tender");
  const [formDialogOpen, setFormDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    tenderTitle: "",
    referenceNo: "",
    description: "",
    startDate: "",
    estimatedValues: "",
    location: "",
    preBidMeeting: "",
    lastDateSubmission: "",
    bidOpening: "",
    corrigendum: "Inactive",
    tenderCard: "Active",
    tenderFile: null,
    corrigendumFile: null,
    tenderFileName: "",
    corrigendumFileName: "",
    image: null,
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const token = localStorage.getItem("token");
  // Fetch tenders from API
  const fetchTenders = async () => {
    try {
      setFetchLoading(true);
      setFetchError("");

      if (!token) {
        setFetchError("Please login first. No authentication token found.");
        setFetchLoading(false);
        return;
      }

      const response = await getFetch(
        `${import.meta.env.VITE_API_BASE_URL}/tenders`
      );

      if (response && response.status === 200) {
        // Map the API response to match the expected format
        const mappedTenders = response.data.data.map((tender) => {
          // Try different possible field names for tender file
          const tenderFile =
            tender.tenderFile ||
            tender.tender_file ||
            tender.file ||
            tender.document ||
            tender.pdfFile ||
            null;

          return {
            id: tender.id || tender.referenceNo || `TND-${Date.now()}`,
            title: tender.tenderTitle || "Untitled Tender",
            description: tender.description || "No description available",
            status: "Published", // Default status
            priority: "Medium", // Default priority
            startDate:
              tender.startDate || new Date().toISOString().split("T")[0],
            estimatedValue: tender.estimatedValues || "$0",
            location: tender.location || "Not specified",
            preBidMeeting: tender.preBidMeeting || new Date().toISOString(),
            lastDateSubmission:
              tender.lastDateSubmission || new Date().toISOString(),
            bidOpening:
              tender.bidOpenning ||
              tender.bidOpening ||
              new Date().toISOString(),
            participants: Math.floor(Math.random() * 50) + 1, // Random participants for now
            category: "Infrastructure", // Default category
            tenderCard: tender.tenderCard || "Inactive",
            tenderFile: tenderFile,
            tenderFileName: tender.tenderFileName || "Not specified",
            tenderFilePath: tender.tenderFilePath || null,
            referenceNo: tender.referenceNo || "Not specified",
            corrigendum: tender.corrigendum || "Inactive",
            CorrigendumFileName: tender.CorrigendumFileName || "",
            CorrigendumFilePath: tender.CorrigendumFilePath || "",
            image:
              tender.image ||
              "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400",
          };
        });

        setTenders(mappedTenders);
      } else {
        console.error("Failed to fetch tenders:", response);
        setFetchError("Failed to fetch tenders. Please try again.");
        setTenders([]);
      }
    } catch (error) {
      console.error("Error fetching tenders:", error);
      setFetchError("Error fetching tenders. Please try again.");
      setTenders([]);
    } finally {
      setFetchLoading(false);
    }
  };
  useEffect(() => {
    fetchTenders();
  }, []);

  const filteredTenders = useMemo(() => {
    let filtered = tenders.filter((tender) => {
      const matchesSearch =
        search === "" ||
        tender.title.toLowerCase().includes(search.toLowerCase()) ||
        tender.location.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        selectedStatus === "" || tender.tenderCard === selectedStatus;
      const matchesPriority =
        selectedPriority === "" || tender.priority === selectedPriority;
      const matchesCategory =
        selectedCategory === "" || tender.category === selectedCategory;
      const matchesLocation =
        selectedLocation === "" || tender.location === selectedLocation;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesPriority &&
        matchesCategory &&
        matchesLocation
      );
    });
    return filtered;
  }, [
    tenders,
    search,
    selectedStatus,
    selectedPriority,
    selectedCategory,
    selectedLocation,
  ]);
  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar({ ...snackbar, open: false });
    setSuccessMessage("");
    setErrorMessage("");
  };

  const handleFormClose = () => {
    setFormDialogOpen(false);
    // Reset form data when closing
    setFormData({
      tenderTitle: "",
      referenceNo: "",
      description: "",
      startDate: "",
      estimatedValues: "",
      location: "",
      preBidMeeting: "",
      lastDateSubmission: "",
      bidOpening: "",
      corrigendum: "Inactive",
      tenderCard: "Active",
      tenderFile: null,
      corrigendumFile: null,
      tenderFileName: "",
      corrigendumFileName: "",
      image: null,
    });
    setSelectedTender(null);
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      [fieldName]: file,
    }));
  };

  const handleSubmit = async () => {
    // Check if token exists
    if (!token) {
      setErrorMessage("Please login first. No authentication token found.");
      return;
    }

    // Simple validation
    if (!formData.tenderTitle.trim()) {
      setErrorMessage("Tender title is required");
      return;
    }

    if (!formData.referenceNo.trim()) {
      setErrorMessage("Reference number is required");
      return;
    }

    setLoading(true);

    try {
      const formDataToSend = new FormData();

      // Basic fields
      formDataToSend.append("tenderTitle", formData.tenderTitle);
      formDataToSend.append("referenceNo", formData.referenceNo);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("startDate", formData.startDate);
      formDataToSend.append("estimatedValues", formData.estimatedValues);
      formDataToSend.append("location", formData.location);
      formDataToSend.append("preBidMeeting", formData.preBidMeeting);
      formDataToSend.append("lastDateSubmission", formData.lastDateSubmission);
      formDataToSend.append("bidOpenning", formData.bidOpening);
      formDataToSend.append("corrigendum", formData.corrigendum);
      formDataToSend.append("tenderCard", formData.tenderCard);

      // Files
      if (formData.tenderFile) {
        formDataToSend.append("tenderFile", formData.tenderFile);
      }

      if (formData.corrigendumFile) {
        formDataToSend.append("corrigendumFile", formData.corrigendumFile);
      }

      if (formData.image) {
        formDataToSend.append("image", formData.image);
      }

      let response;

      if (selectedTender && selectedTender.id) {
        // Update existing tender
        response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/tender/update/${
            selectedTender.id
          }`,
          {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            body: formDataToSend,
          }
        );
      } else {
        // Create new tender
        response = await postFetch(
          `${import.meta.env.VITE_API_BASE_URL}/tender/create`,
          formDataToSend
        );
      }

      if (response && (response.status === 201 || response.status === 200)) {
        setSuccessMessage(
          selectedTender
            ? "Tender updated successfully!"
            : "Tender created successfully!"
        );
        setFormDialogOpen(false);

        // Reset form
        setFormData({
          tenderTitle: "",
          referenceNo: "",
          description: "",
          startDate: "",
          estimatedValues: "",
          location: "",
          preBidMeeting: "",
          lastDateSubmission: "",
          bidOpening: "",
          corrigendum: "Inactive",
          tenderCard: "Active",
          tenderFile: null,
          corrigendumFile: null,
          image: null,
        });

        // Clear selected tender
        setSelectedTender(null);

        // Refresh the tenders list
        fetchTenders();
      } else {
        if (response && response.status === 401) {
          setErrorMessage("Authentication failed. Please login again.");
        } else {
          setErrorMessage("Error creating tender. Please try again.");
        }
      }
    } catch (error) {
      if (error.status === 401) {
        setErrorMessage("Authentication failed. Please login again.");
      } else {
        setErrorMessage("Error creating tender. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleViewDocument = (tender) => {
    setSelectedTender(tender);
    setDocumentType("tender");
    setDocumentDialogOpen(true);
  };

  const handleCloseDocumentDialog = () => {
    setDocumentDialogOpen(false);
    setSelectedTender(null);
  };

  const handleViewCorrigendum = (tender) => {
    setSelectedTender(tender);
    setDocumentType("corrigendum");
    setDocumentDialogOpen(true);
  };

  const handleDownloadCorrigendum = async (tender) => {
    try {
      if (!token) {
        setSnackbar({
          open: true,
          message: "Please login first. No authentication token found.",
          severity: "error",
        });
        return;
      }

      if (!tender.CorrigendumFilePath) {
        setSnackbar({
          open: true,
          message: "No corrigendum file available for download.",
          severity: "warning",
        });
        return;
      }

      // Create download URL with authentication
      const downloadUrl = `${import.meta.env.VITE_API_BASE_URL}/download/files${
        tender.CorrigendumFilePath
      }`;

      const response = await fetch(downloadUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        // Get the blob from response and set proper MIME type for PDF
        const blob = new Blob([await response.blob()], {
          type: "application/pdf",
        });

        // Create download link
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;

        // Ensure proper filename with .pdf extension
        let filename = tender.CorrigendumFileName || "corrigendum-document";
        if (!filename.toLowerCase().endsWith(".pdf")) {
          filename += ".pdf";
        }
        link.download = filename;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);

        setSnackbar({
          open: true,
          message: "Corrigendum file downloaded successfully!",
          severity: "success",
        });
      } else {
        throw new Error("Failed to download corrigendum file");
      }
    } catch (error) {
      console.error("Error downloading corrigendum:", error);
      setSnackbar({
        open: true,
        message: "Error downloading corrigendum file. Please try again.",
        severity: "error",
      });
    }
  };

  const handleDownloadTender = async (tender) => {
    try {
      if (!token) {
        setSnackbar({
          open: true,
          message: "Please login first. No authentication token found.",
          severity: "error",
        });
        return;
      }

      if (!tender.tenderFilePath) {
        setSnackbar({
          open: true,
          message: "No file available for download.",
          severity: "warning",
        });
        return;
      }

      // Create download URL with authentication
      const downloadUrl = `${import.meta.env.VITE_API_BASE_URL}/download/files${
        tender.tenderFilePath
      }`;

      const response = await fetch(downloadUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        // Get the blob from response and set proper MIME type for PDF
        const blob = new Blob([await response.blob()], {
          type: "application/pdf",
        });

        // Create download link
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;

        // Ensure proper filename with .pdf extension
        let filename = tender.tenderFileName || "tender-document";
        if (!filename.toLowerCase().endsWith(".pdf")) {
          filename += ".pdf";
        }
        link.download = filename;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);

        setSnackbar({
          open: true,
          message: "File downloaded successfully!",
          severity: "success",
        });
      } else {
        throw new Error("Failed to download file");
      }
    } catch (error) {
      console.error("Error downloading tender:", error);
      setSnackbar({
        open: true,
        message: "Error downloading file. Please try again.",
        severity: "error",
      });
    }
  };

  const handleEditTender = (tender) => {
    setFormData({
      tenderTitle: tender.tenderTitle || tender.title || "",
      referenceNo: tender.referenceNo || "",
      description: tender.description || "",
      startDate: tender.startDate
        ? new Date(tender.startDate).toISOString().split("T")[0]
        : "",
      estimatedValues: tender.estimatedValues || tender.estimatedValue || "",
      location: tender.location || "",
      preBidMeeting: tender.preBidMeeting
        ? new Date(tender.preBidMeeting).toISOString().slice(0, 16)
        : "",
      lastDateSubmission: tender.lastDateSubmission
        ? new Date(tender.lastDateSubmission).toISOString().slice(0, 16)
        : "",
      bidOpening:
        tender.bidOpening || tender.bidOpenning
          ? new Date(tender.bidOpening || tender.bidOpenning)
              .toISOString()
              .slice(0, 16)
          : "",
      corrigendum: tender.corrigendum === "Active" ? "Active" : "Inactive",
      tenderCard: tender.tenderCard || "Active",
      tenderFile: tender.tenderFileName
        ? { name: tender.tenderFileName }
        : null,
      tenderFileName: tender.tenderFileName || "",
      tenderFilePath: tender.tenderFilePath || "",
      corrigendumFile: tender.CorrigendumFileName
        ? { name: tender.CorrigendumFileName }
        : null,
      corrigendumFileName: tender.CorrigendumFileName || "",
      image: null,
    });
    setSelectedTender(tender);
    setFormDialogOpen(true);
  };

  const handleDeleteTender = async (tenderId) => {
    try {
      if (!token) {
        setSnackbar({
          open: true,
          message: "Please login first. No authentication token found.",
          severity: "error",
        });
        return;
      }

      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/tender/delete/${tenderId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Check if response is ok (status 200-299) or specifically 200
      if (response.ok || response.status === 200) {
        // Try to parse response body if it exists
        try {
          const responseData = await response.text();
        } catch (parseError) {
          console.log("No response body or parsing error:", parseError);
        }

        setSnackbar({
          open: true,
          message: "Tender deleted successfully!",
          severity: "success",
        });
        fetchTenders(); // Refresh the list
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error("Delete error response:", errorData);
        throw new Error(
          errorData.message ||
            `Failed to delete tender. Status: ${response.status}`
        );
      }
    } catch (error) {
      console.error("Error deleting tender:", error);
      setSnackbar({
        open: true,
        message: error.message || "Error deleting tender. Please try again.",
        severity: "error",
      });
    }
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backdropFilter: "blur(20px)",
          backgroundColor: (t) =>
            t.palette.mode === "dark"
              ? "rgba(10, 14, 25, 0.8)"
              : "rgba(255,255,255,0.9)",
          borderBottom: 1,
          borderColor: "divider",
          background: (t) =>
            t.palette.mode === "dark"
              ? "linear-gradient(135deg, rgba(10, 14, 25, 0.9) 0%, rgba(15, 22, 41, 0.9) 100%)"
              : "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)",
        }}
      >
        <Toolbar sx={{ minHeight: { xs: 64, md: 89 } }}>
          <IconButton
            edge="start"
            onClick={() => setMobileOpen(!mobileOpen)}
            sx={{ mr: 1 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
            <img
              src={nds_logo}
              alt="NDDB"
              style={{ width: "138px", height: "55px" }}
              loading="lazy"
            />
          </Typography>

          <Paper
            component="form"
            onSubmit={(e) => e.preventDefault()}
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              px: 1,
              py: 0.5,
              mr: 2,
              width: 360,
              borderRadius: 3,
              background: (t) =>
                t.palette.mode === "dark"
                  ? "rgba(255,255,255,0.05)"
                  : "rgba(0,0,0,0.02)",
              border: (t) =>
                t.palette.mode === "dark"
                  ? "1px solid rgba(255,255,255,0.1)"
                  : "1px solid rgba(0,0,0,0.08)",
            }}
            elevation={0}
          >
            <IconButton>
              <SearchIcon />
            </IconButton>
            <TextField
              variant="standard"
              placeholder="Search tenders, locations, status…"
              fullWidth
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              InputProps={{ disableUnderline: true }}
            />
          </Paper>

          <Stack direction="row" spacing={1} alignItems="center">
            <Tooltip title="Toggle theme">
              <IconButton
                onClick={() =>
                  setMode((m) => (m === "light" ? "dark" : "light"))
                }
                sx={{
                  background: (t) =>
                    t.palette.mode === "dark"
                      ? "rgba(255,255,255,0.05)"
                      : "rgba(0,0,0,0.04)",
                  "&:hover": {
                    background: (t) =>
                      t.palette.mode === "dark"
                        ? "rgba(255,255,255,0.1)"
                        : "rgba(0,0,0,0.08)",
                  },
                }}
              >
                {mode === "light" ? <DarkMode /> : <LightMode />}
              </IconButton>
            </Tooltip>
            <IconButton
              sx={{
                background: (t) =>
                  t.palette.mode === "dark"
                    ? "rgba(255,255,255,0.05)"
                    : "rgba(0,0,0,0.04)",
                "&:hover": {
                  background: (t) =>
                    t.palette.mode === "dark"
                      ? "rgba(255,255,255,0.1)"
                      : "rgba(0,0,0,0.08)",
                },
              }}
            >
              <Badge badgeContent={3} color="error">
                <Notifications />
              </Badge>
            </IconButton>
            <Avatar
              sx={{
                width: 40,
                height: 40,
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                fontWeight: 600,
              }}
            >
              AS
            </Avatar>
          </Stack>
        </Toolbar>
      </AppBar>
      <AdminSidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 1, md: 2 },
          ml: { md: `${drawerWidth}px` },
          background: (t) =>
            t.palette.mode === "dark"
              ? "linear-gradient(135deg, #0b1020 0%, #0f1629 100%)"
              : "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <Toolbar />

        {/* Main Content */}
        <Box sx={{ mt: 2, width: "100%" }}>
          {/* Header Section */}
          <Grow in timeout={800}>
            <Box sx={{ mb: 4, width: "100%" }}>
              {/* Top Row - Title and Action Buttons */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: { xs: "flex-start", sm: "center" },
                  justifyContent: "space-between",
                  mb: { xs: 3, sm: 2 },
                  width: "100%",
                  gap: { xs: 2, sm: 0 },
                }}
              >
                {/* Left Side - Title with Accent Bar */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: { xs: "100%", sm: "auto" },
                    justifyContent: { xs: "center", sm: "flex-start" },
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 6, sm: 8 },
                      height: { xs: 32, sm: 40 },
                      background:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      borderRadius: { xs: 3, sm: 4 },
                      mr: { xs: 1.5, sm: 2 },
                    }}
                  />
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 800,
                      fontSize: {
                        xs: "1.75rem",
                        sm: "2.125rem",
                        md: "2.125rem",
                      },
                      textAlign: { xs: "center", sm: "left" },
                    }}
                  >
                    Tenders
                  </Typography>
                </Box>

                {/* Right Side - Action Buttons */}
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={{ xs: 1.5, sm: 2 }}
                  sx={{
                    width: { xs: "100%", sm: "auto" },
                    alignItems: { xs: "stretch", sm: "center" },
                  }}
                >
                  <Button
                    variant="outlined"
                    startIcon={<DownloadIcon />}
                    sx={{
                      borderRadius: 3,
                      px: { xs: 2, sm: 3 },
                      py: { xs: 1.2, sm: 1.5 },
                      borderWidth: 2,
                      fontWeight: 600,
                      fontSize: { xs: "0.875rem", sm: "1rem" },
                      background: (t) =>
                        t.palette.mode === "dark"
                          ? "rgba(255,255,255,0.05)"
                          : "rgba(0,0,0,0.02)",
                      "&:hover": {
                        borderWidth: 2,
                        background: (t) =>
                          t.palette.mode === "dark"
                            ? "rgba(255,255,255,0.1)"
                            : "rgba(0,0,0,0.05)",
                      },
                    }}
                  >
                    Import
                  </Button>

                  <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={() => setFormDialogOpen(true)}
                    sx={{
                      borderRadius: 3,
                      px: { xs: 2, sm: 3 },
                      py: { xs: 1.2, sm: 1.5 },
                      fontWeight: 600,
                      fontSize: { xs: "0.875rem", sm: "1rem" },
                      background:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      boxShadow: "0 8px 25px rgba(102, 126, 234, 0.3)",
                      "&:hover": {
                        background:
                          "linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)",
                        boxShadow: "0 12px 35px rgba(102, 126, 234, 0.4)",
                      },
                    }}
                  >
                    Create +
                  </Button>
                </Stack>
              </Box>

              {/* Bottom Row - Subtitle */}
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  fontSize: { xs: "1rem", sm: "1.1rem" },
                  opacity: 0.8,
                  textAlign: { xs: "center", sm: "left" },
                  mt: { xs: 1, sm: 0 },
                }}
              >
                Here's a comprehensive overview of your tenders for this month!
              </Typography>
            </Box>
          </Grow>

          {/* Filter & Search Section */}
          <Grow in timeout={1000}>
            <Box sx={{ mb: 4 }}>
              <Paper
                sx={{
                  p: 3,
                  borderRadius: 2,
                  background: (t) =>
                    t.palette.mode === "dark"
                      ? "linear-gradient(135deg, #1e293b 0%, #334155 100%)"
                      : "#ffffff",
                  border: (t) =>
                    t.palette.mode === "dark"
                      ? "1px solid rgba(255,255,255,0.1)"
                      : "1px solid #e5e7eb",
                  boxShadow: (t) =>
                    t.palette.mode === "dark"
                      ? "0 4px 20px rgba(0, 0, 0, 0.3)"
                      : "0 1px 3px rgba(0, 0, 0, 0.1)",
                }}
              >
                {/* Header */}
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}
                >
                  <FilterListIcon
                    sx={{ color: "primary.main", fontSize: 20 }}
                  />
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: "primary.main" }}
                  >
                    Filter & Search
                  </Typography>
                </Box>

                {/* Filter Content */}
                <Grid container spacing={2} alignItems="center">
                  {/* Search Box */}
                  <Grid item xs={12} md={3.5}>
                    <TextField
                      fullWidth
                      size="small"
                      placeholder="Search tenders by title or description"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      InputProps={{
                        startAdornment: (
                          <SearchIcon
                            sx={{ color: "#9ca3af", mr: 1, fontSize: 20 }}
                          />
                        ),
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 1.5,
                          backgroundColor: (t) =>
                            t.palette.mode === "dark"
                              ? "rgba(255,255,255,0.05)"
                              : "#f9fafb",
                          border: (t) =>
                            t.palette.mode === "dark"
                              ? "1px solid rgba(255,255,255,0.1)"
                              : "1px solid #e5e7eb",
                          "&:hover": {
                            borderColor: "primary.main",
                          },
                          "&.Mui-focused": {
                            borderColor: "primary.main",
                            boxShadow: (t) =>
                              `0 0 0 2px ${t.palette.primary.main}20`,
                          },
                        },
                      }}
                    />
                  </Grid>

                  {/* Status Filter */}
                  <Grid item xs={12} sm={6} md={1.5}>
                    <FormControl fullWidth size="small">
                      <Select
                        value={selectedStatus}
                        onChange={(e) => setSelectedStatus(e.target.value)}
                        displayEmpty
                        sx={{
                          borderRadius: 1.5,
                          backgroundColor: (t) =>
                            t.palette.mode === "dark"
                              ? "rgba(255,255,255,0.05)"
                              : "#f9fafb",
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: (t) =>
                              t.palette.mode === "dark"
                                ? "rgba(255,255,255,0.1)"
                                : "#e5e7eb",
                          },
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "primary.main",
                          },
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "primary.main",
                          },
                        }}
                      >
                        <MenuItem value="">All Status</MenuItem>
                        <MenuItem value="Active">Active</MenuItem>
                        <MenuItem value="Inactive">Inactive</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  {/* Location Filter */}
                  <Grid item xs={12} sm={6} md={1.5}>
                    <FormControl fullWidth size="small">
                      <Select
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                        displayEmpty
                        sx={{
                          borderRadius: 1.5,
                          backgroundColor: (t) =>
                            t.palette.mode === "dark"
                              ? "rgba(255,255,255,0.05)"
                              : "#f9fafb",
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: (t) =>
                              t.palette.mode === "dark"
                                ? "rgba(255,255,255,0.1)"
                                : "#e5e7eb",
                          },
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "primary.main",
                          },
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "primary.main",
                          },
                        }}
                      >
                        <MenuItem value="">All Locations</MenuItem>
                        <MenuItem value="Delhi">Delhi</MenuItem>
                        <MenuItem value="Mumbai">Mumbai</MenuItem>
                        <MenuItem value="Gujarat">Gujarat</MenuItem>
                        <MenuItem value="Pune">Pune</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  {/* View Mode Buttons */}
                  <Grid item xs={12} md={1.5}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        justifyContent: "flex-end",
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{ color: "#6b7280", fontWeight: 500, mr: 1 }}
                      >
                        View Mode:
                      </Typography>
                      <Button
                        variant="contained"
                        size="small"
                        sx={{
                          minWidth: 40,
                          width: 40,
                          height: 32,
                          p: 0,
                          backgroundColor: "primary.main",
                          color: "white",
                          borderRadius: 1,
                          "&:hover": {
                            backgroundColor: "primary.dark",
                          },
                        }}
                      >
                        ⊞
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{
                          minWidth: 40,
                          width: 40,
                          height: 32,
                          p: 0,
                          borderColor: "primary.main",
                          color: "primary.main",
                          borderRadius: 1,
                          "&:hover": {
                            borderColor: "primary.main",
                            backgroundColor: "primary.light",
                          },
                        }}
                      >
                        ⊟
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          </Grow>

          {/* Loading State */}
          {fetchLoading && (
            <Box sx={{ width: "100%", mb: 3 }}>
              <Paper
                sx={{
                  p: 4,
                  borderRadius: 3,
                  background: (t) =>
                    t.palette.mode === "dark"
                      ? "linear-gradient(135deg, #1e293b 0%, #334155 100%)"
                      : "#ffffff",
                  border: (t) =>
                    t.palette.mode === "dark"
                      ? "1px solid rgba(255,255,255,0.1)"
                      : "1px solid #e5e7eb",
                  boxShadow: (t) =>
                    t.palette.mode === "dark"
                      ? "0 4px 20px rgba(0, 0, 0, 0.3)"
                      : "0 1px 3px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  {/* Animated Loading Icon */}
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      margin: "0 auto 2rem",
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                        background:
                          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        animation: "pulse 2s infinite",
                        opacity: 0.3,
                      },
                      "@keyframes pulse": {
                        "0%": {
                          transform: "scale(1)",
                          opacity: 0.3,
                        },
                        "50%": {
                          transform: "scale(1.2)",
                          opacity: 0.1,
                        },
                        "100%": {
                          transform: "scale(1)",
                          opacity: 0.3,
                        },
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        border: "3px solid transparent",
                        borderTop: "3px solid white",
                        animation: "spin 1s linear infinite",
                        "@keyframes spin": {
                          "0%": { transform: "rotate(0deg)" },
                          "100%": { transform: "rotate(360deg)" },
                        },
                      }}
                    />
                  </Box>

                  {/* Loading Text */}
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      background:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Loading Tenders
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", mb: 3 }}
                  >
                    Please wait while we fetch your tender data...
                  </Typography>

                  {/* Progress Bar */}
                  <Box sx={{ width: "100%", maxWidth: 400, mx: "auto" }}>
                    <LinearProgress
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: (t) =>
                          t.palette.mode === "dark"
                            ? "rgba(255,255,255,0.1)"
                            : "rgba(0,0,0,0.1)",
                        "& .MuiLinearProgress-bar": {
                          borderRadius: 4,
                          background:
                            "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        },
                      }}
                    />
                  </Box>
                </Box>
              </Paper>
            </Box>
          )}

          {/* Error State */}
          {fetchError && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {fetchError}
            </Alert>
          )}

          {/* Tenders Cards List */}
          {!fetchLoading && !fetchError && (
            <TenderCardsList
              filteredTenders={filteredTenders}
              onViewDocument={handleViewDocument}
              onEditTender={handleEditTender}
              onDeleteTender={handleDeleteTender}
              onDownloadTender={handleDownloadTender}
              onViewCorrigendum={handleViewCorrigendum}
              onDownloadCorrigendum={handleDownloadCorrigendum}
            />
          )}

          {/* No Data State */}
          {!fetchLoading && !fetchError && filteredTenders.length === 0 && (
            <Box sx={{ textAlign: "center", py: 8 }}>
              <Paper
                sx={{
                  p: 6,
                  borderRadius: 3,
                  maxWidth: 600,
                  mx: "auto",
                  background: (t) =>
                    t.palette.mode === "dark"
                      ? "linear-gradient(135deg, #1e293b 0%, #334155 100%)"
                      : "#ffffff",
                  border: (t) =>
                    t.palette.mode === "dark"
                      ? "1px solid rgba(255,255,255,0.1)"
                      : "1px solid #e5e7eb",
                  boxShadow: (t) =>
                    t.palette.mode === "dark"
                      ? "0 4px 20px rgba(0, 0, 0, 0.3)"
                      : "0 1px 3px rgba(0, 0, 0, 0.1)",
                }}
              >
                {/* Empty State Icon */}
                <Box
                  sx={{
                    width: 120,
                    height: 120,
                    margin: "0 auto 2rem",
                    borderRadius: "50%",
                    background: (t) =>
                      t.palette.mode === "dark"
                        ? "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)"
                        : "linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: (t) =>
                      t.palette.mode === "dark"
                        ? "2px dashed rgba(102, 126, 234, 0.3)"
                        : "2px dashed rgba(102, 126, 234, 0.2)",
                  }}
                >
                  <Box
                    sx={{
                      fontSize: 48,
                      color: (t) =>
                        t.palette.mode === "dark"
                          ? "rgba(102, 126, 234, 0.6)"
                          : "rgba(102, 126, 234, 0.4)",
                      fontWeight: 300,
                    }}
                  >
                    📋
                  </Box>
                </Box>

                {/* Main Message */}
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {search ||
                  selectedStatus ||
                  selectedPriority ||
                  selectedCategory ||
                  selectedLocation
                    ? "No matching tenders found"
                    : "No tenders available yet"}
                </Typography>

                {/* Subtitle */}
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    mb: 4,
                    maxWidth: 400,
                    mx: "auto",
                    lineHeight: 1.6,
                  }}
                >
                  {search ||
                  selectedStatus ||
                  selectedPriority ||
                  selectedCategory ||
                  selectedLocation
                    ? "Try adjusting your search criteria or filters to find what you're looking for."
                    : "Get started by creating your first tender. It only takes a few minutes to set up."}
                </Typography>

                {/* Action Buttons */}
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  justifyContent="center"
                  alignItems="center"
                >
                  {(search ||
                    selectedStatus ||
                    selectedPriority ||
                    selectedCategory ||
                    selectedLocation) && (
                    <Button
                      variant="outlined"
                      onClick={() => {
                        setSearch("");
                        setSelectedStatus("");
                        setSelectedPriority("");
                        setSelectedCategory("");
                        setSelectedLocation("");
                      }}
                      startIcon={<ClearIcon />}
                      sx={{
                        borderRadius: 2,
                        px: 3,
                        py: 1.5,
                        borderWidth: 2,
                        fontWeight: 600,
                        "&:hover": {
                          borderWidth: 2,
                        },
                      }}
                    >
                      Clear All Filters
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    onClick={() => setFormDialogOpen(true)}
                    startIcon={<AddIcon />}
                    sx={{
                      borderRadius: 2,
                      px: 3,
                      py: 1.5,
                      fontWeight: 600,
                      background:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      boxShadow: "0 8px 25px rgba(102, 126, 234, 0.3)",
                      "&:hover": {
                        background:
                          "linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)",
                        boxShadow: "0 12px 35px rgba(102, 126, 234, 0.4)",
                      },
                    }}
                  >
                    Create New Tender
                  </Button>
                </Stack>
              </Paper>
            </Box>
          )}
        </Box>
      </Box>

      {/* Tender Form Drawer */}
      <AdminTenderForm
        open={formDialogOpen}
        onClose={handleFormClose}
        loading={loading}
        formData={formData}
        handleChange={handleChange}
        handleFileChange={handleFileChange}
        handleSubmit={handleSubmit}
        isEditMode={!!selectedTender}
      />

      {/* Document Viewer Dialog */}
      <DocumentViewerDialog
        open={documentDialogOpen}
        onClose={handleCloseDocumentDialog}
        tender={selectedTender}
        documentType={documentType}
      />

      {/* Snackbar for success/error messages */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{
            width: "100%",
            borderRadius: 2,
            boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
      <Snackbar
        open={!!successMessage}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          {successMessage}
        </Alert>
      </Snackbar>
      <Snackbar
        open={!!errorMessage}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="error"
          sx={{ width: "100%" }}
        >
          {errorMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}
