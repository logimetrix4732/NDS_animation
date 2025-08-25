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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Badge,
  Divider,
  Alert,
  Switch,
  FormControlLabel,
  Checkbox,
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
} from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import nds_logo from "../assets/img/nds_logo.png";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as ReTooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";
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

// --------- MOCK LOGS DATA ---------
const generateLogsData = () => {
  const actions = [
    "LOGIN",
    "LOGOUT",
    "CREATE",
    "UPDATE",
    "DELETE",
    "VIEW",
    "DOWNLOAD",
    "UPLOAD",
  ];
  const statuses = ["SUCCESS", "ERROR", "WARNING", "INFO"];
  const users = [
    "admin@nddb.com",
    "user1@nddb.com",
    "manager@nddb.com",
    "analyst@nddb.com",
  ];
  const modules = [
    "User Management",
    "Reports",
    "Dashboard",
    "Settings",
    "Data Export",
    "Analytics",
  ];
  const ipAddresses = [
    "192.168.1.100",
    "10.0.0.50",
    "172.16.0.25",
    "203.0.113.10",
  ];

  return Array.from({ length: 150 }, (_, i) => ({
    id: i + 1,
    timestamp: new Date(
      Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000
    ).toISOString(),
    action: actions[Math.floor(Math.random() * actions.length)],
    status: statuses[Math.floor(Math.random() * statuses.length)],
    user: users[Math.floor(Math.random() * users.length)],
    module: modules[Math.floor(Math.random() * modules.length)],
    ipAddress: ipAddresses[Math.floor(Math.random() * ipAddresses.length)],
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    sessionId: `sess_${Math.random().toString(36).substr(2, 9)}`,
    details: `Action performed on ${modules[Math.floor(Math.random() * modules.length)]
      } module`,
    duration: Math.floor(Math.random() * 5000),
  }));
};

const logsData = generateLogsData();

// --------- LAYOUT ---------
const drawerWidth = 260;

