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
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  LightMode,
  DarkMode,
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
} from "@mui/icons-material";
import nds_logo from "../assets/img/nds_logo.png";
import AdminSidebar from "../AdminComponents/AdminSidebar";
import { getFetch } from "../Api/Api";

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

// --------- LAYOUT ---------
const drawerWidth = 260;

export default function AdminLogs() {
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState(prefersDark ? "dark" : "light");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Data states
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Pagination states
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  // Filter states
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [emailFilter, setEmailFilter] = useState("");
  const [tenderIdFilter, setTenderIdFilter] = useState("");
  const [dateRange, setDateRange] = useState({
    startDate: "",
    endDate: "",
  });
  const [showFilters, setShowFilters] = useState(false);
  const [selectedLogs, setSelectedLogs] = useState([]);

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  // Fetch tender logs from API
  const fetchTenderLogs = async () => {
    try {
      setLoading(true);
      setError("");

      const token = localStorage.getItem("token");
      if (!token) {
        setError("Please login first. No authentication token found.");
        setLoading(false);
        return;
      }

      // Build query parameters
      const params = new URLSearchParams({
        page: page + 1, // API uses 1-based pagination
        limit: rowsPerPage,
      });

      if (emailFilter) params.append("email", emailFilter);
      if (statusFilter !== "ALL") params.append("status", statusFilter);
      if (tenderIdFilter) params.append("tenderId", tenderIdFilter);
      if (dateRange.startDate) params.append("startDate", dateRange.startDate);
      if (dateRange.endDate) params.append("endDate", dateRange.endDate);

      const response = await getFetch(
        `${import.meta.env.VITE_API_BASE_URL}/tender-logs?${params.toString()}`
      );

      if (response && response.status === 200) {
        const data = response.data.data;
        setLogs(data.logs || []);
        setTotal(data.total || 0);
        setTotalPages(data.totalPages || 0);
      } else {
        setError("Failed to fetch tender logs");
      }
    } catch (err) {
      console.error("Error fetching tender logs:", err);
      setError("Error fetching tender logs. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch logs on component mount and when filters change
  useEffect(() => {
    fetchTenderLogs();
  }, [
    page,
    rowsPerPage,
    emailFilter,
    statusFilter,
    tenderIdFilter,
    dateRange.startDate,
    dateRange.endDate,
  ]);

  // Get status color
  const getStatusColor = (status) => {
    switch (status) {
      case "CREATE":
        return "success";
      case "UPDATE":
        return "info";
      case "DELETE":
        return "error";
      case "VIEW":
        return "warning";
      default:
        return "default";
    }
  };

  // Get status icon
  const getStatusIcon = (status) => {
    switch (status) {
      case "CREATE":
        return <Add />;
      case "UPDATE":
        return <Edit />;
      case "DELETE":
        return <Delete />;
      case "VIEW":
        return <Visibility />;
      default:
        return <Info />;
    }
  };

  // Format timestamp
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString("en-IN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  // Handle bulk actions
  const handleBulkAction = (action) => {
    if (action === "export") {
      console.log("Exporting logs:", selectedLogs);
      // Implement export functionality
    } else if (action === "delete") {
      console.log("Deleting logs:", selectedLogs);
      // Implement delete functionality
    }
  };

  // Clear all filters
  const clearFilters = () => {
    setEmailFilter("");
    setStatusFilter("ALL");
    setTenderIdFilter("");
    setDateRange({ startDate: "", endDate: "" });
    setSearch("");
    setPage(0);
  };

  // Get unique statuses from logs
  const uniqueStatuses = [...new Set(logs.map((log) => log.status))];

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
              placeholder="Search by email, status, tender ID..."
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

        {/* Header Section */}
        <Stack spacing={3} mt={2}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                Tender Activity Logs
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Monitor and track all tender-related activities and user actions
              </Typography>
            </Box>

            <Stack direction="row" spacing={2} alignItems="center">
              <Button
                variant="outlined"
                startIcon={<FilterList />}
                onClick={() => setShowFilters(!showFilters)}
              >
                Filters
              </Button>
              <Button
                variant="outlined"
                startIcon={<Refresh />}
                onClick={fetchTenderLogs}
                disabled={loading}
              >
                Refresh
              </Button>
              <Button
                variant="contained"
                startIcon={<Download />}
                onClick={() => handleBulkAction("export")}
                disabled={selectedLogs.length === 0}
              >
                Export
              </Button>
            </Stack>
          </Box>

          {/* Stats Cards */}
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Box>
                      <Typography color="text.secondary" variant="body2">
                        Total Logs
                      </Typography>
                      <Typography variant="h4" sx={{ fontWeight: 700 }}>
                        {total}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        backgroundColor: "primary.main",
                        borderRadius: "50%",
                        p: 1.5,
                        color: "white",
                      }}
                    >
                      <Computer />
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Box>
                      <Typography color="text.secondary" variant="body2">
                        Create Actions
                      </Typography>
                      <Typography
                        variant="h4"
                        sx={{ fontWeight: 700, color: "success.main" }}
                      >
                        {logs.filter((log) => log.status === "CREATE").length}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        backgroundColor: "success.main",
                        borderRadius: "50%",
                        p: 1.5,
                        color: "white",
                      }}
                    >
                      <Add />
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Box>
                      <Typography color="text.secondary" variant="body2">
                        Update Actions
                      </Typography>
                      <Typography
                        variant="h4"
                        sx={{ fontWeight: 700, color: "info.main" }}
                      >
                        {logs.filter((log) => log.status === "UPDATE").length}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        backgroundColor: "info.main",
                        borderRadius: "50%",
                        p: 1.5,
                        color: "white",
                      }}
                    >
                      <Edit />
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Box>
                      <Typography color="text.secondary" variant="body2">
                        Delete Actions
                      </Typography>
                      <Typography
                        variant="h4"
                        sx={{ fontWeight: 700, color: "error.main" }}
                      >
                        {logs.filter((log) => log.status === "DELETE").length}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        backgroundColor: "error.main",
                        borderRadius: "50%",
                        p: 1.5,
                        color: "white",
                      }}
                    >
                      <Delete />
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Filters Section */}
          {showFilters && (
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Advanced Filters
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} md={3}>
                    <TextField
                      fullWidth
                      label="Email"
                      value={emailFilter}
                      onChange={(e) => setEmailFilter(e.target.value)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Email />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6} md={3}>
                    <FormControl fullWidth>
                      <InputLabel>Status</InputLabel>
                      <Select
                        value={statusFilter}
                        label="Status"
                        onChange={(e) => setStatusFilter(e.target.value)}
                      >
                        <MenuItem value="ALL">All Statuses</MenuItem>
                        {uniqueStatuses.map((status) => (
                          <MenuItem key={status} value={status}>
                            {status}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={3}>
                    <TextField
                      fullWidth
                      label="Tender ID"
                      value={tenderIdFilter}
                      onChange={(e) => setTenderIdFilter(e.target.value)}
                      placeholder="Enter tender ID"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6} md={3}>
                    <TextField
                      fullWidth
                      type="date"
                      label="Start Date"
                      value={dateRange.startDate}
                      onChange={(e) =>
                        setDateRange({
                          ...dateRange,
                          startDate: e.target.value,
                        })
                      }
                      InputLabelProps={{ shrink: true }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <CalendarToday />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6} md={3}>
                    <TextField
                      fullWidth
                      type="date"
                      label="End Date"
                      value={dateRange.endDate}
                      onChange={(e) =>
                        setDateRange({ ...dateRange, endDate: e.target.value })
                      }
                      InputLabelProps={{ shrink: true }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <CalendarToday />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6} md={3}>
                    <Button
                      variant="outlined"
                      startIcon={<Refresh />}
                      onClick={clearFilters}
                      fullWidth
                    >
                      Clear Filters
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          )}

          {/* Error Alert */}
          {error && (
            <Alert severity="error" onClose={() => setError("")}>
              {error}
            </Alert>
          )}

          {/* Logs Table */}
          <Card
            sx={{
              boxShadow: (theme) =>
                theme.palette.mode === "dark"
                  ? "0 4px 20px 0 rgba(0,0,0,0.4)"
                  : "0 4px 20px 0 rgba(0,0,0,0.1)",
              borderRadius: "16px",
              overflow: "hidden",
              border: (theme) => `1px solid ${theme.palette.divider}`,
            }}
          >
            <CardContent sx={{ p: 0 }}>
              {loading ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    py: 8,
                  }}
                >
                  <CircularProgress />
                </Box>
              ) : (
                <>
                  <TableContainer
                    sx={{
                      "& .MuiTableCell-root": {
                        borderColor: (theme) => theme.palette.divider,
                        py: 2.5,
                        px: 3,
                        fontSize: "0.875rem",
                      },
                    }}
                  >
                    <Table>
                      <TableHead>
                        <TableRow
                          sx={{
                            backgroundColor: (theme) =>
                              theme.palette.mode === "dark"
                                ? "rgba(255,255,255,0.08)"
                                : "rgba(0,0,0,0.03)",
                            "& th": {
                              fontWeight: 600,
                              color: (theme) =>
                                theme.palette.mode === "dark"
                                  ? "primary.light"
                                  : "primary.dark",
                              borderBottom: 2,
                              borderColor: "primary.main",
                              transition: "all 0.2s ease",
                              textTransform: "uppercase",
                              letterSpacing: "0.05em",
                              fontSize: "0.75rem",
                            },
                          }}
                        >
                          <TableCell>ID</TableCell>
                          <TableCell>Email</TableCell>
                          <TableCell>Status</TableCell>
                          <TableCell>Message</TableCell>
                          <TableCell>Created At</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {!loading && logs.length === 0 ? (
                          <TableRow>
                            <TableCell
                              colSpan={7}
                              align="center"
                              sx={{ py: 4 }}
                            >
                              <Typography
                                variant="body1"
                                color="text.secondary"
                              >
                                No logs found
                              </Typography>
                            </TableCell>
                          </TableRow>
                        ) : (
                          logs.map((log, index) => (
                            <TableRow
                              key={log.id}
                              hover
                              sx={{
                                transition: "all 0.3s ease",
                                position: "relative",
                                "&:hover": {
                                  backgroundColor: (theme) =>
                                    theme.palette.mode === "dark"
                                      ? "rgba(255,255,255,0.08)"
                                      : "rgba(0,0,0,0.02)",
                                  transform: "translateY(-2px)",
                                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                                  "& .MuiSvgIcon-root": {
                                    color: "primary.main",
                                    transform: "scale(1.1)",
                                  },
                                },
                                "&:after": {
                                  content: '""',
                                  position: "absolute",
                                  left: 0,
                                  right: 0,
                                  bottom: 0,
                                  height: "1px",
                                  backgroundColor: (theme) =>
                                    theme.palette.divider,
                                },
                              }}
                            >
                              <TableCell>
                                <Typography
                                  variant="body2"
                                  sx={{
                                    fontFamily:
                                      "'SF Mono', 'Monaco', 'Inconsolata', monospace",
                                    fontWeight: 600,
                                    color: "primary.main",
                                  }}
                                >
                                  #{index + 1}
                                </Typography>
                              </TableCell>
                              <TableCell>
                                <Stack
                                  direction="row"
                                  alignItems="center"
                                  spacing={1}
                                >
                                  <Person
                                    sx={{
                                      fontSize: 16,
                                      color: "text.secondary",
                                    }}
                                  />
                                  <Typography
                                    variant="body2"
                                    sx={{
                                      fontFamily:
                                        "'SF Mono', 'Monaco', 'Inconsolata', monospace",
                                      fontWeight: 500,
                                    }}
                                  >
                                    {log.email}
                                  </Typography>
                                </Stack>
                              </TableCell>
                              <TableCell>
                                <Stack
                                  direction="row"
                                  alignItems="center"
                                  spacing={1.5}
                                  sx={{
                                    "& .MuiSvgIcon-root": {
                                      color: (theme) =>
                                        theme.palette[
                                          getStatusColor(log.status)
                                        ].main,
                                      transition: "all 0.3s ease",
                                      backgroundColor: (theme) =>
                                        theme.palette.mode === "dark"
                                          ? `${
                                              theme.palette[
                                                getStatusColor(log.status)
                                              ].main
                                            }22`
                                          : `${
                                              theme.palette[
                                                getStatusColor(log.status)
                                              ].light
                                            }33`,
                                      padding: "6px",
                                      borderRadius: "8px",
                                      fontSize: "20px",
                                      "&:hover": {
                                        transform: "scale(1.1) rotate(5deg)",
                                        backgroundColor: (theme) =>
                                          theme.palette.mode === "dark"
                                            ? `${
                                                theme.palette[
                                                  getStatusColor(log.status)
                                                ].main
                                              }44`
                                            : `${
                                                theme.palette[
                                                  getStatusColor(log.status)
                                                ].light
                                              }55`,
                                      },
                                    },
                                  }}
                                >
                                  {getStatusIcon(log.status)}
                                  <Chip
                                    label={log.status}
                                    color={getStatusColor(log.status)}
                                    size="small"
                                    sx={{
                                      fontWeight: 600,
                                      borderRadius: "8px",
                                      height: "24px",
                                      "& .MuiChip-label": {
                                        px: 2,
                                        fontSize: "0.75rem",
                                        lineHeight: 1.5,
                                      },
                                      backgroundColor: (theme) =>
                                        theme.palette.mode === "dark"
                                          ? `${
                                              theme.palette[
                                                getStatusColor(log.status)
                                              ].main
                                            }33`
                                          : `${
                                              theme.palette[
                                                getStatusColor(log.status)
                                              ].light
                                            }33`,
                                      color: (theme) =>
                                        theme.palette[
                                          getStatusColor(log.status)
                                        ].main,
                                      border: (theme) =>
                                        `1px solid ${
                                          theme.palette[
                                            getStatusColor(log.status)
                                          ].main
                                        }40`,
                                      transition: "all 0.2s ease",
                                      "&:hover": {
                                        transform: "translateY(-1px)",
                                        boxShadow: (theme) =>
                                          `0 4px 8px ${
                                            theme.palette[
                                              getStatusColor(log.status)
                                            ].main
                                          }33`,
                                      },
                                    }}
                                  />
                                </Stack>
                              </TableCell>
                              <TableCell>
                                <Typography
                                  variant="body2"
                                  sx={{
                                    fontWeight: 500,
                                    color: "text.primary",
                                    maxWidth: 200,
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  {log.message}
                                </Typography>
                              </TableCell>
                              <TableCell>
                                <Typography
                                  variant="body2"
                                  sx={{
                                    fontFamily:
                                      "'SF Mono', 'Monaco', 'Inconsolata', monospace",
                                    fontWeight: 500,
                                    color: "text.secondary",
                                  }}
                                >
                                  {formatTimestamp(log.createdAt)}
                                </Typography>
                              </TableCell>
                            </TableRow>
                          ))
                        )}
                      </TableBody>
                    </Table>
                  </TableContainer>

                  <TablePagination
                    component="div"
                    count={total}
                    page={page}
                    onPageChange={(event, newPage) => setPage(newPage)}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={(event) => {
                      setRowsPerPage(parseInt(event.target.value, 10));
                      setPage(0);
                    }}
                    rowsPerPageOptions={[5, 10, 25, 50]}
                    labelRowsPerPage="Rows per page:"
                    labelDisplayedRows={({ from, to, count }) =>
                      `${from}-${to} of ${
                        count !== -1 ? count : `more than ${to}`
                      }`
                    }
                    sx={{
                      borderTop: 1,
                      borderColor: "divider",
                      "& .MuiTablePagination-select": {
                        backgroundColor: (theme) =>
                          theme.palette.mode === "dark"
                            ? "rgba(255, 255, 255, 0.05)"
                            : "rgba(0, 0, 0, 0.02)",
                        borderRadius: 1,
                        p: "4px 8px",
                        "&:hover": {
                          backgroundColor: (theme) =>
                            theme.palette.mode === "dark"
                              ? "rgba(255, 255, 255, 0.08)"
                              : "rgba(0, 0, 0, 0.04)",
                        },
                      },
                      "& .MuiTablePagination-displayedRows": {
                        fontWeight: 500,
                        color: "text.secondary",
                      },
                      "& .MuiButtonBase-root": {
                        "&:hover": {
                          backgroundColor: (theme) =>
                            theme.palette.mode === "dark"
                              ? "rgba(255, 255, 255, 0.08)"
                              : "rgba(0, 0, 0, 0.04)",
                        },
                      },
                    }}
                  />
                </>
              )}
            </CardContent>
          </Card>
        </Stack>
      </Box>
    </Box>
  );
}
