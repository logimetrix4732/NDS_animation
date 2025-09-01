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
  CircularProgress,
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

// --------- LAYOUT ---------
const drawerWidth = 260;

export default function AdminPage() {
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState(prefersDark ? "dark" : "light");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  // Fetch dashboard data
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");

        if (!token) {
          console.error("No authentication token found");
          setLoading(false);
          return;
        }

        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/dashboard`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log("Dashboard API Response:", data);
          setDashboardData(data.data);
        } else {
          console.error("Failed to fetch dashboard data");
        }
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  // Dynamic KPIs data from API
  const kpis = useMemo(() => {
    if (!dashboardData) {
      return [
        { label: "HR Compliances", value: "0", delta: "+0%", up: true },
        { label: "Annual Reports", value: "0", delta: "+0%", up: true },
        { label: "Policies", value: "0", delta: "+0%", up: true },
        { label: "Tender", value: "0", delta: "+0%", up: true },
      ];
    }

    return [
      {
        label: "HR Compliances",
        value: dashboardData.hr_compliances?.toString() || "0",
        delta: "+0%",
        up: true,
      },
      {
        label: "Annual Reports",
        value: dashboardData.annaul_repost?.toString() || "0",
        delta: "+0%",
        up: true,
      },
      {
        label: "Policies",
        value: dashboardData.policies?.toString() || "0",
        delta: "+0%",
        up: true,
      },
      {
        label: "Tender",
        value: dashboardData.tender?.toString() || "0",
        delta: "+0%",
        up: true,
      },
    ];
  }, [dashboardData]);

  // Dynamic chart data from API
  const lineData = useMemo(() => {
    if (!dashboardData?.tender_data_monthly_basis) {
      return [];
    }

    return dashboardData.tender_data_monthly_basis.map((item) => ({
      month: item.month.charAt(0).toUpperCase() + item.month.slice(1),
      revenue: item.count,
      users: item.count,
    }));
  }, [dashboardData]);

  const barData = [];

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "tenderTitle", headerName: "Tender Title", width: 250 },
    { field: "referenceNo", headerName: "Reference No", width: 200 },
    { field: "estimatedValues", headerName: "Estimated Value", width: 180 },
    { field: "location", headerName: "Location", width: 150 },
    { field: "tenderCard", headerName: "Tender Status", width: 150 },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 200,
      valueGetter: (value, row) => new Date(row.createdAt).toLocaleString(),
    },
  ];

  const rows = useMemo(() => {
    if (!dashboardData?.tender_data) {
      return [];
    }

    return dashboardData.tender_data.map((tender, index) => ({
      id: tender.id || index + 1,
      tenderTitle: tender.tenderTitle || "N/A",
      referenceNo: tender.referenceNo || "N/A",
      estimatedValues: tender.estimatedValues || "0",
      location: tender.location || "N/A",
      tenderCard: tender.tenderCard || "N/A",
      createdAt: tender.createdAt || new Date().toISOString(),
    }));
  }, [dashboardData]);

  const filteredRows = useMemo(() => {
    const s = search.toLowerCase();
    return rows.filter((r) =>
      [r.tenderTitle, r.referenceNo, r.location, r.tenderCard].some((v) =>
        String(v).toLowerCase().includes(s)
      )
    );
  }, [search, rows]);

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
              placeholder="Search tenders, reference, location, status…"
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
        <Stack spacing={2} mt={2}>
          {/* KPIs */}
          <Grid container spacing={2}>
            {kpis.map((k) => (
              <Grid key={k.label} size={{ xs: 12, sm: 6, md: 3 }}>
                <Card sx={{ position: "relative" }}>
                  <CardContent>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="flex-start"
                    >
                      <Box>
                        <Typography variant="overline" color="text.secondary">
                          {k.label}
                        </Typography>
                        <Typography variant="h4" sx={{ mt: 0.5 }}>
                          {k.value}
                        </Typography>
                        <Stack
                          direction="row"
                          spacing={0.5}
                          alignItems="center"
                          sx={{ mt: 1 }}
                        >
                          {k.up ? (
                            <ArrowUpward fontSize="small" color="success" />
                          ) : (
                            <ArrowDownward fontSize="small" color="error" />
                          )}
                          <Typography
                            variant="body2"
                            color={k.up ? "success.main" : "error.main"}
                          >
                            {k.delta}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            vs last period
                          </Typography>
                        </Stack>
                      </Box>
                      <Chip
                        icon={<CheckCircle />}
                        label="Healthy"
                        color={k.up ? "success" : "default"}
                        size="small"
                      />
                    </Stack>
                    <LinearProgress
                      variant="determinate"
                      value={k.up ? 70 : 35}
                      sx={{ mt: 2 }}
                    />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Charts */}
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Card sx={{ height: 360 }}>
                <CardContent sx={{ height: 320 }}>
                  <Typography variant="h6" gutterBottom>
                    Monthly Tenders Count
                  </Typography>
                  <ResponsiveContainer width="100%" height="85%">
                    <LineChart
                      data={lineData}
                      margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis yAxisId="left" orientation="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <ReTooltip />
                      <Legend />
                      <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey=""
                        strokeWidth={2}
                        dot={false}
                      />
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey=""
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Card sx={{ height: 360 }}>
                <CardContent sx={{ height: 320 }}>
                  <Typography variant="h6" gutterBottom>
                    Publication Chart
                  </Typography>
                  <ResponsiveContainer width="100%" height="85%">
                    <BarChart data={barData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <ReTooltip />
                      <Legend />
                      <Bar dataKey="HR Compliances" />
                      <Bar dataKey="Annual Reports" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Table */}
          <Card>
            <CardContent>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ mb: 1 }}
              >
                <Typography variant="h6">Latest Tenders</Typography>
              </Stack>
              <div style={{ width: "100%", height: 420 }}>
                <DataGrid
                  rows={filteredRows}
                  columns={columns}
                  pageSizeOptions={[5, 10]}
                  loading={loading}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 10 },
                    },
                  }}
                />
              </div>
            </CardContent>
          </Card>
        </Stack>
      </Box>
    </Box>
  );
}
