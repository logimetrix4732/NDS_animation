import * as React from "react";
import { useMemo, useState, useEffect } from "react";
import {
  Box,
  Grow,
  Stack,
  Badge,
  Alert,
  Button,
  AppBar,
  Avatar,
  Dialog,
  Toolbar,
  Tooltip,
  Snackbar,
  TextField,
  IconButton,
  Typography,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  useMediaQuery,
  Paper,
  CircularProgress,
} from "@mui/material";
import {
  DarkMode,
  LightMode,
  Notifications,
  Add as AddIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  Download as DownloadIcon,
} from "@mui/icons-material";
import { postFetch, getFetch, deleteFetch } from "../Api/Api";
import nds_logo from "../assets/img/nds_logo.png";
import AdminSidebar from "../AdminComponents/AdminSidebar";
import AdminPublicationForm from "./AdminPublicationForm";

import PublicationsTable from './PublicationsTable';

import DeleteConfirmationModal from './DeleteConfirmationModal';

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
  const [publications, setPublications] = useState([]);
  console.log(publications, "=publications")
  const [isLoading, setIsLoading] = useState(false);

  // Fetch publications data
  const fetchPublications = async () => {
    setIsLoading(true);
    try {
      const response = await getFetch(
        `${import.meta.env.VITE_API_BASE_URL}/getPublication?publicationType=${selectedStatus || 'HR Compliances'}`
      );
      console.log("API Response:", response);

      if (response?.data?.data) {
        const sortedData = response.data.data.sort((a, b) => b.id - a.id);
        const mappedData = sortedData.map(pub => ({
          id: pub.id,
          title: pub.name,
          type: selectedStatus || "HR Compliances",
          status: pub.isActive ? "Published" : "Unpublished",
          priority: pub.isActive ? "High" : "Medium",
          thumbnail: pub.thumbnail,
          pdfFile: pub.pdfFile,
          createdBy: pub.createdBy,
        }));
        console.log("Mapped Data:", mappedData);
        setPublications(mappedData);
      } else {
        console.log("No data in response");
        setPublications([]);
      }
    } catch (error) {
      console.error("Error fetching publications:", error);
      setErrorMessage("Failed to fetch publications. Please try again.");
      setPublications([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch data on component mount and when filters change
  useEffect(() => {
    fetchPublications();
  }, [selectedStatus]);

  const [formData, setFormData] = useState({
    name: "",
    publicationType: "HR Compliances",
    year: "",
    description: "",
    pdfFile: null,
    thumbnail: null,
    pdfHindi: null,
    pdfEnglish: null,
    isActive: true, // Default to active
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const filteredPublications = useMemo(() => {
    if (!publications || publications.length === 0) return [];

    return publications.filter((pub) => {
      if (!pub) return false;

      const matchesSearch =
        search === "" ||
        (pub.title && pub.title.toLowerCase().includes(search.toLowerCase())) ||
        (pub.id && pub.id.toString().toLowerCase().includes(search.toLowerCase())) ||
        (pub.status && pub.status.toLowerCase().includes(search.toLowerCase()));

      return matchesSearch;
    });
  }, [search, publications]);

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

  const paginatedPublications = useMemo(() => {
    return filteredPublications.slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );
  }, [filteredPublications, page, rowsPerPage]);

  const handleFormClose = () => {
    setFormOpen(false);
  };

  // Handle delete publication
  const handleDelete = async (id, publicationType) => {
    try {
      setLoading(true);
      const response = await deleteFetch(
        `${import.meta.env.VITE_API_BASE_URL}/publication/${id}?publicationType=${publicationType}`,
        id
      );

      if (response?.status === 200) {
        setSuccessMessage("Publication deleted successfully!");
        // Refresh the publications list
        fetchPublications();
      } else {
        setErrorMessage("Failed to delete publication. Please try again.");
      }
    } catch (error) {
      console.error("Error deleting publication:", error);
      setErrorMessage("Failed to delete publication. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // State for delete dialog
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [publicationToDelete, setPublicationToDelete] = useState(null);

  // Handle opening delete dialog
  const handleDeleteClick = (publication) => {
    setPublicationToDelete(publication);
    setDeleteDialogOpen(true);
  };

  // Handle confirming delete
  const handleConfirmDelete = () => {
    if (publicationToDelete) {
      handleDelete(publicationToDelete.id, publicationToDelete.type);
      setDeleteDialogOpen(false);
      setPublicationToDelete(null);
    }
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
    const token = localStorage.getItem("token");
    if (!token) {
      setErrorMessage("Please login first. No authentication token found.");
      return;
    }

    // Simple validation
    if (!formData.name.trim()) {
      setErrorMessage("Name is required");
      return;
    }

    // Check for PDF files based on publication type
    if (formData.publicationType === "Annual Report") {
      // For Annual Reports, check if either pdfHindi or pdfEnglish is uploaded
      if (!formData.pdfHindi && !formData.pdfEnglish) {
        setErrorMessage("At least one PDF file (Hindi or English) is required for Annual Report");
        return;
      }
    } else {
      // For other publication types, check for pdfFile
      if (!formData.pdfFile) {
        setErrorMessage("PDF file is required");
        return;
      }
    }

    setLoading(true);

    try {
      const formDataToSend = new FormData();

      // Basic fields
      formDataToSend.append("name", formData.name);
      formDataToSend.append("publicationType", formData.publicationType);
      formDataToSend.append("isActive", formData.isActive);

      // Optional fields
      if (formData.year) {
        formDataToSend.append("year", formData.year);
      }

      if (formData.description) {
        formDataToSend.append("description", formData.description);
      }

      // Files - handle based on publication type
      if (formData.publicationType === "Annual Report") {
        // For Annual Reports, use pdfHindi and pdfEnglish
        if (formData.pdfHindi) {
          formDataToSend.append("pdfHindi", formData.pdfHindi);
        }
        if (formData.pdfEnglish) {
          formDataToSend.append("pdfEnglish", formData.pdfEnglish);
        }
      } else {
        // For other publication types, use pdfFile
        formDataToSend.append("pdfFile", formData.pdfFile);
      }

      if (formData.thumbnail) {
        formDataToSend.append("thumbnail", formData.thumbnail);
      }

      const response = await postFetch(
        `${import.meta.env.VITE_API_BASE_URL}/createPublications`,
        formDataToSend
      );


      if (response && response.status === 201) {
        setSuccessMessage("Publication created successfully!");
        setFormOpen(false);

        // Refresh publications list
        fetchPublications();

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
          isActive: true, // Keep default active state
        });
      } else {
        if (response && response.status === 401) {
          setErrorMessage("Authentication failed. Please login again.");
        } else {
          setErrorMessage("Error creating publication. Please try again.");
        }
      }
    } catch (error) {
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
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: { xs: "flex-start", md: "center" },
                  justifyContent: "space-between",
                  gap: { xs: 3, md: 0 },
                  mb: 2,
                  width: "100%",
                }}
              >
                {/* Left Side - Title with Accent Bar */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    sx={{
                      width: { xs: 6, md: 8 },
                      height: { xs: 32, md: 40 },
                      background:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      borderRadius: 4,
                      mr: 2,
                    }}
                  />
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 800,
                      fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" }
                    }}
                  >
                    Publications
                  </Typography>
                </Box>

                {/* Right Side - Action Buttons */}
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  width={{ xs: "100%", sm: "auto" }}
                >
                  <Button
                    fullWidth={false}
                    variant="outlined"
                    startIcon={<DownloadIcon />}
                    sx={{
                      borderRadius: 3,
                      px: 3,
                      py: 1.5,
                      borderWidth: 2,
                      fontWeight: 600,
                      width: { xs: "100%", sm: "auto" },
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
                    fullWidth={false}
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={() => setFormOpen(true)}
                    sx={{
                      borderRadius: 3,
                      px: 3,
                      py: 1.5,
                      fontWeight: 600,
                      width: { xs: "100%", sm: "auto" },
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
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                  opacity: 0.8,
                  textAlign: { xs: "left", md: "left" },
                  mt: { xs: 1, md: 0 }
                }}
              >
                Here's a comprehensive overview of your publications for this
                month!
              </Typography>
            </Box>
          </Grow>

          {/* Publications Table */}
          <PublicationsTable
            paginatedPublications={paginatedPublications}
            filteredPublications={filteredPublications}
            page={page}
            rowsPerPage={rowsPerPage}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            isLoading={isLoading}
            handleDeleteClick={handleDeleteClick}
            loading={loading}
          />
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

      {/* Delete Confirmation Dialog */}
      <DeleteConfirmationModal
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        onConfirm={handleConfirmDelete}
        loading={loading}
      />
    </Box>
  );
}
