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
  Grid,
  Stack,
  Avatar,
  Paper,
  Button,
  Alert,
  IconButton,
  Snackbar,
  alpha,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Notifications,
  Refresh,
  Add,
  TrendingUp,
  LocationOn,
} from "@mui/icons-material";
import nds_logo from "../assets/img/nds_logo.png";
import AdminSidebar from "../AdminComponents/AdminSidebar";
import HomeStatisticsConfig from "./HomeStatisticsConfig";
import MilkProducerOrganisations from "./MilkProducerOrganisations";
import OrganisationDialog from "./OrganisationDialog";
import { getFetch, postFetchData, putFetchData, deleteFetch } from "../Api/Api";

// --------- LAYOUT ---------
const drawerWidth = 260;

// Custom theme for better UI
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#f8fafc",
      paper: "#ffffff",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
          border: "1px solid rgba(0,0,0,0.06)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 600,
        },
        contained: {
          boxShadow: "0 4px 12px rgba(25, 118, 210, 0.3)",
          "&:hover": {
            boxShadow: "0 6px 16px rgba(25, 118, 210, 0.4)",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
          "&:before": {
            display: "none",
          },
        },
      },
    },
  },
});

export default function DynamicData() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // State management
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  // Home Statistics State
  const [homeStats, setHomeStats] = useState({
    states_covered: "",
    district_served: "",
    villages_reached: "",
    associated_farmers: "",
  });

  const [homeStatsId, setHomeStatsId] = useState(null);

  // Milk Producer Organisations State
  const [orgServices, setOrgServices] = useState([]);
  const [orgDialogOpen, setOrgDialogOpen] = useState(false);
  const [editingOrg, setEditingOrg] = useState(null);

  // New Organisation State
  const [newOrg, setNewOrg] = useState({
    Title: "Milk Service",
    Type: "MILK PRODUCER ORGANISATION",
    states_data: [],
  });

  // New State Data State
  const [newStateData, setNewStateData] = useState({
    name: "",
    description: "",
    links: [],
  });

  // New Link State
  const [newLink, setNewLink] = useState({
    title: "",
    url: "",
  });

  // Fetch home statistics
  const fetchHomeStats = async () => {
    setLoading(true);
    try {
      const response = await getFetch(
        `${import.meta.env.VITE_API_BASE_URL}/home/fetch`
      );
      if (response?.data?.status && response?.data?.data?.length > 0) {
        const stats = response.data.data[0];
        setHomeStats({
          states_covered: stats.states_covered || "",
          district_served: stats.district_served || "",
          villages_reached: stats.villages_reached || "",
          associated_farmers: stats.associated_farmers || "",
        });
        setHomeStatsId(stats.id);
      }
    } catch (error) {
      console.error("Error fetching home stats:", error);
      setSnackbar({
        open: true,
        message: "Error fetching home statistics",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  // Fetch organisation services
  const fetchOrgServices = async () => {
    setLoading(true);
    try {
      const response = await getFetch(
        `${
          import.meta.env.VITE_API_BASE_URL
        }/org-services/fetch?Type=MILK PRODUCER ORGANISATION`
      );
      if (response?.data?.status && response?.data?.data) {
        setOrgServices(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching org services:", error);
      setSnackbar({
        open: true,
        message: "Error fetching organisation services",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  // Save home statistics
  const saveHomeStats = async () => {
    setLoading(true);
    try {
      let response;
      if (homeStatsId) {
        // Update existing
        response = await putFetchData(
          `${API_BASE_URL}/home/update/${homeStatsId}`,
          homeStats
        );
      } else {
        // Create new
        response = await postFetchData(
          `${API_BASE_URL}/home/create`,
          homeStats
        );
      }

      if (response?.status) {
        setSnackbar({
          open: true,
          message: "Home statistics saved successfully!",
          severity: "success",
        });
        fetchHomeStats();
      }
    } catch (error) {
      console.error("Error saving home stats:", error);
      setSnackbar({
        open: true,
        message: "Error saving home statistics",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  // Save organisation service
  const saveOrgService = async (orgData) => {
    setLoading(true);
    try {
      let response;
      if (orgData.id) {
        // Update existing
        response = await putFetchData(
          `${API_BASE_URL}/org-services/update/${orgData.id}`,
          orgData
        );
      } else {
        // Create new
        response = await postFetchData(
          `${API_BASE_URL}/org-services/create`,
          orgData
        );
      }

      if (response?.status) {
        setSnackbar({
          open: true,
          message: "Organisation service saved successfully!",
          severity: "success",
        });
        fetchOrgServices();
        setOrgDialogOpen(false);
        setEditingOrg(null);
      }
    } catch (error) {
      console.error("Error saving org service:", error);
      setSnackbar({
        open: true,
        message: "Error saving organisation service",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  // Delete organisation service
  const deleteOrgService = async (id) => {
    if (
      window.confirm(
        "Are you sure you want to delete this organisation service?"
      )
    ) {
      setLoading(true);
      try {
        const response = await deleteFetch(
          `${API_BASE_URL}/org-services/delete/${id}`
        );
        if (response?.status === 200) {
          setSnackbar({
            open: true,
            message: "Organisation service deleted successfully!",
            severity: "success",
          });
          fetchOrgServices();
        }
      } catch (error) {
        console.error("Error deleting org service:", error);
        setSnackbar({
          open: true,
          message: "Error deleting organisation service",
          severity: "error",
        });
      } finally {
        setLoading(false);
      }
    }
  };

  // Remove state from organisation
  const removeStateFromOrg = (index) => {
    setNewOrg((prev) => ({
      ...prev,
      states_data: prev.states_data.filter((_, i) => i !== index),
    }));
  };

  // Open edit dialog
  const openEditDialog = (org) => {
    setEditingOrg(org);
    setNewOrg({ ...org });
    setOrgDialogOpen(true);
  };

  // Open create dialog
  const openCreateDialog = () => {
    setEditingOrg(null);
    setNewOrg({
      Title: "Milk Service",
      Type: "MILK PRODUCER ORGANISATION",
      states_data: [],
    });
    setOrgDialogOpen(true);
  };

  // Load data on component mount
  useEffect(() => {
    fetchHomeStats();
    fetchOrgServices();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          bgcolor: "background.default",
        }}
      >
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            backdropFilter: "blur(12px)",
            backgroundColor: "rgba(255,255,255,0.95)",
            borderBottom: 1,
            borderColor: "divider",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
        >
          <Toolbar sx={{ minHeight: { xs: 64, md: 89 } }}>
            <IconButton
              edge="start"
              onClick={() => setMobileOpen(!mobileOpen)}
              sx={{ mr: 2, display: { sm: "none" } }}
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

            <Stack direction="row" spacing={2} alignItems="center">
              <IconButton
                sx={{
                  bgcolor: alpha("#1976d2", 0.1),
                  "&:hover": { bgcolor: alpha("#1976d2", 0.2) },
                }}
              >
                <Notifications />
              </IconButton>
              <Avatar
                sx={{
                  width: 40,
                  height: 40,
                  bgcolor: "primary.main",
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
                    Dynamic Data Management
                  </Typography>
                </Box>
                {/* Right Side - Action Buttons */}
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="outlined"
                    startIcon={<Refresh />}
                    onClick={fetchHomeStats}
                    disabled={loading}
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
                    Refresh Data
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={<Add />}
                    onClick={openCreateDialog}
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
                    Add Organisation
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
                Manage home statistics and milk producer organisation data with
                comprehensive controls
              </Typography>
            </Box>

            {/* Tabs Section */}
            <Box sx={{ mb: 4 }}>
              <Paper
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                  background: (t) =>
                    t.palette.mode === "dark"
                      ? "linear-gradient(135deg, #1e293b 0%, #334155 100%)"
                      : "#ffffff",
                  border: (t) =>
                    t.palette.mode === "dark"
                      ? "1px solid rgba(255,255,255,0.1)"
                      : "1px solid #e5e7eb",
                }}
              >
                <Box
                  sx={{
                    borderBottom: 1,
                    borderColor: "divider",
                    bgcolor: "background.paper",
                  }}
                >
                  <Stack direction="row" spacing={0}>
                    <Button
                      variant={activeTab === 0 ? "contained" : "text"}
                      onClick={() => setActiveTab(0)}
                      sx={{
                        borderRadius: 0,
                        px: 4,
                        py: 3,
                        minWidth: 200,
                        fontSize: "1rem",
                        fontWeight: 600,
                        "&.MuiButton-contained": {
                          bgcolor: "primary.main",
                          boxShadow: "0 4px 12px rgba(25, 118, 210, 0.3)",
                        },
                      }}
                    >
                      <TrendingUp sx={{ mr: 1.5, fontSize: 20 }} />
                      Home Statistics
                    </Button>
                    <Button
                      variant={activeTab === 1 ? "contained" : "text"}
                      onClick={() => setActiveTab(1)}
                      sx={{
                        borderRadius: 0,
                        px: 4,
                        py: 3,
                        minWidth: 200,
                        fontSize: "1rem",
                        fontWeight: 600,
                        "&.MuiButton-contained": {
                          bgcolor: "primary.main",
                          boxShadow: "0 4px 12px rgba(25, 118, 210, 0.3)",
                        },
                      }}
                    >
                      <LocationOn sx={{ mr: 1.5, fontSize: 20 }} />
                      Milk Producer Organisations
                    </Button>
                  </Stack>
                </Box>
              </Paper>
            </Box>

            {/* Home Statistics Tab */}
            {activeTab === 0 && (
              <HomeStatisticsConfig
                homeStats={homeStats}
                setHomeStats={setHomeStats}
                loading={loading}
                fetchHomeStats={fetchHomeStats}
                saveHomeStats={saveHomeStats}
              />
            )}

            {/* Milk Producer Organisations Tab */}
            {activeTab === 1 && (
              <MilkProducerOrganisations
                orgServices={orgServices}
                loading={loading}
                fetchOrgServices={fetchOrgServices}
                openCreateDialog={openCreateDialog}
                openEditDialog={openEditDialog}
                deleteOrgService={deleteOrgService}
              />
            )}
          </Box>
        </Box>

        {/* Organisation Dialog */}
        <OrganisationDialog
          orgDialogOpen={orgDialogOpen}
          setOrgDialogOpen={setOrgDialogOpen}
          editingOrg={editingOrg}
          newOrg={newOrg}
          setNewOrg={setNewOrg}
          newStateData={newStateData}
          setNewStateData={setNewStateData}
          newLink={newLink}
          setNewLink={setNewLink}
          loading={loading}
          saveOrgService={saveOrgService}
          removeStateFromOrg={removeStateFromOrg}
        />

        {/* Snackbar */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            onClose={() => setSnackbar({ ...snackbar, open: false })}
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
      </Box>
    </ThemeProvider>
  );
}
