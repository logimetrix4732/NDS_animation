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

// --------- THEME ---------
const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: mode === "dark" ? "#90caf9" : "#1565c0",
      light: mode === "dark" ? "#e3f2fd" : "#bbdefb",
      dark: mode === "dark" ? "#42a5f5" : "#0d47a1",
    },
    secondary: {
      main: mode === "dark" ? "#ffb74d" : "#ef6c00",
      light: mode === "dark" ? "#ffe0b2" : "#ffcc02",
      dark: mode === "dark" ? "#f57c00" : "#e65100",
    },
    background: {
      default: mode === "dark" ? "#0b1020" : "#f8fafc",
      paper: mode === "dark" ? "#0f1629" : "#ffffff",
    },
    success: {
      main: mode === "dark" ? "#66bb6a" : "#2e7d32",
      light: mode === "dark" ? "#c8e6c9" : "#a5d6a7",
    },
    warning: {
      main: mode === "dark" ? "#ffa726" : "#f57c00",
      light: mode === "dark" ? "#ffe0b2" : "#ffb74d",
    },
    error: {
      main: mode === "dark" ? "#ef5350" : "#d32f2f",
      light: mode === "dark" ? "#ffcdd2" : "#f44336",
    },
    info: {
      main: mode === "dark" ? "#42a5f5" : "#1976d2",
      light: mode === "dark" ? "#bbdefb" : "#64b5f6",
    },
  },
  shape: { borderRadius: 20 },
  typography: {
    fontFamily:
      "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    h4: {
      fontWeight: 800,
      background:
        mode === "dark"
          ? "linear-gradient(45deg, #90caf9 30%, #42a5f5 90%)"
          : "linear-gradient(45deg, #1565c0 30%, #42a5f5 90%)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textShadow:
        mode === "dark" ? "0 0 20px rgba(144, 202, 249, 0.3)" : "none",
    },
    h6: { fontWeight: 700 },
    body1: { fontWeight: 500 },
    body2: { fontWeight: 400 },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          overflow: "hidden",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow:
              mode === "dark"
                ? "0 20px 40px rgba(0, 0, 0, 0.4)"
                : "0 20px 40px rgba(0, 0, 0, 0.1)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: "none",
          fontWeight: 600,
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow:
              mode === "dark"
                ? "0 8px 25px rgba(0, 0, 0, 0.3)"
                : "0 8px 25px rgba(0, 0, 0, 0.15)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        },
      },
    },
  },
});

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
  const [formOpen, setFormOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tenders, setTenders] = useState([]);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [fetchError, setFetchError] = useState("");
  const [documentDialogOpen, setDocumentDialogOpen] = useState(false);
  const [selectedTender, setSelectedTender] = useState(null);

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
    image: null,
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  // Fetch tenders from API
  useEffect(() => {
    const fetchTenders = async () => {
      try {
        setFetchLoading(true);
        setFetchError("");

        const token = localStorage.getItem("token");
        if (!token) {
          setFetchError("Please login first. No authentication token found.");
          setFetchLoading(false);
          return;
        }

        const response = await getFetch(
          `${import.meta.env.VITE_API_BASE_URL}/tenders`
        );

        console.log("Tenders API Response:", response);

        if (response && response.status === 200) {
          console.log("Raw API Response Data:", response.data.data);

          // Map the API response to match the expected format
          const mappedTenders = response.data.data.map((tender) => {
            console.log("Processing tender:", tender);

            // Try different possible field names for tender file
            const tenderFile = tender.tenderFile || tender.tender_file || tender.file || tender.document || tender.pdfFile || null;
            console.log("Found tenderFile:", tenderFile);

            return {
              id: tender.id || tender.referenceNo || `TND-${Date.now()}`,
              title: tender.tenderTitle || "Untitled Tender",
              description: tender.description || "No description available",
              status: "Published", // Default status
              priority: "Medium", // Default priority
              startDate: tender.startDate || new Date().toISOString().split('T')[0],
              estimatedValue: tender.estimatedValues || "$0",
              location: tender.location || "Not specified",
              preBidMeeting: tender.preBidMeeting || new Date().toISOString(),
              lastDateSubmission: tender.lastDateSubmission || new Date().toISOString(),
              bidOpening: tender.bidOpenning || tender.bidOpening || new Date().toISOString(),
              participants: Math.floor(Math.random() * 50) + 1, // Random participants for now
              category: "Infrastructure", // Default category
              tenderCard: tender.tenderCard || "Inactive",
              tenderFile: tenderFile,
              image: tender.image || "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400",
            };
          });

          console.log("Mapped Tenders:", mappedTenders);
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

    fetchTenders();
  }, []);

  const filteredTenders = useMemo(() => {
    let filtered = tenders.filter((tender) => {
      const matchesSearch =
        search === "" ||
        tender.title.toLowerCase().includes(search.toLowerCase()) ||
        tender.location.toLowerCase().includes(search.toLowerCase());

      const matchesStatus = selectedStatus === "" || tender.tenderCard === selectedStatus;
      const matchesPriority = selectedPriority === "" || tender.priority === selectedPriority;
      const matchesCategory = selectedCategory === "" || tender.category === selectedCategory;
      const matchesLocation = selectedLocation === "" || tender.location === selectedLocation;

      return matchesSearch && matchesStatus && matchesPriority && matchesCategory && matchesLocation;
    });
    return filtered;
  }, [tenders, search, selectedStatus, selectedPriority, selectedCategory, selectedLocation]);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSuccessMessage("");
    setErrorMessage("");
  };

  const handleFormOpen = () => {
    setFormOpen(true);
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
      tenderCard: "Inactive",
      tenderFile: null,
      corrigendumFile: null,
      image: null,
    });
    setErrors({});
  };

  const handleFormClose = () => {
    setFormOpen(false);
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
    console.log("=== HANDLE SUBMIT CALLED ===");

    // Check if token exists
    const token = localStorage.getItem("token");
    if (!token) {
      console.log("No token found, showing error message");
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

      const response = await postFetch(
        `${import.meta.env.VITE_API_BASE_URL}/tender/create`,
        formDataToSend
      );

      console.log("API Response:", response);

      if (response && response.status === 201) {
        console.log("Success! Closing modal...");
        setSuccessMessage("Tender created successfully!");
        setFormOpen(false);

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
          tenderCard: "Inactive",
          tenderFile: null,
          corrigendumFile: null,
          image: null,
        });

        // Refresh the tenders list
        window.location.reload();
      } else {
        console.log("Error response:", response);
        if (response && response.status === 401) {
          setErrorMessage("Authentication failed. Please login again.");
        } else {
          setErrorMessage("Error creating tender. Please try again.");
        }
      }
    } catch (error) {
      console.error("Error:", error);
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
    setDocumentDialogOpen(true);
  };

  const handleCloseDocumentDialog = () => {
    setDocumentDialogOpen(false);
    setSelectedTender(null);
  };

  // Test function to add a sample tender with document for testing
  const addTestTender = () => {
    const testTender = {
      id: "TEST-001",
      title: "Test Tender with Document",
      description: "This is a test tender to verify document viewing functionality",
      status: "Published",
      priority: "High",
      startDate: "2024-01-15",
      estimatedValue: "$1,000,000",
      location: "Delhi",
      preBidMeeting: "2024-01-20T10:00",
      lastDateSubmission: "2024-02-15T17:00",
      bidOpening: "2024-02-16T10:00",
      participants: 15,
      category: "Technology",
      tenderCard: "Active",
      tenderFile: "NDDB_1755844357952_0lw7wt.pdf", // Sample filename from your image
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400",
    };

    setTenders(prev => [testTender, ...prev]);
    console.log("Added test tender:", testTender);
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
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: 2,
                  width: "100%",
                }}
              >
                {/* Left Side - Title with Accent Bar */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    sx={{
                      width: 8,
                      height: 40,
                      background:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      borderRadius: 4,
                      mr: 2,
                    }}
                  />
                  <Typography variant="h4" sx={{ fontWeight: 800 }}>
                    Tenders
                  </Typography>
                </Box>

                {/* Right Side - Action Buttons */}
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="outlined"
                    startIcon={<DownloadIcon />}
                    sx={{
                      borderRadius: 3,
                      px: 3,
                      py: 1.5,
                      borderWidth: 2,
                      fontWeight: 600,
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
                    variant="outlined"
                    onClick={addTestTender}
                    sx={{
                      borderRadius: 3,
                      px: 3,
                      py: 1.5,
                      borderWidth: 2,
                      fontWeight: 600,
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
                    Add Test Tender
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={() => setFormOpen(true)}
                    sx={{
                      borderRadius: 3,
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
                    Create +
                  </Button>
                </Stack>
              </Box>

              {/* Bottom Row - Subtitle */}
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  fontSize: "1.1rem",
                  opacity: 0.8,
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
                  background: (t) => t.palette.mode === "dark"
                    ? "linear-gradient(135deg, #1e293b 0%, #334155 100%)"
                    : "#ffffff",
                  border: (t) => t.palette.mode === "dark"
                    ? "1px solid rgba(255,255,255,0.1)"
                    : "1px solid #e5e7eb",
                  boxShadow: (t) => t.palette.mode === "dark"
                    ? "0 4px 20px rgba(0, 0, 0, 0.3)"
                    : "0 1px 3px rgba(0, 0, 0, 0.1)",
                }}
              >
                {/* Header */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
                  <FilterListIcon sx={{ color: "primary.main", fontSize: 20 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600, color: "primary.main" }}>
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
                        startAdornment: <SearchIcon sx={{ color: "#9ca3af", mr: 1, fontSize: 20 }} />,
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 1.5,
                          backgroundColor: (t) => t.palette.mode === "dark" ? "rgba(255,255,255,0.05)" : "#f9fafb",
                          border: (t) => t.palette.mode === "dark" ? "1px solid rgba(255,255,255,0.1)" : "1px solid #e5e7eb",
                          "&:hover": {
                            borderColor: "primary.main",
                          },
                          "&.Mui-focused": {
                            borderColor: "primary.main",
                            boxShadow: (t) => `0 0 0 2px ${t.palette.primary.main}20`,
                          },
                        },
                      }}
                    />
                  </Grid>

                  {/* Category Filter */}
                  <Grid item xs={12} sm={6} md={1.5}>
                    <FormControl fullWidth size="small">
                      <Select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        displayEmpty
                        sx={{
                          borderRadius: 1.5,
                          backgroundColor: (t) => t.palette.mode === "dark" ? "rgba(255,255,255,0.05)" : "#f9fafb",
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: (t) => t.palette.mode === "dark" ? "rgba(255,255,255,0.1)" : "#e5e7eb",
                          },
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "primary.main",
                          },
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "primary.main",
                          },
                        }}
                      >
                        <MenuItem value="">All Categories</MenuItem>
                        <MenuItem value="Infrastructure">Infrastructure</MenuItem>
                        <MenuItem value="Construction">Construction</MenuItem>
                        <MenuItem value="Technology">Technology</MenuItem>
                      </Select>
                    </FormControl>
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
                          backgroundColor: (t) => t.palette.mode === "dark" ? "rgba(255,255,255,0.05)" : "#f9fafb",
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: (t) => t.palette.mode === "dark" ? "rgba(255,255,255,0.1)" : "#e5e7eb",
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

                  {/* Priority Filter */}
                  <Grid item xs={12} sm={6} md={1.5}>
                    <FormControl fullWidth size="small">
                      <Select
                        value={selectedPriority}
                        onChange={(e) => setSelectedPriority(e.target.value)}
                        displayEmpty
                        sx={{
                          borderRadius: 1.5,
                          backgroundColor: (t) => t.palette.mode === "dark" ? "rgba(255,255,255,0.05)" : "#f9fafb",
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: (t) => t.palette.mode === "dark" ? "rgba(255,255,255,0.1)" : "#e5e7eb",
                          },
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "primary.main",
                          },
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "primary.main",
                          },
                        }}
                      >
                        <MenuItem value="">All Priorities</MenuItem>
                        <MenuItem value="High">High Priority</MenuItem>
                        <MenuItem value="Medium">Medium Priority</MenuItem>
                        <MenuItem value="Low">Low Priority</MenuItem>
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
                          backgroundColor: (t) => t.palette.mode === "dark" ? "rgba(255,255,255,0.05)" : "#f9fafb",
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: (t) => t.palette.mode === "dark" ? "rgba(255,255,255,0.1)" : "#e5e7eb",
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
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, justifyContent: "flex-end" }}>
                      <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, mr: 1 }}>
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
              <LinearProgress sx={{ borderRadius: 2, height: 6 }} />
              <Typography variant="body2" sx={{ mt: 1, textAlign: "center", color: "text.secondary" }}>
                Loading tenders...
              </Typography>
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
            />
          )}

          {/* No Data State */}
          {!fetchLoading && !fetchError && filteredTenders.length === 0 && (
            <Box sx={{ textAlign: "center", py: 8 }}>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
                No tenders found
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {search || selectedStatus || selectedPriority || selectedCategory || selectedLocation
                  ? "Try adjusting your filters"
                  : "Create your first tender to get started"}
              </Typography>
            </Box>
          )}
        </Box>
      </Box>

      {/* Tender Form Drawer */}
      <AdminTenderForm
        open={formOpen}
        onClose={handleFormClose}
        loading={loading}
        formData={formData}
        handleChange={handleChange}
        handleFileChange={handleFileChange}
        handleSubmit={handleSubmit}
      />

      {/* Document Viewer Dialog */}
      <DocumentViewerDialog
        open={documentDialogOpen}
        onClose={handleCloseDocumentDialog}
        tender={selectedTender}
      />

      {/* Snackbar for success/error messages */}
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
