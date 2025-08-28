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
  Grid,
  Card,
  CardContent,
  TextField,
  Stack,
  Chip,
  Avatar,
  useMediaQuery,
  Tooltip,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Alert,
  Switch,
  FormControlLabel,
  Checkbox,
  CircularProgress,
  Badge,
  Divider,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton as MuiIconButton,
  Fab,
  Snackbar,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Notifications,
  FilterList,
  Download,
  Refresh,
  Visibility,
  Edit,
  Delete,
  Warning,
  Info,
  Error,
  CalendarToday,
  Person,
  Computer,
  Security,
  Upload,
  Add,
  Remove,
  Email,
  AccessTime,
  TrendingUp,
  TrendingDown,
  ExpandMore,
  Save,
  Close,
  AddCircle,
  RemoveCircle,
  LocationOn,
  Business,
  Link as LinkIcon,
} from "@mui/icons-material";
import nds_logo from "../assets/img/nds_logo.png";
import AdminSidebar from "../AdminComponents/AdminSidebar";
import { getFetch, postFetchData, putFetchData, deleteFetch } from "../Api/Api";

// --------- THEME ---------
const getDesignTokens = () => ({
  palette: {
    mode: "light",
    primary: { main: "#1565c0" },
    secondary: { main: "#ef6c00" },
    background: {
      default: "#f6f8fc",
      paper: "#ffffff",
    },
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily:
      "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    h4: { fontWeight: 700 },
    h6: { fontWeight: 600 },
  },
  components: {
    MuiCard: { styleOverrides: { root: { overflow: "hidden" } } },
  },
});

