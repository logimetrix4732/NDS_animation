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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Switch,
  InputAdornment,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton as MuiIconButton,
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
  Edit as EditIcon,
  Delete as DeleteIcon,
  Download as DownloadIcon,
  Visibility as ViewIcon,
  CloudUpload as UploadIcon,
  CalendarToday as CalendarIcon,
} from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import nds_logo from "../assets/img/nds_logo.png";
import AdminSidebar from "../AdminComponents/AdminSidebar";

// --------- THEME ---------
const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: { main: mode === "dark" ? "#90caf9" : "#1565c0" },
    secondary: { main: mode === "dark" ? "#ffb74d" : "#ef6c00" },
    background: {
      default: mode === "dark" ? "#0b1020" : "#f6f8fc",
      paper: mode === "dark" ? "#0f1629" : "#ffffff",
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

// --------- MOCK DATA ---------
const publicationData = [
  {
    id: 1,
    name: "Employee Handbook 2024",
    type: "HR Compliances",
    status: "Active",
    lastUpdate: "2024-12-15",
    createdBy: "HR Department",
    size: "2.5 MB",
    downloads: 45,
  },
  {
    id: 2,
    name: "Annual Report 2023-24",
    type: "Annual Reports",
    status: "Active",
    lastUpdate: "2024-11-20",
    createdBy: "Finance Team",
    size: "15.2 MB",
    downloads: 89,
  },
  {
    id: 3,
    name: "Data Privacy Policy",
    type: "Policies",
    status: "Active",
    lastUpdate: "2024-10-10",
    createdBy: "Legal Team",
    size: "1.8 MB",
    downloads: 67,
  },
  {
    id: 4,
    name: "Safety Guidelines",
    type: "HR Compliances",
    status: "Inactive",
    lastUpdate: "2024-09-15",
    createdBy: "Safety Officer",
    size: "3.1 MB",
    downloads: 23,
  },
  {
    id: 5,
    name: "Sustainability Report 2024",
    type: "Annual Reports",
    status: "Active",
    lastUpdate: "2024-12-01",
    createdBy: "ESG Team",
    size: "8.7 MB",
    downloads: 34,
  },
];

// --------- LAYOUT ---------
const drawerWidth = 260;

// Tab Panel Component
function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`publication-tabpanel-${index}`}
      aria-labelledby={`publication-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function AdminPublication() {
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState(prefersDark ? "dark" : "light");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [tabValue, setTabValue] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedType, setSelectedType] = useState("");

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleCreatePublication = (type) => {
    setSelectedType(type);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedType("");
  };

  const filteredData = useMemo(() => {
    const s = search.toLowerCase();
    return publicationData.filter((item) =>
      [item.name, item.type, item.status, item.createdBy].some((v) =>
        String(v).toLowerCase().includes(s)
      )
    );
  }, [search]);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backdropFilter: "blur(8px)",
          backgroundColor: (t) =>
            t.palette.mode === "dark"
              ? "rgba(10, 14, 25, 0.7)"
              : "rgba(255,255,255,0.7)",
          borderBottom: 1,
          borderColor: "divider",
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
            }}
            elevation={0}
          >
            <IconButton>
              <SearchIcon />
            </IconButton>
            <TextField
              variant="standard"
              placeholder="Search publications..."
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
              >
                {mode === "light" ? <DarkMode /> : <LightMode />}
              </IconButton>
            </Tooltip>
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
          p: { xs: 2, md: 3 },
          ml: { md: `${drawerWidth}px` },
        }}
      >
        <Toolbar />

        <Stack spacing={3} mt={2}>
          {/* Publication Type Cards */}
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": { transform: "translateY(-4px)", boxShadow: 4 },
                }}
              >
                <CardContent sx={{ textAlign: "center", p: 3 }}>
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      bgcolor: "primary.light",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: "auto",
                      mb: 2,
                    }}
                  >
                    <Typography variant="h4" sx={{ color: "white" }}>
                      👥
                    </Typography>
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                    HR Compliances
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 3 }}
                  >
                    Manage employee handbooks, safety guidelines, and compliance
                    documents
                  </Typography>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => handleCreatePublication("HR Compliances")}
                    sx={{
                      borderRadius: 2,
                      py: 1.5,
                      textTransform: "none",
                      fontWeight: 600,
                      boxShadow: "0 4px 12px rgba(25, 118, 210, 0.3)",
                      "&:hover": {
                        boxShadow: "0 6px 20px rgba(25, 118, 210, 0.4)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    Create New
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": { transform: "translateY(-4px)", boxShadow: 4 },
                }}
              >
                <CardContent sx={{ textAlign: "center", p: 3 }}>
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      bgcolor: "secondary.light",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: "auto",
                      mb: 2,
                    }}
                  >
                    <Typography variant="h4" sx={{ color: "white" }}>
                      📊
                    </Typography>
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                    Annual Reports
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 3 }}
                  >
                    Upload yearly reports in both Hindi and English languages
                  </Typography>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => handleCreatePublication("Annual Reports")}
                    sx={{
                      borderRadius: 2,
                      py: 1.5,
                      textTransform: "none",
                      fontWeight: 600,
                      bgcolor: "secondary.main",
                      boxShadow: "0 4px 12px rgba(239, 108, 0, 0.3)",
                      "&:hover": {
                        bgcolor: "secondary.dark",
                        boxShadow: "0 6px 20px rgba(239, 108, 0, 0.4)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    Create New
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": { transform: "translateY(-4px)", boxShadow: 4 },
                }}
              >
                <CardContent sx={{ textAlign: "center", p: 3 }}>
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      bgcolor: "success.light",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: "auto",
                      mb: 2,
                    }}
                  >
                    <Typography variant="h4" sx={{ color: "white" }}>
                      📋
                    </Typography>
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                    Policies
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 3 }}
                  >
                    Manage company policies, guidelines, and procedural
                    documents
                  </Typography>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => handleCreatePublication("Policies")}
                    sx={{
                      borderRadius: 2,
                      py: 1.5,
                      textTransform: "none",
                      fontWeight: 600,
                      bgcolor: "success.main",
                      boxShadow: "0 4px 12px rgba(76, 175, 80, 0.3)",
                      "&:hover": {
                        bgcolor: "success.dark",
                        boxShadow: "0 6px 20px rgba(76, 175, 80, 0.4)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    Create New
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Publications Table */}
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                All Publications
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow sx={{ bgcolor: "grey.100" }}>
                      <TableCell sx={{ fontWeight: 600 }}>Name</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Type</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>
                        Last Update
                      </TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Created By</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Size</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Downloads</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredData.map((row) => (
                      <TableRow key={row.id} hover>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>
                          <Chip
                            label={row.type}
                            size="small"
                            color={
                              row.type === "HR Compliances"
                                ? "primary"
                                : row.type === "Annual Reports"
                                ? "secondary"
                                : "success"
                            }
                          />
                        </TableCell>
                        <TableCell>
                          <Chip
                            label={row.status}
                            size="small"
                            color={
                              row.status === "Active" ? "success" : "default"
                            }
                          />
                        </TableCell>
                        <TableCell>{row.lastUpdate}</TableCell>
                        <TableCell>{row.createdBy}</TableCell>
                        <TableCell>{row.size}</TableCell>
                        <TableCell>{row.downloads}</TableCell>
                        <TableCell>
                          <Stack direction="row" spacing={1}>
                            <Tooltip title="View">
                              <IconButton size="small" color="primary">
                                <ViewIcon />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Edit">
                              <IconButton size="small" color="secondary">
                                <EditIcon />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Download">
                              <IconButton size="small" color="success">
                                <DownloadIcon />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Delete">
                              <IconButton size="small" color="error">
                                <DeleteIcon />
                              </IconButton>
                            </Tooltip>
                          </Stack>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Stack>

        {/* Create Publication Dialog */}
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: 3,
              boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
            },
          }}
        >
          <DialogTitle
            sx={{
              pb: 1,
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              borderRadius: "12px 12px 0 0",
              position: "relative",
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background:
                  "linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                zIndex: 1,
              },
            }}
          >
            <Box sx={{ position: "relative", zIndex: 2 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
                ✨ Create New {selectedType}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Fill in the details below to create a new publication
              </Typography>
            </Box>
          </DialogTitle>

          <DialogContent sx={{ p: 4, pt: 3 }}>
            {selectedType === "HR Compliances" && (
              <Stack spacing={3}>
                <Box sx={{ position: "relative" }}>
                  <TextField
                    fullWidth
                    label="Document Name"
                    placeholder="Enter document name"
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "primary.main",
                          borderWidth: 2,
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "primary.main",
                          borderWidth: 2,
                        },
                      },
                    }}
                  />
                </Box>

                <FormControl fullWidth>
                  <InputLabel>Status</InputLabel>
                  <Select
                    label="Status"
                    defaultValue="active"
                    sx={{
                      borderRadius: 2,
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "grey.300",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "primary.main",
                        borderWidth: 2,
                      },
                    }}
                  >
                    <MenuItem value="active">Active</MenuItem>
                    <MenuItem value="inactive">Inactive</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  fullWidth
                  label="Last Update Date"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CalendarIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "primary.main",
                        borderWidth: 2,
                      },
                    },
                  }}
                />

                <Box>
                  <Typography
                    variant="body2"
                    sx={{ mb: 1, fontWeight: 600, color: "text.primary" }}
                  >
                    📷 Thumbnail Photo
                  </Typography>
                  <Button
                    variant="outlined"
                    component="label"
                    startIcon={<UploadIcon />}
                    fullWidth
                    sx={{
                      py: 3,
                      borderStyle: "dashed",
                      borderRadius: 2,
                      borderWidth: 2,
                      borderColor: "primary.light",
                      color: "primary.main",
                      "&:hover": {
                        borderColor: "primary.main",
                        backgroundColor: "primary.50",
                        borderWidth: 2,
                      },
                    }}
                  >
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      Click to upload thumbnail image
                    </Typography>
                    <input type="file" hidden accept="image/*" />
                  </Button>
                </Box>

                <Box>
                  <Typography
                    variant="body2"
                    sx={{ mb: 1, fontWeight: 600, color: "text.primary" }}
                  >
                    📄 PDF Document
                  </Typography>
                  <Button
                    variant="outlined"
                    component="label"
                    startIcon={<UploadIcon />}
                    fullWidth
                    sx={{
                      py: 3,
                      borderStyle: "dashed",
                      borderRadius: 2,
                      borderWidth: 2,
                      borderColor: "secondary.light",
                      color: "secondary.main",
                      "&:hover": {
                        borderColor: "secondary.main",
                        backgroundColor: "secondary.50",
                        borderWidth: 2,
                      },
                    }}
                  >
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      Click to upload PDF document
                    </Typography>
                    <input type="file" hidden accept=".pdf" />
                  </Button>
                </Box>
              </Stack>
            )}

            {selectedType === "Annual Reports" && (
              <Stack spacing={3}>
                <Box sx={{ position: "relative" }}>
                  <TextField
                    fullWidth
                    label="Report Name"
                    placeholder="Enter report name"
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "primary.main",
                          borderWidth: 2,
                        },
                      },
                    }}
                  />
                </Box>

                <TextField
                  fullWidth
                  label="Year"
                  type="number"
                  placeholder="2024"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "primary.main",
                        borderWidth: 2,
                      },
                    },
                  }}
                />

                <Box>
                  <Typography
                    variant="body2"
                    sx={{ mb: 1, fontWeight: 600, color: "text.primary" }}
                  >
                    🇮🇳 Hindi PDF
                  </Typography>
                  <Button
                    variant="outlined"
                    component="label"
                    startIcon={<UploadIcon />}
                    fullWidth
                    sx={{
                      py: 3,
                      borderStyle: "dashed",
                      borderRadius: 2,
                      borderWidth: 2,
                      borderColor: "#FF6B6B",
                      color: "#FF6B6B",
                      "&:hover": {
                        borderColor: "#FF5252",
                        backgroundColor: "#FFEBEE",
                        borderWidth: 2,
                      },
                    }}
                  >
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      Upload Hindi PDF Report
                    </Typography>
                    <input type="file" hidden accept=".pdf" />
                  </Button>
                </Box>

                <Box>
                  <Typography
                    variant="body2"
                    sx={{ mb: 1, fontWeight: 600, color: "text.primary" }}
                  >
                    🇬🇧 English PDF
                  </Typography>
                  <Button
                    variant="outlined"
                    component="label"
                    startIcon={<UploadIcon />}
                    fullWidth
                    sx={{
                      py: 3,
                      borderStyle: "dashed",
                      borderRadius: 2,
                      borderWidth: 2,
                      borderColor: "#4ECDC4",
                      color: "#4ECDC4",
                      "&:hover": {
                        borderColor: "#26A69A",
                        backgroundColor: "#E0F2F1",
                        borderWidth: 2,
                      },
                    }}
                  >
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      Upload English PDF Report
                    </Typography>
                    <input type="file" hidden accept=".pdf" />
                  </Button>
                </Box>

                <Box>
                  <Typography
                    variant="body2"
                    sx={{ mb: 1, fontWeight: 600, color: "text.primary" }}
                  >
                    📷 Thumbnail Photo
                  </Typography>
                  <Button
                    variant="outlined"
                    component="label"
                    startIcon={<UploadIcon />}
                    fullWidth
                    sx={{
                      py: 3,
                      borderStyle: "dashed",
                      borderRadius: 2,
                      borderWidth: 2,
                      borderColor: "primary.light",
                      color: "primary.main",
                      "&:hover": {
                        borderColor: "primary.main",
                        backgroundColor: "primary.50",
                        borderWidth: 2,
                      },
                    }}
                  >
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      Upload Report Thumbnail
                    </Typography>
                    <input type="file" hidden accept="image/*" />
                  </Button>
                </Box>
              </Stack>
            )}

            {selectedType === "Policies" && (
              <Stack spacing={3}>
                <Box sx={{ position: "relative" }}>
                  <TextField
                    fullWidth
                    label="Policy Name"
                    placeholder="Enter policy name"
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "primary.main",
                          borderWidth: 2,
                        },
                      },
                    }}
                  />
                </Box>

                <TextField
                  fullWidth
                  label="Created Date"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CalendarIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "primary.main",
                        borderWidth: 2,
                      },
                    },
                  }}
                />

                <TextField
                  fullWidth
                  label="Updated Date"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CalendarIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "primary.main",
                        borderWidth: 2,
                      },
                    },
                  }}
                />

                <Box>
                  <Typography
                    variant="body2"
                    sx={{ mb: 1, fontWeight: 600, color: "text.primary" }}
                  >
                    📋 Policy Document
                  </Typography>
                  <Button
                    variant="outlined"
                    component="label"
                    startIcon={<UploadIcon />}
                    fullWidth
                    sx={{
                      py: 3,
                      borderStyle: "dashed",
                      borderRadius: 2,
                      borderWidth: 2,
                      borderColor: "success.light",
                      color: "success.main",
                      "&:hover": {
                        borderColor: "success.main",
                        backgroundColor: "success.50",
                        borderWidth: 2,
                      },
                    }}
                  >
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      Upload Policy Document (PDF, DOC, DOCX)
                    </Typography>
                    <input type="file" hidden accept=".pdf,.doc,.docx" />
                  </Button>
                </Box>

                <Box
                  sx={{
                    p: 2,
                    bgcolor: "grey.50",
                    borderRadius: 2,
                    border: "1px solid",
                    borderColor: "grey.200",
                  }}
                >
                  <FormControlLabel
                    control={<Switch defaultChecked color="success" />}
                    label={
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        Enable Download Option for Users
                      </Typography>
                    }
                  />
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ ml: 4, display: "block" }}
                  >
                    Users will be able to download this policy document
                  </Typography>
                </Box>
              </Stack>
            )}
          </DialogContent>

          <DialogActions sx={{ p: 4, pt: 2, gap: 2 }}>
            <Button
              onClick={handleCloseDialog}
              variant="outlined"
              sx={{
                borderRadius: 2,
                px: 4,
                py: 1.5,
                textTransform: "none",
                fontWeight: 600,
                borderWidth: 2,
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleCloseDialog}
              sx={{
                borderRadius: 2,
                px: 4,
                py: 1.5,
                textTransform: "none",
                fontWeight: 600,
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                boxShadow: "0 4px 12px rgba(102, 126, 234, 0.4)",
                "&:hover": {
                  boxShadow: "0 6px 20px rgba(102, 126, 234, 0.6)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              ✨ Create Publication
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
}
