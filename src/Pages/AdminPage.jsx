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
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  MenuItem,
  Stack,
  Chip,
  Avatar,
  useMediaQuery,
  Tooltip,
  LinearProgress,
  Breadcrumbs,
  Link as MUILink,
  Paper,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  BarChart as BarChartIcon,
  TableChart as TableChartIcon,
  Settings as SettingsIcon,
  Search as SearchIcon,
  LightMode,
  DarkMode,
  Notifications,
  CloudUpload,
  CheckCircle,
  ArrowUpward,
  ArrowDownward,
} from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
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
const kpis = [
  { label: "Revenue", value: "$82.4k", delta: "+12.3%", up: true },
  { label: "Active Users", value: "12,980", delta: "+5.1%", up: true },
  { label: "Churn", value: "2.1%", delta: "-0.3%", up: false },
  { label: "Tickets", value: "184", delta: "+9", up: true },
];

const lineData = [
  { month: "Jan", revenue: 42, users: 6.1 },
  { month: "Feb", revenue: 44, users: 6.6 },
  { month: "Mar", revenue: 48, users: 7.2 },
  { month: "Apr", revenue: 53, users: 7.8 },
  { month: "May", revenue: 58, users: 8.3 },
  { month: "Jun", revenue: 62, users: 8.9 },
  { month: "Jul", revenue: 66, users: 9.5 },
  { month: "Aug", revenue: 70, users: 10.2 },
  { month: "Sep", revenue: 73, users: 10.8 },
  { month: "Oct", revenue: 76, users: 11.1 },
  { month: "Nov", revenue: 79, users: 11.6 },
  { month: "Dec", revenue: 82, users: 12.2 },
];

const barData = [
  { name: "A", sales: 4000, profit: 2400 },
  { name: "B", sales: 3000, profit: 1398 },
  { name: "C", sales: 2000, profit: 9800 },
  { name: "D", sales: 2780, profit: 3908 },
  { name: "E", sales: 1890, profit: 4800 },
  { name: "F", sales: 2390, profit: 3800 },
  { name: "G", sales: 3490, profit: 4300 },
];

const rows = Array.from({ length: 18 }).map((_, i) => ({
  id: i + 1,
  name: ["Acme Inc.", "Globex", "Umbrella", "Hooli", "Soylent"][i % 5],
  owner: ["Aman", "Shradha", "Rohit", "Priya"][i % 4],
  status: ["Active", "Pending", "Paused"][i % 3],
  mrr: Math.round(1000 + Math.random() * 9000),
  tickets: Math.round(5 + Math.random() * 40),
}));

const columns = [
  { field: "name", headerName: "Company", flex: 1, minWidth: 150 },
  { field: "owner", headerName: "Owner", width: 120 },
  {
    field: "status",
    headerName: "Status",
    width: 130,
    renderCell: (p) => (
      <Chip
        size="small"
        label={p.value}
        color={
          p.value === "Active"
            ? "success"
            : p.value === "Pending"
            ? "warning"
            : "default"
        }
      />
    ),
  },
  { field: "mrr", headerName: "MRR ($)", width: 120, type: "number" },
  { field: "tickets", headerName: "Open Tickets", width: 130, type: "number" },
];

// --------- LAYOUT ---------
const drawerWidth = 260;