// --------- LAYOUT ---------
const drawerWidth = 260;

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
  const [selectedOrg, setSelectedOrg] = useState(null);
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

  // API Base URL - you can set this in your environment variables
  const API_BASE_URL =
    import.meta.env.VITE_API_URL || "http://localhost:3000/api";

  // Fetch home statistics
  const fetchHomeStats = async () => {
    setLoading(true);
    try {
      const response = await getFetch(`${API_BASE_URL}/home/fetch`);
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
        `${API_BASE_URL}/org-services/fetch?Type=MILK PRODUCER ORGANISATION`
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

  // Add new link to state data
  const addLinkToState = () => {
    if (newLink.title && newLink.url) {
      setNewStateData((prev) => ({
        ...prev,
        links: [...prev.links, { ...newLink }],
      }));
      setNewLink({ title: "", url: "" });
    }
  };

  // Remove link from state data
  const removeLinkFromState = (index) => {
    setNewStateData((prev) => ({
      ...prev,
      links: prev.links.filter((_, i) => i !== index),
    }));
  };

  // Add new state to organisation
  const addStateToOrg = () => {
    if (newStateData.name && newStateData.description) {
      setNewOrg((prev) => ({
        ...prev,
        states_data: [...prev.states_data, { ...newStateData }],
      }));
      setNewStateData({ name: "", description: "", links: [] });
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

  const theme = useMemo(() => createTheme(getDesignTokens()), []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            backdropFilter: "blur(8px)",
            backgroundColor: "rgba(255,255,255,0.9)",
            borderBottom: 1,
            borderColor: "divider",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
        >
          <Toolbar sx={{ minHeight: { xs: 64, md: 89 } }}>
            <IconButton
              edge="start"
              onClick={() => setMobileOpen(!mobileOpen)}
              sx={{ mr: 1, display: { sm: "none" } }}
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

            <Stack direction="row" spacing={1} alignItems="center">
              <IconButton>
                <Notifications />
              </IconButton>
              <Avatar sx={{ width: 34, height: 34 }}>AS</Avatar>
            </Stack>
          </Toolbar>
        </AppBar>

        <AdminSidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            mt: { xs: 8, md: 10 },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Grid container spacing={3}>
            {/* Header */}
            <Grid item xs={12}>
              <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                  Dynamic Data Management
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Manage home statistics and milk producer organisation data
                </Typography>
              </Box>
            </Grid>

            {/* Tabs */}
            <Grid item xs={12}>
              <Paper sx={{ mb: 3 }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Stack direction="row" spacing={0}>
                    <Button
                      variant={activeTab === 0 ? "contained" : "text"}
                      onClick={() => setActiveTab(0)}
                      sx={{ borderRadius: 0, px: 3, py: 2 }}
                    >
                      <TrendingUp sx={{ mr: 1 }} />
                      Home Statistics
                    </Button>
                    <Button
                      variant={activeTab === 1 ? "contained" : "text"}
                      onClick={() => setActiveTab(1)}
                      sx={{ borderRadius: 0, px: 3, py: 2 }}
                    >
                      <LocationOn sx={{ mr: 1 }} />
                      Milk Producer Organisations
                    </Button>
                  </Stack>
                </Box>
              </Paper>
            </Grid>

            {/* Home Statistics Tab */}
            {activeTab === 0 && (
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 3,
                      }}
                    >
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Home Statistics Configuration
                      </Typography>
                      <Button
                        variant="outlined"
                        startIcon={<Refresh />}
                        onClick={fetchHomeStats}
                        disabled={loading}
                      >
                        Refresh
                      </Button>
                    </Box>

                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6} md={3}>
                        <TextField
                          fullWidth
                          label="States Covered"
                          value={homeStats.states_covered}
                          onChange={(e) =>
                            setHomeStats((prev) => ({
                              ...prev,
                              states_covered: e.target.value,
                            }))
                          }
                          placeholder="e.g., 11"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <LocationOn color="primary" />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={3}>
                        <TextField
                          fullWidth
                          label="Districts Served"
                          value={homeStats.district_served}
                          onChange={(e) =>
                            setHomeStats((prev) => ({
                              ...prev,
                              district_served: e.target.value,
                            }))
                          }
                          placeholder="e.g., 200"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Business color="primary" />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={3}>
                        <TextField
                          fullWidth
                          label="Villages Reached"
                          value={homeStats.villages_reached}
                          onChange={(e) =>
                            setHomeStats((prev) => ({
                              ...prev,
                              villages_reached: e.target.value,
                            }))
                          }
                          placeholder="e.g., 36,630"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <LocationOn color="primary" />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={3}>
                        <TextField
                          fullWidth
                          label="Associated Farmers (Lac)"
                          value={homeStats.associated_farmers}
                          onChange={(e) =>
                            setHomeStats((prev) => ({
                              ...prev,
                              associated_farmers: e.target.value,
                            }))
                          }
                          placeholder="e.g., 12.3"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Person color="primary" />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>
                    </Grid>

                    <Box
                      sx={{
                        mt: 3,
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Button
                        variant="contained"
                        startIcon={<Save />}
                        onClick={saveHomeStats}
                        disabled={loading}
                        size="large"
                      >
                        {loading ? (
                          <CircularProgress size={20} />
                        ) : (
                          "Save Statistics"
                        )}
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            )}

            {/* Milk Producer Organisations Tab */}
            {activeTab === 1 && (
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 3,
                      }}
                    >
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Milk Producer Organisations
                      </Typography>
                      <Stack direction="row" spacing={2}>
                        <Button
                          variant="outlined"
                          startIcon={<Refresh />}
                          onClick={fetchOrgServices}
                          disabled={loading}
                        >
                          Refresh
                        </Button>
                        <Button
                          variant="contained"
                          startIcon={<Add />}
                          onClick={openCreateDialog}
                        >
                          Add New Organisation
                        </Button>
                      </Stack>
                    </Box>

                    {orgServices.map((org, index) => (
                      <Accordion key={org.id || index} sx={{ mb: 2 }}>
                        <AccordionSummary expandIcon={<ExpandMore />}>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              width: "100%",
                            }}
                          >
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                              {org.Title}
                            </Typography>
                            <Stack direction="row" spacing={1}>
                              <IconButton
                                size="small"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  openEditDialog(org);
                                }}
                              >
                                <Edit />
                              </IconButton>
                              <IconButton
                                size="small"
                                color="error"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  deleteOrgService(org.id);
                                }}
                              >
                                <Delete />
                              </IconButton>
                            </Stack>
                          </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mb: 2 }}
                          >
                            Type: {org.Type}
                          </Typography>

                          {org.states_data?.map((state, stateIndex) => (
                            <Box
                              key={stateIndex}
                              sx={{
                                mb: 2,
                                p: 2,
                                border: 1,
                                borderColor: "divider",
                                borderRadius: 1,
                              }}
                            >
                              <Typography
                                variant="subtitle1"
                                sx={{ fontWeight: 600, mb: 1 }}
                              >
                                {state.name}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ mb: 2 }}
                              >
                                {state.description}
                              </Typography>

                              <List dense>
                                {state.links?.map((link, linkIndex) => (
                                  <ListItem key={linkIndex} sx={{ px: 0 }}>
                                    <ListItemText
                                      primary={link.title}
                                      secondary={
                                        <a
                                          href={link.url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          style={{ color: "inherit" }}
                                        >
                                          {link.url}
                                        </a>
                                      }
                                    />
                                  </ListItem>
                                ))}
                              </List>
                            </Box>
                          ))}
                        </AccordionDetails>
                      </Accordion>
                    ))}
                  </CardContent>
                </Card>
              </Grid>
            )}
          </Grid>
        </Box>

        {/* Organisation Dialog */}
        <Dialog
          open={orgDialogOpen}
          onClose={() => setOrgDialogOpen(false)}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle>
            {editingOrg
              ? "Edit Organisation Service"
              : "Add New Organisation Service"}
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={3} sx={{ mt: 1 }}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Title"
                  value={newOrg.Title}
                  onChange={(e) =>
                    setNewOrg((prev) => ({ ...prev, Title: e.target.value }))
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Type"
                  value={newOrg.Type}
                  onChange={(e) =>
                    setNewOrg((prev) => ({ ...prev, Type: e.target.value }))
                  }
                />
              </Grid>

              {/* States Data Section */}
              <Grid item xs={12}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  States Data
                </Typography>

                {newOrg.states_data.map((state, stateIndex) => (
                  <Accordion key={stateIndex} sx={{ mb: 2 }}>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          width: "100%",
                        }}
                      >
                        <Typography variant="subtitle1">
                          {state.name || "New State"}
                        </Typography>
                        <IconButton
                          size="small"
                          color="error"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeStateFromOrg(stateIndex);
                          }}
                        >
                          <RemoveCircle />
                        </IconButton>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="State Name"
                            value={state.name}
                            onChange={(e) => {
                              const updatedStates = [...newOrg.states_data];
                              updatedStates[stateIndex].name = e.target.value;
                              setNewOrg((prev) => ({
                                ...prev,
                                states_data: updatedStates,
                              }));
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Description"
                            value={state.description}
                            onChange={(e) => {
                              const updatedStates = [...newOrg.states_data];
                              updatedStates[stateIndex].description =
                                e.target.value;
                              setNewOrg((prev) => ({
                                ...prev,
                                states_data: updatedStates,
                              }));
                            }}
                          />
                        </Grid>

                        {/* Links Section */}
                        <Grid item xs={12}>
                          <Typography variant="subtitle2" sx={{ mb: 1 }}>
                            Links
                          </Typography>

                          {state.links?.map((link, linkIndex) => (
                            <Box
                              key={linkIndex}
                              sx={{ display: "flex", gap: 1, mb: 1 }}
                            >
                              <TextField
                                size="small"
                                label="Title"
                                value={link.title}
                                onChange={(e) => {
                                  const updatedStates = [...newOrg.states_data];
                                  updatedStates[stateIndex].links[
                                    linkIndex
                                  ].title = e.target.value;
                                  setNewOrg((prev) => ({
                                    ...prev,
                                    states_data: updatedStates,
                                  }));
                                }}
                                sx={{ flex: 1 }}
                              />
                              <TextField
                                size="small"
                                label="URL"
                                value={link.url}
                                onChange={(e) => {
                                  const updatedStates = [...newOrg.states_data];
                                  updatedStates[stateIndex].links[
                                    linkIndex
                                  ].url = e.target.value;
                                  setNewOrg((prev) => ({
                                    ...prev,
                                    states_data: updatedStates,
                                  }));
                                }}
                                sx={{ flex: 1 }}
                              />
                              <IconButton
                                size="small"
                                color="error"
                                onClick={() => {
                                  const updatedStates = [...newOrg.states_data];
                                  updatedStates[stateIndex].links.splice(
                                    linkIndex,
                                    1
                                  );
                                  setNewOrg((prev) => ({
                                    ...prev,
                                    states_data: updatedStates,
                                  }));
                                }}
                              >
                                <RemoveCircle />
                              </IconButton>
                            </Box>
                          ))}

                          {/* Add New Link */}
                          <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                            <TextField
                              size="small"
                              label="New Link Title"
                              value={newLink.title}
                              onChange={(e) =>
                                setNewLink((prev) => ({
                                  ...prev,
                                  title: e.target.value,
                                }))
                              }
                              sx={{ flex: 1 }}
                            />
                            <TextField
                              size="small"
                              label="New Link URL"
                              value={newLink.url}
                              onChange={(e) =>
                                setNewLink((prev) => ({
                                  ...prev,
                                  url: e.target.value,
                                }))
                              }
                              sx={{ flex: 1 }}
                            />
                            <IconButton
                              color="primary"
                              onClick={() => {
                                if (newLink.title && newLink.url) {
                                  const updatedStates = [...newOrg.states_data];
                                  updatedStates[stateIndex].links = [
                                    ...(updatedStates[stateIndex].links || []),
                                    { ...newLink },
                                  ];
                                  setNewOrg((prev) => ({
                                    ...prev,
                                    states_data: updatedStates,
                                  }));
                                  setNewLink({ title: "", url: "" });
                                }
                              }}
                            >
                              <AddCircle />
                            </IconButton>
                          </Box>
                        </Grid>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                ))}

                {/* Add New State */}
                <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
                  <TextField
                    size="small"
                    label="New State Name"
                    value={newStateData.name}
                    onChange={(e) =>
                      setNewStateData((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    sx={{ flex: 1 }}
                  />
                  <TextField
                    size="small"
                    label="New State Description"
                    value={newStateData.description}
                    onChange={(e) =>
                      setNewStateData((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                    sx={{ flex: 1 }}
                  />
                  <IconButton
                    color="primary"
                    onClick={() => {
                      if (newStateData.name && newStateData.description) {
                        setNewOrg((prev) => ({
                          ...prev,
                          states_data: [
                            ...prev.states_data,
                            { ...newStateData },
                          ],
                        }));
                        setNewStateData({
                          name: "",
                          description: "",
                          links: [],
                        });
                      }
                    }}
                  >
                    <AddCircle />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOrgDialogOpen(false)}>Cancel</Button>
            <Button
              variant="contained"
              onClick={() => saveOrgService(newOrg)}
              disabled={loading}
            >
              {loading ? <CircularProgress size={20} /> : "Save"}
            </Button>
          </DialogActions>
        </Dialog>

        {/* Snackbar */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
        >
          <Alert
            onClose={() => setSnackbar({ ...snackbar, open: false })}
            severity={snackbar.severity}
            sx={{ width: "100%" }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
    </ThemeProvider>
  );
}