export default function AdminLogs() {
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState(prefersDark ? "dark" : "light");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [actionFilter, setActionFilter] = useState("ALL");
  const [moduleFilter, setModuleFilter] = useState("ALL");
  const [dateRange, setDateRange] = useState({
    startDate: "",
    endDate: "",
  });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [showFilters, setShowFilters] = useState(false);
  const [realTimeMode, setRealTimeMode] = useState(false);
  const [selectedLogs, setSelectedLogs] = useState([]);

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  // Filter logs based on all criteria
  const filteredLogs = useMemo(() => {
    let filtered = logsData.filter((log) => {
      const matchesSearch =
        search === "" ||
        log.user.toLowerCase().includes(search.toLowerCase()) ||
        log.action.toLowerCase().includes(search.toLowerCase()) ||
        log.module.toLowerCase().includes(search.toLowerCase()) ||
        log.ipAddress.includes(search) ||
        log.details.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "ALL" || log.status === statusFilter;
      const matchesAction =
        actionFilter === "ALL" || log.action === actionFilter;
      const matchesModule =
        moduleFilter === "ALL" || log.module === moduleFilter;

      const matchesDate =
        !dateRange.startDate ||
        !dateRange.endDate ||
        (new Date(log.timestamp) >= new Date(dateRange.startDate) &&
          new Date(log.timestamp) <= new Date(dateRange.endDate));

      return (
        matchesSearch &&
        matchesStatus &&
        matchesAction &&
        matchesModule &&
        matchesDate
      );
    });

    // Sort by timestamp (newest first)
    return filtered.sort(
      (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
    );
  }, [search, statusFilter, actionFilter, moduleFilter, dateRange]);

  // Get unique values for filters
  const uniqueStatuses = [...new Set(logsData.map((log) => log.status))];
  const uniqueActions = [...new Set(logsData.map((log) => log.action))];
  const uniqueModules = [...new Set(logsData.map((log) => log.module))];

  // Get status color
  const getStatusColor = (status) => {
    switch (status) {
      case "SUCCESS":
        return "success";
      case "ERROR":
        return "error";
      case "WARNING":
        return "warning";
      case "INFO":
        return "info";
      default:
        return "default";
    }
  };

  // Get action icon
  const getActionIcon = (action) => {
    switch (action) {
      case "LOGIN":
        return <Security />;
      case "LOGOUT":
        return <Security />;
      case "CREATE":
        return <Edit />;
      case "UPDATE":
        return <Edit />;
      case "DELETE":
        return <Delete />;
      case "VIEW":
        return <Visibility />;
      case "DOWNLOAD":
        return <Download />;
      case "UPLOAD":
        return <Upload />;
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
      // Export selected logs
      console.log("Exporting logs:", selectedLogs);
    } else if (action === "delete") {
      // Delete selected logs
      console.log("Deleting logs:", selectedLogs);
    }
  };

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
              placeholder="Search logs, users, actions..."
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
                System Logs
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Monitor and analyze system activities, user actions, and
                security events
              </Typography>
            </Box>

            <Stack direction="row" spacing={2} alignItems="center">
              <FormControlLabel
                control={
                  <Switch
                    checked={realTimeMode}
                    onChange={(e) => setRealTimeMode(e.target.checked)}
                    color="primary"
                  />
                }
                label="Real-time"
              />
              <Button
                variant="outlined"
                startIcon={<FilterList />}
                onClick={() => setShowFilters(!showFilters)}
              >
                Filters
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
                        {filteredLogs.length}
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
                        Active Users
                      </Typography>
                      <Typography variant="h4" sx={{ fontWeight: 700 }}>
                        {
                          new Set(
                            filteredLogs
                              .filter((log) => log.action === "LOGIN")
                              .map((log) => log.user)
                          ).size
                        }
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
                      <Person />
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
                        Errors
                      </Typography>
                      <Typography
                        variant="h4"
                        sx={{ fontWeight: 700, color: "error.main" }}
                      >
                        {
                          filteredLogs.filter((log) => log.status === "ERROR")
                            .length
                        }
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
                      <Error />
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
                        Warnings
                      </Typography>
                      <Typography
                        variant="h4"
                        sx={{ fontWeight: 700, color: "warning.main" }}
                      >
                        {
                          filteredLogs.filter((log) => log.status === "WARNING")
                            .length
                        }
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        backgroundColor: "warning.main",
                        borderRadius: "50%",
                        p: 1.5,
                        color: "white",
                      }}
                    >
                      <Warning />
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
                    <FormControl fullWidth>
                      <InputLabel>Action</InputLabel>
                      <Select
                        value={actionFilter}
                        label="Action"
                        onChange={(e) => setActionFilter(e.target.value)}
                      >
                        <MenuItem value="ALL">All Actions</MenuItem>
                        {uniqueActions.map((action) => (
                          <MenuItem key={action} value={action}>
                            {action}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={3}>
                    <FormControl fullWidth>
                      <InputLabel>Module</InputLabel>
                      <Select
                        value={moduleFilter}
                        label="Module"
                        onChange={(e) => setModuleFilter(e.target.value)}
                      >
                        <MenuItem value="ALL">All Modules</MenuItem>
                        {uniqueModules.map((module) => (
                          <MenuItem key={module} value={module}>
                            {module}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
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
                    />
                  </Grid>

                  <Grid item xs={12} sm={6} md={3}>
                    <Button
                      variant="outlined"
                      startIcon={<Refresh />}
                      onClick={() => {
                        setStatusFilter("ALL");
                        setActionFilter("ALL");
                        setModuleFilter("ALL");
                        setDateRange({ startDate: "", endDate: "" });
                      }}
                      fullWidth
                    >
                      Clear Filters
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          )}

          {/* Logs Table */}
          <Card
            sx={{
              boxShadow: (theme) => theme.palette.mode === 'dark'
                ? '0 4px 20px 0 rgba(0,0,0,0.4)'
                : '0 4px 20px 0 rgba(0,0,0,0.1)',
              borderRadius: '16px',
              overflow: 'hidden',
              border: (theme) => `1px solid ${theme.palette.divider}`
            }}>
            <CardContent sx={{ p: 0 }}>
              <TableContainer sx={{
                '& .MuiTableCell-root': {
                  borderColor: (theme) => theme.palette.divider,
                  py: 2.5,
                  px: 3,
                  fontSize: '0.875rem'
                }
              }}>
                <Table>
                  <TableHead>
                    <TableRow sx={{
                      backgroundColor: (theme) => theme.palette.mode === 'dark'
                        ? 'rgba(255,255,255,0.08)'
                        : 'rgba(0,0,0,0.03)',
                      '& th': {
                        fontWeight: 600,
                        color: (theme) => theme.palette.mode === 'dark'
                          ? 'primary.light'
                          : 'primary.dark',
                        borderBottom: 2,
                        borderColor: 'primary.main',
                        transition: 'all 0.2s ease',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        fontSize: '0.75rem'
                      }
                    }}>
                      <TableCell padding="checkbox" sx={{ pl: 3 }}>
                        <Checkbox
                          color="primary"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedLogs(filteredLogs.map((log) => log.id));
                            } else {
                              setSelectedLogs([]);
                            }
                          }}
                          checked={selectedLogs.length === filteredLogs.length && filteredLogs.length > 0}
                        />
                      </TableCell>
                      <TableCell>Timestamp</TableCell>
                      <TableCell>Action</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>User</TableCell>
                      <TableCell>Module</TableCell>
                      <TableCell>IP Address</TableCell>
                      <TableCell>Details</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredLogs
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((log) => (
                        <TableRow
                          key={log.id}
                          hover
                          sx={{
                            transition: 'all 0.3s ease',
                            position: 'relative',
                            '&:hover': {
                              backgroundColor: (theme) =>
                                theme.palette.mode === 'dark'
                                  ? 'rgba(255,255,255,0.08)'
                                  : 'rgba(0,0,0,0.02)',
                              transform: 'translateY(-2px)',
                              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                              '& .MuiSvgIcon-root': {
                                color: 'primary.main',
                                transform: 'scale(1.1)'
                              }
                            },
                            '&:after': {
                              content: '""',
                              position: 'absolute',
                              left: 0,
                              right: 0,
                              bottom: 0,
                              height: '1px',
                              backgroundColor: (theme) => theme.palette.divider
                            }
                          }}
                        >
                          <TableCell padding="checkbox" sx={{ pl: 3 }}>
                            <Checkbox
                              color="primary"
                              checked={selectedLogs.includes(log.id)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setSelectedLogs([...selectedLogs, log.id]);
                                } else {
                                  setSelectedLogs(selectedLogs.filter((id) => id !== log.id));
                                }
                              }}
                            />
                          </TableCell>
                          <TableCell>
                            <Stack direction="row" alignItems="center" spacing={1}>
                              <CalendarToday sx={{ fontSize: 16, color: 'text.secondary' }} />
                              <Typography
                                variant="body2"
                                sx={{
                                  fontFamily: "'SF Mono', 'Monaco', 'Inconsolata', monospace",
                                  fontWeight: 500
                                }}
                              >
                                {formatTimestamp(log.timestamp)}
                              </Typography>
                            </Stack>
                          </TableCell>
                          <TableCell>
                            <Stack
                              direction="row"
                              alignItems="center"
                              spacing={1.5}
                              sx={{
                                '& .MuiSvgIcon-root': {
                                  color: 'primary.main',
                                  transition: 'all 0.3s ease',
                                  backgroundColor: (theme) =>
                                    theme.palette.mode === 'dark'
                                      ? 'rgba(144, 202, 249, 0.08)'
                                      : 'rgba(21, 101, 192, 0.08)',
                                  padding: '6px',
                                  borderRadius: '8px',
                                  fontSize: '20px',
                                  '&:hover': {
                                    transform: 'scale(1.1) rotate(5deg)',
                                    backgroundColor: (theme) =>
                                      theme.palette.mode === 'dark'
                                        ? 'rgba(144, 202, 249, 0.12)'
                                        : 'rgba(21, 101, 192, 0.12)'
                                  }
                                }
                              }}
                            >
                              {getActionIcon(log.action)}
                              <Typography
                                variant="body2"
                                sx={{ fontWeight: 500 }}
                              >
                                {log.action}
                              </Typography>
                            </Stack>
                          </TableCell>
                          <TableCell>
                            <Chip
                              label={log.status}
                              color={getStatusColor(log.status)}
                              size="small"
                              sx={{
                                fontWeight: 600,
                                borderRadius: '8px',
                                height: '24px',
                                '& .MuiChip-label': {
                                  px: 2,
                                  fontSize: '0.75rem',
                                  lineHeight: 1.5
                                },
                                backgroundColor: (theme) =>
                                  theme.palette.mode === 'dark'
                                    ? `${theme.palette[getStatusColor(log.status)].main}33`
                                    : `${theme.palette[getStatusColor(log.status)].light}33`,
                                color: (theme) => theme.palette[getStatusColor(log.status)].main,
                                border: (theme) =>
                                  `1px solid ${theme.palette[getStatusColor(log.status)].main}40`,
                                transition: 'all 0.2s ease',
                                '&:hover': {
                                  transform: 'translateY(-1px)',
                                  boxShadow: (theme) =>
                                    `0 4px 8px ${theme.palette[getStatusColor(log.status)].main}33`
                                }
                              }}
                            />
                          </TableCell>
                          <TableCell>
                            <Stack direction="row" alignItems="center" spacing={1}>
                              <Person sx={{ fontSize: 16, color: 'text.secondary' }} />
                              <Typography
                                variant="body2"
                                sx={{
                                  fontFamily: "'SF Mono', 'Monaco', 'Inconsolata', monospace",
                                  fontWeight: 500
                                }}
                              >
                                {log.user}
                              </Typography>
                            </Stack>
                          </TableCell>
                          <TableCell>
                            <Typography
                              variant="body2"
                              sx={{
                                fontWeight: 500,
                                color: 'text.primary'
                              }}
                            >
                              {log.module}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography
                              variant="body2"
                              sx={{
                                fontFamily: "'SF Mono', 'Monaco', 'Inconsolata', monospace",
                                fontWeight: 500,
                                color: 'text.secondary'
                              }}
                            >
                              {log.ipAddress}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              sx={{
                                maxWidth: 200,
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap'
                              }}
                            >
                              {log.details}
                            </Typography>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <TablePagination
                component="div"
                count={filteredLogs.length}
                page={page}
                onPageChange={(event, newPage) => setPage(newPage)}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={(event) => {
                  setRowsPerPage(parseInt(event.target.value, 10));
                  setPage(0);
                }}
                rowsPerPageOptions={[10, 25, 50, 100]}
                labelRowsPerPage="Rows per page:"
                sx={{
                  borderTop: 1,
                  borderColor: 'divider',
                  '& .MuiTablePagination-select': {
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'dark'
                        ? 'rgba(255, 255, 255, 0.05)'
                        : 'rgba(0, 0, 0, 0.02)',
                    borderRadius: 1,
                    p: '4px 8px',
                    '&:hover': {
                      backgroundColor: (theme) =>
                        theme.palette.mode === 'dark'
                          ? 'rgba(255, 255, 255, 0.08)'
                          : 'rgba(0, 0, 0, 0.04)'
                    }
                  },
                  '& .MuiTablePagination-displayedRows': {
                    fontWeight: 500,
                    color: 'text.secondary'
                  },
                  '& .MuiButtonBase-root': {
                    '&:hover': {
                      backgroundColor: (theme) =>
                        theme.palette.mode === 'dark'
                          ? 'rgba(255, 255, 255, 0.08)'
                          : 'rgba(0, 0, 0, 0.04)'
                    }
                  }
                }}
              />
            </CardContent>
          </Card>

          {/* Real-time Indicator */}
          {realTimeMode && (
            <Alert severity="info" icon={<Info />}>
              Real-time monitoring is active. New logs will appear
              automatically.
            </Alert>
          )}
        </Stack>
      </Box>
    </Box>
  );
}
