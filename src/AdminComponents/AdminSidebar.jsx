import React from "react";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Drawer,
  Button,
  Typography,
  Chip,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  BarChart as BarChartIcon,
  TableChart as TableChartIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
  History as HistoryIcon,
  DataObject as DataObjectIcon,
  Storage as StorageIcon,
} from "@mui/icons-material";
import nds_logo from "../assets/img/nds_logo.png";
import ReportIcon from "@mui/icons-material/Report";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const drawerWidth = 240;

const AdminSidebar = ({ mobileOpen, setMobileOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    // Clear all admin data
    localStorage.removeItem("token");
    localStorage.removeItem("user_role");
    localStorage.removeItem("remembered_email");

    // Redirect to login
    navigate("/AdminLogin");
  };

  const menuItems = [
    { text: "Overview", icon: <DashboardIcon />, path: "/AdminPage" },
    {
      text: "Publication",
      icon: <TableChartIcon />,
      path: "/AdminPublication",
    },
    { text: "Tender", icon: <SettingsIcon />, path: "/AdminTender" },
    { text: "Tender Logs", icon: <HistoryIcon />, path: "/AdminLogs" },
    {
      text: "Dynamic Data",
      icon: <DataObjectIcon />,
      path: "/dynamicData",
    },
    {
      text: "Cache Management",
      icon: <StorageIcon />,
      path: "/AdminCache",
    },
  ];

  const sidebarContent = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
        color: "#1e293b",
        position: "relative",
        borderRight: "1px solid #e2e8f0",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(102, 126, 234, 0.3) 50%, transparent 100%)",
        },
      }}
    >
      {/* Logo Section */}
      <Box
        sx={{
          p: 1.8,
          textAlign: "center",
          borderBottom: "1px solid #e2e8f0",
          background: "rgba(102, 126, 234, 0.02)",
          backdropFilter: "blur(10px)",
        }}
      >
        <img
          src={nds_logo}
          alt="NDDB"
          style={{
            width: "140px",
            height: "60px",
            filter: "brightness(1) contrast(1)",
          }}
          loading="lazy"
        />
      </Box>

      {/* Menu Items */}
      <List sx={{ flexGrow: 1, px: 2, py: 2 }}>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                onClick={() => navigate(item.path)}
                sx={{
                  borderRadius: 3,
                  py: 2,
                  px: 2,
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  background: isActive
                    ? "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)"
                    : "transparent",
                  border: isActive
                    ? "1px solid rgba(102, 126, 234, 0.2)"
                    : "1px solid transparent",
                  "&:hover": {
                    background: isActive
                      ? "linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%)"
                      : "rgba(102, 126, 234, 0.05)",
                    transform: "translateX(4px)",
                    borderColor: isActive
                      ? "rgba(102, 126, 234, 0.3)"
                      : "rgba(102, 126, 234, 0.1)",
                  },
                  "& .MuiListItemIcon-root": {
                    color: isActive ? "#667eea" : "#64748b",
                    transition: "all 0.3s ease",
                  },
                  "& .MuiListItemText-primary": {
                    color: isActive ? "#667eea" : "#1e293b",
                    fontWeight: isActive ? 600 : 500,
                    transition: "all 0.3s ease",
                  },
                  "& .MuiListItemText-secondary": {
                    color: isActive ? "rgba(102, 126, 234, 0.7)" : "#64748b",
                    fontSize: "0.75rem",
                    transition: "all 0.3s ease",
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 40, mr: 2 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: isActive
                        ? "linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%)"
                        : "rgba(102, 126, 234, 0.08)",
                      border: isActive
                        ? "1px solid rgba(102, 126, 234, 0.2)"
                        : "1px solid rgba(102, 126, 234, 0.1)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    {item.icon}
                  </Box>
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  secondary={item.description}
                  primaryTypographyProps={{
                    fontSize: "0.95rem",
                    fontWeight: "inherit",
                  }}
                  secondaryTypographyProps={{
                    fontSize: "0.75rem",
                    lineHeight: 1.3,
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      {/* Divider */}
      <Divider sx={{ borderColor: "#e2e8f0", mx: 2 }} />

      {/* Logout Button */}
      <Box sx={{ p: 3 }}>
        <Button
          fullWidth
          variant="outlined"
          startIcon={<LogoutIcon />}
          onClick={handleLogout}
          sx={{
            borderRadius: 3,
            py: 1.5,
            borderWidth: 2,
            fontWeight: 600,
            fontSize: "0.9rem",
            borderColor: "rgba(239, 68, 68, 0.3)",
            color: "#ef4444",
            background: "rgba(239, 68, 68, 0.02)",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            "&:hover": {
              borderColor: "#ef4444",
              backgroundColor: "rgba(239, 68, 68, 0.05)",
              transform: "translateY(-2px)",
              boxShadow: "0 8px 25px rgba(239, 68, 68, 0.15)",
            },
          }}
        >
          Logout
        </Button>

        {/* User Info */}
        <Box sx={{ mt: 2, textAlign: "center" }}>
          <Typography
            variant="caption"
            sx={{
              color: "#64748b",
              fontSize: "0.7rem",
              display: "block",
            }}
          >
            Logged in as Admin
          </Typography>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Mobile Drawer */}
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
        {sidebarContent}
      </Drawer>

      {/* Desktop Drawer */}
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
        {sidebarContent}
      </Drawer>
    </>
  );
};

export default AdminSidebar;