export default function AdminPage() {
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState(prefersDark ? "dark" : "light");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [search, setSearch] = useState("");
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const filteredRows = useMemo(() => {
    const s = search.toLowerCase();
    return rows.filter((r) =>
      [r.name, r.owner, r.status].some((v) =>
        String(v).toLowerCase().includes(s)
      )
    );
  }, [search]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        {/* AppBar */}
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
          <Toolbar>
            <IconButton
              edge="start"
              onClick={() => setMobileOpen(!mobileOpen)}
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
            <DashboardIcon sx={{ mr: 1 }} />
            <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
              Pro Dashboard
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
                placeholder="Search companies, owners, status…"
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

        {/* Drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": { width: drawerWidth },
          }}
        >
          <Sidebar />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          open
        >
          <Sidebar />
        </Drawer>

        {/* Main */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: { xs: 2, md: 3 },
            ml: { md: `${drawerWidth}px` },
          }}
        >
          <Toolbar />
          <Stack spacing={2}>
            {/* Breadcrumbs */}
            <Breadcrumbs aria-label="breadcrumb">
              <MUILink underline="hover" color="inherit" href="#">
                Home
              </MUILink>
              <MUILink underline="hover" color="inherit" href="#">
                Analytics
              </MUILink>
              <Typography color="text.primary">Overview</Typography>
            </Breadcrumbs>

            {/* Filters */}
            <Card>
              <CardContent>
                <Grid container spacing={2} alignItems="center">
                  <Grid size={{ xs: 12, md: 3 }}>
                    <TextField
                      fullWidth
                      select
                      label="Time Range"
                      defaultValue="90"
                    >
                      <MenuItem value="7">Last 7 days</MenuItem>
                      <MenuItem value="30">Last 30 days</MenuItem>
                      <MenuItem value="90">Last 90 days</MenuItem>
                      <MenuItem value="365">Last 12 months</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid size={{ xs: 12, md: 3 }}>
                    <TextField
                      fullWidth
                      select
                      label="Segment"
                      defaultValue="all"
                    >
                      <MenuItem value="all">All users</MenuItem>
                      <MenuItem value="pro">Pro</MenuItem>
                      <MenuItem value="trial">Trial</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid size={{ xs: 12, md: 4 }}>
                    <TextField
                      fullWidth
                      label="Search"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 2 }}>
                    <Button
                      fullWidth
                      variant="contained"
                      startIcon={<SearchIcon />}
                    >
                      Apply
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

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
                            <Typography
                              variant="caption"
                              color="text.secondary"
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
                      Revenue & Users
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
                          dataKey="revenue"
                          strokeWidth={2}
                          dot={false}
                        />
                        <Line
                          yAxisId="right"
                          type="monotone"
                          dataKey="users"
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
                      Sales vs Profit
                    </Typography>
                    <ResponsiveContainer width="100%" height="85%">
                      <BarChart data={barData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <ReTooltip />
                        <Legend />
                        <Bar dataKey="sales" />
                        <Bar dataKey="profit" />
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
                  <Typography variant="h6">Accounts</Typography>
                  <Stack direction="row" spacing={1}>
                    <Button variant="outlined" startIcon={<CloudUpload />}>
                      Import CSV
                    </Button>
                    <Button variant="contained" startIcon={<PersonAddIcon />}>
                      New Account
                    </Button>
                  </Stack>
                </Stack>
                <div style={{ width: "100%", height: 420 }}>
                  <DataGrid
                    rows={filteredRows}
                    columns={columns}
                    pageSizeOptions={[5, 10]}
                    initialState={{
                      pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                      },
                    }}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Activity */}
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 8 }}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Recent Activity
                    </Typography>
                    <List>
                      {[
                        { p: "Pricing updated for Pro", t: "2h ago" },
                        { p: "New signup: Priya from Globex", t: "6h ago" },
                        { p: "Ticket #184 resolved", t: "1d ago" },
                        { p: "Churn reduced to 2.1%", t: "2d ago" },
                      ].map((a, i) => (
                        <ListItem key={i} disablePadding>
                          <ListItemButton>
                            <ListItemIcon>
                              <CheckCircle color="success" />
                            </ListItemIcon>
                            <ListItemText primary={a.p} secondary={a.t} />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      System Status
                    </Typography>
                    <Stack spacing={1}>
                      <StatusBar label="API" value={99} />
                      <StatusBar label="Auth" value={97} />
                      <StatusBar label="DB" value={92} />
                    </Stack>
                  </CardContent>
                  <CardActions>
                    <Button fullWidth variant="contained">
                      View Health
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

function Sidebar() {
  return (
    <Box sx={{ p: 2 }}>
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        sx={{ px: 1, py: 1.5 }}
      >
        <Avatar>PD</Avatar>
        <Box>
          <Typography variant="subtitle1" fontWeight={700}>
            ProDash
          </Typography>
          <Typography variant="caption" color="text.secondary">
            v1.0
          </Typography>
        </Box>
      </Stack>
      <Divider />
      <List>
        {[
          { text: "Overview", icon: <DashboardIcon /> },
          { text: "Analytics", icon: <BarChartIcon /> },
          { text: "Data", icon: <TableChartIcon /> },
          { text: "Settings", icon: <SettingsIcon /> },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

function StatusBar({ label, value }) {
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="body2">{label}</Typography>
        <Typography variant="body2" fontWeight={600}>
          {value}%
        </Typography>
      </Stack>
      <LinearProgress variant="determinate" value={value} sx={{ mt: 0.5 }} />
    </Box>
  );
}

// Ad-hoc icon fix for PersonAdd (kept near bottom to avoid import ordering issues)
function PersonAddIcon(props) {
  return (
    <svg
      {...props}
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
    >
      <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9 8v-1c0-2.21 3.58-4 8-4s8 1.79 8 4v1H6zM7 10H5V8H3V6h2V4h2v2h2v2H7v2z" />
    </svg>
  );
}
