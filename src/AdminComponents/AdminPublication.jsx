import * as React from "react";
import { useMemo, useState } from "react";
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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
  Divider,
  Badge,
  Fade,
  Grow,
  Zoom,
  Alert,
  Snackbar,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  LightMode,
  DarkMode,
  Notifications,
  CheckCircle,
  ArrowUpward,
  ArrowDownward,
  Add as AddIcon,
  Download as DownloadIcon,
  ViewModule as ViewModuleIcon,
  MoreVert as MoreVertIcon,
  Cancel as CancelIcon,
  Done as DoneIcon,
  Schedule as ScheduleIcon,
  RadioButtonUnchecked as RadioButtonUncheckedIcon,
  Help as HelpIcon,
  TrendingUp as TrendingUpIcon,
  Book as BookIcon,
  Article as ArticleIcon,
  Description as DescriptionIcon,
} from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import nds_logo from "../assets/img/nds_logo.png";
import AdminSidebar from "../AdminComponents/AdminSidebar";
import AdminPublicationForm from "./AdminPublicationForm";
import { postFetch } from "../Api/Api";

// --------- API CONFIGURATION ---------

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

// --------- MOCK DATA ---------
const publications = [
  {
    id: "PUB-9366",
    title: "HR Policy Compliance Guidelines 2024",
    type: "HR Compliances",
    status: "Published",
    priority: "High",
    date: "2024-01-15",
    author: "Dr. Amit Kumar",
    category: "HR",
    views: 1247,
    downloads: 89,
    rating: 4.8,
  },
  {
    id: "PUB-5736",
    title: "Annual Report 2023-24: Dairy Development",
    type: "Annual Reports",
    status: "Draft",
    priority: "Medium",
    date: "2024-01-10",
    author: "Dr. Priya Sharma",
    category: "Reports",
    views: 567,
    downloads: 23,
    rating: 4.2,
  },
  {
    id: "PUB-7918",
    title: "Employee Safety Policy Document",
    type: "Policies",
    status: "Under Review",
    priority: "High",
    date: "2024-01-08",
    author: "Dr. Rajesh Patel",
    category: "Policy",
    views: 892,
    downloads: 156,
    rating: 4.9,
  },
  {
    id: "PUB-6498",
    title: "Workplace Ethics Compliance Manual",
    type: "HR Compliances",
    status: "Published",
    priority: "Low",
    date: "2024-01-05",
    author: "HR Team",
    category: "HR",
    views: 2341,
    downloads: 445,
    rating: 4.5,
  },
  {
    id: "PUB-7138",
    title: "Annual Report 2022-23: Financial Performance",
    type: "Annual Reports",
    status: "Published",
    priority: "High",
    date: "2024-01-03",
    author: "Finance Division",
    category: "Reports",
    views: 1789,
    downloads: 234,
    rating: 4.7,
  },
  {
    id: "PUB-3344",
    title: "Data Privacy Policy Framework",
    type: "Policies",
    status: "In Progress",
    priority: "Medium",
    date: "2024-01-01",
    author: "IT Department",
    category: "Policy",
    views: 456,
    downloads: 67,
    rating: 4.3,
  },
  {
    id: "PUB-4455",
    title: "Labor Law Compliance Handbook",
    type: "HR Compliances",
    status: "Draft",
    priority: "Low",
    date: "2023-12-28",
    author: "Legal Team",
    category: "HR",
    views: 678,
    downloads: 89,
    rating: 4.1,
  },
  {
    id: "PUB-5566",
    title: "Annual Report 2021-22: Strategic Overview",
    type: "Annual Reports",
    status: "Published",
    priority: "High",
    date: "2023-12-25",
    author: "Strategy Division",
    category: "Reports",
    views: 1567,
    downloads: 123,
    rating: 4.6,
  },
];

const getStatusIcon = (status) => {
  switch (status) {
    case "Published":
      return <CheckCircle sx={{ color: "success.main", fontSize: 20 }} />;
    case "Draft":
      return (
        <RadioButtonUncheckedIcon
          sx={{ color: "warning.main", fontSize: 20 }}
        />
      );
    case "Under Review":
      return <ScheduleIcon sx={{ color: "info.main", fontSize: 20 }} />;
    case "In Progress":
      return <ScheduleIcon sx={{ color: "primary.main", fontSize: 20 }} />;
    default:
      return <HelpIcon sx={{ color: "text.secondary", fontSize: 20 }} />;
  }
};

const getPriorityIcon = (priority) => {
  switch (priority) {
    case "High":
      return <ArrowUpward sx={{ color: "error.main", fontSize: 16 }} />;
    case "Medium":
      return <ArrowDownward sx={{ color: "warning.main", fontSize: 16 }} />;
    case "Low":
      return <ArrowDownward sx={{ color: "success.main", fontSize: 16 }} />;
    default:
      return <ArrowDownward sx={{ color: "text.secondary", fontSize: 16 }} />;
  }
};

