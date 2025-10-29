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
        <Toolbar
          sx={{
            minHeight: { xs: 56, sm: 64, md: 89 },
            px: { xs: 1, sm: 2, md: 3 },
          }}
        >
          <IconButton
            edge="start"
            onClick={() => setMobileOpen(!mobileOpen)}
            sx={{
              mr: { xs: 0.5, sm: 1 },
              display: { md: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={nds_logo}
              alt="NDDB"
              style={{
                width: "clamp(100px, 15vw, 138px)",
                height: "clamp(40px, 6vw, 55px)",
                maxWidth: "138px",
                maxHeight: "55px",
              }}
              loading="lazy"
            />
          </Typography>

          <Paper
            component="form"
            onSubmit={(e) => e.preventDefault()}
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              px: { sm: 1, md: 1.5 },
              py: 0.5,
              mr: { sm: 1, md: 2 },
              width: { sm: 280, md: 360 },
              minWidth: 200,
            }}
            elevation={0}
          >
            <IconButton size="small">
              <SearchIcon />
            </IconButton>
            <TextField
              variant="standard"
              placeholder="Search tenders..."
              fullWidth
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              InputProps={{
                disableUnderline: true,
                sx: { fontSize: { xs: "0.875rem", sm: "1rem" } },
              }}
            />
          </Paper>

          <Stack
            direction="row"
            spacing={{ xs: 0.5, sm: 1 }}
            alignItems="center"
          >
            <Tooltip title="Toggle theme">
              <IconButton
                size="small"
                onClick={() =>
                  setMode((m) => (m === "light" ? "dark" : "light"))
                }
              >
                {mode === "light" ? <DarkMode /> : <LightMode />}
              </IconButton>
            </Tooltip>
            <IconButton size="small">
              <Notifications />
            </IconButton>
            <Avatar
              sx={{
                width: { xs: 28, sm: 32, md: 34 },
                height: { xs: 28, sm: 32, md: 34 },
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
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
          p: { xs: 1, sm: 2, md: 3 },
          ml: { md: `${drawerWidth}px` },
          width: { md: `calc(100% - ${drawerWidth}px)` },
          minHeight: "100vh",
        }}
      >
        <Toolbar sx={{ minHeight: { xs: 56, sm: 64, md: 89 } }} />
        <Stack
          spacing={{ xs: 1.5, sm: 2, md: 3 }}
          sx={{ mt: { xs: 1, sm: 2 } }}
        >
          {/* KPIs */}
          <Grid container spacing={{ xs: 1.5, sm: 2, md: 2 }}>
            {kpis.map((k) => (
              <Grid key={k.label} size={{ xs: 12, sm: 6, lg: 3 }}>
                <Card
                  sx={{
                    position: "relative",
                    height: "100%",
                    minHeight: { xs: 140, sm: 160, md: 180 },
                  }}
                >
                  <CardContent
                    sx={{
                      p: { xs: 2, sm: 2.5, md: 3 },
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="flex-start"
                      sx={{ mb: 2 }}
                    >
                      <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Typography
                          variant="overline"
                          color="text.secondary"
                          sx={{
                            fontSize: { xs: "0.7rem", sm: "0.75rem" },
                            lineHeight: 1.2,
                          }}
                        >
                          {k.label}
                        </Typography>
                        <Typography
                          variant="h4"
                          sx={{
                            mt: 0.5,
                            fontSize: {
                              xs: "1.5rem",
                              sm: "1.75rem",
                              md: "2rem",
                            },
                            fontWeight: 700,
                            lineHeight: 1.2,
                          }}
                        >
                          {k.value}
                        </Typography>
                        <Stack
                          direction="row"
                          spacing={0.5}
                          alignItems="center"
                          sx={{ mt: 1, flexWrap: "wrap" }}
                        >
                          {k.up ? (
                            <ArrowUpward fontSize="small" color="success" />
                          ) : (
                            <ArrowDownward fontSize="small" color="error" />
                          )}
                          <Typography
                            variant="body2"
                            color={k.up ? "success.main" : "error.main"}
                            sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}
                          >
                            {k.delta}
                          </Typography>
                          <Typography
                            variant="caption"
                            color="text.secondary"
                            sx={{
                              fontSize: { xs: "0.65rem", sm: "0.75rem" },
                              display: { xs: "none", sm: "inline" },
                            }}
                          >
                            vs last period
                          </Typography>
                        </Stack>
                      </Box>
                      <Chip
                        icon={<CheckCircle />}
                        label="Healthy"
                        color={k.up ? "success" : "default"}
                        size="small"
                        sx={{
                          fontSize: { xs: "0.65rem", sm: "0.75rem" },
                          height: { xs: 20, sm: 24 },
                          "& .MuiChip-icon": {
                            fontSize: { xs: "0.75rem", sm: "1rem" },
                          },
                        }}
                      />
                    </Stack>
                    <LinearProgress
                      variant="determinate"
                      value={k.up ? 70 : 35}
                      sx={{
                        mt: "auto",
                        height: { xs: 4, sm: 6 },
                        borderRadius: 1,
                      }}
                    />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Charts */}
          <Grid container spacing={{ xs: 1.5, sm: 2, md: 2 }}>
            <Grid size={{ xs: 12, lg: 7 }}>
              <Card
                sx={{
                  height: { xs: 300, sm: 360, md: 400 },
                  minHeight: 300,
                }}
              >
                <CardContent
                  sx={{
                    height: "100%",
                    p: { xs: 2, sm: 2.5, md: 3 },
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                      mb: { xs: 1, sm: 2 },
                    }}
                  >
                    Monthly Tenders Count
                  </Typography>
                  <Box sx={{ flex: 1, minHeight: 0 }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={lineData}
                        margin={{
                          top: 10,
                          right: { xs: 10, sm: 20 },
                          left: { xs: 0, sm: 10 },
                          bottom: 0,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                          dataKey="month"
                          fontSize={{ xs: 10, sm: 12 }}
                          tick={{ fontSize: { xs: 10, sm: 12 } }}
                        />
                        <YAxis
                          yAxisId="left"
                          orientation="left"
                          fontSize={{ xs: 10, sm: 12 }}
                          tick={{ fontSize: { xs: 10, sm: 12 } }}
                        />
                        <YAxis
                          yAxisId="right"
                          orientation="right"
                          fontSize={{ xs: 10, sm: 12 }}
                          tick={{ fontSize: { xs: 10, sm: 12 } }}
                        />
                        <ReTooltip
                          contentStyle={{
                            fontSize: { xs: "0.75rem", sm: "0.875rem" },
                          }}
                        />
                        <Legend
                          wrapperStyle={{
                            fontSize: { xs: "0.75rem", sm: "0.875rem" },
                          }}
                        />
                        <Line
                          yAxisId="left"
                          type="monotone"
                          dataKey="revenue"
                          stroke="#8884d8"
                          strokeWidth={2}
                          dot={false}
                        />
                        <Line
                          yAxisId="right"
                          type="monotone"
                          dataKey="users"
                          stroke="#82ca9d"
                          strokeWidth={2}
                          dot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, lg: 5 }}>
              <Card
                sx={{
                  height: { xs: 300, sm: 360, md: 400 },
                  minHeight: 300,
                }}
              >
                <CardContent
                  sx={{
                    height: "100%",
                    p: { xs: 2, sm: 2.5, md: 3 },
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                      mb: { xs: 1, sm: 2 },
                    }}
                  >
                    Publication Chart
                  </Typography>
                  <Box sx={{ flex: 1, minHeight: 0 }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={barData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                          dataKey="name"
                          fontSize={{ xs: 10, sm: 12 }}
                          tick={{ fontSize: { xs: 10, sm: 12 } }}
                        />
                        <YAxis
                          fontSize={{ xs: 10, sm: 12 }}
                          tick={{ fontSize: { xs: 10, sm: 12 } }}
                        />
                        <ReTooltip
                          contentStyle={{
                            fontSize: { xs: "0.75rem", sm: "0.875rem" },
                          }}
                        />
                        <Legend
                          wrapperStyle={{
                            fontSize: { xs: "0.75rem", sm: "0.875rem" },
                          }}
                        />
                        <Bar dataKey="HR Compliances" fill="#8884d8" />
                        <Bar dataKey="Annual Reports" fill="#82ca9d" />
                      </BarChart>
                    </ResponsiveContainer>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Table */}
          <Card sx={{ width: "100%" }}>
            <CardContent
              sx={{
                p: { xs: 2, sm: 2.5, md: 3 },
                "&:last-child": { pb: { xs: 2, sm: 2.5, md: 3 } },
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ mb: { xs: 1.5, sm: 2 } }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                  }}
                >
                  Latest Tenders
                </Typography>
              </Stack>
              <Box
                sx={{
                  width: "100%",
                  height: { xs: 350, sm: 400, md: 420 },
                  minHeight: 300,
                  "& .MuiDataGrid-root": {
                    fontSize: { xs: "0.75rem", sm: "0.875rem" },
                  },
                  "& .MuiDataGrid-columnHeaders": {
                    fontSize: { xs: "0.75rem", sm: "0.875rem" },
                  },
                  "& .MuiDataGrid-cell": {
                    fontSize: { xs: "0.75rem", sm: "0.875rem" },
                  },
                }}
              >
                <DataGrid
                  rows={filteredRows}
                  columns={columns}
                  pageSizeOptions={[5, 10, 25]}
                  loading={loading}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 10 },
                    },
                  }}
                  sx={{
                    "& .MuiDataGrid-toolbarContainer": {
                      flexDirection: { xs: "column", sm: "row" },
                      gap: { xs: 1, sm: 0 },
                    },
                  }}
                />
              </Box>
            </CardContent>
          </Card>
        </Stack>
      </Box>
    </Box>
  );
}
