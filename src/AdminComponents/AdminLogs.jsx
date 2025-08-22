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

export default function AdminLogs() {
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
          <Typography>Logs</Typography>
        </Stack>
      </Box>
    </Box>
  );
}
