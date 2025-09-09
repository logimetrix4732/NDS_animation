import React from "react";
import { Box, AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import AdminSidebar from "../AdminComponents/AdminSidebar";
import CacheManagement from "../AdminComponents/CacheManagement";

const AdminCache = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* App Bar */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backdropFilter: "blur(8px)",
          backgroundColor: "rgba(255,255,255,0.7)",
          borderBottom: 1,
          borderColor: "divider",
          color: "#1e293b",
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
            Cache Management
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <AdminSidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, md: 3 },
          ml: { md: "240px" },
        }}
      >
        <Toolbar />
        <CacheManagement />
      </Box>
    </Box>
  );
};

export default AdminCache;