const getTypeColor = (type) => {
  switch (type) {
    case "HR Compliances":
      return "primary";
    case "Annual Reports":
      return "secondary";
    case "Policies":
      return "success";
    default:
      return "default";
  }
};

const getTypeIcon = (type) => {
  switch (type) {
    case "HR Compliances":
      return <BookIcon sx={{ fontSize: 16 }} />;
    case "Annual Reports":
      return <DescriptionIcon sx={{ fontSize: 16 }} />;
    case "Policies":
      return <ArticleIcon sx={{ fontSize: 16 }} />;
    default:
      return <ArticleIcon sx={{ fontSize: 16 }} />;
  }
};

// --------- LAYOUT ---------
const drawerWidth = 260;

export default function AdminPublication() {
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState(prefersDark ? "dark" : "light");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedPriority, setSelectedPriority] = useState("");
  const [formOpen, setFormOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    publicationType: "HR Compliances",
    year: "",
    description: "",
    pdfFile: null,
    thumbnail: null,
    pdfHindi: null,
    pdfEnglish: null,
  });

  const [errors, setErrors] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const filteredPublications = useMemo(() => {
    let filtered = publications.filter((pub) => {
      const matchesSearch =
        search === "" ||
        pub.title.toLowerCase().includes(search.toLowerCase()) ||
        pub.id.toLowerCase().includes(search.toLowerCase()) ||
        pub.author.toLowerCase().includes(search.toLowerCase());

      const matchesType = selectedStatus === "" || pub.type === selectedStatus;
      const matchesStatus =
        selectedPriority === "" || pub.status === selectedPriority;

      return matchesSearch && matchesType && matchesStatus;
    });
    return filtered;
  }, [search, selectedStatus, selectedPriority]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSuccessMessage("");
    setErrorMessage("");
  };

  const paginatedPublications = filteredPublications.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleFormOpen = () => {
    setFormOpen(true);
    setFormData({
      name: "",
      publicationType: "HR Compliances",
      year: "",
      description: "",
      pdfFile: null,
      thumbnail: null,
      pdfHindi: null,
      pdfEnglish: null,
    });
    setErrors({});
    setSelectedFile(null);
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
    console.log("Preventing default behavior...");

    // Check if token exists
    const token = localStorage.getItem("token");
    if (!token) {
      console.log("No token found, showing error message");
      setErrorMessage("Please login first. No authentication token found.");
      return;
    }

    // Simple validation
    if (!formData.name.trim()) {
      setErrorMessage("Name is required");
      return;
    }

    if (!formData.pdfFile) {
      setErrorMessage("PDF file is required");
      return;
    }

    setLoading(true);

    try {
      const formDataToSend = new FormData();

      // Basic fields
      formDataToSend.append("name", formData.name);
      formDataToSend.append("publicationType", formData.publicationType);

      // Optional fields
      if (formData.year) {
        formDataToSend.append("year", formData.year);
      }

      if (formData.description) {
        formDataToSend.append("description", formData.description);
      }

      // Files
      formDataToSend.append("pdfFile", formData.pdfFile);

      if (formData.thumbnail) {
        formDataToSend.append("thumbnail", formData.thumbnail);
      }

      if (formData.pdfHindi) {
        formDataToSend.append("pdfHindi", formData.pdfHindi);
      }

      if (formData.pdfEnglish) {
        formDataToSend.append("pdfEnglish", formData.pdfEnglish);
      }

      const response = await postFetch(
        `${import.meta.env.VITE_API_BASE_URL}/createPublications`,
        formDataToSend
      );

      console.log("API Response:", response);

      if (response && response.status === 200) {
        console.log("Success! Closing modal...");
        setSuccessMessage("Publication created successfully!");
        setFormOpen(false);

        // Reset form
        setFormData({
          name: "",
          publicationType: "HR Compliances",
          year: "",
          description: "",
          pdfFile: null,
          thumbnail: null,
          pdfHindi: null,
          pdfEnglish: null,
        });
      } else {
        console.log("Error response:", response);
        if (response && response.status === 401) {
          setErrorMessage("Authentication failed. Please login again.");
        } else {
          setErrorMessage("Error creating publication. Please try again.");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      if (error.status === 401) {
        setErrorMessage("Authentication failed. Please login again.");
      } else {
        setErrorMessage("Error creating publication. Please try again.");
      }
    } finally {
      setLoading(false);
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
              placeholder="Search publications, authors, status…"
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
                    Publications
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
                Here's a comprehensive overview of your publications for this
                month!
              </Typography>
            </Box>
          </Grow>

          {/* Publications Table */}
          <Paper
            sx={{
              borderRadius: 4,
              overflow: "hidden",
              background: (t) =>
                t.palette.mode === "dark"
                  ? "linear-gradient(135deg, #0f1629 0%, #1a2332 100%)"
                  : "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
              border: (t) =>
                t.palette.mode === "dark"
                  ? "1px solid rgba(255,255,255,0.1)"
                  : "1px solid rgba(0,0,0,0.08)",
              boxShadow: (t) =>
                t.palette.mode === "dark"
                  ? "0 8px 32px rgba(0, 0, 0, 0.3)"
                  : "0 8px 32px rgba(0, 0, 0, 0.08)",
            }}
          >
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow
                    sx={{
                      background: (t) =>
                        t.palette.mode === "dark"
                          ? "rgba(255,255,255,0.05)"
                          : "rgba(0,0,0,0.02)",
                      "& th": {
                        borderBottom: "2px solid",
                        borderColor: (t) =>
                          t.palette.mode === "dark"
                            ? "rgba(255,255,255,0.1)"
                            : "rgba(0,0,0,0.08)",
                      },
                    }}
                  >
                    <TableCell>S.No</TableCell>
                    <TableCell sx={{ fontWeight: 700, fontSize: "0.95rem" }}>
                      Publication ID
                    </TableCell>
                    <TableCell sx={{ fontWeight: 700, fontSize: "0.95rem" }}>
                      Title & Details
                    </TableCell>
                    <TableCell sx={{ fontWeight: 700, fontSize: "0.95rem" }}>
                      Type
                    </TableCell>
                    <TableCell sx={{ fontWeight: 700, fontSize: "0.95rem" }}>
                      Status
                    </TableCell>
                    <TableCell sx={{ fontWeight: 700, fontSize: "0.95rem" }}>
                      Priority
                    </TableCell>
                    <TableCell sx={{ fontWeight: 700, fontSize: "0.95rem" }}>
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginatedPublications.map((pub, index) => (
                    <TableRow
                      key={pub.id}
                      hover
                      sx={{
                        transition: "all 0.2s ease-in-out",
                        "&:hover": {
                          background: (t) =>
                            t.palette.mode === "dark"
                              ? "rgba(255,255,255,0.05)"
                              : "rgba(0,0,0,0.02)",
                          transform: "scale(1.01)",
                        },
                        animation: `fadeInUp 0.5s ease-out ${
                          index * 0.1
                        }s both`,
                        "@keyframes fadeInUp": {
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
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>
                        <Box>
                          <Typography
                            variant="body2"
                            sx={{ fontWeight: 600, mb: 1 }}
                          >
                            {pub.id}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box>
                          <Typography
                            variant="body2"
                            sx={{ maxWidth: 300, fontWeight: 500, mb: 1 }}
                          >
                            {pub.title}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Chip
                          icon={getTypeIcon(pub.type)}
                          label={pub.type}
                          size="small"
                          color={getTypeColor(pub.type)}
                          sx={{
                            borderRadius: 2,
                            fontWeight: 600,
                            "& .MuiChip-icon": {
                              color: "inherit",
                            },
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            p: 1,
                            borderRadius: 2,
                            background: (t) =>
                              t.palette.mode === "dark"
                                ? "rgba(255,255,255,0.05)"
                                : "rgba(0,0,0,0.02)",
                          }}
                        >
                          {getStatusIcon(pub.status)}
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {pub.status}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            p: 1,
                            borderRadius: 2,
                            background: (t) =>
                              t.palette.mode === "dark"
                                ? "rgba(255,255,255,0.05)"
                                : "rgba(0,0,0,0.02)",
                          }}
                        >
                          {getPriorityIcon(pub.priority)}
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {pub.priority}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <IconButton
                          size="small"
                          sx={{
                            background: (t) =>
                              t.palette.mode === "dark"
                                ? "rgba(255,255,255,0.05)"
                                : "rgba(0,0,0,0.02)",
                            "&:hover": {
                              background: (t) =>
                                t.palette.mode === "dark"
                                  ? "rgba(255,255,255,0.1)"
                                  : "rgba(0,0,0,0.08)",
                              transform: "scale(1.1)",
                            },
                          }}
                        >
                          <MoreVertIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            {/* Pagination */}
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={filteredPublications.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              labelRowsPerPage="Rows per page"
              sx={{
                borderTop: 1,
                borderColor: (t) =>
                  t.palette.mode === "dark"
                    ? "rgba(255,255,255,0.1)"
                    : "rgba(0,0,0,0.08)",
                background: (t) =>
                  t.palette.mode === "dark"
                    ? "rgba(255,255,255,0.02)"
                    : "rgba(0,0,0,0.01)",
              }}
            />
          </Paper>
        </Box>
      </Box>

      {/* Publication Form Drawer */}
      <AdminPublicationForm
        open={formOpen}
        onClose={handleFormClose}
        loading={loading}
        formData={formData}
        handleChange={handleChange}
        handleFileChange={handleFileChange}
        handleSubmit={handleSubmit}
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
